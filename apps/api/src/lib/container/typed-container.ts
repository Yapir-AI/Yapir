import {
  asFunction as awilixAsFunction,
  asValue as awilixAsValue,
  createContainer as awilixCreateContainer,
} from "awilix";
import type {
  BuildResolver,
  BuildResolverOptions,
  ContainerOptions,
  DisposableResolver,
  Resolver,
} from "awilix";

type AnyFactory = (...args: any[]) => any;

export type DepsOf<F extends AnyFactory> =
  Parameters<F> extends [infer D, ...any[]] ? D : {};
export type RetOf<F extends AnyFactory> = ReturnType<F>;

export interface TypedResolver<F extends AnyFactory> {
  readonly _F: F;
  readonly _awilix: BuildResolver<RetOf<F>> & DisposableResolver<RetOf<F>>;
}

export interface TypedValueResolver<T> {
  readonly _T: T;
  readonly _awilix: Resolver<T>;
}

export type ResolvedOf<S> = {
  [K in keyof S]: S[K] extends TypedResolver<infer F>
    ? RetOf<F>
    : S[K] extends TypedValueResolver<infer T>
      ? T
      : never;
};

export type Enforce<S> = {
  [K in keyof S]: S[K] extends TypedResolver<infer F>
    ? ResolvedOf<S> extends DepsOf<F>
      ? S[K]
      : S[K] & {
          readonly __error: `service "${K & string}" has unsatisfied dependencies`;
        }
    : S[K] extends TypedValueResolver<any>
      ? S[K]
      : S[K] & {
          readonly __error: `service "${K & string}" is not a valid resolver`;
        };
};

export interface TypedContainer<R extends object> {
  readonly cradle: R;
  resolve<K extends keyof R>(name: K): R[K];
  hasRegistration(name: keyof R): boolean;
  dispose(): Promise<void>;
}

type AnyResolver = TypedResolver<AnyFactory> | TypedValueResolver<unknown>;

export function asFunction<F extends AnyFactory>(
  factory: F,
  opts?: BuildResolverOptions<RetOf<F>>,
): TypedResolver<F> {
  return { _F: factory, _awilix: awilixAsFunction(factory, opts) };
}

export function asValue<T>(value: T): TypedValueResolver<T> {
  return { _T: value, _awilix: awilixAsValue(value) };
}

export function createContainer<S extends Record<string, AnyResolver>>(
  services: Enforce<S> & S,
  options?: ContainerOptions,
): TypedContainer<ResolvedOf<S>> {
  const raw = awilixCreateContainer(options);
  for (const [key, r] of Object.entries(
    services as Record<string, AnyResolver>,
  )) {
    raw.register(key, r._awilix);
  }
  return {
    get cradle() {
      return raw.cradle as ResolvedOf<S>;
    },
    resolve: (name) => raw.resolve(name as string),
    hasRegistration: (name) => raw.hasRegistration(name as string),
    dispose: () => raw.dispose(),
  };
}
