import {
  type AwilixContainer,
  type ContainerOptions,
  createContainer,
  type ResolveOptions,
  type Resolver,
} from "awilix";

/**
 * Container definition base.
 */
interface ContainerDefinition {
  [key: string]: Resolver<unknown>;
}

/**
 * Extracts the type that will be resolved from a resolver.
 */
type ExtractResolverType<T> = T extends Resolver<infer X> ? X : null;

/**
 * Strongly-typed container.
 */
interface TypedAwilixContainer<T extends ContainerDefinition>
  extends Pick<
    AwilixContainer,
    Exclude<keyof AwilixContainer, "resolve" | "cradle">
  > {
  resolve<K extends keyof T>(
    key: K,
    resolveOptions?: ResolveOptions,
  ): ExtractResolverType<T[K]>;

  cradle: {
    [K in keyof T]: ExtractResolverType<T[K]>;
  };
}

/**
 * Wraps `createContainer` and calls `register` on it.
 */
export function createTypedContainer<T extends ContainerDefinition>(
  registrations: T,
  opts?: ContainerOptions,
): TypedAwilixContainer<T> {
  return createContainer(opts).register(registrations) as any;
}
