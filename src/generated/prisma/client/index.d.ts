
/**
 * Client
**/


declare global {
  namespace PrismaJson {
    // This namespace will always be empty. Definitions should be done by
    // you manually, and merged automatically by typescript. Make sure that
    // your declaration merging file is included in your tsconfig.json
    //
    // Learn more: https://github.com/arthurfiorette/prisma-json-types-generator/issues/143
    // Declaration Merging: https://www.typescriptlang.org/docs/handbook/declaration-merging.html
  }
}

/** A filter to be used against nullable List types. */
export type NullableListFilter<T> = {
  equals?: T | T[] | null;
  has?: T | null;
  hasEvery?: T[];
  hasSome?: T[];
  isEmpty?: boolean;
};

/** A type to determine how to update a json field */
export type UpdateInput<T> = T extends object ? { [P in keyof T]?: UpdateInput<T[P]> } : T;

/** A type to determine how to update a json[] field */
export type UpdateManyInput<T> = T | T[] | { set?: T[]; push?: T | T[] };

/** A type to determine how to create a json[] input */
export type CreateManyInput<T> = T | T[] | { set?: T[] };

/**
 * A typed version of NestedStringFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedNestedStringFilter<S extends string> =
  //@ts-ignore - When Prisma.StringFilter is not present, this type is not used
  Prisma.StringFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringFilter<S> | S;
  };

/**
 * A typed version of StringFilter, allowing narrowing of string types to discriminated
 * unions.
 */
export type TypedStringFilter<S extends string> =
  //@ts-ignore - When Prisma.StringFilter is not present, this type is not used
  Prisma.StringFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringFilter<S> | S;
  };

/**
 * A typed version of NestedStringNullableFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedNestedStringNullableFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableFilter is not present, this type is not used
  Prisma.StringNullableFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableFilter<S> | S | null;
  };

/**
 * A typed version of StringNullableFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringNullableFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableFilter is not present, this type is not used
  Prisma.StringNullableFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableFilter<S> | S | null;
  };

/**
 * A typed version of NestedStringWithAggregatesFilter, allowing narrowing of string types
 * to discriminated unions.
 */
export type TypedNestedStringWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.NestedStringWithAggregatesFilter is not present, this type is not used
  Prisma.NestedStringWithAggregatesFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringWithAggregatesFilter<S> | S;
  };

/**
 * A typed version of StringWithAggregatesFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.StringWithAggregatesFilter is not present, this type is not used
  Prisma.StringWithAggregatesFilter & {
    equals?: S;
    in?: S[];
    notIn?: S[];
    not?: TypedNestedStringWithAggregatesFilter<S> | S;
  };

/**
 * A typed version of NestedStringNullableWithAggregatesFilter, allowing narrowing of
 * string types to discriminated unions.
 */
export type TypedNestedStringNullableWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.NestedStringNullableWithAggregatesFilter is not present, this type is not used
  Prisma.NestedStringNullableWithAggregatesFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableWithAggregatesFilter<S> | S | null;
  };

/**
 * A typed version of StringNullableWithAggregatesFilter, allowing narrowing of string
 * types to discriminated unions.
 */
export type TypedStringNullableWithAggregatesFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableWithAggregatesFilter is not present, this type is not used
  Prisma.StringNullableWithAggregatesFilter & {
    equals?: S | null;
    in?: S[] | null;
    notIn?: S[] | null;
    not?: TypedNestedStringNullableWithAggregatesFilter<S> | S | null;
  };

/**
 * A typed version of StringFieldUpdateOperationsInput, allowing narrowing of string types
 * to discriminated unions.
 */
export type TypedStringFieldUpdateOperationsInput<S extends string> =
  //@ts-ignore - When Prisma.StringFieldUpdateOperationsInput is not present, this type is not used
  Prisma.StringFieldUpdateOperationsInput & {
    set?: S;
  };

/**
 * A typed version of NullableStringFieldUpdateOperationsInput, allowing narrowing of
 * string types to discriminated unions.
 */
export type TypedNullableStringFieldUpdateOperationsInput<S extends string> =
  //@ts-ignore - When Prisma.NullableStringFieldUpdateOperationsInput is not present, this type is not used
  Prisma.NullableStringFieldUpdateOperationsInput & {
    set?: S | null;
  };

/**
 * A typed version of StringNullableListFilter, allowing narrowing of string types to
 * discriminated unions.
 */
export type TypedStringNullableListFilter<S extends string> =
  //@ts-ignore - When Prisma.StringNullableListFilter is not present, this type is not used
  Prisma.StringNullableListFilter & {
    equals?: S[] | null;
    has?: S | null;
    hasEvery?: S[];
    hasSome?: S[];
  };

/**
 * A typed version of the input type to update a string[] field, allowing narrowing of
 * string types to discriminated unions.
 */
export type UpdateStringArrayInput<S extends string> = {
  set?: S[];
  push?: S | S[];
};

/**
 * A typed version of the input type to create a string[] field, allowing narrowing of
 * string types to discriminated unions.
 */
export type CreateStringArrayInput<S extends string> = {
  set?: S[];
};
import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model GitProject
 * 
 */
export type GitProject = $Result.DefaultSelection<Prisma.$GitProjectPayload>
/**
 * Model GitConnector
 * 
 */
export type GitConnector = $Result.DefaultSelection<Prisma.$GitConnectorPayload>
/**
 * Model AiProvider
 * 
 */
export type AiProvider = $Result.DefaultSelection<Prisma.$AiProviderPayload>
/**
 * Model MergeRequest
 * 
 */
export type MergeRequest = $Result.DefaultSelection<Prisma.$MergeRequestPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model NoteDefinition
 * 
 */
export type NoteDefinition = $Result.DefaultSelection<Prisma.$NoteDefinitionPayload>
/**
 * Model ReviewNote
 * 
 */
export type ReviewNote = $Result.DefaultSelection<Prisma.$ReviewNotePayload>
/**
 * Model Reviewer
 * 
 */
export type Reviewer = $Result.DefaultSelection<Prisma.$ReviewerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GitProviderType: {
  GITLAB: 'GITLAB',
  GITHUB: 'GITHUB'
};

export type GitProviderType = (typeof GitProviderType)[keyof typeof GitProviderType]


export const AiProviderType: {
  ANTHROPIC: 'ANTHROPIC',
  OPENAI: 'OPENAI',
  OPENAI_LIKE: 'OPENAI_LIKE',
  OLLAMA: 'OLLAMA',
  MISTRAL: 'MISTRAL',
  DEEPSEEK: 'DEEPSEEK',
  GOOGLE_GENERATIVE: 'GOOGLE_GENERATIVE'
};

export type AiProviderType = (typeof AiProviderType)[keyof typeof AiProviderType]


export const ReviewStatus: {
  REVIEWED: 'REVIEWED',
  PENDING: 'PENDING',
  ERROR: 'ERROR'
};

export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus]


export const CommentLocation: {
  OLD: 'OLD',
  NEW: 'NEW'
};

export type CommentLocation = (typeof CommentLocation)[keyof typeof CommentLocation]


export const ReviewNoteType: {
  TECHNICAL_SUMMARY: 'TECHNICAL_SUMMARY',
  GENERAL_ASSESSMENT: 'GENERAL_ASSESSMENT'
};

export type ReviewNoteType = (typeof ReviewNoteType)[keyof typeof ReviewNoteType]

}

export type GitProviderType = $Enums.GitProviderType

export const GitProviderType: typeof $Enums.GitProviderType

export type AiProviderType = $Enums.AiProviderType

export const AiProviderType: typeof $Enums.AiProviderType

export type ReviewStatus = $Enums.ReviewStatus

export const ReviewStatus: typeof $Enums.ReviewStatus

export type CommentLocation = $Enums.CommentLocation

export const CommentLocation: typeof $Enums.CommentLocation

export type ReviewNoteType = $Enums.ReviewNoteType

export const ReviewNoteType: typeof $Enums.ReviewNoteType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitProject`: Exposes CRUD operations for the **GitProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitProjects
    * const gitProjects = await prisma.gitProject.findMany()
    * ```
    */
  get gitProject(): Prisma.GitProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gitConnector`: Exposes CRUD operations for the **GitConnector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GitConnectors
    * const gitConnectors = await prisma.gitConnector.findMany()
    * ```
    */
  get gitConnector(): Prisma.GitConnectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aiProvider`: Exposes CRUD operations for the **AiProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiProviders
    * const aiProviders = await prisma.aiProvider.findMany()
    * ```
    */
  get aiProvider(): Prisma.AiProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mergeRequest`: Exposes CRUD operations for the **MergeRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MergeRequests
    * const mergeRequests = await prisma.mergeRequest.findMany()
    * ```
    */
  get mergeRequest(): Prisma.MergeRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteDefinition`: Exposes CRUD operations for the **NoteDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteDefinitions
    * const noteDefinitions = await prisma.noteDefinition.findMany()
    * ```
    */
  get noteDefinition(): Prisma.NoteDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewNote`: Exposes CRUD operations for the **ReviewNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewNotes
    * const reviewNotes = await prisma.reviewNote.findMany()
    * ```
    */
  get reviewNote(): Prisma.ReviewNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewer`: Exposes CRUD operations for the **Reviewer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviewers
    * const reviewers = await prisma.reviewer.findMany()
    * ```
    */
  get reviewer(): Prisma.ReviewerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    GitProject: 'GitProject',
    GitConnector: 'GitConnector',
    AiProvider: 'AiProvider',
    MergeRequest: 'MergeRequest',
    Review: 'Review',
    Comment: 'Comment',
    NoteDefinition: 'NoteDefinition',
    ReviewNote: 'ReviewNote',
    Reviewer: 'Reviewer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "account" | "verification" | "gitProject" | "gitConnector" | "aiProvider" | "mergeRequest" | "review" | "comment" | "noteDefinition" | "reviewNote" | "reviewer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      GitProject: {
        payload: Prisma.$GitProjectPayload<ExtArgs>
        fields: Prisma.GitProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>
          }
          findFirst: {
            args: Prisma.GitProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>
          }
          findMany: {
            args: Prisma.GitProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>[]
          }
          create: {
            args: Prisma.GitProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>
          }
          createMany: {
            args: Prisma.GitProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>[]
          }
          delete: {
            args: Prisma.GitProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>
          }
          update: {
            args: Prisma.GitProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>
          }
          deleteMany: {
            args: Prisma.GitProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>[]
          }
          upsert: {
            args: Prisma.GitProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitProjectPayload>
          }
          aggregate: {
            args: Prisma.GitProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitProject>
          }
          groupBy: {
            args: Prisma.GitProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitProjectCountArgs<ExtArgs>
            result: $Utils.Optional<GitProjectCountAggregateOutputType> | number
          }
        }
      }
      GitConnector: {
        payload: Prisma.$GitConnectorPayload<ExtArgs>
        fields: Prisma.GitConnectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GitConnectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GitConnectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>
          }
          findFirst: {
            args: Prisma.GitConnectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GitConnectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>
          }
          findMany: {
            args: Prisma.GitConnectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>[]
          }
          create: {
            args: Prisma.GitConnectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>
          }
          createMany: {
            args: Prisma.GitConnectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GitConnectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>[]
          }
          delete: {
            args: Prisma.GitConnectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>
          }
          update: {
            args: Prisma.GitConnectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>
          }
          deleteMany: {
            args: Prisma.GitConnectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GitConnectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GitConnectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>[]
          }
          upsert: {
            args: Prisma.GitConnectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GitConnectorPayload>
          }
          aggregate: {
            args: Prisma.GitConnectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGitConnector>
          }
          groupBy: {
            args: Prisma.GitConnectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<GitConnectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.GitConnectorCountArgs<ExtArgs>
            result: $Utils.Optional<GitConnectorCountAggregateOutputType> | number
          }
        }
      }
      AiProvider: {
        payload: Prisma.$AiProviderPayload<ExtArgs>
        fields: Prisma.AiProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          findFirst: {
            args: Prisma.AiProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          findMany: {
            args: Prisma.AiProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>[]
          }
          create: {
            args: Prisma.AiProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          createMany: {
            args: Prisma.AiProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>[]
          }
          delete: {
            args: Prisma.AiProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          update: {
            args: Prisma.AiProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          deleteMany: {
            args: Prisma.AiProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AiProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>[]
          }
          upsert: {
            args: Prisma.AiProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiProviderPayload>
          }
          aggregate: {
            args: Prisma.AiProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiProvider>
          }
          groupBy: {
            args: Prisma.AiProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiProviderCountArgs<ExtArgs>
            result: $Utils.Optional<AiProviderCountAggregateOutputType> | number
          }
        }
      }
      MergeRequest: {
        payload: Prisma.$MergeRequestPayload<ExtArgs>
        fields: Prisma.MergeRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MergeRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MergeRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>
          }
          findFirst: {
            args: Prisma.MergeRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MergeRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>
          }
          findMany: {
            args: Prisma.MergeRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>[]
          }
          create: {
            args: Prisma.MergeRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>
          }
          createMany: {
            args: Prisma.MergeRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MergeRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>[]
          }
          delete: {
            args: Prisma.MergeRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>
          }
          update: {
            args: Prisma.MergeRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>
          }
          deleteMany: {
            args: Prisma.MergeRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MergeRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MergeRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>[]
          }
          upsert: {
            args: Prisma.MergeRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MergeRequestPayload>
          }
          aggregate: {
            args: Prisma.MergeRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMergeRequest>
          }
          groupBy: {
            args: Prisma.MergeRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MergeRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MergeRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MergeRequestCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      NoteDefinition: {
        payload: Prisma.$NoteDefinitionPayload<ExtArgs>
        fields: Prisma.NoteDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>
          }
          findFirst: {
            args: Prisma.NoteDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>
          }
          findMany: {
            args: Prisma.NoteDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>[]
          }
          create: {
            args: Prisma.NoteDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>
          }
          createMany: {
            args: Prisma.NoteDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteDefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>[]
          }
          delete: {
            args: Prisma.NoteDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>
          }
          update: {
            args: Prisma.NoteDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.NoteDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteDefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>[]
          }
          upsert: {
            args: Prisma.NoteDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteDefinitionPayload>
          }
          aggregate: {
            args: Prisma.NoteDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteDefinition>
          }
          groupBy: {
            args: Prisma.NoteDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteDefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<NoteDefinitionCountAggregateOutputType> | number
          }
        }
      }
      ReviewNote: {
        payload: Prisma.$ReviewNotePayload<ExtArgs>
        fields: Prisma.ReviewNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          findFirst: {
            args: Prisma.ReviewNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          findMany: {
            args: Prisma.ReviewNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>[]
          }
          create: {
            args: Prisma.ReviewNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          createMany: {
            args: Prisma.ReviewNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>[]
          }
          delete: {
            args: Prisma.ReviewNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          update: {
            args: Prisma.ReviewNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          deleteMany: {
            args: Prisma.ReviewNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>[]
          }
          upsert: {
            args: Prisma.ReviewNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewNotePayload>
          }
          aggregate: {
            args: Prisma.ReviewNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewNote>
          }
          groupBy: {
            args: Prisma.ReviewNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewNoteCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewNoteCountAggregateOutputType> | number
          }
        }
      }
      Reviewer: {
        payload: Prisma.$ReviewerPayload<ExtArgs>
        fields: Prisma.ReviewerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>
          }
          findFirst: {
            args: Prisma.ReviewerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>
          }
          findMany: {
            args: Prisma.ReviewerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>[]
          }
          create: {
            args: Prisma.ReviewerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>
          }
          createMany: {
            args: Prisma.ReviewerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>[]
          }
          delete: {
            args: Prisma.ReviewerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>
          }
          update: {
            args: Prisma.ReviewerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>
          }
          deleteMany: {
            args: Prisma.ReviewerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>[]
          }
          upsert: {
            args: Prisma.ReviewerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewerPayload>
          }
          aggregate: {
            args: Prisma.ReviewerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewer>
          }
          groupBy: {
            args: Prisma.ReviewerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewerCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    gitProject?: GitProjectOmit
    gitConnector?: GitConnectorOmit
    aiProvider?: AiProviderOmit
    mergeRequest?: MergeRequestOmit
    review?: ReviewOmit
    comment?: CommentOmit
    noteDefinition?: NoteDefinitionOmit
    reviewNote?: ReviewNoteOmit
    reviewer?: ReviewerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type GitProjectCountOutputType
   */

  export type GitProjectCountOutputType = {
    reviewers: number
    mergeRequests: number
  }

  export type GitProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewers?: boolean | GitProjectCountOutputTypeCountReviewersArgs
    mergeRequests?: boolean | GitProjectCountOutputTypeCountMergeRequestsArgs
  }

  // Custom InputTypes
  /**
   * GitProjectCountOutputType without action
   */
  export type GitProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProjectCountOutputType
     */
    select?: GitProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GitProjectCountOutputType without action
   */
  export type GitProjectCountOutputTypeCountReviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewerWhereInput
  }

  /**
   * GitProjectCountOutputType without action
   */
  export type GitProjectCountOutputTypeCountMergeRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MergeRequestWhereInput
  }


  /**
   * Count Type GitConnectorCountOutputType
   */

  export type GitConnectorCountOutputType = {
    projects: number
  }

  export type GitConnectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | GitConnectorCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * GitConnectorCountOutputType without action
   */
  export type GitConnectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnectorCountOutputType
     */
    select?: GitConnectorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GitConnectorCountOutputType without action
   */
  export type GitConnectorCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitProjectWhereInput
  }


  /**
   * Count Type AiProviderCountOutputType
   */

  export type AiProviderCountOutputType = {
    reviewer: number
  }

  export type AiProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | AiProviderCountOutputTypeCountReviewerArgs
  }

  // Custom InputTypes
  /**
   * AiProviderCountOutputType without action
   */
  export type AiProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProviderCountOutputType
     */
    select?: AiProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AiProviderCountOutputType without action
   */
  export type AiProviderCountOutputTypeCountReviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewerWhereInput
  }


  /**
   * Count Type MergeRequestCountOutputType
   */

  export type MergeRequestCountOutputType = {
    reviews: number
  }

  export type MergeRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | MergeRequestCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * MergeRequestCountOutputType without action
   */
  export type MergeRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequestCountOutputType
     */
    select?: MergeRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MergeRequestCountOutputType without action
   */
  export type MergeRequestCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    comments: number
    reviewNotes: number
    reviewers: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ReviewCountOutputTypeCountCommentsArgs
    reviewNotes?: boolean | ReviewCountOutputTypeCountReviewNotesArgs
    reviewers?: boolean | ReviewCountOutputTypeCountReviewersArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountReviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewNoteWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountReviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewerWhereInput
  }


  /**
   * Count Type NoteDefinitionCountOutputType
   */

  export type NoteDefinitionCountOutputType = {
    reviewers: number
    reviewNotes: number
  }

  export type NoteDefinitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewers?: boolean | NoteDefinitionCountOutputTypeCountReviewersArgs
    reviewNotes?: boolean | NoteDefinitionCountOutputTypeCountReviewNotesArgs
  }

  // Custom InputTypes
  /**
   * NoteDefinitionCountOutputType without action
   */
  export type NoteDefinitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinitionCountOutputType
     */
    select?: NoteDefinitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoteDefinitionCountOutputType without action
   */
  export type NoteDefinitionCountOutputTypeCountReviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewerWhereInput
  }

  /**
   * NoteDefinitionCountOutputType without action
   */
  export type NoteDefinitionCountOutputTypeCountReviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewNoteWhereInput
  }


  /**
   * Count Type ReviewerCountOutputType
   */

  export type ReviewerCountOutputType = {
    projects: number
    reviews: number
    comments: number
    reviewNotes: number
    noteDefinitions: number
  }

  export type ReviewerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | ReviewerCountOutputTypeCountProjectsArgs
    reviews?: boolean | ReviewerCountOutputTypeCountReviewsArgs
    comments?: boolean | ReviewerCountOutputTypeCountCommentsArgs
    reviewNotes?: boolean | ReviewerCountOutputTypeCountReviewNotesArgs
    noteDefinitions?: boolean | ReviewerCountOutputTypeCountNoteDefinitionsArgs
  }

  // Custom InputTypes
  /**
   * ReviewerCountOutputType without action
   */
  export type ReviewerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewerCountOutputType
     */
    select?: ReviewerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewerCountOutputType without action
   */
  export type ReviewerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitProjectWhereInput
  }

  /**
   * ReviewerCountOutputType without action
   */
  export type ReviewerCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ReviewerCountOutputType without action
   */
  export type ReviewerCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * ReviewerCountOutputType without action
   */
  export type ReviewerCountOutputTypeCountReviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewNoteWhereInput
  }

  /**
   * ReviewerCountOutputType without action
   */
  export type ReviewerCountOutputTypeCountNoteDefinitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteDefinitionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model GitProject
   */

  export type AggregateGitProject = {
    _count: GitProjectCountAggregateOutputType | null
    _min: GitProjectMinAggregateOutputType | null
    _max: GitProjectMaxAggregateOutputType | null
  }

  export type GitProjectMinAggregateOutputType = {
    id: string | null
    originId: string | null
    url: string | null
    name: string | null
    fullName: string | null
    providerType: $Enums.GitProviderType | null
    createdAt: Date | null
    ignoreDraft: boolean | null
    ignoreList: string | null
    ignorePattern: string | null
    instructionFile: string | null
    customInstructionFile: boolean | null
    connectorId: string | null
  }

  export type GitProjectMaxAggregateOutputType = {
    id: string | null
    originId: string | null
    url: string | null
    name: string | null
    fullName: string | null
    providerType: $Enums.GitProviderType | null
    createdAt: Date | null
    ignoreDraft: boolean | null
    ignoreList: string | null
    ignorePattern: string | null
    instructionFile: string | null
    customInstructionFile: boolean | null
    connectorId: string | null
  }

  export type GitProjectCountAggregateOutputType = {
    id: number
    originId: number
    url: number
    name: number
    fullName: number
    providerType: number
    createdAt: number
    ignoreDraft: number
    ignoreList: number
    ignorePattern: number
    instructionFile: number
    customInstructionFile: number
    connectorId: number
    _all: number
  }


  export type GitProjectMinAggregateInputType = {
    id?: true
    originId?: true
    url?: true
    name?: true
    fullName?: true
    providerType?: true
    createdAt?: true
    ignoreDraft?: true
    ignoreList?: true
    ignorePattern?: true
    instructionFile?: true
    customInstructionFile?: true
    connectorId?: true
  }

  export type GitProjectMaxAggregateInputType = {
    id?: true
    originId?: true
    url?: true
    name?: true
    fullName?: true
    providerType?: true
    createdAt?: true
    ignoreDraft?: true
    ignoreList?: true
    ignorePattern?: true
    instructionFile?: true
    customInstructionFile?: true
    connectorId?: true
  }

  export type GitProjectCountAggregateInputType = {
    id?: true
    originId?: true
    url?: true
    name?: true
    fullName?: true
    providerType?: true
    createdAt?: true
    ignoreDraft?: true
    ignoreList?: true
    ignorePattern?: true
    instructionFile?: true
    customInstructionFile?: true
    connectorId?: true
    _all?: true
  }

  export type GitProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitProject to aggregate.
     */
    where?: GitProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitProjects to fetch.
     */
    orderBy?: GitProjectOrderByWithRelationInput | GitProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitProjects
    **/
    _count?: true | GitProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitProjectMaxAggregateInputType
  }

  export type GetGitProjectAggregateType<T extends GitProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateGitProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitProject[P]>
      : GetScalarType<T[P], AggregateGitProject[P]>
  }




  export type GitProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitProjectWhereInput
    orderBy?: GitProjectOrderByWithAggregationInput | GitProjectOrderByWithAggregationInput[]
    by: GitProjectScalarFieldEnum[] | GitProjectScalarFieldEnum
    having?: GitProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitProjectCountAggregateInputType | true
    _min?: GitProjectMinAggregateInputType
    _max?: GitProjectMaxAggregateInputType
  }

  export type GitProjectGroupByOutputType = {
    id: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt: Date
    ignoreDraft: boolean
    ignoreList: string | null
    ignorePattern: string | null
    instructionFile: string | null
    customInstructionFile: boolean
    connectorId: string
    _count: GitProjectCountAggregateOutputType | null
    _min: GitProjectMinAggregateOutputType | null
    _max: GitProjectMaxAggregateOutputType | null
  }

  type GetGitProjectGroupByPayload<T extends GitProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitProjectGroupByOutputType[P]>
            : GetScalarType<T[P], GitProjectGroupByOutputType[P]>
        }
      >
    >


  export type GitProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originId?: boolean
    url?: boolean
    name?: boolean
    fullName?: boolean
    providerType?: boolean
    createdAt?: boolean
    ignoreDraft?: boolean
    ignoreList?: boolean
    ignorePattern?: boolean
    instructionFile?: boolean
    customInstructionFile?: boolean
    connectorId?: boolean
    reviewers?: boolean | GitProject$reviewersArgs<ExtArgs>
    mergeRequests?: boolean | GitProject$mergeRequestsArgs<ExtArgs>
    connector?: boolean | GitConnectorDefaultArgs<ExtArgs>
    _count?: boolean | GitProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitProject"]>

  export type GitProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originId?: boolean
    url?: boolean
    name?: boolean
    fullName?: boolean
    providerType?: boolean
    createdAt?: boolean
    ignoreDraft?: boolean
    ignoreList?: boolean
    ignorePattern?: boolean
    instructionFile?: boolean
    customInstructionFile?: boolean
    connectorId?: boolean
    connector?: boolean | GitConnectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitProject"]>

  export type GitProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originId?: boolean
    url?: boolean
    name?: boolean
    fullName?: boolean
    providerType?: boolean
    createdAt?: boolean
    ignoreDraft?: boolean
    ignoreList?: boolean
    ignorePattern?: boolean
    instructionFile?: boolean
    customInstructionFile?: boolean
    connectorId?: boolean
    connector?: boolean | GitConnectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitProject"]>

  export type GitProjectSelectScalar = {
    id?: boolean
    originId?: boolean
    url?: boolean
    name?: boolean
    fullName?: boolean
    providerType?: boolean
    createdAt?: boolean
    ignoreDraft?: boolean
    ignoreList?: boolean
    ignorePattern?: boolean
    instructionFile?: boolean
    customInstructionFile?: boolean
    connectorId?: boolean
  }

  export type GitProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originId" | "url" | "name" | "fullName" | "providerType" | "createdAt" | "ignoreDraft" | "ignoreList" | "ignorePattern" | "instructionFile" | "customInstructionFile" | "connectorId", ExtArgs["result"]["gitProject"]>
  export type GitProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewers?: boolean | GitProject$reviewersArgs<ExtArgs>
    mergeRequests?: boolean | GitProject$mergeRequestsArgs<ExtArgs>
    connector?: boolean | GitConnectorDefaultArgs<ExtArgs>
    _count?: boolean | GitProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GitProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connector?: boolean | GitConnectorDefaultArgs<ExtArgs>
  }
  export type GitProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    connector?: boolean | GitConnectorDefaultArgs<ExtArgs>
  }

  export type $GitProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitProject"
    objects: {
      reviewers: Prisma.$ReviewerPayload<ExtArgs>[]
      mergeRequests: Prisma.$MergeRequestPayload<ExtArgs>[]
      connector: Prisma.$GitConnectorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originId: string
      url: string
      name: string
      fullName: string
      providerType: $Enums.GitProviderType
      createdAt: Date
      ignoreDraft: boolean
      ignoreList: string | null
      ignorePattern: string | null
      instructionFile: string | null
      customInstructionFile: boolean
      connectorId: string
    }, ExtArgs["result"]["gitProject"]>
    composites: {}
  }

  type GitProjectGetPayload<S extends boolean | null | undefined | GitProjectDefaultArgs> = $Result.GetResult<Prisma.$GitProjectPayload, S>

  type GitProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitProjectCountAggregateInputType | true
    }

  export interface GitProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitProject'], meta: { name: 'GitProject' } }
    /**
     * Find zero or one GitProject that matches the filter.
     * @param {GitProjectFindUniqueArgs} args - Arguments to find a GitProject
     * @example
     * // Get one GitProject
     * const gitProject = await prisma.gitProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitProjectFindUniqueArgs>(args: SelectSubset<T, GitProjectFindUniqueArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitProjectFindUniqueOrThrowArgs} args - Arguments to find a GitProject
     * @example
     * // Get one GitProject
     * const gitProject = await prisma.gitProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, GitProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitProjectFindFirstArgs} args - Arguments to find a GitProject
     * @example
     * // Get one GitProject
     * const gitProject = await prisma.gitProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitProjectFindFirstArgs>(args?: SelectSubset<T, GitProjectFindFirstArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitProjectFindFirstOrThrowArgs} args - Arguments to find a GitProject
     * @example
     * // Get one GitProject
     * const gitProject = await prisma.gitProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, GitProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitProjects
     * const gitProjects = await prisma.gitProject.findMany()
     * 
     * // Get first 10 GitProjects
     * const gitProjects = await prisma.gitProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitProjectWithIdOnly = await prisma.gitProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitProjectFindManyArgs>(args?: SelectSubset<T, GitProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitProject.
     * @param {GitProjectCreateArgs} args - Arguments to create a GitProject.
     * @example
     * // Create one GitProject
     * const GitProject = await prisma.gitProject.create({
     *   data: {
     *     // ... data to create a GitProject
     *   }
     * })
     * 
     */
    create<T extends GitProjectCreateArgs>(args: SelectSubset<T, GitProjectCreateArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitProjects.
     * @param {GitProjectCreateManyArgs} args - Arguments to create many GitProjects.
     * @example
     * // Create many GitProjects
     * const gitProject = await prisma.gitProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitProjectCreateManyArgs>(args?: SelectSubset<T, GitProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitProjects and returns the data saved in the database.
     * @param {GitProjectCreateManyAndReturnArgs} args - Arguments to create many GitProjects.
     * @example
     * // Create many GitProjects
     * const gitProject = await prisma.gitProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitProjects and only return the `id`
     * const gitProjectWithIdOnly = await prisma.gitProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, GitProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitProject.
     * @param {GitProjectDeleteArgs} args - Arguments to delete one GitProject.
     * @example
     * // Delete one GitProject
     * const GitProject = await prisma.gitProject.delete({
     *   where: {
     *     // ... filter to delete one GitProject
     *   }
     * })
     * 
     */
    delete<T extends GitProjectDeleteArgs>(args: SelectSubset<T, GitProjectDeleteArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitProject.
     * @param {GitProjectUpdateArgs} args - Arguments to update one GitProject.
     * @example
     * // Update one GitProject
     * const gitProject = await prisma.gitProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitProjectUpdateArgs>(args: SelectSubset<T, GitProjectUpdateArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitProjects.
     * @param {GitProjectDeleteManyArgs} args - Arguments to filter GitProjects to delete.
     * @example
     * // Delete a few GitProjects
     * const { count } = await prisma.gitProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitProjectDeleteManyArgs>(args?: SelectSubset<T, GitProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitProjects
     * const gitProject = await prisma.gitProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitProjectUpdateManyArgs>(args: SelectSubset<T, GitProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitProjects and returns the data updated in the database.
     * @param {GitProjectUpdateManyAndReturnArgs} args - Arguments to update many GitProjects.
     * @example
     * // Update many GitProjects
     * const gitProject = await prisma.gitProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitProjects and only return the `id`
     * const gitProjectWithIdOnly = await prisma.gitProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, GitProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitProject.
     * @param {GitProjectUpsertArgs} args - Arguments to update or create a GitProject.
     * @example
     * // Update or create a GitProject
     * const gitProject = await prisma.gitProject.upsert({
     *   create: {
     *     // ... data to create a GitProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitProject we want to update
     *   }
     * })
     */
    upsert<T extends GitProjectUpsertArgs>(args: SelectSubset<T, GitProjectUpsertArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitProjectCountArgs} args - Arguments to filter GitProjects to count.
     * @example
     * // Count the number of GitProjects
     * const count = await prisma.gitProject.count({
     *   where: {
     *     // ... the filter for the GitProjects we want to count
     *   }
     * })
    **/
    count<T extends GitProjectCountArgs>(
      args?: Subset<T, GitProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GitProjectAggregateArgs>(args: Subset<T, GitProjectAggregateArgs>): Prisma.PrismaPromise<GetGitProjectAggregateType<T>>

    /**
     * Group by GitProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GitProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitProjectGroupByArgs['orderBy'] }
        : { orderBy?: GitProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GitProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitProject model
   */
  readonly fields: GitProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewers<T extends GitProject$reviewersArgs<ExtArgs> = {}>(args?: Subset<T, GitProject$reviewersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mergeRequests<T extends GitProject$mergeRequestsArgs<ExtArgs> = {}>(args?: Subset<T, GitProject$mergeRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    connector<T extends GitConnectorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GitConnectorDefaultArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitProject model
   */
  interface GitProjectFieldRefs {
    readonly id: FieldRef<"GitProject", 'String'>
    readonly originId: FieldRef<"GitProject", 'String'>
    readonly url: FieldRef<"GitProject", 'String'>
    readonly name: FieldRef<"GitProject", 'String'>
    readonly fullName: FieldRef<"GitProject", 'String'>
    readonly providerType: FieldRef<"GitProject", 'GitProviderType'>
    readonly createdAt: FieldRef<"GitProject", 'DateTime'>
    readonly ignoreDraft: FieldRef<"GitProject", 'Boolean'>
    readonly ignoreList: FieldRef<"GitProject", 'String'>
    readonly ignorePattern: FieldRef<"GitProject", 'String'>
    readonly instructionFile: FieldRef<"GitProject", 'String'>
    readonly customInstructionFile: FieldRef<"GitProject", 'Boolean'>
    readonly connectorId: FieldRef<"GitProject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GitProject findUnique
   */
  export type GitProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitProject to fetch.
     */
    where: GitProjectWhereUniqueInput
  }

  /**
   * GitProject findUniqueOrThrow
   */
  export type GitProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitProject to fetch.
     */
    where: GitProjectWhereUniqueInput
  }

  /**
   * GitProject findFirst
   */
  export type GitProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitProject to fetch.
     */
    where?: GitProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitProjects to fetch.
     */
    orderBy?: GitProjectOrderByWithRelationInput | GitProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitProjects.
     */
    cursor?: GitProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitProjects.
     */
    distinct?: GitProjectScalarFieldEnum | GitProjectScalarFieldEnum[]
  }

  /**
   * GitProject findFirstOrThrow
   */
  export type GitProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitProject to fetch.
     */
    where?: GitProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitProjects to fetch.
     */
    orderBy?: GitProjectOrderByWithRelationInput | GitProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitProjects.
     */
    cursor?: GitProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitProjects.
     */
    distinct?: GitProjectScalarFieldEnum | GitProjectScalarFieldEnum[]
  }

  /**
   * GitProject findMany
   */
  export type GitProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * Filter, which GitProjects to fetch.
     */
    where?: GitProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitProjects to fetch.
     */
    orderBy?: GitProjectOrderByWithRelationInput | GitProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitProjects.
     */
    cursor?: GitProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitProjects.
     */
    skip?: number
    distinct?: GitProjectScalarFieldEnum | GitProjectScalarFieldEnum[]
  }

  /**
   * GitProject create
   */
  export type GitProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a GitProject.
     */
    data: XOR<GitProjectCreateInput, GitProjectUncheckedCreateInput>
  }

  /**
   * GitProject createMany
   */
  export type GitProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitProjects.
     */
    data: GitProjectCreateManyInput | GitProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitProject createManyAndReturn
   */
  export type GitProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * The data used to create many GitProjects.
     */
    data: GitProjectCreateManyInput | GitProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitProject update
   */
  export type GitProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a GitProject.
     */
    data: XOR<GitProjectUpdateInput, GitProjectUncheckedUpdateInput>
    /**
     * Choose, which GitProject to update.
     */
    where: GitProjectWhereUniqueInput
  }

  /**
   * GitProject updateMany
   */
  export type GitProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitProjects.
     */
    data: XOR<GitProjectUpdateManyMutationInput, GitProjectUncheckedUpdateManyInput>
    /**
     * Filter which GitProjects to update
     */
    where?: GitProjectWhereInput
    /**
     * Limit how many GitProjects to update.
     */
    limit?: number
  }

  /**
   * GitProject updateManyAndReturn
   */
  export type GitProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * The data used to update GitProjects.
     */
    data: XOR<GitProjectUpdateManyMutationInput, GitProjectUncheckedUpdateManyInput>
    /**
     * Filter which GitProjects to update
     */
    where?: GitProjectWhereInput
    /**
     * Limit how many GitProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GitProject upsert
   */
  export type GitProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the GitProject to update in case it exists.
     */
    where: GitProjectWhereUniqueInput
    /**
     * In case the GitProject found by the `where` argument doesn't exist, create a new GitProject with this data.
     */
    create: XOR<GitProjectCreateInput, GitProjectUncheckedCreateInput>
    /**
     * In case the GitProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitProjectUpdateInput, GitProjectUncheckedUpdateInput>
  }

  /**
   * GitProject delete
   */
  export type GitProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    /**
     * Filter which GitProject to delete.
     */
    where: GitProjectWhereUniqueInput
  }

  /**
   * GitProject deleteMany
   */
  export type GitProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitProjects to delete
     */
    where?: GitProjectWhereInput
    /**
     * Limit how many GitProjects to delete.
     */
    limit?: number
  }

  /**
   * GitProject.reviewers
   */
  export type GitProject$reviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    where?: ReviewerWhereInput
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    cursor?: ReviewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewerScalarFieldEnum | ReviewerScalarFieldEnum[]
  }

  /**
   * GitProject.mergeRequests
   */
  export type GitProject$mergeRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    where?: MergeRequestWhereInput
    orderBy?: MergeRequestOrderByWithRelationInput | MergeRequestOrderByWithRelationInput[]
    cursor?: MergeRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MergeRequestScalarFieldEnum | MergeRequestScalarFieldEnum[]
  }

  /**
   * GitProject without action
   */
  export type GitProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
  }


  /**
   * Model GitConnector
   */

  export type AggregateGitConnector = {
    _count: GitConnectorCountAggregateOutputType | null
    _min: GitConnectorMinAggregateOutputType | null
    _max: GitConnectorMaxAggregateOutputType | null
  }

  export type GitConnectorMinAggregateOutputType = {
    id: string | null
    type: $Enums.GitProviderType | null
    config: string | null
    createdAt: Date | null
  }

  export type GitConnectorMaxAggregateOutputType = {
    id: string | null
    type: $Enums.GitProviderType | null
    config: string | null
    createdAt: Date | null
  }

  export type GitConnectorCountAggregateOutputType = {
    id: number
    type: number
    config: number
    createdAt: number
    _all: number
  }


  export type GitConnectorMinAggregateInputType = {
    id?: true
    type?: true
    config?: true
    createdAt?: true
  }

  export type GitConnectorMaxAggregateInputType = {
    id?: true
    type?: true
    config?: true
    createdAt?: true
  }

  export type GitConnectorCountAggregateInputType = {
    id?: true
    type?: true
    config?: true
    createdAt?: true
    _all?: true
  }

  export type GitConnectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitConnector to aggregate.
     */
    where?: GitConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitConnectors to fetch.
     */
    orderBy?: GitConnectorOrderByWithRelationInput | GitConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GitConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitConnectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitConnectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GitConnectors
    **/
    _count?: true | GitConnectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GitConnectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GitConnectorMaxAggregateInputType
  }

  export type GetGitConnectorAggregateType<T extends GitConnectorAggregateArgs> = {
        [P in keyof T & keyof AggregateGitConnector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGitConnector[P]>
      : GetScalarType<T[P], AggregateGitConnector[P]>
  }




  export type GitConnectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GitConnectorWhereInput
    orderBy?: GitConnectorOrderByWithAggregationInput | GitConnectorOrderByWithAggregationInput[]
    by: GitConnectorScalarFieldEnum[] | GitConnectorScalarFieldEnum
    having?: GitConnectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GitConnectorCountAggregateInputType | true
    _min?: GitConnectorMinAggregateInputType
    _max?: GitConnectorMaxAggregateInputType
  }

  export type GitConnectorGroupByOutputType = {
    id: string
    type: $Enums.GitProviderType
    config: string
    createdAt: Date
    _count: GitConnectorCountAggregateOutputType | null
    _min: GitConnectorMinAggregateOutputType | null
    _max: GitConnectorMaxAggregateOutputType | null
  }

  type GetGitConnectorGroupByPayload<T extends GitConnectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GitConnectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GitConnectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GitConnectorGroupByOutputType[P]>
            : GetScalarType<T[P], GitConnectorGroupByOutputType[P]>
        }
      >
    >


  export type GitConnectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    config?: boolean
    createdAt?: boolean
    projects?: boolean | GitConnector$projectsArgs<ExtArgs>
    _count?: boolean | GitConnectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gitConnector"]>

  export type GitConnectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    config?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gitConnector"]>

  export type GitConnectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    config?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gitConnector"]>

  export type GitConnectorSelectScalar = {
    id?: boolean
    type?: boolean
    config?: boolean
    createdAt?: boolean
  }

  export type GitConnectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "config" | "createdAt", ExtArgs["result"]["gitConnector"]>
  export type GitConnectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | GitConnector$projectsArgs<ExtArgs>
    _count?: boolean | GitConnectorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GitConnectorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GitConnectorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GitConnectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GitConnector"
    objects: {
      projects: Prisma.$GitProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.GitProviderType
      /**
       * @encrypted
       */
      config: string
      createdAt: Date
    }, ExtArgs["result"]["gitConnector"]>
    composites: {}
  }

  type GitConnectorGetPayload<S extends boolean | null | undefined | GitConnectorDefaultArgs> = $Result.GetResult<Prisma.$GitConnectorPayload, S>

  type GitConnectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GitConnectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GitConnectorCountAggregateInputType | true
    }

  export interface GitConnectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GitConnector'], meta: { name: 'GitConnector' } }
    /**
     * Find zero or one GitConnector that matches the filter.
     * @param {GitConnectorFindUniqueArgs} args - Arguments to find a GitConnector
     * @example
     * // Get one GitConnector
     * const gitConnector = await prisma.gitConnector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GitConnectorFindUniqueArgs>(args: SelectSubset<T, GitConnectorFindUniqueArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GitConnector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GitConnectorFindUniqueOrThrowArgs} args - Arguments to find a GitConnector
     * @example
     * // Get one GitConnector
     * const gitConnector = await prisma.gitConnector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GitConnectorFindUniqueOrThrowArgs>(args: SelectSubset<T, GitConnectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitConnector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitConnectorFindFirstArgs} args - Arguments to find a GitConnector
     * @example
     * // Get one GitConnector
     * const gitConnector = await prisma.gitConnector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GitConnectorFindFirstArgs>(args?: SelectSubset<T, GitConnectorFindFirstArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GitConnector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitConnectorFindFirstOrThrowArgs} args - Arguments to find a GitConnector
     * @example
     * // Get one GitConnector
     * const gitConnector = await prisma.gitConnector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GitConnectorFindFirstOrThrowArgs>(args?: SelectSubset<T, GitConnectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GitConnectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitConnectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GitConnectors
     * const gitConnectors = await prisma.gitConnector.findMany()
     * 
     * // Get first 10 GitConnectors
     * const gitConnectors = await prisma.gitConnector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gitConnectorWithIdOnly = await prisma.gitConnector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GitConnectorFindManyArgs>(args?: SelectSubset<T, GitConnectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GitConnector.
     * @param {GitConnectorCreateArgs} args - Arguments to create a GitConnector.
     * @example
     * // Create one GitConnector
     * const GitConnector = await prisma.gitConnector.create({
     *   data: {
     *     // ... data to create a GitConnector
     *   }
     * })
     * 
     */
    create<T extends GitConnectorCreateArgs>(args: SelectSubset<T, GitConnectorCreateArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GitConnectors.
     * @param {GitConnectorCreateManyArgs} args - Arguments to create many GitConnectors.
     * @example
     * // Create many GitConnectors
     * const gitConnector = await prisma.gitConnector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GitConnectorCreateManyArgs>(args?: SelectSubset<T, GitConnectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GitConnectors and returns the data saved in the database.
     * @param {GitConnectorCreateManyAndReturnArgs} args - Arguments to create many GitConnectors.
     * @example
     * // Create many GitConnectors
     * const gitConnector = await prisma.gitConnector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GitConnectors and only return the `id`
     * const gitConnectorWithIdOnly = await prisma.gitConnector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GitConnectorCreateManyAndReturnArgs>(args?: SelectSubset<T, GitConnectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GitConnector.
     * @param {GitConnectorDeleteArgs} args - Arguments to delete one GitConnector.
     * @example
     * // Delete one GitConnector
     * const GitConnector = await prisma.gitConnector.delete({
     *   where: {
     *     // ... filter to delete one GitConnector
     *   }
     * })
     * 
     */
    delete<T extends GitConnectorDeleteArgs>(args: SelectSubset<T, GitConnectorDeleteArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GitConnector.
     * @param {GitConnectorUpdateArgs} args - Arguments to update one GitConnector.
     * @example
     * // Update one GitConnector
     * const gitConnector = await prisma.gitConnector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GitConnectorUpdateArgs>(args: SelectSubset<T, GitConnectorUpdateArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GitConnectors.
     * @param {GitConnectorDeleteManyArgs} args - Arguments to filter GitConnectors to delete.
     * @example
     * // Delete a few GitConnectors
     * const { count } = await prisma.gitConnector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GitConnectorDeleteManyArgs>(args?: SelectSubset<T, GitConnectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitConnectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitConnectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GitConnectors
     * const gitConnector = await prisma.gitConnector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GitConnectorUpdateManyArgs>(args: SelectSubset<T, GitConnectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GitConnectors and returns the data updated in the database.
     * @param {GitConnectorUpdateManyAndReturnArgs} args - Arguments to update many GitConnectors.
     * @example
     * // Update many GitConnectors
     * const gitConnector = await prisma.gitConnector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GitConnectors and only return the `id`
     * const gitConnectorWithIdOnly = await prisma.gitConnector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GitConnectorUpdateManyAndReturnArgs>(args: SelectSubset<T, GitConnectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GitConnector.
     * @param {GitConnectorUpsertArgs} args - Arguments to update or create a GitConnector.
     * @example
     * // Update or create a GitConnector
     * const gitConnector = await prisma.gitConnector.upsert({
     *   create: {
     *     // ... data to create a GitConnector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GitConnector we want to update
     *   }
     * })
     */
    upsert<T extends GitConnectorUpsertArgs>(args: SelectSubset<T, GitConnectorUpsertArgs<ExtArgs>>): Prisma__GitConnectorClient<$Result.GetResult<Prisma.$GitConnectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GitConnectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitConnectorCountArgs} args - Arguments to filter GitConnectors to count.
     * @example
     * // Count the number of GitConnectors
     * const count = await prisma.gitConnector.count({
     *   where: {
     *     // ... the filter for the GitConnectors we want to count
     *   }
     * })
    **/
    count<T extends GitConnectorCountArgs>(
      args?: Subset<T, GitConnectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GitConnectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GitConnector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitConnectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GitConnectorAggregateArgs>(args: Subset<T, GitConnectorAggregateArgs>): Prisma.PrismaPromise<GetGitConnectorAggregateType<T>>

    /**
     * Group by GitConnector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GitConnectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GitConnectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GitConnectorGroupByArgs['orderBy'] }
        : { orderBy?: GitConnectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GitConnectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGitConnectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GitConnector model
   */
  readonly fields: GitConnectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GitConnector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GitConnectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends GitConnector$projectsArgs<ExtArgs> = {}>(args?: Subset<T, GitConnector$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GitConnector model
   */
  interface GitConnectorFieldRefs {
    readonly id: FieldRef<"GitConnector", 'String'>
    readonly type: FieldRef<"GitConnector", 'GitProviderType'>
    readonly config: FieldRef<"GitConnector", 'String'>
    readonly createdAt: FieldRef<"GitConnector", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GitConnector findUnique
   */
  export type GitConnectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * Filter, which GitConnector to fetch.
     */
    where: GitConnectorWhereUniqueInput
  }

  /**
   * GitConnector findUniqueOrThrow
   */
  export type GitConnectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * Filter, which GitConnector to fetch.
     */
    where: GitConnectorWhereUniqueInput
  }

  /**
   * GitConnector findFirst
   */
  export type GitConnectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * Filter, which GitConnector to fetch.
     */
    where?: GitConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitConnectors to fetch.
     */
    orderBy?: GitConnectorOrderByWithRelationInput | GitConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitConnectors.
     */
    cursor?: GitConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitConnectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitConnectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitConnectors.
     */
    distinct?: GitConnectorScalarFieldEnum | GitConnectorScalarFieldEnum[]
  }

  /**
   * GitConnector findFirstOrThrow
   */
  export type GitConnectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * Filter, which GitConnector to fetch.
     */
    where?: GitConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitConnectors to fetch.
     */
    orderBy?: GitConnectorOrderByWithRelationInput | GitConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GitConnectors.
     */
    cursor?: GitConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitConnectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitConnectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GitConnectors.
     */
    distinct?: GitConnectorScalarFieldEnum | GitConnectorScalarFieldEnum[]
  }

  /**
   * GitConnector findMany
   */
  export type GitConnectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * Filter, which GitConnectors to fetch.
     */
    where?: GitConnectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GitConnectors to fetch.
     */
    orderBy?: GitConnectorOrderByWithRelationInput | GitConnectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GitConnectors.
     */
    cursor?: GitConnectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GitConnectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GitConnectors.
     */
    skip?: number
    distinct?: GitConnectorScalarFieldEnum | GitConnectorScalarFieldEnum[]
  }

  /**
   * GitConnector create
   */
  export type GitConnectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * The data needed to create a GitConnector.
     */
    data: XOR<GitConnectorCreateInput, GitConnectorUncheckedCreateInput>
  }

  /**
   * GitConnector createMany
   */
  export type GitConnectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GitConnectors.
     */
    data: GitConnectorCreateManyInput | GitConnectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitConnector createManyAndReturn
   */
  export type GitConnectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * The data used to create many GitConnectors.
     */
    data: GitConnectorCreateManyInput | GitConnectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GitConnector update
   */
  export type GitConnectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * The data needed to update a GitConnector.
     */
    data: XOR<GitConnectorUpdateInput, GitConnectorUncheckedUpdateInput>
    /**
     * Choose, which GitConnector to update.
     */
    where: GitConnectorWhereUniqueInput
  }

  /**
   * GitConnector updateMany
   */
  export type GitConnectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GitConnectors.
     */
    data: XOR<GitConnectorUpdateManyMutationInput, GitConnectorUncheckedUpdateManyInput>
    /**
     * Filter which GitConnectors to update
     */
    where?: GitConnectorWhereInput
    /**
     * Limit how many GitConnectors to update.
     */
    limit?: number
  }

  /**
   * GitConnector updateManyAndReturn
   */
  export type GitConnectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * The data used to update GitConnectors.
     */
    data: XOR<GitConnectorUpdateManyMutationInput, GitConnectorUncheckedUpdateManyInput>
    /**
     * Filter which GitConnectors to update
     */
    where?: GitConnectorWhereInput
    /**
     * Limit how many GitConnectors to update.
     */
    limit?: number
  }

  /**
   * GitConnector upsert
   */
  export type GitConnectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * The filter to search for the GitConnector to update in case it exists.
     */
    where: GitConnectorWhereUniqueInput
    /**
     * In case the GitConnector found by the `where` argument doesn't exist, create a new GitConnector with this data.
     */
    create: XOR<GitConnectorCreateInput, GitConnectorUncheckedCreateInput>
    /**
     * In case the GitConnector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GitConnectorUpdateInput, GitConnectorUncheckedUpdateInput>
  }

  /**
   * GitConnector delete
   */
  export type GitConnectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
    /**
     * Filter which GitConnector to delete.
     */
    where: GitConnectorWhereUniqueInput
  }

  /**
   * GitConnector deleteMany
   */
  export type GitConnectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GitConnectors to delete
     */
    where?: GitConnectorWhereInput
    /**
     * Limit how many GitConnectors to delete.
     */
    limit?: number
  }

  /**
   * GitConnector.projects
   */
  export type GitConnector$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    where?: GitProjectWhereInput
    orderBy?: GitProjectOrderByWithRelationInput | GitProjectOrderByWithRelationInput[]
    cursor?: GitProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitProjectScalarFieldEnum | GitProjectScalarFieldEnum[]
  }

  /**
   * GitConnector without action
   */
  export type GitConnectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitConnector
     */
    select?: GitConnectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitConnector
     */
    omit?: GitConnectorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitConnectorInclude<ExtArgs> | null
  }


  /**
   * Model AiProvider
   */

  export type AggregateAiProvider = {
    _count: AiProviderCountAggregateOutputType | null
    _min: AiProviderMinAggregateOutputType | null
    _max: AiProviderMaxAggregateOutputType | null
  }

  export type AiProviderMinAggregateOutputType = {
    id: string | null
    type: $Enums.AiProviderType | null
    baseUrl: string | null
    apiKey: string | null
    model: string | null
  }

  export type AiProviderMaxAggregateOutputType = {
    id: string | null
    type: $Enums.AiProviderType | null
    baseUrl: string | null
    apiKey: string | null
    model: string | null
  }

  export type AiProviderCountAggregateOutputType = {
    id: number
    type: number
    baseUrl: number
    apiKey: number
    model: number
    _all: number
  }


  export type AiProviderMinAggregateInputType = {
    id?: true
    type?: true
    baseUrl?: true
    apiKey?: true
    model?: true
  }

  export type AiProviderMaxAggregateInputType = {
    id?: true
    type?: true
    baseUrl?: true
    apiKey?: true
    model?: true
  }

  export type AiProviderCountAggregateInputType = {
    id?: true
    type?: true
    baseUrl?: true
    apiKey?: true
    model?: true
    _all?: true
  }

  export type AiProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiProvider to aggregate.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiProviders
    **/
    _count?: true | AiProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiProviderMaxAggregateInputType
  }

  export type GetAiProviderAggregateType<T extends AiProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateAiProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiProvider[P]>
      : GetScalarType<T[P], AggregateAiProvider[P]>
  }




  export type AiProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiProviderWhereInput
    orderBy?: AiProviderOrderByWithAggregationInput | AiProviderOrderByWithAggregationInput[]
    by: AiProviderScalarFieldEnum[] | AiProviderScalarFieldEnum
    having?: AiProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiProviderCountAggregateInputType | true
    _min?: AiProviderMinAggregateInputType
    _max?: AiProviderMaxAggregateInputType
  }

  export type AiProviderGroupByOutputType = {
    id: string
    type: $Enums.AiProviderType
    baseUrl: string | null
    apiKey: string | null
    model: string
    _count: AiProviderCountAggregateOutputType | null
    _min: AiProviderMinAggregateOutputType | null
    _max: AiProviderMaxAggregateOutputType | null
  }

  type GetAiProviderGroupByPayload<T extends AiProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiProviderGroupByOutputType[P]>
            : GetScalarType<T[P], AiProviderGroupByOutputType[P]>
        }
      >
    >


  export type AiProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    model?: boolean
    reviewer?: boolean | AiProvider$reviewerArgs<ExtArgs>
    _count?: boolean | AiProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aiProvider"]>

  export type AiProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    model?: boolean
  }, ExtArgs["result"]["aiProvider"]>

  export type AiProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    model?: boolean
  }, ExtArgs["result"]["aiProvider"]>

  export type AiProviderSelectScalar = {
    id?: boolean
    type?: boolean
    baseUrl?: boolean
    apiKey?: boolean
    model?: boolean
  }

  export type AiProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "baseUrl" | "apiKey" | "model", ExtArgs["result"]["aiProvider"]>
  export type AiProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewer?: boolean | AiProvider$reviewerArgs<ExtArgs>
    _count?: boolean | AiProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AiProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AiProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AiProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiProvider"
    objects: {
      reviewer: Prisma.$ReviewerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.AiProviderType
      baseUrl: string | null
      /**
       * @encrypted
       */
      apiKey: string | null
      model: string
    }, ExtArgs["result"]["aiProvider"]>
    composites: {}
  }

  type AiProviderGetPayload<S extends boolean | null | undefined | AiProviderDefaultArgs> = $Result.GetResult<Prisma.$AiProviderPayload, S>

  type AiProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AiProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AiProviderCountAggregateInputType | true
    }

  export interface AiProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiProvider'], meta: { name: 'AiProvider' } }
    /**
     * Find zero or one AiProvider that matches the filter.
     * @param {AiProviderFindUniqueArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiProviderFindUniqueArgs>(args: SelectSubset<T, AiProviderFindUniqueArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AiProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AiProviderFindUniqueOrThrowArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, AiProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderFindFirstArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiProviderFindFirstArgs>(args?: SelectSubset<T, AiProviderFindFirstArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AiProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderFindFirstOrThrowArgs} args - Arguments to find a AiProvider
     * @example
     * // Get one AiProvider
     * const aiProvider = await prisma.aiProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, AiProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AiProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiProviders
     * const aiProviders = await prisma.aiProvider.findMany()
     * 
     * // Get first 10 AiProviders
     * const aiProviders = await prisma.aiProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiProviderWithIdOnly = await prisma.aiProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiProviderFindManyArgs>(args?: SelectSubset<T, AiProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AiProvider.
     * @param {AiProviderCreateArgs} args - Arguments to create a AiProvider.
     * @example
     * // Create one AiProvider
     * const AiProvider = await prisma.aiProvider.create({
     *   data: {
     *     // ... data to create a AiProvider
     *   }
     * })
     * 
     */
    create<T extends AiProviderCreateArgs>(args: SelectSubset<T, AiProviderCreateArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AiProviders.
     * @param {AiProviderCreateManyArgs} args - Arguments to create many AiProviders.
     * @example
     * // Create many AiProviders
     * const aiProvider = await prisma.aiProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiProviderCreateManyArgs>(args?: SelectSubset<T, AiProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiProviders and returns the data saved in the database.
     * @param {AiProviderCreateManyAndReturnArgs} args - Arguments to create many AiProviders.
     * @example
     * // Create many AiProviders
     * const aiProvider = await prisma.aiProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiProviders and only return the `id`
     * const aiProviderWithIdOnly = await prisma.aiProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, AiProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AiProvider.
     * @param {AiProviderDeleteArgs} args - Arguments to delete one AiProvider.
     * @example
     * // Delete one AiProvider
     * const AiProvider = await prisma.aiProvider.delete({
     *   where: {
     *     // ... filter to delete one AiProvider
     *   }
     * })
     * 
     */
    delete<T extends AiProviderDeleteArgs>(args: SelectSubset<T, AiProviderDeleteArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AiProvider.
     * @param {AiProviderUpdateArgs} args - Arguments to update one AiProvider.
     * @example
     * // Update one AiProvider
     * const aiProvider = await prisma.aiProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiProviderUpdateArgs>(args: SelectSubset<T, AiProviderUpdateArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AiProviders.
     * @param {AiProviderDeleteManyArgs} args - Arguments to filter AiProviders to delete.
     * @example
     * // Delete a few AiProviders
     * const { count } = await prisma.aiProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiProviderDeleteManyArgs>(args?: SelectSubset<T, AiProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiProviders
     * const aiProvider = await prisma.aiProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiProviderUpdateManyArgs>(args: SelectSubset<T, AiProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiProviders and returns the data updated in the database.
     * @param {AiProviderUpdateManyAndReturnArgs} args - Arguments to update many AiProviders.
     * @example
     * // Update many AiProviders
     * const aiProvider = await prisma.aiProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AiProviders and only return the `id`
     * const aiProviderWithIdOnly = await prisma.aiProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AiProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, AiProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AiProvider.
     * @param {AiProviderUpsertArgs} args - Arguments to update or create a AiProvider.
     * @example
     * // Update or create a AiProvider
     * const aiProvider = await prisma.aiProvider.upsert({
     *   create: {
     *     // ... data to create a AiProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiProvider we want to update
     *   }
     * })
     */
    upsert<T extends AiProviderUpsertArgs>(args: SelectSubset<T, AiProviderUpsertArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AiProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderCountArgs} args - Arguments to filter AiProviders to count.
     * @example
     * // Count the number of AiProviders
     * const count = await prisma.aiProvider.count({
     *   where: {
     *     // ... the filter for the AiProviders we want to count
     *   }
     * })
    **/
    count<T extends AiProviderCountArgs>(
      args?: Subset<T, AiProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AiProviderAggregateArgs>(args: Subset<T, AiProviderAggregateArgs>): Prisma.PrismaPromise<GetAiProviderAggregateType<T>>

    /**
     * Group by AiProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AiProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiProviderGroupByArgs['orderBy'] }
        : { orderBy?: AiProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AiProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiProvider model
   */
  readonly fields: AiProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewer<T extends AiProvider$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, AiProvider$reviewerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AiProvider model
   */
  interface AiProviderFieldRefs {
    readonly id: FieldRef<"AiProvider", 'String'>
    readonly type: FieldRef<"AiProvider", 'AiProviderType'>
    readonly baseUrl: FieldRef<"AiProvider", 'String'>
    readonly apiKey: FieldRef<"AiProvider", 'String'>
    readonly model: FieldRef<"AiProvider", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AiProvider findUnique
   */
  export type AiProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider findUniqueOrThrow
   */
  export type AiProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider findFirst
   */
  export type AiProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiProviders.
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiProviders.
     */
    distinct?: AiProviderScalarFieldEnum | AiProviderScalarFieldEnum[]
  }

  /**
   * AiProvider findFirstOrThrow
   */
  export type AiProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProvider to fetch.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiProviders.
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiProviders.
     */
    distinct?: AiProviderScalarFieldEnum | AiProviderScalarFieldEnum[]
  }

  /**
   * AiProvider findMany
   */
  export type AiProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter, which AiProviders to fetch.
     */
    where?: AiProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiProviders to fetch.
     */
    orderBy?: AiProviderOrderByWithRelationInput | AiProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiProviders.
     */
    cursor?: AiProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiProviders.
     */
    skip?: number
    distinct?: AiProviderScalarFieldEnum | AiProviderScalarFieldEnum[]
  }

  /**
   * AiProvider create
   */
  export type AiProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a AiProvider.
     */
    data: XOR<AiProviderCreateInput, AiProviderUncheckedCreateInput>
  }

  /**
   * AiProvider createMany
   */
  export type AiProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiProviders.
     */
    data: AiProviderCreateManyInput | AiProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiProvider createManyAndReturn
   */
  export type AiProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * The data used to create many AiProviders.
     */
    data: AiProviderCreateManyInput | AiProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiProvider update
   */
  export type AiProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a AiProvider.
     */
    data: XOR<AiProviderUpdateInput, AiProviderUncheckedUpdateInput>
    /**
     * Choose, which AiProvider to update.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider updateMany
   */
  export type AiProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiProviders.
     */
    data: XOR<AiProviderUpdateManyMutationInput, AiProviderUncheckedUpdateManyInput>
    /**
     * Filter which AiProviders to update
     */
    where?: AiProviderWhereInput
    /**
     * Limit how many AiProviders to update.
     */
    limit?: number
  }

  /**
   * AiProvider updateManyAndReturn
   */
  export type AiProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * The data used to update AiProviders.
     */
    data: XOR<AiProviderUpdateManyMutationInput, AiProviderUncheckedUpdateManyInput>
    /**
     * Filter which AiProviders to update
     */
    where?: AiProviderWhereInput
    /**
     * Limit how many AiProviders to update.
     */
    limit?: number
  }

  /**
   * AiProvider upsert
   */
  export type AiProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the AiProvider to update in case it exists.
     */
    where: AiProviderWhereUniqueInput
    /**
     * In case the AiProvider found by the `where` argument doesn't exist, create a new AiProvider with this data.
     */
    create: XOR<AiProviderCreateInput, AiProviderUncheckedCreateInput>
    /**
     * In case the AiProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiProviderUpdateInput, AiProviderUncheckedUpdateInput>
  }

  /**
   * AiProvider delete
   */
  export type AiProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
    /**
     * Filter which AiProvider to delete.
     */
    where: AiProviderWhereUniqueInput
  }

  /**
   * AiProvider deleteMany
   */
  export type AiProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiProviders to delete
     */
    where?: AiProviderWhereInput
    /**
     * Limit how many AiProviders to delete.
     */
    limit?: number
  }

  /**
   * AiProvider.reviewer
   */
  export type AiProvider$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    where?: ReviewerWhereInput
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    cursor?: ReviewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewerScalarFieldEnum | ReviewerScalarFieldEnum[]
  }

  /**
   * AiProvider without action
   */
  export type AiProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiProvider
     */
    select?: AiProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AiProvider
     */
    omit?: AiProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AiProviderInclude<ExtArgs> | null
  }


  /**
   * Model MergeRequest
   */

  export type AggregateMergeRequest = {
    _count: MergeRequestCountAggregateOutputType | null
    _min: MergeRequestMinAggregateOutputType | null
    _max: MergeRequestMaxAggregateOutputType | null
  }

  export type MergeRequestMinAggregateOutputType = {
    id: string | null
    originId: string | null
    name: string | null
    url: string | null
    sourceBranch: string | null
    targetBranch: string | null
    authorName: string | null
    authorAvatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type MergeRequestMaxAggregateOutputType = {
    id: string | null
    originId: string | null
    name: string | null
    url: string | null
    sourceBranch: string | null
    targetBranch: string | null
    authorName: string | null
    authorAvatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type MergeRequestCountAggregateOutputType = {
    id: number
    originId: number
    name: number
    url: number
    sourceBranch: number
    targetBranch: number
    authorName: number
    authorAvatarUrl: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type MergeRequestMinAggregateInputType = {
    id?: true
    originId?: true
    name?: true
    url?: true
    sourceBranch?: true
    targetBranch?: true
    authorName?: true
    authorAvatarUrl?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type MergeRequestMaxAggregateInputType = {
    id?: true
    originId?: true
    name?: true
    url?: true
    sourceBranch?: true
    targetBranch?: true
    authorName?: true
    authorAvatarUrl?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type MergeRequestCountAggregateInputType = {
    id?: true
    originId?: true
    name?: true
    url?: true
    sourceBranch?: true
    targetBranch?: true
    authorName?: true
    authorAvatarUrl?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type MergeRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MergeRequest to aggregate.
     */
    where?: MergeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MergeRequests to fetch.
     */
    orderBy?: MergeRequestOrderByWithRelationInput | MergeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MergeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MergeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MergeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MergeRequests
    **/
    _count?: true | MergeRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MergeRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MergeRequestMaxAggregateInputType
  }

  export type GetMergeRequestAggregateType<T extends MergeRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMergeRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMergeRequest[P]>
      : GetScalarType<T[P], AggregateMergeRequest[P]>
  }




  export type MergeRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MergeRequestWhereInput
    orderBy?: MergeRequestOrderByWithAggregationInput | MergeRequestOrderByWithAggregationInput[]
    by: MergeRequestScalarFieldEnum[] | MergeRequestScalarFieldEnum
    having?: MergeRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MergeRequestCountAggregateInputType | true
    _min?: MergeRequestMinAggregateInputType
    _max?: MergeRequestMaxAggregateInputType
  }

  export type MergeRequestGroupByOutputType = {
    id: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: MergeRequestCountAggregateOutputType | null
    _min: MergeRequestMinAggregateOutputType | null
    _max: MergeRequestMaxAggregateOutputType | null
  }

  type GetMergeRequestGroupByPayload<T extends MergeRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MergeRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MergeRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MergeRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MergeRequestGroupByOutputType[P]>
        }
      >
    >


  export type MergeRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originId?: boolean
    name?: boolean
    url?: boolean
    sourceBranch?: boolean
    targetBranch?: boolean
    authorName?: boolean
    authorAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    reviews?: boolean | MergeRequest$reviewsArgs<ExtArgs>
    project?: boolean | GitProjectDefaultArgs<ExtArgs>
    _count?: boolean | MergeRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mergeRequest"]>

  export type MergeRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originId?: boolean
    name?: boolean
    url?: boolean
    sourceBranch?: boolean
    targetBranch?: boolean
    authorName?: boolean
    authorAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | GitProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mergeRequest"]>

  export type MergeRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originId?: boolean
    name?: boolean
    url?: boolean
    sourceBranch?: boolean
    targetBranch?: boolean
    authorName?: boolean
    authorAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | GitProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mergeRequest"]>

  export type MergeRequestSelectScalar = {
    id?: boolean
    originId?: boolean
    name?: boolean
    url?: boolean
    sourceBranch?: boolean
    targetBranch?: boolean
    authorName?: boolean
    authorAvatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type MergeRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originId" | "name" | "url" | "sourceBranch" | "targetBranch" | "authorName" | "authorAvatarUrl" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["mergeRequest"]>
  export type MergeRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | MergeRequest$reviewsArgs<ExtArgs>
    project?: boolean | GitProjectDefaultArgs<ExtArgs>
    _count?: boolean | MergeRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MergeRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | GitProjectDefaultArgs<ExtArgs>
  }
  export type MergeRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | GitProjectDefaultArgs<ExtArgs>
  }

  export type $MergeRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MergeRequest"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      project: Prisma.$GitProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originId: string
      name: string
      url: string
      sourceBranch: string
      targetBranch: string
      authorName: string
      authorAvatarUrl: string | null
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["mergeRequest"]>
    composites: {}
  }

  type MergeRequestGetPayload<S extends boolean | null | undefined | MergeRequestDefaultArgs> = $Result.GetResult<Prisma.$MergeRequestPayload, S>

  type MergeRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MergeRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MergeRequestCountAggregateInputType | true
    }

  export interface MergeRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MergeRequest'], meta: { name: 'MergeRequest' } }
    /**
     * Find zero or one MergeRequest that matches the filter.
     * @param {MergeRequestFindUniqueArgs} args - Arguments to find a MergeRequest
     * @example
     * // Get one MergeRequest
     * const mergeRequest = await prisma.mergeRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MergeRequestFindUniqueArgs>(args: SelectSubset<T, MergeRequestFindUniqueArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MergeRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MergeRequestFindUniqueOrThrowArgs} args - Arguments to find a MergeRequest
     * @example
     * // Get one MergeRequest
     * const mergeRequest = await prisma.mergeRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MergeRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MergeRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MergeRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergeRequestFindFirstArgs} args - Arguments to find a MergeRequest
     * @example
     * // Get one MergeRequest
     * const mergeRequest = await prisma.mergeRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MergeRequestFindFirstArgs>(args?: SelectSubset<T, MergeRequestFindFirstArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MergeRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergeRequestFindFirstOrThrowArgs} args - Arguments to find a MergeRequest
     * @example
     * // Get one MergeRequest
     * const mergeRequest = await prisma.mergeRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MergeRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MergeRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MergeRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergeRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MergeRequests
     * const mergeRequests = await prisma.mergeRequest.findMany()
     * 
     * // Get first 10 MergeRequests
     * const mergeRequests = await prisma.mergeRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mergeRequestWithIdOnly = await prisma.mergeRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MergeRequestFindManyArgs>(args?: SelectSubset<T, MergeRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MergeRequest.
     * @param {MergeRequestCreateArgs} args - Arguments to create a MergeRequest.
     * @example
     * // Create one MergeRequest
     * const MergeRequest = await prisma.mergeRequest.create({
     *   data: {
     *     // ... data to create a MergeRequest
     *   }
     * })
     * 
     */
    create<T extends MergeRequestCreateArgs>(args: SelectSubset<T, MergeRequestCreateArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MergeRequests.
     * @param {MergeRequestCreateManyArgs} args - Arguments to create many MergeRequests.
     * @example
     * // Create many MergeRequests
     * const mergeRequest = await prisma.mergeRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MergeRequestCreateManyArgs>(args?: SelectSubset<T, MergeRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MergeRequests and returns the data saved in the database.
     * @param {MergeRequestCreateManyAndReturnArgs} args - Arguments to create many MergeRequests.
     * @example
     * // Create many MergeRequests
     * const mergeRequest = await prisma.mergeRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MergeRequests and only return the `id`
     * const mergeRequestWithIdOnly = await prisma.mergeRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MergeRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MergeRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MergeRequest.
     * @param {MergeRequestDeleteArgs} args - Arguments to delete one MergeRequest.
     * @example
     * // Delete one MergeRequest
     * const MergeRequest = await prisma.mergeRequest.delete({
     *   where: {
     *     // ... filter to delete one MergeRequest
     *   }
     * })
     * 
     */
    delete<T extends MergeRequestDeleteArgs>(args: SelectSubset<T, MergeRequestDeleteArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MergeRequest.
     * @param {MergeRequestUpdateArgs} args - Arguments to update one MergeRequest.
     * @example
     * // Update one MergeRequest
     * const mergeRequest = await prisma.mergeRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MergeRequestUpdateArgs>(args: SelectSubset<T, MergeRequestUpdateArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MergeRequests.
     * @param {MergeRequestDeleteManyArgs} args - Arguments to filter MergeRequests to delete.
     * @example
     * // Delete a few MergeRequests
     * const { count } = await prisma.mergeRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MergeRequestDeleteManyArgs>(args?: SelectSubset<T, MergeRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MergeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergeRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MergeRequests
     * const mergeRequest = await prisma.mergeRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MergeRequestUpdateManyArgs>(args: SelectSubset<T, MergeRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MergeRequests and returns the data updated in the database.
     * @param {MergeRequestUpdateManyAndReturnArgs} args - Arguments to update many MergeRequests.
     * @example
     * // Update many MergeRequests
     * const mergeRequest = await prisma.mergeRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MergeRequests and only return the `id`
     * const mergeRequestWithIdOnly = await prisma.mergeRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MergeRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, MergeRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MergeRequest.
     * @param {MergeRequestUpsertArgs} args - Arguments to update or create a MergeRequest.
     * @example
     * // Update or create a MergeRequest
     * const mergeRequest = await prisma.mergeRequest.upsert({
     *   create: {
     *     // ... data to create a MergeRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MergeRequest we want to update
     *   }
     * })
     */
    upsert<T extends MergeRequestUpsertArgs>(args: SelectSubset<T, MergeRequestUpsertArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MergeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergeRequestCountArgs} args - Arguments to filter MergeRequests to count.
     * @example
     * // Count the number of MergeRequests
     * const count = await prisma.mergeRequest.count({
     *   where: {
     *     // ... the filter for the MergeRequests we want to count
     *   }
     * })
    **/
    count<T extends MergeRequestCountArgs>(
      args?: Subset<T, MergeRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MergeRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MergeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergeRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MergeRequestAggregateArgs>(args: Subset<T, MergeRequestAggregateArgs>): Prisma.PrismaPromise<GetMergeRequestAggregateType<T>>

    /**
     * Group by MergeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MergeRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MergeRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MergeRequestGroupByArgs['orderBy'] }
        : { orderBy?: MergeRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MergeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMergeRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MergeRequest model
   */
  readonly fields: MergeRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MergeRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MergeRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends MergeRequest$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, MergeRequest$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends GitProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GitProjectDefaultArgs<ExtArgs>>): Prisma__GitProjectClient<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MergeRequest model
   */
  interface MergeRequestFieldRefs {
    readonly id: FieldRef<"MergeRequest", 'String'>
    readonly originId: FieldRef<"MergeRequest", 'String'>
    readonly name: FieldRef<"MergeRequest", 'String'>
    readonly url: FieldRef<"MergeRequest", 'String'>
    readonly sourceBranch: FieldRef<"MergeRequest", 'String'>
    readonly targetBranch: FieldRef<"MergeRequest", 'String'>
    readonly authorName: FieldRef<"MergeRequest", 'String'>
    readonly authorAvatarUrl: FieldRef<"MergeRequest", 'String'>
    readonly createdAt: FieldRef<"MergeRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"MergeRequest", 'DateTime'>
    readonly projectId: FieldRef<"MergeRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MergeRequest findUnique
   */
  export type MergeRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * Filter, which MergeRequest to fetch.
     */
    where: MergeRequestWhereUniqueInput
  }

  /**
   * MergeRequest findUniqueOrThrow
   */
  export type MergeRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * Filter, which MergeRequest to fetch.
     */
    where: MergeRequestWhereUniqueInput
  }

  /**
   * MergeRequest findFirst
   */
  export type MergeRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * Filter, which MergeRequest to fetch.
     */
    where?: MergeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MergeRequests to fetch.
     */
    orderBy?: MergeRequestOrderByWithRelationInput | MergeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MergeRequests.
     */
    cursor?: MergeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MergeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MergeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MergeRequests.
     */
    distinct?: MergeRequestScalarFieldEnum | MergeRequestScalarFieldEnum[]
  }

  /**
   * MergeRequest findFirstOrThrow
   */
  export type MergeRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * Filter, which MergeRequest to fetch.
     */
    where?: MergeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MergeRequests to fetch.
     */
    orderBy?: MergeRequestOrderByWithRelationInput | MergeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MergeRequests.
     */
    cursor?: MergeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MergeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MergeRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MergeRequests.
     */
    distinct?: MergeRequestScalarFieldEnum | MergeRequestScalarFieldEnum[]
  }

  /**
   * MergeRequest findMany
   */
  export type MergeRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * Filter, which MergeRequests to fetch.
     */
    where?: MergeRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MergeRequests to fetch.
     */
    orderBy?: MergeRequestOrderByWithRelationInput | MergeRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MergeRequests.
     */
    cursor?: MergeRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MergeRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MergeRequests.
     */
    skip?: number
    distinct?: MergeRequestScalarFieldEnum | MergeRequestScalarFieldEnum[]
  }

  /**
   * MergeRequest create
   */
  export type MergeRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MergeRequest.
     */
    data: XOR<MergeRequestCreateInput, MergeRequestUncheckedCreateInput>
  }

  /**
   * MergeRequest createMany
   */
  export type MergeRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MergeRequests.
     */
    data: MergeRequestCreateManyInput | MergeRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MergeRequest createManyAndReturn
   */
  export type MergeRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MergeRequests.
     */
    data: MergeRequestCreateManyInput | MergeRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MergeRequest update
   */
  export type MergeRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MergeRequest.
     */
    data: XOR<MergeRequestUpdateInput, MergeRequestUncheckedUpdateInput>
    /**
     * Choose, which MergeRequest to update.
     */
    where: MergeRequestWhereUniqueInput
  }

  /**
   * MergeRequest updateMany
   */
  export type MergeRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MergeRequests.
     */
    data: XOR<MergeRequestUpdateManyMutationInput, MergeRequestUncheckedUpdateManyInput>
    /**
     * Filter which MergeRequests to update
     */
    where?: MergeRequestWhereInput
    /**
     * Limit how many MergeRequests to update.
     */
    limit?: number
  }

  /**
   * MergeRequest updateManyAndReturn
   */
  export type MergeRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * The data used to update MergeRequests.
     */
    data: XOR<MergeRequestUpdateManyMutationInput, MergeRequestUncheckedUpdateManyInput>
    /**
     * Filter which MergeRequests to update
     */
    where?: MergeRequestWhereInput
    /**
     * Limit how many MergeRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MergeRequest upsert
   */
  export type MergeRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MergeRequest to update in case it exists.
     */
    where: MergeRequestWhereUniqueInput
    /**
     * In case the MergeRequest found by the `where` argument doesn't exist, create a new MergeRequest with this data.
     */
    create: XOR<MergeRequestCreateInput, MergeRequestUncheckedCreateInput>
    /**
     * In case the MergeRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MergeRequestUpdateInput, MergeRequestUncheckedUpdateInput>
  }

  /**
   * MergeRequest delete
   */
  export type MergeRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
    /**
     * Filter which MergeRequest to delete.
     */
    where: MergeRequestWhereUniqueInput
  }

  /**
   * MergeRequest deleteMany
   */
  export type MergeRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MergeRequests to delete
     */
    where?: MergeRequestWhereInput
    /**
     * Limit how many MergeRequests to delete.
     */
    limit?: number
  }

  /**
   * MergeRequest.reviews
   */
  export type MergeRequest$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * MergeRequest without action
   */
  export type MergeRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MergeRequest
     */
    select?: MergeRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MergeRequest
     */
    omit?: MergeRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MergeRequestInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    addedLines: number | null
    removedLines: number | null
  }

  export type ReviewSumAggregateOutputType = {
    addedLines: number | null
    removedLines: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    at: Date | null
    addedLines: number | null
    removedLines: number | null
    status: $Enums.ReviewStatus | null
    errorMessage: string | null
    mergeRequestId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    at: Date | null
    addedLines: number | null
    removedLines: number | null
    status: $Enums.ReviewStatus | null
    errorMessage: string | null
    mergeRequestId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    at: number
    diffs: number
    addedLines: number
    removedLines: number
    status: number
    errorMessage: number
    mergeRequestId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    addedLines?: true
    removedLines?: true
  }

  export type ReviewSumAggregateInputType = {
    addedLines?: true
    removedLines?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    at?: true
    addedLines?: true
    removedLines?: true
    status?: true
    errorMessage?: true
    mergeRequestId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    at?: true
    addedLines?: true
    removedLines?: true
    status?: true
    errorMessage?: true
    mergeRequestId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    at?: true
    diffs?: true
    addedLines?: true
    removedLines?: true
    status?: true
    errorMessage?: true
    mergeRequestId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    at: Date
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status: $Enums.ReviewStatus
    errorMessage: string | null
    mergeRequestId: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    at?: boolean
    diffs?: boolean
    addedLines?: boolean
    removedLines?: boolean
    status?: boolean
    errorMessage?: boolean
    mergeRequestId?: boolean
    mergeRequest?: boolean | MergeRequestDefaultArgs<ExtArgs>
    comments?: boolean | Review$commentsArgs<ExtArgs>
    reviewNotes?: boolean | Review$reviewNotesArgs<ExtArgs>
    reviewers?: boolean | Review$reviewersArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    at?: boolean
    diffs?: boolean
    addedLines?: boolean
    removedLines?: boolean
    status?: boolean
    errorMessage?: boolean
    mergeRequestId?: boolean
    mergeRequest?: boolean | MergeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    at?: boolean
    diffs?: boolean
    addedLines?: boolean
    removedLines?: boolean
    status?: boolean
    errorMessage?: boolean
    mergeRequestId?: boolean
    mergeRequest?: boolean | MergeRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    at?: boolean
    diffs?: boolean
    addedLines?: boolean
    removedLines?: boolean
    status?: boolean
    errorMessage?: boolean
    mergeRequestId?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "at" | "diffs" | "addedLines" | "removedLines" | "status" | "errorMessage" | "mergeRequestId", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mergeRequest?: boolean | MergeRequestDefaultArgs<ExtArgs>
    comments?: boolean | Review$commentsArgs<ExtArgs>
    reviewNotes?: boolean | Review$reviewNotesArgs<ExtArgs>
    reviewers?: boolean | Review$reviewersArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mergeRequest?: boolean | MergeRequestDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mergeRequest?: boolean | MergeRequestDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      mergeRequest: Prisma.$MergeRequestPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reviewNotes: Prisma.$ReviewNotePayload<ExtArgs>[]
      reviewers: Prisma.$ReviewerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      at: Date
      /**
       * [GitMergeRequestDiffs]
       */
      diffs: PrismaJson.GitMergeRequestDiffs
      addedLines: number
      removedLines: number
      status: $Enums.ReviewStatus
      errorMessage: string | null
      mergeRequestId: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mergeRequest<T extends MergeRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MergeRequestDefaultArgs<ExtArgs>>): Prisma__MergeRequestClient<$Result.GetResult<Prisma.$MergeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Review$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Review$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewNotes<T extends Review$reviewNotesArgs<ExtArgs> = {}>(args?: Subset<T, Review$reviewNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewers<T extends Review$reviewersArgs<ExtArgs> = {}>(args?: Subset<T, Review$reviewersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly at: FieldRef<"Review", 'DateTime'>
    readonly diffs: FieldRef<"Review", 'Json'>
    readonly addedLines: FieldRef<"Review", 'Int'>
    readonly removedLines: FieldRef<"Review", 'Int'>
    readonly status: FieldRef<"Review", 'ReviewStatus'>
    readonly errorMessage: FieldRef<"Review", 'String'>
    readonly mergeRequestId: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.comments
   */
  export type Review$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Review.reviewNotes
   */
  export type Review$reviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    where?: ReviewNoteWhereInput
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    cursor?: ReviewNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * Review.reviewers
   */
  export type Review$reviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    where?: ReviewerWhereInput
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    cursor?: ReviewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewerScalarFieldEnum | ReviewerScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    line: number | null
    thumbsUp: number | null
    thumbsDown: number | null
  }

  export type CommentSumAggregateOutputType = {
    line: number | null
    thumbsUp: number | null
    thumbsDown: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    location: $Enums.CommentLocation | null
    fileId: string | null
    line: number | null
    text: string | null
    createdAt: Date | null
    thumbsUp: number | null
    thumbsDown: number | null
    reviewId: string | null
    reviewerId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    location: $Enums.CommentLocation | null
    fileId: string | null
    line: number | null
    text: string | null
    createdAt: Date | null
    thumbsUp: number | null
    thumbsDown: number | null
    reviewId: string | null
    reviewerId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    location: number
    fileId: number
    line: number
    text: number
    createdAt: number
    thumbsUp: number
    thumbsDown: number
    reviewId: number
    reviewerId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    line?: true
    thumbsUp?: true
    thumbsDown?: true
  }

  export type CommentSumAggregateInputType = {
    line?: true
    thumbsUp?: true
    thumbsDown?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    location?: true
    fileId?: true
    line?: true
    text?: true
    createdAt?: true
    thumbsUp?: true
    thumbsDown?: true
    reviewId?: true
    reviewerId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    location?: true
    fileId?: true
    line?: true
    text?: true
    createdAt?: true
    thumbsUp?: true
    thumbsDown?: true
    reviewId?: true
    reviewerId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    location?: true
    fileId?: true
    line?: true
    text?: true
    createdAt?: true
    thumbsUp?: true
    thumbsDown?: true
    reviewId?: true
    reviewerId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt: Date
    thumbsUp: number
    thumbsDown: number
    reviewId: string
    reviewerId: string
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    fileId?: boolean
    line?: boolean
    text?: boolean
    createdAt?: boolean
    thumbsUp?: boolean
    thumbsDown?: boolean
    reviewId?: boolean
    reviewerId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    fileId?: boolean
    line?: boolean
    text?: boolean
    createdAt?: boolean
    thumbsUp?: boolean
    thumbsDown?: boolean
    reviewId?: boolean
    reviewerId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    fileId?: boolean
    line?: boolean
    text?: boolean
    createdAt?: boolean
    thumbsUp?: boolean
    thumbsDown?: boolean
    reviewId?: boolean
    reviewerId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    location?: boolean
    fileId?: boolean
    line?: boolean
    text?: boolean
    createdAt?: boolean
    thumbsUp?: boolean
    thumbsDown?: boolean
    reviewId?: boolean
    reviewerId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "fileId" | "line" | "text" | "createdAt" | "thumbsUp" | "thumbsDown" | "reviewId" | "reviewerId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      reviewer: Prisma.$ReviewerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location: $Enums.CommentLocation
      fileId: string
      line: number
      text: string
      createdAt: Date
      thumbsUp: number
      thumbsDown: number
      reviewId: string
      reviewerId: string
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends ReviewerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewerDefaultArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly location: FieldRef<"Comment", 'CommentLocation'>
    readonly fileId: FieldRef<"Comment", 'String'>
    readonly line: FieldRef<"Comment", 'Int'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly thumbsUp: FieldRef<"Comment", 'Int'>
    readonly thumbsDown: FieldRef<"Comment", 'Int'>
    readonly reviewId: FieldRef<"Comment", 'String'>
    readonly reviewerId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model NoteDefinition
   */

  export type AggregateNoteDefinition = {
    _count: NoteDefinitionCountAggregateOutputType | null
    _min: NoteDefinitionMinAggregateOutputType | null
    _max: NoteDefinitionMaxAggregateOutputType | null
  }

  export type NoteDefinitionMinAggregateOutputType = {
    id: string | null
    title: string | null
    tag: string | null
    systemPrompt: string | null
    publishToOrigin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteDefinitionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    tag: string | null
    systemPrompt: string | null
    publishToOrigin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteDefinitionCountAggregateOutputType = {
    id: number
    title: number
    tag: number
    systemPrompt: number
    publishToOrigin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteDefinitionMinAggregateInputType = {
    id?: true
    title?: true
    tag?: true
    systemPrompt?: true
    publishToOrigin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteDefinitionMaxAggregateInputType = {
    id?: true
    title?: true
    tag?: true
    systemPrompt?: true
    publishToOrigin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteDefinitionCountAggregateInputType = {
    id?: true
    title?: true
    tag?: true
    systemPrompt?: true
    publishToOrigin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteDefinition to aggregate.
     */
    where?: NoteDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteDefinitions to fetch.
     */
    orderBy?: NoteDefinitionOrderByWithRelationInput | NoteDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteDefinitions
    **/
    _count?: true | NoteDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteDefinitionMaxAggregateInputType
  }

  export type GetNoteDefinitionAggregateType<T extends NoteDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteDefinition[P]>
      : GetScalarType<T[P], AggregateNoteDefinition[P]>
  }




  export type NoteDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteDefinitionWhereInput
    orderBy?: NoteDefinitionOrderByWithAggregationInput | NoteDefinitionOrderByWithAggregationInput[]
    by: NoteDefinitionScalarFieldEnum[] | NoteDefinitionScalarFieldEnum
    having?: NoteDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteDefinitionCountAggregateInputType | true
    _min?: NoteDefinitionMinAggregateInputType
    _max?: NoteDefinitionMaxAggregateInputType
  }

  export type NoteDefinitionGroupByOutputType = {
    id: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin: boolean
    createdAt: Date
    updatedAt: Date
    _count: NoteDefinitionCountAggregateOutputType | null
    _min: NoteDefinitionMinAggregateOutputType | null
    _max: NoteDefinitionMaxAggregateOutputType | null
  }

  type GetNoteDefinitionGroupByPayload<T extends NoteDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], NoteDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type NoteDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tag?: boolean
    systemPrompt?: boolean
    publishToOrigin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewers?: boolean | NoteDefinition$reviewersArgs<ExtArgs>
    reviewNotes?: boolean | NoteDefinition$reviewNotesArgs<ExtArgs>
    _count?: boolean | NoteDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteDefinition"]>

  export type NoteDefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tag?: boolean
    systemPrompt?: boolean
    publishToOrigin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["noteDefinition"]>

  export type NoteDefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    tag?: boolean
    systemPrompt?: boolean
    publishToOrigin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["noteDefinition"]>

  export type NoteDefinitionSelectScalar = {
    id?: boolean
    title?: boolean
    tag?: boolean
    systemPrompt?: boolean
    publishToOrigin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "tag" | "systemPrompt" | "publishToOrigin" | "createdAt" | "updatedAt", ExtArgs["result"]["noteDefinition"]>
  export type NoteDefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewers?: boolean | NoteDefinition$reviewersArgs<ExtArgs>
    reviewNotes?: boolean | NoteDefinition$reviewNotesArgs<ExtArgs>
    _count?: boolean | NoteDefinitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoteDefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NoteDefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NoteDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteDefinition"
    objects: {
      reviewers: Prisma.$ReviewerPayload<ExtArgs>[]
      reviewNotes: Prisma.$ReviewNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      tag: string
      systemPrompt: string
      publishToOrigin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["noteDefinition"]>
    composites: {}
  }

  type NoteDefinitionGetPayload<S extends boolean | null | undefined | NoteDefinitionDefaultArgs> = $Result.GetResult<Prisma.$NoteDefinitionPayload, S>

  type NoteDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteDefinitionCountAggregateInputType | true
    }

  export interface NoteDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteDefinition'], meta: { name: 'NoteDefinition' } }
    /**
     * Find zero or one NoteDefinition that matches the filter.
     * @param {NoteDefinitionFindUniqueArgs} args - Arguments to find a NoteDefinition
     * @example
     * // Get one NoteDefinition
     * const noteDefinition = await prisma.noteDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteDefinitionFindUniqueArgs>(args: SelectSubset<T, NoteDefinitionFindUniqueArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteDefinitionFindUniqueOrThrowArgs} args - Arguments to find a NoteDefinition
     * @example
     * // Get one NoteDefinition
     * const noteDefinition = await prisma.noteDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteDefinitionFindFirstArgs} args - Arguments to find a NoteDefinition
     * @example
     * // Get one NoteDefinition
     * const noteDefinition = await prisma.noteDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteDefinitionFindFirstArgs>(args?: SelectSubset<T, NoteDefinitionFindFirstArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteDefinitionFindFirstOrThrowArgs} args - Arguments to find a NoteDefinition
     * @example
     * // Get one NoteDefinition
     * const noteDefinition = await prisma.noteDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteDefinitions
     * const noteDefinitions = await prisma.noteDefinition.findMany()
     * 
     * // Get first 10 NoteDefinitions
     * const noteDefinitions = await prisma.noteDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteDefinitionWithIdOnly = await prisma.noteDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteDefinitionFindManyArgs>(args?: SelectSubset<T, NoteDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteDefinition.
     * @param {NoteDefinitionCreateArgs} args - Arguments to create a NoteDefinition.
     * @example
     * // Create one NoteDefinition
     * const NoteDefinition = await prisma.noteDefinition.create({
     *   data: {
     *     // ... data to create a NoteDefinition
     *   }
     * })
     * 
     */
    create<T extends NoteDefinitionCreateArgs>(args: SelectSubset<T, NoteDefinitionCreateArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteDefinitions.
     * @param {NoteDefinitionCreateManyArgs} args - Arguments to create many NoteDefinitions.
     * @example
     * // Create many NoteDefinitions
     * const noteDefinition = await prisma.noteDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteDefinitionCreateManyArgs>(args?: SelectSubset<T, NoteDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteDefinitions and returns the data saved in the database.
     * @param {NoteDefinitionCreateManyAndReturnArgs} args - Arguments to create many NoteDefinitions.
     * @example
     * // Create many NoteDefinitions
     * const noteDefinition = await prisma.noteDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteDefinitions and only return the `id`
     * const noteDefinitionWithIdOnly = await prisma.noteDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteDefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteDefinition.
     * @param {NoteDefinitionDeleteArgs} args - Arguments to delete one NoteDefinition.
     * @example
     * // Delete one NoteDefinition
     * const NoteDefinition = await prisma.noteDefinition.delete({
     *   where: {
     *     // ... filter to delete one NoteDefinition
     *   }
     * })
     * 
     */
    delete<T extends NoteDefinitionDeleteArgs>(args: SelectSubset<T, NoteDefinitionDeleteArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteDefinition.
     * @param {NoteDefinitionUpdateArgs} args - Arguments to update one NoteDefinition.
     * @example
     * // Update one NoteDefinition
     * const noteDefinition = await prisma.noteDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteDefinitionUpdateArgs>(args: SelectSubset<T, NoteDefinitionUpdateArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteDefinitions.
     * @param {NoteDefinitionDeleteManyArgs} args - Arguments to filter NoteDefinitions to delete.
     * @example
     * // Delete a few NoteDefinitions
     * const { count } = await prisma.noteDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDefinitionDeleteManyArgs>(args?: SelectSubset<T, NoteDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteDefinitions
     * const noteDefinition = await prisma.noteDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteDefinitionUpdateManyArgs>(args: SelectSubset<T, NoteDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteDefinitions and returns the data updated in the database.
     * @param {NoteDefinitionUpdateManyAndReturnArgs} args - Arguments to update many NoteDefinitions.
     * @example
     * // Update many NoteDefinitions
     * const noteDefinition = await prisma.noteDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteDefinitions and only return the `id`
     * const noteDefinitionWithIdOnly = await prisma.noteDefinition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteDefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteDefinition.
     * @param {NoteDefinitionUpsertArgs} args - Arguments to update or create a NoteDefinition.
     * @example
     * // Update or create a NoteDefinition
     * const noteDefinition = await prisma.noteDefinition.upsert({
     *   create: {
     *     // ... data to create a NoteDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteDefinition we want to update
     *   }
     * })
     */
    upsert<T extends NoteDefinitionUpsertArgs>(args: SelectSubset<T, NoteDefinitionUpsertArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteDefinitionCountArgs} args - Arguments to filter NoteDefinitions to count.
     * @example
     * // Count the number of NoteDefinitions
     * const count = await prisma.noteDefinition.count({
     *   where: {
     *     // ... the filter for the NoteDefinitions we want to count
     *   }
     * })
    **/
    count<T extends NoteDefinitionCountArgs>(
      args?: Subset<T, NoteDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteDefinitionAggregateArgs>(args: Subset<T, NoteDefinitionAggregateArgs>): Prisma.PrismaPromise<GetNoteDefinitionAggregateType<T>>

    /**
     * Group by NoteDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteDefinitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: NoteDefinitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteDefinition model
   */
  readonly fields: NoteDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewers<T extends NoteDefinition$reviewersArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefinition$reviewersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewNotes<T extends NoteDefinition$reviewNotesArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefinition$reviewNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NoteDefinition model
   */
  interface NoteDefinitionFieldRefs {
    readonly id: FieldRef<"NoteDefinition", 'String'>
    readonly title: FieldRef<"NoteDefinition", 'String'>
    readonly tag: FieldRef<"NoteDefinition", 'String'>
    readonly systemPrompt: FieldRef<"NoteDefinition", 'String'>
    readonly publishToOrigin: FieldRef<"NoteDefinition", 'Boolean'>
    readonly createdAt: FieldRef<"NoteDefinition", 'DateTime'>
    readonly updatedAt: FieldRef<"NoteDefinition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NoteDefinition findUnique
   */
  export type NoteDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which NoteDefinition to fetch.
     */
    where: NoteDefinitionWhereUniqueInput
  }

  /**
   * NoteDefinition findUniqueOrThrow
   */
  export type NoteDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which NoteDefinition to fetch.
     */
    where: NoteDefinitionWhereUniqueInput
  }

  /**
   * NoteDefinition findFirst
   */
  export type NoteDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which NoteDefinition to fetch.
     */
    where?: NoteDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteDefinitions to fetch.
     */
    orderBy?: NoteDefinitionOrderByWithRelationInput | NoteDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteDefinitions.
     */
    cursor?: NoteDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteDefinitions.
     */
    distinct?: NoteDefinitionScalarFieldEnum | NoteDefinitionScalarFieldEnum[]
  }

  /**
   * NoteDefinition findFirstOrThrow
   */
  export type NoteDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which NoteDefinition to fetch.
     */
    where?: NoteDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteDefinitions to fetch.
     */
    orderBy?: NoteDefinitionOrderByWithRelationInput | NoteDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteDefinitions.
     */
    cursor?: NoteDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteDefinitions.
     */
    distinct?: NoteDefinitionScalarFieldEnum | NoteDefinitionScalarFieldEnum[]
  }

  /**
   * NoteDefinition findMany
   */
  export type NoteDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * Filter, which NoteDefinitions to fetch.
     */
    where?: NoteDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteDefinitions to fetch.
     */
    orderBy?: NoteDefinitionOrderByWithRelationInput | NoteDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteDefinitions.
     */
    cursor?: NoteDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteDefinitions.
     */
    skip?: number
    distinct?: NoteDefinitionScalarFieldEnum | NoteDefinitionScalarFieldEnum[]
  }

  /**
   * NoteDefinition create
   */
  export type NoteDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteDefinition.
     */
    data: XOR<NoteDefinitionCreateInput, NoteDefinitionUncheckedCreateInput>
  }

  /**
   * NoteDefinition createMany
   */
  export type NoteDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteDefinitions.
     */
    data: NoteDefinitionCreateManyInput | NoteDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteDefinition createManyAndReturn
   */
  export type NoteDefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many NoteDefinitions.
     */
    data: NoteDefinitionCreateManyInput | NoteDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteDefinition update
   */
  export type NoteDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteDefinition.
     */
    data: XOR<NoteDefinitionUpdateInput, NoteDefinitionUncheckedUpdateInput>
    /**
     * Choose, which NoteDefinition to update.
     */
    where: NoteDefinitionWhereUniqueInput
  }

  /**
   * NoteDefinition updateMany
   */
  export type NoteDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteDefinitions.
     */
    data: XOR<NoteDefinitionUpdateManyMutationInput, NoteDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which NoteDefinitions to update
     */
    where?: NoteDefinitionWhereInput
    /**
     * Limit how many NoteDefinitions to update.
     */
    limit?: number
  }

  /**
   * NoteDefinition updateManyAndReturn
   */
  export type NoteDefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * The data used to update NoteDefinitions.
     */
    data: XOR<NoteDefinitionUpdateManyMutationInput, NoteDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which NoteDefinitions to update
     */
    where?: NoteDefinitionWhereInput
    /**
     * Limit how many NoteDefinitions to update.
     */
    limit?: number
  }

  /**
   * NoteDefinition upsert
   */
  export type NoteDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteDefinition to update in case it exists.
     */
    where: NoteDefinitionWhereUniqueInput
    /**
     * In case the NoteDefinition found by the `where` argument doesn't exist, create a new NoteDefinition with this data.
     */
    create: XOR<NoteDefinitionCreateInput, NoteDefinitionUncheckedCreateInput>
    /**
     * In case the NoteDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteDefinitionUpdateInput, NoteDefinitionUncheckedUpdateInput>
  }

  /**
   * NoteDefinition delete
   */
  export type NoteDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    /**
     * Filter which NoteDefinition to delete.
     */
    where: NoteDefinitionWhereUniqueInput
  }

  /**
   * NoteDefinition deleteMany
   */
  export type NoteDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteDefinitions to delete
     */
    where?: NoteDefinitionWhereInput
    /**
     * Limit how many NoteDefinitions to delete.
     */
    limit?: number
  }

  /**
   * NoteDefinition.reviewers
   */
  export type NoteDefinition$reviewersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    where?: ReviewerWhereInput
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    cursor?: ReviewerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewerScalarFieldEnum | ReviewerScalarFieldEnum[]
  }

  /**
   * NoteDefinition.reviewNotes
   */
  export type NoteDefinition$reviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    where?: ReviewNoteWhereInput
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    cursor?: ReviewNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * NoteDefinition without action
   */
  export type NoteDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
  }


  /**
   * Model ReviewNote
   */

  export type AggregateReviewNote = {
    _count: ReviewNoteCountAggregateOutputType | null
    _min: ReviewNoteMinAggregateOutputType | null
    _max: ReviewNoteMaxAggregateOutputType | null
  }

  export type ReviewNoteMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    reviewId: string | null
    reviewerId: string | null
    noteDefinitionId: string | null
  }

  export type ReviewNoteMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    reviewId: string | null
    reviewerId: string | null
    noteDefinitionId: string | null
  }

  export type ReviewNoteCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    reviewId: number
    reviewerId: number
    noteDefinitionId: number
    _all: number
  }


  export type ReviewNoteMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    reviewId?: true
    reviewerId?: true
    noteDefinitionId?: true
  }

  export type ReviewNoteMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    reviewId?: true
    reviewerId?: true
    noteDefinitionId?: true
  }

  export type ReviewNoteCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    reviewId?: true
    reviewerId?: true
    noteDefinitionId?: true
    _all?: true
  }

  export type ReviewNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewNote to aggregate.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewNotes
    **/
    _count?: true | ReviewNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewNoteMaxAggregateInputType
  }

  export type GetReviewNoteAggregateType<T extends ReviewNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewNote[P]>
      : GetScalarType<T[P], AggregateReviewNote[P]>
  }




  export type ReviewNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewNoteWhereInput
    orderBy?: ReviewNoteOrderByWithAggregationInput | ReviewNoteOrderByWithAggregationInput[]
    by: ReviewNoteScalarFieldEnum[] | ReviewNoteScalarFieldEnum
    having?: ReviewNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewNoteCountAggregateInputType | true
    _min?: ReviewNoteMinAggregateInputType
    _max?: ReviewNoteMaxAggregateInputType
  }

  export type ReviewNoteGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    reviewId: string
    reviewerId: string
    noteDefinitionId: string
    _count: ReviewNoteCountAggregateOutputType | null
    _min: ReviewNoteMinAggregateOutputType | null
    _max: ReviewNoteMaxAggregateOutputType | null
  }

  type GetReviewNoteGroupByPayload<T extends ReviewNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewNoteGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewNoteGroupByOutputType[P]>
        }
      >
    >


  export type ReviewNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    reviewId?: boolean
    reviewerId?: boolean
    noteDefinitionId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
    noteDefinition?: boolean | NoteDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewNote"]>

  export type ReviewNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    reviewId?: boolean
    reviewerId?: boolean
    noteDefinitionId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
    noteDefinition?: boolean | NoteDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewNote"]>

  export type ReviewNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    reviewId?: boolean
    reviewerId?: boolean
    noteDefinitionId?: boolean
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
    noteDefinition?: boolean | NoteDefinitionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewNote"]>

  export type ReviewNoteSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    reviewId?: boolean
    reviewerId?: boolean
    noteDefinitionId?: boolean
  }

  export type ReviewNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "reviewId" | "reviewerId" | "noteDefinitionId", ExtArgs["result"]["reviewNote"]>
  export type ReviewNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
    noteDefinition?: boolean | NoteDefinitionDefaultArgs<ExtArgs>
  }
  export type ReviewNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
    noteDefinition?: boolean | NoteDefinitionDefaultArgs<ExtArgs>
  }
  export type ReviewNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | ReviewDefaultArgs<ExtArgs>
    reviewer?: boolean | ReviewerDefaultArgs<ExtArgs>
    noteDefinition?: boolean | NoteDefinitionDefaultArgs<ExtArgs>
  }

  export type $ReviewNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewNote"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>
      reviewer: Prisma.$ReviewerPayload<ExtArgs>
      noteDefinition: Prisma.$NoteDefinitionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      reviewId: string
      reviewerId: string
      noteDefinitionId: string
    }, ExtArgs["result"]["reviewNote"]>
    composites: {}
  }

  type ReviewNoteGetPayload<S extends boolean | null | undefined | ReviewNoteDefaultArgs> = $Result.GetResult<Prisma.$ReviewNotePayload, S>

  type ReviewNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewNoteCountAggregateInputType | true
    }

  export interface ReviewNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewNote'], meta: { name: 'ReviewNote' } }
    /**
     * Find zero or one ReviewNote that matches the filter.
     * @param {ReviewNoteFindUniqueArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewNoteFindUniqueArgs>(args: SelectSubset<T, ReviewNoteFindUniqueArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewNoteFindUniqueOrThrowArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindFirstArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewNoteFindFirstArgs>(args?: SelectSubset<T, ReviewNoteFindFirstArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindFirstOrThrowArgs} args - Arguments to find a ReviewNote
     * @example
     * // Get one ReviewNote
     * const reviewNote = await prisma.reviewNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewNotes
     * const reviewNotes = await prisma.reviewNote.findMany()
     * 
     * // Get first 10 ReviewNotes
     * const reviewNotes = await prisma.reviewNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewNoteWithIdOnly = await prisma.reviewNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewNoteFindManyArgs>(args?: SelectSubset<T, ReviewNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewNote.
     * @param {ReviewNoteCreateArgs} args - Arguments to create a ReviewNote.
     * @example
     * // Create one ReviewNote
     * const ReviewNote = await prisma.reviewNote.create({
     *   data: {
     *     // ... data to create a ReviewNote
     *   }
     * })
     * 
     */
    create<T extends ReviewNoteCreateArgs>(args: SelectSubset<T, ReviewNoteCreateArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewNotes.
     * @param {ReviewNoteCreateManyArgs} args - Arguments to create many ReviewNotes.
     * @example
     * // Create many ReviewNotes
     * const reviewNote = await prisma.reviewNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewNoteCreateManyArgs>(args?: SelectSubset<T, ReviewNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewNotes and returns the data saved in the database.
     * @param {ReviewNoteCreateManyAndReturnArgs} args - Arguments to create many ReviewNotes.
     * @example
     * // Create many ReviewNotes
     * const reviewNote = await prisma.reviewNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewNotes and only return the `id`
     * const reviewNoteWithIdOnly = await prisma.reviewNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewNote.
     * @param {ReviewNoteDeleteArgs} args - Arguments to delete one ReviewNote.
     * @example
     * // Delete one ReviewNote
     * const ReviewNote = await prisma.reviewNote.delete({
     *   where: {
     *     // ... filter to delete one ReviewNote
     *   }
     * })
     * 
     */
    delete<T extends ReviewNoteDeleteArgs>(args: SelectSubset<T, ReviewNoteDeleteArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewNote.
     * @param {ReviewNoteUpdateArgs} args - Arguments to update one ReviewNote.
     * @example
     * // Update one ReviewNote
     * const reviewNote = await prisma.reviewNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewNoteUpdateArgs>(args: SelectSubset<T, ReviewNoteUpdateArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewNotes.
     * @param {ReviewNoteDeleteManyArgs} args - Arguments to filter ReviewNotes to delete.
     * @example
     * // Delete a few ReviewNotes
     * const { count } = await prisma.reviewNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewNoteDeleteManyArgs>(args?: SelectSubset<T, ReviewNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewNotes
     * const reviewNote = await prisma.reviewNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewNoteUpdateManyArgs>(args: SelectSubset<T, ReviewNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewNotes and returns the data updated in the database.
     * @param {ReviewNoteUpdateManyAndReturnArgs} args - Arguments to update many ReviewNotes.
     * @example
     * // Update many ReviewNotes
     * const reviewNote = await prisma.reviewNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewNotes and only return the `id`
     * const reviewNoteWithIdOnly = await prisma.reviewNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewNote.
     * @param {ReviewNoteUpsertArgs} args - Arguments to update or create a ReviewNote.
     * @example
     * // Update or create a ReviewNote
     * const reviewNote = await prisma.reviewNote.upsert({
     *   create: {
     *     // ... data to create a ReviewNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewNote we want to update
     *   }
     * })
     */
    upsert<T extends ReviewNoteUpsertArgs>(args: SelectSubset<T, ReviewNoteUpsertArgs<ExtArgs>>): Prisma__ReviewNoteClient<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteCountArgs} args - Arguments to filter ReviewNotes to count.
     * @example
     * // Count the number of ReviewNotes
     * const count = await prisma.reviewNote.count({
     *   where: {
     *     // ... the filter for the ReviewNotes we want to count
     *   }
     * })
    **/
    count<T extends ReviewNoteCountArgs>(
      args?: Subset<T, ReviewNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewNoteAggregateArgs>(args: Subset<T, ReviewNoteAggregateArgs>): Prisma.PrismaPromise<GetReviewNoteAggregateType<T>>

    /**
     * Group by ReviewNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewNoteGroupByArgs['orderBy'] }
        : { orderBy?: ReviewNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewNote model
   */
  readonly fields: ReviewNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends ReviewerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewerDefaultArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    noteDefinition<T extends NoteDefinitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefinitionDefaultArgs<ExtArgs>>): Prisma__NoteDefinitionClient<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewNote model
   */
  interface ReviewNoteFieldRefs {
    readonly id: FieldRef<"ReviewNote", 'String'>
    readonly content: FieldRef<"ReviewNote", 'String'>
    readonly createdAt: FieldRef<"ReviewNote", 'DateTime'>
    readonly reviewId: FieldRef<"ReviewNote", 'String'>
    readonly reviewerId: FieldRef<"ReviewNote", 'String'>
    readonly noteDefinitionId: FieldRef<"ReviewNote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReviewNote findUnique
   */
  export type ReviewNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote findUniqueOrThrow
   */
  export type ReviewNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote findFirst
   */
  export type ReviewNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewNotes.
     */
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote findFirstOrThrow
   */
  export type ReviewNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNote to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewNotes.
     */
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote findMany
   */
  export type ReviewNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter, which ReviewNotes to fetch.
     */
    where?: ReviewNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewNotes to fetch.
     */
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewNotes.
     */
    cursor?: ReviewNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewNotes.
     */
    skip?: number
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * ReviewNote create
   */
  export type ReviewNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewNote.
     */
    data: XOR<ReviewNoteCreateInput, ReviewNoteUncheckedCreateInput>
  }

  /**
   * ReviewNote createMany
   */
  export type ReviewNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewNotes.
     */
    data: ReviewNoteCreateManyInput | ReviewNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewNote createManyAndReturn
   */
  export type ReviewNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewNotes.
     */
    data: ReviewNoteCreateManyInput | ReviewNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewNote update
   */
  export type ReviewNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewNote.
     */
    data: XOR<ReviewNoteUpdateInput, ReviewNoteUncheckedUpdateInput>
    /**
     * Choose, which ReviewNote to update.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote updateMany
   */
  export type ReviewNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewNotes.
     */
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyInput>
    /**
     * Filter which ReviewNotes to update
     */
    where?: ReviewNoteWhereInput
    /**
     * Limit how many ReviewNotes to update.
     */
    limit?: number
  }

  /**
   * ReviewNote updateManyAndReturn
   */
  export type ReviewNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * The data used to update ReviewNotes.
     */
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyInput>
    /**
     * Filter which ReviewNotes to update
     */
    where?: ReviewNoteWhereInput
    /**
     * Limit how many ReviewNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewNote upsert
   */
  export type ReviewNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewNote to update in case it exists.
     */
    where: ReviewNoteWhereUniqueInput
    /**
     * In case the ReviewNote found by the `where` argument doesn't exist, create a new ReviewNote with this data.
     */
    create: XOR<ReviewNoteCreateInput, ReviewNoteUncheckedCreateInput>
    /**
     * In case the ReviewNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewNoteUpdateInput, ReviewNoteUncheckedUpdateInput>
  }

  /**
   * ReviewNote delete
   */
  export type ReviewNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    /**
     * Filter which ReviewNote to delete.
     */
    where: ReviewNoteWhereUniqueInput
  }

  /**
   * ReviewNote deleteMany
   */
  export type ReviewNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewNotes to delete
     */
    where?: ReviewNoteWhereInput
    /**
     * Limit how many ReviewNotes to delete.
     */
    limit?: number
  }

  /**
   * ReviewNote without action
   */
  export type ReviewNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
  }


  /**
   * Model Reviewer
   */

  export type AggregateReviewer = {
    _count: ReviewerCountAggregateOutputType | null
    _min: ReviewerMinAggregateOutputType | null
    _max: ReviewerMaxAggregateOutputType | null
  }

  export type ReviewerMinAggregateOutputType = {
    id: string | null
    name: string | null
    aiProviderId: string | null
    systemPrompt: string | null
    systemPromptEnabled: boolean | null
    useProjectInstructions: boolean | null
  }

  export type ReviewerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    aiProviderId: string | null
    systemPrompt: string | null
    systemPromptEnabled: boolean | null
    useProjectInstructions: boolean | null
  }

  export type ReviewerCountAggregateOutputType = {
    id: number
    name: number
    aiProviderId: number
    systemPrompt: number
    systemPromptEnabled: number
    useProjectInstructions: number
    _all: number
  }


  export type ReviewerMinAggregateInputType = {
    id?: true
    name?: true
    aiProviderId?: true
    systemPrompt?: true
    systemPromptEnabled?: true
    useProjectInstructions?: true
  }

  export type ReviewerMaxAggregateInputType = {
    id?: true
    name?: true
    aiProviderId?: true
    systemPrompt?: true
    systemPromptEnabled?: true
    useProjectInstructions?: true
  }

  export type ReviewerCountAggregateInputType = {
    id?: true
    name?: true
    aiProviderId?: true
    systemPrompt?: true
    systemPromptEnabled?: true
    useProjectInstructions?: true
    _all?: true
  }

  export type ReviewerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviewer to aggregate.
     */
    where?: ReviewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviewers to fetch.
     */
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviewers
    **/
    _count?: true | ReviewerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewerMaxAggregateInputType
  }

  export type GetReviewerAggregateType<T extends ReviewerAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewer[P]>
      : GetScalarType<T[P], AggregateReviewer[P]>
  }




  export type ReviewerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewerWhereInput
    orderBy?: ReviewerOrderByWithAggregationInput | ReviewerOrderByWithAggregationInput[]
    by: ReviewerScalarFieldEnum[] | ReviewerScalarFieldEnum
    having?: ReviewerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewerCountAggregateInputType | true
    _min?: ReviewerMinAggregateInputType
    _max?: ReviewerMaxAggregateInputType
  }

  export type ReviewerGroupByOutputType = {
    id: string
    name: string
    aiProviderId: string
    systemPrompt: string | null
    systemPromptEnabled: boolean
    useProjectInstructions: boolean
    _count: ReviewerCountAggregateOutputType | null
    _min: ReviewerMinAggregateOutputType | null
    _max: ReviewerMaxAggregateOutputType | null
  }

  type GetReviewerGroupByPayload<T extends ReviewerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewerGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewerGroupByOutputType[P]>
        }
      >
    >


  export type ReviewerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    aiProviderId?: boolean
    systemPrompt?: boolean
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider?: boolean | AiProviderDefaultArgs<ExtArgs>
    projects?: boolean | Reviewer$projectsArgs<ExtArgs>
    reviews?: boolean | Reviewer$reviewsArgs<ExtArgs>
    comments?: boolean | Reviewer$commentsArgs<ExtArgs>
    reviewNotes?: boolean | Reviewer$reviewNotesArgs<ExtArgs>
    noteDefinitions?: boolean | Reviewer$noteDefinitionsArgs<ExtArgs>
    _count?: boolean | ReviewerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewer"]>

  export type ReviewerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    aiProviderId?: boolean
    systemPrompt?: boolean
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewer"]>

  export type ReviewerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    aiProviderId?: boolean
    systemPrompt?: boolean
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewer"]>

  export type ReviewerSelectScalar = {
    id?: boolean
    name?: boolean
    aiProviderId?: boolean
    systemPrompt?: boolean
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
  }

  export type ReviewerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "aiProviderId" | "systemPrompt" | "systemPromptEnabled" | "useProjectInstructions", ExtArgs["result"]["reviewer"]>
  export type ReviewerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiProvider?: boolean | AiProviderDefaultArgs<ExtArgs>
    projects?: boolean | Reviewer$projectsArgs<ExtArgs>
    reviews?: boolean | Reviewer$reviewsArgs<ExtArgs>
    comments?: boolean | Reviewer$commentsArgs<ExtArgs>
    reviewNotes?: boolean | Reviewer$reviewNotesArgs<ExtArgs>
    noteDefinitions?: boolean | Reviewer$noteDefinitionsArgs<ExtArgs>
    _count?: boolean | ReviewerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiProvider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }
  export type ReviewerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiProvider?: boolean | AiProviderDefaultArgs<ExtArgs>
  }

  export type $ReviewerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviewer"
    objects: {
      aiProvider: Prisma.$AiProviderPayload<ExtArgs>
      projects: Prisma.$GitProjectPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      reviewNotes: Prisma.$ReviewNotePayload<ExtArgs>[]
      noteDefinitions: Prisma.$NoteDefinitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      aiProviderId: string
      systemPrompt: string | null
      systemPromptEnabled: boolean
      useProjectInstructions: boolean
    }, ExtArgs["result"]["reviewer"]>
    composites: {}
  }

  type ReviewerGetPayload<S extends boolean | null | undefined | ReviewerDefaultArgs> = $Result.GetResult<Prisma.$ReviewerPayload, S>

  type ReviewerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewerCountAggregateInputType | true
    }

  export interface ReviewerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviewer'], meta: { name: 'Reviewer' } }
    /**
     * Find zero or one Reviewer that matches the filter.
     * @param {ReviewerFindUniqueArgs} args - Arguments to find a Reviewer
     * @example
     * // Get one Reviewer
     * const reviewer = await prisma.reviewer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewerFindUniqueArgs>(args: SelectSubset<T, ReviewerFindUniqueArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviewer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewerFindUniqueOrThrowArgs} args - Arguments to find a Reviewer
     * @example
     * // Get one Reviewer
     * const reviewer = await prisma.reviewer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewerFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviewer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewerFindFirstArgs} args - Arguments to find a Reviewer
     * @example
     * // Get one Reviewer
     * const reviewer = await prisma.reviewer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewerFindFirstArgs>(args?: SelectSubset<T, ReviewerFindFirstArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviewer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewerFindFirstOrThrowArgs} args - Arguments to find a Reviewer
     * @example
     * // Get one Reviewer
     * const reviewer = await prisma.reviewer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewerFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviewers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviewers
     * const reviewers = await prisma.reviewer.findMany()
     * 
     * // Get first 10 Reviewers
     * const reviewers = await prisma.reviewer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewerWithIdOnly = await prisma.reviewer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewerFindManyArgs>(args?: SelectSubset<T, ReviewerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviewer.
     * @param {ReviewerCreateArgs} args - Arguments to create a Reviewer.
     * @example
     * // Create one Reviewer
     * const Reviewer = await prisma.reviewer.create({
     *   data: {
     *     // ... data to create a Reviewer
     *   }
     * })
     * 
     */
    create<T extends ReviewerCreateArgs>(args: SelectSubset<T, ReviewerCreateArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviewers.
     * @param {ReviewerCreateManyArgs} args - Arguments to create many Reviewers.
     * @example
     * // Create many Reviewers
     * const reviewer = await prisma.reviewer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewerCreateManyArgs>(args?: SelectSubset<T, ReviewerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviewers and returns the data saved in the database.
     * @param {ReviewerCreateManyAndReturnArgs} args - Arguments to create many Reviewers.
     * @example
     * // Create many Reviewers
     * const reviewer = await prisma.reviewer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviewers and only return the `id`
     * const reviewerWithIdOnly = await prisma.reviewer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewerCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviewer.
     * @param {ReviewerDeleteArgs} args - Arguments to delete one Reviewer.
     * @example
     * // Delete one Reviewer
     * const Reviewer = await prisma.reviewer.delete({
     *   where: {
     *     // ... filter to delete one Reviewer
     *   }
     * })
     * 
     */
    delete<T extends ReviewerDeleteArgs>(args: SelectSubset<T, ReviewerDeleteArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviewer.
     * @param {ReviewerUpdateArgs} args - Arguments to update one Reviewer.
     * @example
     * // Update one Reviewer
     * const reviewer = await prisma.reviewer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewerUpdateArgs>(args: SelectSubset<T, ReviewerUpdateArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviewers.
     * @param {ReviewerDeleteManyArgs} args - Arguments to filter Reviewers to delete.
     * @example
     * // Delete a few Reviewers
     * const { count } = await prisma.reviewer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewerDeleteManyArgs>(args?: SelectSubset<T, ReviewerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviewers
     * const reviewer = await prisma.reviewer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewerUpdateManyArgs>(args: SelectSubset<T, ReviewerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviewers and returns the data updated in the database.
     * @param {ReviewerUpdateManyAndReturnArgs} args - Arguments to update many Reviewers.
     * @example
     * // Update many Reviewers
     * const reviewer = await prisma.reviewer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviewers and only return the `id`
     * const reviewerWithIdOnly = await prisma.reviewer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewerUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviewer.
     * @param {ReviewerUpsertArgs} args - Arguments to update or create a Reviewer.
     * @example
     * // Update or create a Reviewer
     * const reviewer = await prisma.reviewer.upsert({
     *   create: {
     *     // ... data to create a Reviewer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviewer we want to update
     *   }
     * })
     */
    upsert<T extends ReviewerUpsertArgs>(args: SelectSubset<T, ReviewerUpsertArgs<ExtArgs>>): Prisma__ReviewerClient<$Result.GetResult<Prisma.$ReviewerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviewers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewerCountArgs} args - Arguments to filter Reviewers to count.
     * @example
     * // Count the number of Reviewers
     * const count = await prisma.reviewer.count({
     *   where: {
     *     // ... the filter for the Reviewers we want to count
     *   }
     * })
    **/
    count<T extends ReviewerCountArgs>(
      args?: Subset<T, ReviewerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewerAggregateArgs>(args: Subset<T, ReviewerAggregateArgs>): Prisma.PrismaPromise<GetReviewerAggregateType<T>>

    /**
     * Group by Reviewer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewerGroupByArgs['orderBy'] }
        : { orderBy?: ReviewerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviewer model
   */
  readonly fields: ReviewerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviewer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiProvider<T extends AiProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AiProviderDefaultArgs<ExtArgs>>): Prisma__AiProviderClient<$Result.GetResult<Prisma.$AiProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends Reviewer$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Reviewer$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GitProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Reviewer$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Reviewer$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Reviewer$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Reviewer$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewNotes<T extends Reviewer$reviewNotesArgs<ExtArgs> = {}>(args?: Subset<T, Reviewer$reviewNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noteDefinitions<T extends Reviewer$noteDefinitionsArgs<ExtArgs> = {}>(args?: Subset<T, Reviewer$noteDefinitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviewer model
   */
  interface ReviewerFieldRefs {
    readonly id: FieldRef<"Reviewer", 'String'>
    readonly name: FieldRef<"Reviewer", 'String'>
    readonly aiProviderId: FieldRef<"Reviewer", 'String'>
    readonly systemPrompt: FieldRef<"Reviewer", 'String'>
    readonly systemPromptEnabled: FieldRef<"Reviewer", 'Boolean'>
    readonly useProjectInstructions: FieldRef<"Reviewer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Reviewer findUnique
   */
  export type ReviewerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * Filter, which Reviewer to fetch.
     */
    where: ReviewerWhereUniqueInput
  }

  /**
   * Reviewer findUniqueOrThrow
   */
  export type ReviewerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * Filter, which Reviewer to fetch.
     */
    where: ReviewerWhereUniqueInput
  }

  /**
   * Reviewer findFirst
   */
  export type ReviewerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * Filter, which Reviewer to fetch.
     */
    where?: ReviewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviewers to fetch.
     */
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviewers.
     */
    cursor?: ReviewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviewers.
     */
    distinct?: ReviewerScalarFieldEnum | ReviewerScalarFieldEnum[]
  }

  /**
   * Reviewer findFirstOrThrow
   */
  export type ReviewerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * Filter, which Reviewer to fetch.
     */
    where?: ReviewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviewers to fetch.
     */
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviewers.
     */
    cursor?: ReviewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviewers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviewers.
     */
    distinct?: ReviewerScalarFieldEnum | ReviewerScalarFieldEnum[]
  }

  /**
   * Reviewer findMany
   */
  export type ReviewerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * Filter, which Reviewers to fetch.
     */
    where?: ReviewerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviewers to fetch.
     */
    orderBy?: ReviewerOrderByWithRelationInput | ReviewerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviewers.
     */
    cursor?: ReviewerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviewers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviewers.
     */
    skip?: number
    distinct?: ReviewerScalarFieldEnum | ReviewerScalarFieldEnum[]
  }

  /**
   * Reviewer create
   */
  export type ReviewerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviewer.
     */
    data: XOR<ReviewerCreateInput, ReviewerUncheckedCreateInput>
  }

  /**
   * Reviewer createMany
   */
  export type ReviewerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviewers.
     */
    data: ReviewerCreateManyInput | ReviewerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviewer createManyAndReturn
   */
  export type ReviewerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * The data used to create many Reviewers.
     */
    data: ReviewerCreateManyInput | ReviewerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviewer update
   */
  export type ReviewerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviewer.
     */
    data: XOR<ReviewerUpdateInput, ReviewerUncheckedUpdateInput>
    /**
     * Choose, which Reviewer to update.
     */
    where: ReviewerWhereUniqueInput
  }

  /**
   * Reviewer updateMany
   */
  export type ReviewerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviewers.
     */
    data: XOR<ReviewerUpdateManyMutationInput, ReviewerUncheckedUpdateManyInput>
    /**
     * Filter which Reviewers to update
     */
    where?: ReviewerWhereInput
    /**
     * Limit how many Reviewers to update.
     */
    limit?: number
  }

  /**
   * Reviewer updateManyAndReturn
   */
  export type ReviewerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * The data used to update Reviewers.
     */
    data: XOR<ReviewerUpdateManyMutationInput, ReviewerUncheckedUpdateManyInput>
    /**
     * Filter which Reviewers to update
     */
    where?: ReviewerWhereInput
    /**
     * Limit how many Reviewers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviewer upsert
   */
  export type ReviewerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviewer to update in case it exists.
     */
    where: ReviewerWhereUniqueInput
    /**
     * In case the Reviewer found by the `where` argument doesn't exist, create a new Reviewer with this data.
     */
    create: XOR<ReviewerCreateInput, ReviewerUncheckedCreateInput>
    /**
     * In case the Reviewer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewerUpdateInput, ReviewerUncheckedUpdateInput>
  }

  /**
   * Reviewer delete
   */
  export type ReviewerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
    /**
     * Filter which Reviewer to delete.
     */
    where: ReviewerWhereUniqueInput
  }

  /**
   * Reviewer deleteMany
   */
  export type ReviewerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviewers to delete
     */
    where?: ReviewerWhereInput
    /**
     * Limit how many Reviewers to delete.
     */
    limit?: number
  }

  /**
   * Reviewer.projects
   */
  export type Reviewer$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GitProject
     */
    select?: GitProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GitProject
     */
    omit?: GitProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GitProjectInclude<ExtArgs> | null
    where?: GitProjectWhereInput
    orderBy?: GitProjectOrderByWithRelationInput | GitProjectOrderByWithRelationInput[]
    cursor?: GitProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GitProjectScalarFieldEnum | GitProjectScalarFieldEnum[]
  }

  /**
   * Reviewer.reviews
   */
  export type Reviewer$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Reviewer.comments
   */
  export type Reviewer$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Reviewer.reviewNotes
   */
  export type Reviewer$reviewNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewNote
     */
    select?: ReviewNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewNote
     */
    omit?: ReviewNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewNoteInclude<ExtArgs> | null
    where?: ReviewNoteWhereInput
    orderBy?: ReviewNoteOrderByWithRelationInput | ReviewNoteOrderByWithRelationInput[]
    cursor?: ReviewNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewNoteScalarFieldEnum | ReviewNoteScalarFieldEnum[]
  }

  /**
   * Reviewer.noteDefinitions
   */
  export type Reviewer$noteDefinitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteDefinition
     */
    select?: NoteDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteDefinition
     */
    omit?: NoteDefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteDefinitionInclude<ExtArgs> | null
    where?: NoteDefinitionWhereInput
    orderBy?: NoteDefinitionOrderByWithRelationInput | NoteDefinitionOrderByWithRelationInput[]
    cursor?: NoteDefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteDefinitionScalarFieldEnum | NoteDefinitionScalarFieldEnum[]
  }

  /**
   * Reviewer without action
   */
  export type ReviewerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviewer
     */
    select?: ReviewerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviewer
     */
    omit?: ReviewerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const GitProjectScalarFieldEnum: {
    id: 'id',
    originId: 'originId',
    url: 'url',
    name: 'name',
    fullName: 'fullName',
    providerType: 'providerType',
    createdAt: 'createdAt',
    ignoreDraft: 'ignoreDraft',
    ignoreList: 'ignoreList',
    ignorePattern: 'ignorePattern',
    instructionFile: 'instructionFile',
    customInstructionFile: 'customInstructionFile',
    connectorId: 'connectorId'
  };

  export type GitProjectScalarFieldEnum = (typeof GitProjectScalarFieldEnum)[keyof typeof GitProjectScalarFieldEnum]


  export const GitConnectorScalarFieldEnum: {
    id: 'id',
    type: 'type',
    config: 'config',
    createdAt: 'createdAt'
  };

  export type GitConnectorScalarFieldEnum = (typeof GitConnectorScalarFieldEnum)[keyof typeof GitConnectorScalarFieldEnum]


  export const AiProviderScalarFieldEnum: {
    id: 'id',
    type: 'type',
    baseUrl: 'baseUrl',
    apiKey: 'apiKey',
    model: 'model'
  };

  export type AiProviderScalarFieldEnum = (typeof AiProviderScalarFieldEnum)[keyof typeof AiProviderScalarFieldEnum]


  export const MergeRequestScalarFieldEnum: {
    id: 'id',
    originId: 'originId',
    name: 'name',
    url: 'url',
    sourceBranch: 'sourceBranch',
    targetBranch: 'targetBranch',
    authorName: 'authorName',
    authorAvatarUrl: 'authorAvatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type MergeRequestScalarFieldEnum = (typeof MergeRequestScalarFieldEnum)[keyof typeof MergeRequestScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    at: 'at',
    diffs: 'diffs',
    addedLines: 'addedLines',
    removedLines: 'removedLines',
    status: 'status',
    errorMessage: 'errorMessage',
    mergeRequestId: 'mergeRequestId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    location: 'location',
    fileId: 'fileId',
    line: 'line',
    text: 'text',
    createdAt: 'createdAt',
    thumbsUp: 'thumbsUp',
    thumbsDown: 'thumbsDown',
    reviewId: 'reviewId',
    reviewerId: 'reviewerId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const NoteDefinitionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    tag: 'tag',
    systemPrompt: 'systemPrompt',
    publishToOrigin: 'publishToOrigin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteDefinitionScalarFieldEnum = (typeof NoteDefinitionScalarFieldEnum)[keyof typeof NoteDefinitionScalarFieldEnum]


  export const ReviewNoteScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    reviewId: 'reviewId',
    reviewerId: 'reviewerId',
    noteDefinitionId: 'noteDefinitionId'
  };

  export type ReviewNoteScalarFieldEnum = (typeof ReviewNoteScalarFieldEnum)[keyof typeof ReviewNoteScalarFieldEnum]


  export const ReviewerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    aiProviderId: 'aiProviderId',
    systemPrompt: 'systemPrompt',
    systemPromptEnabled: 'systemPromptEnabled',
    useProjectInstructions: 'useProjectInstructions'
  };

  export type ReviewerScalarFieldEnum = (typeof ReviewerScalarFieldEnum)[keyof typeof ReviewerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'GitProviderType'
   */
  export type EnumGitProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GitProviderType'>
    


  /**
   * Reference to a field of type 'GitProviderType[]'
   */
  export type ListEnumGitProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GitProviderType[]'>
    


  /**
   * Reference to a field of type 'AiProviderType'
   */
  export type EnumAiProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AiProviderType'>
    


  /**
   * Reference to a field of type 'AiProviderType[]'
   */
  export type ListEnumAiProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AiProviderType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ReviewStatus'
   */
  export type EnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus'>
    


  /**
   * Reference to a field of type 'ReviewStatus[]'
   */
  export type ListEnumReviewStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewStatus[]'>
    


  /**
   * Reference to a field of type 'CommentLocation'
   */
  export type EnumCommentLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentLocation'>
    


  /**
   * Reference to a field of type 'CommentLocation[]'
   */
  export type ListEnumCommentLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentLocation[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type GitProjectWhereInput = {
    AND?: GitProjectWhereInput | GitProjectWhereInput[]
    OR?: GitProjectWhereInput[]
    NOT?: GitProjectWhereInput | GitProjectWhereInput[]
    id?: UuidFilter<"GitProject"> | string
    originId?: StringFilter<"GitProject"> | string
    url?: StringFilter<"GitProject"> | string
    name?: StringFilter<"GitProject"> | string
    fullName?: StringFilter<"GitProject"> | string
    providerType?: EnumGitProviderTypeFilter<"GitProject"> | $Enums.GitProviderType
    createdAt?: DateTimeFilter<"GitProject"> | Date | string
    ignoreDraft?: BoolFilter<"GitProject"> | boolean
    ignoreList?: StringNullableFilter<"GitProject"> | string | null
    ignorePattern?: StringNullableFilter<"GitProject"> | string | null
    instructionFile?: StringNullableFilter<"GitProject"> | string | null
    customInstructionFile?: BoolFilter<"GitProject"> | boolean
    connectorId?: UuidFilter<"GitProject"> | string
    reviewers?: ReviewerListRelationFilter
    mergeRequests?: MergeRequestListRelationFilter
    connector?: XOR<GitConnectorScalarRelationFilter, GitConnectorWhereInput>
  }

  export type GitProjectOrderByWithRelationInput = {
    id?: SortOrder
    originId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    providerType?: SortOrder
    createdAt?: SortOrder
    ignoreDraft?: SortOrder
    ignoreList?: SortOrderInput | SortOrder
    ignorePattern?: SortOrderInput | SortOrder
    instructionFile?: SortOrderInput | SortOrder
    customInstructionFile?: SortOrder
    connectorId?: SortOrder
    reviewers?: ReviewerOrderByRelationAggregateInput
    mergeRequests?: MergeRequestOrderByRelationAggregateInput
    connector?: GitConnectorOrderByWithRelationInput
  }

  export type GitProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    originId_connectorId?: GitProjectOriginIdConnectorIdCompoundUniqueInput
    AND?: GitProjectWhereInput | GitProjectWhereInput[]
    OR?: GitProjectWhereInput[]
    NOT?: GitProjectWhereInput | GitProjectWhereInput[]
    originId?: StringFilter<"GitProject"> | string
    url?: StringFilter<"GitProject"> | string
    name?: StringFilter<"GitProject"> | string
    fullName?: StringFilter<"GitProject"> | string
    providerType?: EnumGitProviderTypeFilter<"GitProject"> | $Enums.GitProviderType
    createdAt?: DateTimeFilter<"GitProject"> | Date | string
    ignoreDraft?: BoolFilter<"GitProject"> | boolean
    ignoreList?: StringNullableFilter<"GitProject"> | string | null
    ignorePattern?: StringNullableFilter<"GitProject"> | string | null
    instructionFile?: StringNullableFilter<"GitProject"> | string | null
    customInstructionFile?: BoolFilter<"GitProject"> | boolean
    connectorId?: UuidFilter<"GitProject"> | string
    reviewers?: ReviewerListRelationFilter
    mergeRequests?: MergeRequestListRelationFilter
    connector?: XOR<GitConnectorScalarRelationFilter, GitConnectorWhereInput>
  }, "id" | "originId_connectorId">

  export type GitProjectOrderByWithAggregationInput = {
    id?: SortOrder
    originId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    providerType?: SortOrder
    createdAt?: SortOrder
    ignoreDraft?: SortOrder
    ignoreList?: SortOrderInput | SortOrder
    ignorePattern?: SortOrderInput | SortOrder
    instructionFile?: SortOrderInput | SortOrder
    customInstructionFile?: SortOrder
    connectorId?: SortOrder
    _count?: GitProjectCountOrderByAggregateInput
    _max?: GitProjectMaxOrderByAggregateInput
    _min?: GitProjectMinOrderByAggregateInput
  }

  export type GitProjectScalarWhereWithAggregatesInput = {
    AND?: GitProjectScalarWhereWithAggregatesInput | GitProjectScalarWhereWithAggregatesInput[]
    OR?: GitProjectScalarWhereWithAggregatesInput[]
    NOT?: GitProjectScalarWhereWithAggregatesInput | GitProjectScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GitProject"> | string
    originId?: StringWithAggregatesFilter<"GitProject"> | string
    url?: StringWithAggregatesFilter<"GitProject"> | string
    name?: StringWithAggregatesFilter<"GitProject"> | string
    fullName?: StringWithAggregatesFilter<"GitProject"> | string
    providerType?: EnumGitProviderTypeWithAggregatesFilter<"GitProject"> | $Enums.GitProviderType
    createdAt?: DateTimeWithAggregatesFilter<"GitProject"> | Date | string
    ignoreDraft?: BoolWithAggregatesFilter<"GitProject"> | boolean
    ignoreList?: StringNullableWithAggregatesFilter<"GitProject"> | string | null
    ignorePattern?: StringNullableWithAggregatesFilter<"GitProject"> | string | null
    instructionFile?: StringNullableWithAggregatesFilter<"GitProject"> | string | null
    customInstructionFile?: BoolWithAggregatesFilter<"GitProject"> | boolean
    connectorId?: UuidWithAggregatesFilter<"GitProject"> | string
  }

  export type GitConnectorWhereInput = {
    AND?: GitConnectorWhereInput | GitConnectorWhereInput[]
    OR?: GitConnectorWhereInput[]
    NOT?: GitConnectorWhereInput | GitConnectorWhereInput[]
    id?: UuidFilter<"GitConnector"> | string
    type?: EnumGitProviderTypeFilter<"GitConnector"> | $Enums.GitProviderType
    config?: StringFilter<"GitConnector"> | string
    createdAt?: DateTimeFilter<"GitConnector"> | Date | string
    projects?: GitProjectListRelationFilter
  }

  export type GitConnectorOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    projects?: GitProjectOrderByRelationAggregateInput
  }

  export type GitConnectorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GitConnectorWhereInput | GitConnectorWhereInput[]
    OR?: GitConnectorWhereInput[]
    NOT?: GitConnectorWhereInput | GitConnectorWhereInput[]
    type?: EnumGitProviderTypeFilter<"GitConnector"> | $Enums.GitProviderType
    config?: StringFilter<"GitConnector"> | string
    createdAt?: DateTimeFilter<"GitConnector"> | Date | string
    projects?: GitProjectListRelationFilter
  }, "id">

  export type GitConnectorOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    _count?: GitConnectorCountOrderByAggregateInput
    _max?: GitConnectorMaxOrderByAggregateInput
    _min?: GitConnectorMinOrderByAggregateInput
  }

  export type GitConnectorScalarWhereWithAggregatesInput = {
    AND?: GitConnectorScalarWhereWithAggregatesInput | GitConnectorScalarWhereWithAggregatesInput[]
    OR?: GitConnectorScalarWhereWithAggregatesInput[]
    NOT?: GitConnectorScalarWhereWithAggregatesInput | GitConnectorScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"GitConnector"> | string
    type?: EnumGitProviderTypeWithAggregatesFilter<"GitConnector"> | $Enums.GitProviderType
    config?: StringWithAggregatesFilter<"GitConnector"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GitConnector"> | Date | string
  }

  export type AiProviderWhereInput = {
    AND?: AiProviderWhereInput | AiProviderWhereInput[]
    OR?: AiProviderWhereInput[]
    NOT?: AiProviderWhereInput | AiProviderWhereInput[]
    id?: UuidFilter<"AiProvider"> | string
    type?: EnumAiProviderTypeFilter<"AiProvider"> | $Enums.AiProviderType
    baseUrl?: StringNullableFilter<"AiProvider"> | string | null
    apiKey?: StringNullableFilter<"AiProvider"> | string | null
    model?: StringFilter<"AiProvider"> | string
    reviewer?: ReviewerListRelationFilter
  }

  export type AiProviderOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    model?: SortOrder
    reviewer?: ReviewerOrderByRelationAggregateInput
  }

  export type AiProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiProviderWhereInput | AiProviderWhereInput[]
    OR?: AiProviderWhereInput[]
    NOT?: AiProviderWhereInput | AiProviderWhereInput[]
    type?: EnumAiProviderTypeFilter<"AiProvider"> | $Enums.AiProviderType
    baseUrl?: StringNullableFilter<"AiProvider"> | string | null
    apiKey?: StringNullableFilter<"AiProvider"> | string | null
    model?: StringFilter<"AiProvider"> | string
    reviewer?: ReviewerListRelationFilter
  }, "id">

  export type AiProviderOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    apiKey?: SortOrderInput | SortOrder
    model?: SortOrder
    _count?: AiProviderCountOrderByAggregateInput
    _max?: AiProviderMaxOrderByAggregateInput
    _min?: AiProviderMinOrderByAggregateInput
  }

  export type AiProviderScalarWhereWithAggregatesInput = {
    AND?: AiProviderScalarWhereWithAggregatesInput | AiProviderScalarWhereWithAggregatesInput[]
    OR?: AiProviderScalarWhereWithAggregatesInput[]
    NOT?: AiProviderScalarWhereWithAggregatesInput | AiProviderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AiProvider"> | string
    type?: EnumAiProviderTypeWithAggregatesFilter<"AiProvider"> | $Enums.AiProviderType
    baseUrl?: StringNullableWithAggregatesFilter<"AiProvider"> | string | null
    apiKey?: StringNullableWithAggregatesFilter<"AiProvider"> | string | null
    model?: StringWithAggregatesFilter<"AiProvider"> | string
  }

  export type MergeRequestWhereInput = {
    AND?: MergeRequestWhereInput | MergeRequestWhereInput[]
    OR?: MergeRequestWhereInput[]
    NOT?: MergeRequestWhereInput | MergeRequestWhereInput[]
    id?: UuidFilter<"MergeRequest"> | string
    originId?: StringFilter<"MergeRequest"> | string
    name?: StringFilter<"MergeRequest"> | string
    url?: StringFilter<"MergeRequest"> | string
    sourceBranch?: StringFilter<"MergeRequest"> | string
    targetBranch?: StringFilter<"MergeRequest"> | string
    authorName?: StringFilter<"MergeRequest"> | string
    authorAvatarUrl?: StringNullableFilter<"MergeRequest"> | string | null
    createdAt?: DateTimeFilter<"MergeRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MergeRequest"> | Date | string
    projectId?: UuidFilter<"MergeRequest"> | string
    reviews?: ReviewListRelationFilter
    project?: XOR<GitProjectScalarRelationFilter, GitProjectWhereInput>
  }

  export type MergeRequestOrderByWithRelationInput = {
    id?: SortOrder
    originId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceBranch?: SortOrder
    targetBranch?: SortOrder
    authorName?: SortOrder
    authorAvatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    project?: GitProjectOrderByWithRelationInput
  }

  export type MergeRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    originId_projectId?: MergeRequestOriginIdProjectIdCompoundUniqueInput
    AND?: MergeRequestWhereInput | MergeRequestWhereInput[]
    OR?: MergeRequestWhereInput[]
    NOT?: MergeRequestWhereInput | MergeRequestWhereInput[]
    originId?: StringFilter<"MergeRequest"> | string
    name?: StringFilter<"MergeRequest"> | string
    url?: StringFilter<"MergeRequest"> | string
    sourceBranch?: StringFilter<"MergeRequest"> | string
    targetBranch?: StringFilter<"MergeRequest"> | string
    authorName?: StringFilter<"MergeRequest"> | string
    authorAvatarUrl?: StringNullableFilter<"MergeRequest"> | string | null
    createdAt?: DateTimeFilter<"MergeRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MergeRequest"> | Date | string
    projectId?: UuidFilter<"MergeRequest"> | string
    reviews?: ReviewListRelationFilter
    project?: XOR<GitProjectScalarRelationFilter, GitProjectWhereInput>
  }, "id" | "originId_projectId">

  export type MergeRequestOrderByWithAggregationInput = {
    id?: SortOrder
    originId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceBranch?: SortOrder
    targetBranch?: SortOrder
    authorName?: SortOrder
    authorAvatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: MergeRequestCountOrderByAggregateInput
    _max?: MergeRequestMaxOrderByAggregateInput
    _min?: MergeRequestMinOrderByAggregateInput
  }

  export type MergeRequestScalarWhereWithAggregatesInput = {
    AND?: MergeRequestScalarWhereWithAggregatesInput | MergeRequestScalarWhereWithAggregatesInput[]
    OR?: MergeRequestScalarWhereWithAggregatesInput[]
    NOT?: MergeRequestScalarWhereWithAggregatesInput | MergeRequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MergeRequest"> | string
    originId?: StringWithAggregatesFilter<"MergeRequest"> | string
    name?: StringWithAggregatesFilter<"MergeRequest"> | string
    url?: StringWithAggregatesFilter<"MergeRequest"> | string
    sourceBranch?: StringWithAggregatesFilter<"MergeRequest"> | string
    targetBranch?: StringWithAggregatesFilter<"MergeRequest"> | string
    authorName?: StringWithAggregatesFilter<"MergeRequest"> | string
    authorAvatarUrl?: StringNullableWithAggregatesFilter<"MergeRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MergeRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MergeRequest"> | Date | string
    projectId?: UuidWithAggregatesFilter<"MergeRequest"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: UuidFilter<"Review"> | string
    at?: DateTimeFilter<"Review"> | Date | string
    diffs?: JsonFilter<"Review">
    addedLines?: IntFilter<"Review"> | number
    removedLines?: IntFilter<"Review"> | number
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableFilter<"Review"> | string | null
    mergeRequestId?: UuidFilter<"Review"> | string
    mergeRequest?: XOR<MergeRequestScalarRelationFilter, MergeRequestWhereInput>
    comments?: CommentListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
    reviewers?: ReviewerListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    at?: SortOrder
    diffs?: SortOrder
    addedLines?: SortOrder
    removedLines?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    mergeRequestId?: SortOrder
    mergeRequest?: MergeRequestOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    reviewNotes?: ReviewNoteOrderByRelationAggregateInput
    reviewers?: ReviewerOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    at?: DateTimeFilter<"Review"> | Date | string
    diffs?: JsonFilter<"Review">
    addedLines?: IntFilter<"Review"> | number
    removedLines?: IntFilter<"Review"> | number
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableFilter<"Review"> | string | null
    mergeRequestId?: UuidFilter<"Review"> | string
    mergeRequest?: XOR<MergeRequestScalarRelationFilter, MergeRequestWhereInput>
    comments?: CommentListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
    reviewers?: ReviewerListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    at?: SortOrder
    diffs?: SortOrder
    addedLines?: SortOrder
    removedLines?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    mergeRequestId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Review"> | string
    at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    diffs?: JsonWithAggregatesFilter<"Review">
    addedLines?: IntWithAggregatesFilter<"Review"> | number
    removedLines?: IntWithAggregatesFilter<"Review"> | number
    status?: EnumReviewStatusWithAggregatesFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableWithAggregatesFilter<"Review"> | string | null
    mergeRequestId?: UuidWithAggregatesFilter<"Review"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: UuidFilter<"Comment"> | string
    location?: EnumCommentLocationFilter<"Comment"> | $Enums.CommentLocation
    fileId?: StringFilter<"Comment"> | string
    line?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    thumbsUp?: IntFilter<"Comment"> | number
    thumbsDown?: IntFilter<"Comment"> | number
    reviewId?: UuidFilter<"Comment"> | string
    reviewerId?: UuidFilter<"Comment"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    reviewer?: XOR<ReviewerScalarRelationFilter, ReviewerWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    fileId?: SortOrder
    line?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    thumbsUp?: SortOrder
    thumbsDown?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
    review?: ReviewOrderByWithRelationInput
    reviewer?: ReviewerOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    location?: EnumCommentLocationFilter<"Comment"> | $Enums.CommentLocation
    fileId?: StringFilter<"Comment"> | string
    line?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    thumbsUp?: IntFilter<"Comment"> | number
    thumbsDown?: IntFilter<"Comment"> | number
    reviewId?: UuidFilter<"Comment"> | string
    reviewerId?: UuidFilter<"Comment"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    reviewer?: XOR<ReviewerScalarRelationFilter, ReviewerWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    fileId?: SortOrder
    line?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    thumbsUp?: SortOrder
    thumbsDown?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Comment"> | string
    location?: EnumCommentLocationWithAggregatesFilter<"Comment"> | $Enums.CommentLocation
    fileId?: StringWithAggregatesFilter<"Comment"> | string
    line?: IntWithAggregatesFilter<"Comment"> | number
    text?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    thumbsUp?: IntWithAggregatesFilter<"Comment"> | number
    thumbsDown?: IntWithAggregatesFilter<"Comment"> | number
    reviewId?: UuidWithAggregatesFilter<"Comment"> | string
    reviewerId?: UuidWithAggregatesFilter<"Comment"> | string
  }

  export type NoteDefinitionWhereInput = {
    AND?: NoteDefinitionWhereInput | NoteDefinitionWhereInput[]
    OR?: NoteDefinitionWhereInput[]
    NOT?: NoteDefinitionWhereInput | NoteDefinitionWhereInput[]
    id?: UuidFilter<"NoteDefinition"> | string
    title?: StringFilter<"NoteDefinition"> | string
    tag?: StringFilter<"NoteDefinition"> | string
    systemPrompt?: StringFilter<"NoteDefinition"> | string
    publishToOrigin?: BoolFilter<"NoteDefinition"> | boolean
    createdAt?: DateTimeFilter<"NoteDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"NoteDefinition"> | Date | string
    reviewers?: ReviewerListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
  }

  export type NoteDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    systemPrompt?: SortOrder
    publishToOrigin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewers?: ReviewerOrderByRelationAggregateInput
    reviewNotes?: ReviewNoteOrderByRelationAggregateInput
  }

  export type NoteDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tag?: string
    AND?: NoteDefinitionWhereInput | NoteDefinitionWhereInput[]
    OR?: NoteDefinitionWhereInput[]
    NOT?: NoteDefinitionWhereInput | NoteDefinitionWhereInput[]
    title?: StringFilter<"NoteDefinition"> | string
    systemPrompt?: StringFilter<"NoteDefinition"> | string
    publishToOrigin?: BoolFilter<"NoteDefinition"> | boolean
    createdAt?: DateTimeFilter<"NoteDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"NoteDefinition"> | Date | string
    reviewers?: ReviewerListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
  }, "id" | "tag">

  export type NoteDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    systemPrompt?: SortOrder
    publishToOrigin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteDefinitionCountOrderByAggregateInput
    _max?: NoteDefinitionMaxOrderByAggregateInput
    _min?: NoteDefinitionMinOrderByAggregateInput
  }

  export type NoteDefinitionScalarWhereWithAggregatesInput = {
    AND?: NoteDefinitionScalarWhereWithAggregatesInput | NoteDefinitionScalarWhereWithAggregatesInput[]
    OR?: NoteDefinitionScalarWhereWithAggregatesInput[]
    NOT?: NoteDefinitionScalarWhereWithAggregatesInput | NoteDefinitionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"NoteDefinition"> | string
    title?: StringWithAggregatesFilter<"NoteDefinition"> | string
    tag?: StringWithAggregatesFilter<"NoteDefinition"> | string
    systemPrompt?: StringWithAggregatesFilter<"NoteDefinition"> | string
    publishToOrigin?: BoolWithAggregatesFilter<"NoteDefinition"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"NoteDefinition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NoteDefinition"> | Date | string
  }

  export type ReviewNoteWhereInput = {
    AND?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    OR?: ReviewNoteWhereInput[]
    NOT?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    id?: UuidFilter<"ReviewNote"> | string
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
    reviewId?: UuidFilter<"ReviewNote"> | string
    reviewerId?: UuidFilter<"ReviewNote"> | string
    noteDefinitionId?: UuidFilter<"ReviewNote"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    reviewer?: XOR<ReviewerScalarRelationFilter, ReviewerWhereInput>
    noteDefinition?: XOR<NoteDefinitionScalarRelationFilter, NoteDefinitionWhereInput>
  }

  export type ReviewNoteOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
    noteDefinitionId?: SortOrder
    review?: ReviewOrderByWithRelationInput
    reviewer?: ReviewerOrderByWithRelationInput
    noteDefinition?: NoteDefinitionOrderByWithRelationInput
  }

  export type ReviewNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reviewId_reviewerId_noteDefinitionId?: ReviewNoteReviewIdReviewerIdNoteDefinitionIdCompoundUniqueInput
    AND?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    OR?: ReviewNoteWhereInput[]
    NOT?: ReviewNoteWhereInput | ReviewNoteWhereInput[]
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
    reviewId?: UuidFilter<"ReviewNote"> | string
    reviewerId?: UuidFilter<"ReviewNote"> | string
    noteDefinitionId?: UuidFilter<"ReviewNote"> | string
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
    reviewer?: XOR<ReviewerScalarRelationFilter, ReviewerWhereInput>
    noteDefinition?: XOR<NoteDefinitionScalarRelationFilter, NoteDefinitionWhereInput>
  }, "id" | "reviewId_reviewerId_noteDefinitionId">

  export type ReviewNoteOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
    noteDefinitionId?: SortOrder
    _count?: ReviewNoteCountOrderByAggregateInput
    _max?: ReviewNoteMaxOrderByAggregateInput
    _min?: ReviewNoteMinOrderByAggregateInput
  }

  export type ReviewNoteScalarWhereWithAggregatesInput = {
    AND?: ReviewNoteScalarWhereWithAggregatesInput | ReviewNoteScalarWhereWithAggregatesInput[]
    OR?: ReviewNoteScalarWhereWithAggregatesInput[]
    NOT?: ReviewNoteScalarWhereWithAggregatesInput | ReviewNoteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ReviewNote"> | string
    content?: StringWithAggregatesFilter<"ReviewNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReviewNote"> | Date | string
    reviewId?: UuidWithAggregatesFilter<"ReviewNote"> | string
    reviewerId?: UuidWithAggregatesFilter<"ReviewNote"> | string
    noteDefinitionId?: UuidWithAggregatesFilter<"ReviewNote"> | string
  }

  export type ReviewerWhereInput = {
    AND?: ReviewerWhereInput | ReviewerWhereInput[]
    OR?: ReviewerWhereInput[]
    NOT?: ReviewerWhereInput | ReviewerWhereInput[]
    id?: UuidFilter<"Reviewer"> | string
    name?: StringFilter<"Reviewer"> | string
    aiProviderId?: UuidFilter<"Reviewer"> | string
    systemPrompt?: StringNullableFilter<"Reviewer"> | string | null
    systemPromptEnabled?: BoolFilter<"Reviewer"> | boolean
    useProjectInstructions?: BoolFilter<"Reviewer"> | boolean
    aiProvider?: XOR<AiProviderScalarRelationFilter, AiProviderWhereInput>
    projects?: GitProjectListRelationFilter
    reviews?: ReviewListRelationFilter
    comments?: CommentListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
    noteDefinitions?: NoteDefinitionListRelationFilter
  }

  export type ReviewerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    aiProviderId?: SortOrder
    systemPrompt?: SortOrderInput | SortOrder
    systemPromptEnabled?: SortOrder
    useProjectInstructions?: SortOrder
    aiProvider?: AiProviderOrderByWithRelationInput
    projects?: GitProjectOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    reviewNotes?: ReviewNoteOrderByRelationAggregateInput
    noteDefinitions?: NoteDefinitionOrderByRelationAggregateInput
  }

  export type ReviewerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewerWhereInput | ReviewerWhereInput[]
    OR?: ReviewerWhereInput[]
    NOT?: ReviewerWhereInput | ReviewerWhereInput[]
    name?: StringFilter<"Reviewer"> | string
    aiProviderId?: UuidFilter<"Reviewer"> | string
    systemPrompt?: StringNullableFilter<"Reviewer"> | string | null
    systemPromptEnabled?: BoolFilter<"Reviewer"> | boolean
    useProjectInstructions?: BoolFilter<"Reviewer"> | boolean
    aiProvider?: XOR<AiProviderScalarRelationFilter, AiProviderWhereInput>
    projects?: GitProjectListRelationFilter
    reviews?: ReviewListRelationFilter
    comments?: CommentListRelationFilter
    reviewNotes?: ReviewNoteListRelationFilter
    noteDefinitions?: NoteDefinitionListRelationFilter
  }, "id">

  export type ReviewerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    aiProviderId?: SortOrder
    systemPrompt?: SortOrderInput | SortOrder
    systemPromptEnabled?: SortOrder
    useProjectInstructions?: SortOrder
    _count?: ReviewerCountOrderByAggregateInput
    _max?: ReviewerMaxOrderByAggregateInput
    _min?: ReviewerMinOrderByAggregateInput
  }

  export type ReviewerScalarWhereWithAggregatesInput = {
    AND?: ReviewerScalarWhereWithAggregatesInput | ReviewerScalarWhereWithAggregatesInput[]
    OR?: ReviewerScalarWhereWithAggregatesInput[]
    NOT?: ReviewerScalarWhereWithAggregatesInput | ReviewerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Reviewer"> | string
    name?: StringWithAggregatesFilter<"Reviewer"> | string
    aiProviderId?: UuidWithAggregatesFilter<"Reviewer"> | string
    systemPrompt?: StringNullableWithAggregatesFilter<"Reviewer"> | string | null
    systemPromptEnabled?: BoolWithAggregatesFilter<"Reviewer"> | boolean
    useProjectInstructions?: BoolWithAggregatesFilter<"Reviewer"> | boolean
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GitProjectCreateInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    reviewers?: ReviewerCreateNestedManyWithoutProjectsInput
    mergeRequests?: MergeRequestCreateNestedManyWithoutProjectInput
    connector: GitConnectorCreateNestedOneWithoutProjectsInput
  }

  export type GitProjectUncheckedCreateInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    connectorId: string
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutProjectsInput
    mergeRequests?: MergeRequestUncheckedCreateNestedManyWithoutProjectInput
  }

  export type GitProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    reviewers?: ReviewerUpdateManyWithoutProjectsNestedInput
    mergeRequests?: MergeRequestUpdateManyWithoutProjectNestedInput
    connector?: GitConnectorUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type GitProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    connectorId?: StringFieldUpdateOperationsInput | string
    reviewers?: ReviewerUncheckedUpdateManyWithoutProjectsNestedInput
    mergeRequests?: MergeRequestUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type GitProjectCreateManyInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    connectorId: string
  }

  export type GitProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GitProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    connectorId?: StringFieldUpdateOperationsInput | string
  }

  export type GitConnectorCreateInput = {
    id?: string
    type: $Enums.GitProviderType
    config: string
    createdAt?: Date | string
    projects?: GitProjectCreateNestedManyWithoutConnectorInput
  }

  export type GitConnectorUncheckedCreateInput = {
    id?: string
    type: $Enums.GitProviderType
    config: string
    createdAt?: Date | string
    projects?: GitProjectUncheckedCreateNestedManyWithoutConnectorInput
  }

  export type GitConnectorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: GitProjectUpdateManyWithoutConnectorNestedInput
  }

  export type GitConnectorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: GitProjectUncheckedUpdateManyWithoutConnectorNestedInput
  }

  export type GitConnectorCreateManyInput = {
    id?: string
    type: $Enums.GitProviderType
    config: string
    createdAt?: Date | string
  }

  export type GitConnectorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitConnectorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiProviderCreateInput = {
    id?: string
    type: $Enums.AiProviderType
    baseUrl?: string | null
    apiKey?: string | null
    model: string
    reviewer?: ReviewerCreateNestedManyWithoutAiProviderInput
  }

  export type AiProviderUncheckedCreateInput = {
    id?: string
    type: $Enums.AiProviderType
    baseUrl?: string | null
    apiKey?: string | null
    model: string
    reviewer?: ReviewerUncheckedCreateNestedManyWithoutAiProviderInput
  }

  export type AiProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAiProviderTypeFieldUpdateOperationsInput | $Enums.AiProviderType
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    reviewer?: ReviewerUpdateManyWithoutAiProviderNestedInput
  }

  export type AiProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAiProviderTypeFieldUpdateOperationsInput | $Enums.AiProviderType
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
    reviewer?: ReviewerUncheckedUpdateManyWithoutAiProviderNestedInput
  }

  export type AiProviderCreateManyInput = {
    id?: string
    type: $Enums.AiProviderType
    baseUrl?: string | null
    apiKey?: string | null
    model: string
  }

  export type AiProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAiProviderTypeFieldUpdateOperationsInput | $Enums.AiProviderType
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
  }

  export type AiProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAiProviderTypeFieldUpdateOperationsInput | $Enums.AiProviderType
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
  }

  export type MergeRequestCreateInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutMergeRequestInput
    project: GitProjectCreateNestedOneWithoutMergeRequestsInput
  }

  export type MergeRequestUncheckedCreateInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutMergeRequestInput
  }

  export type MergeRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutMergeRequestNestedInput
    project?: GitProjectUpdateOneRequiredWithoutMergeRequestsNestedInput
  }

  export type MergeRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutMergeRequestNestedInput
  }

  export type MergeRequestCreateManyInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type MergeRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MergeRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequest: MergeRequestCreateNestedOneWithoutReviewsInput
    comments?: CommentCreateNestedManyWithoutReviewInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequestId: string
    comments?: CommentUncheckedCreateNestedManyWithoutReviewInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequest?: MergeRequestUpdateOneRequiredWithoutReviewsNestedInput
    comments?: CommentUpdateManyWithoutReviewNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequestId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutReviewNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequestId: string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    review: ReviewCreateNestedOneWithoutCommentsInput
    reviewer: ReviewerCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    reviewId: string
    reviewerId: string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    review?: ReviewUpdateOneRequiredWithoutCommentsNestedInput
    reviewer?: ReviewerUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    reviewId: string
    reviewerId: string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteDefinitionCreateInput = {
    id?: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewers?: ReviewerCreateNestedManyWithoutNoteDefinitionsInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutNoteDefinitionInput
  }

  export type NoteDefinitionUncheckedCreateInput = {
    id?: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutNoteDefinitionsInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutNoteDefinitionInput
  }

  export type NoteDefinitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewers?: ReviewerUpdateManyWithoutNoteDefinitionsNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutNoteDefinitionNestedInput
  }

  export type NoteDefinitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewers?: ReviewerUncheckedUpdateManyWithoutNoteDefinitionsNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutNoteDefinitionNestedInput
  }

  export type NoteDefinitionCreateManyInput = {
    id?: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteDefinitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteDefinitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    review: ReviewCreateNestedOneWithoutReviewNotesInput
    reviewer: ReviewerCreateNestedOneWithoutReviewNotesInput
    noteDefinition: NoteDefinitionCreateNestedOneWithoutReviewNotesInput
  }

  export type ReviewNoteUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewId: string
    reviewerId: string
    noteDefinitionId: string
  }

  export type ReviewNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutReviewNotesNestedInput
    reviewer?: ReviewerUpdateOneRequiredWithoutReviewNotesNestedInput
    noteDefinition?: NoteDefinitionUpdateOneRequiredWithoutReviewNotesNestedInput
  }

  export type ReviewNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    noteDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewNoteCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewId: string
    reviewerId: string
    noteDefinitionId: string
  }

  export type ReviewNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    noteDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewerCreateInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider: AiProviderCreateNestedOneWithoutReviewerInput
    projects?: GitProjectCreateNestedManyWithoutReviewersInput
    reviews?: ReviewCreateNestedManyWithoutReviewersInput
    comments?: CommentCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerUncheckedCreateInput = {
    id?: string
    name: string
    aiProviderId: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    projects?: GitProjectUncheckedCreateNestedManyWithoutReviewersInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewersInput
    comments?: CommentUncheckedCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionUncheckedCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    aiProvider?: AiProviderUpdateOneRequiredWithoutReviewerNestedInput
    projects?: GitProjectUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUpdateManyWithoutReviewersNestedInput
    comments?: CommentUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    projects?: GitProjectUncheckedUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUncheckedUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerCreateManyInput = {
    id?: string
    name: string
    aiProviderId: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
  }

  export type ReviewerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type EnumGitProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GitProviderType | EnumGitProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGitProviderTypeFilter<$PrismaModel> | $Enums.GitProviderType
  }

  export type ReviewerListRelationFilter = {
    every?: ReviewerWhereInput
    some?: ReviewerWhereInput
    none?: ReviewerWhereInput
  }

  export type MergeRequestListRelationFilter = {
    every?: MergeRequestWhereInput
    some?: MergeRequestWhereInput
    none?: MergeRequestWhereInput
  }

  export type GitConnectorScalarRelationFilter = {
    is?: GitConnectorWhereInput
    isNot?: GitConnectorWhereInput
  }

  export type ReviewerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MergeRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GitProjectOriginIdConnectorIdCompoundUniqueInput = {
    originId: string
    connectorId: string
  }

  export type GitProjectCountOrderByAggregateInput = {
    id?: SortOrder
    originId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    providerType?: SortOrder
    createdAt?: SortOrder
    ignoreDraft?: SortOrder
    ignoreList?: SortOrder
    ignorePattern?: SortOrder
    instructionFile?: SortOrder
    customInstructionFile?: SortOrder
    connectorId?: SortOrder
  }

  export type GitProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    originId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    providerType?: SortOrder
    createdAt?: SortOrder
    ignoreDraft?: SortOrder
    ignoreList?: SortOrder
    ignorePattern?: SortOrder
    instructionFile?: SortOrder
    customInstructionFile?: SortOrder
    connectorId?: SortOrder
  }

  export type GitProjectMinOrderByAggregateInput = {
    id?: SortOrder
    originId?: SortOrder
    url?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    providerType?: SortOrder
    createdAt?: SortOrder
    ignoreDraft?: SortOrder
    ignoreList?: SortOrder
    ignorePattern?: SortOrder
    instructionFile?: SortOrder
    customInstructionFile?: SortOrder
    connectorId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGitProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GitProviderType | EnumGitProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGitProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.GitProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGitProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumGitProviderTypeFilter<$PrismaModel>
  }

  export type GitProjectListRelationFilter = {
    every?: GitProjectWhereInput
    some?: GitProjectWhereInput
    none?: GitProjectWhereInput
  }

  export type GitProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GitConnectorCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
  }

  export type GitConnectorMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
  }

  export type GitConnectorMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAiProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AiProviderType | EnumAiProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAiProviderTypeFilter<$PrismaModel> | $Enums.AiProviderType
  }

  export type AiProviderCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    model?: SortOrder
  }

  export type AiProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    model?: SortOrder
  }

  export type AiProviderMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    baseUrl?: SortOrder
    apiKey?: SortOrder
    model?: SortOrder
  }

  export type EnumAiProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AiProviderType | EnumAiProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAiProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.AiProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAiProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumAiProviderTypeFilter<$PrismaModel>
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type GitProjectScalarRelationFilter = {
    is?: GitProjectWhereInput
    isNot?: GitProjectWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MergeRequestOriginIdProjectIdCompoundUniqueInput = {
    originId: string
    projectId: string
  }

  export type MergeRequestCountOrderByAggregateInput = {
    id?: SortOrder
    originId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceBranch?: SortOrder
    targetBranch?: SortOrder
    authorName?: SortOrder
    authorAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type MergeRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    originId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceBranch?: SortOrder
    targetBranch?: SortOrder
    authorName?: SortOrder
    authorAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type MergeRequestMinOrderByAggregateInput = {
    id?: SortOrder
    originId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    sourceBranch?: SortOrder
    targetBranch?: SortOrder
    authorName?: SortOrder
    authorAvatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }

  export type MergeRequestScalarRelationFilter = {
    is?: MergeRequestWhereInput
    isNot?: MergeRequestWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type ReviewNoteListRelationFilter = {
    every?: ReviewNoteWhereInput
    some?: ReviewNoteWhereInput
    none?: ReviewNoteWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    at?: SortOrder
    diffs?: SortOrder
    addedLines?: SortOrder
    removedLines?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    mergeRequestId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    addedLines?: SortOrder
    removedLines?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    at?: SortOrder
    addedLines?: SortOrder
    removedLines?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    mergeRequestId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    at?: SortOrder
    addedLines?: SortOrder
    removedLines?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    mergeRequestId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    addedLines?: SortOrder
    removedLines?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type EnumCommentLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentLocation | EnumCommentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentLocationFilter<$PrismaModel> | $Enums.CommentLocation
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type ReviewerScalarRelationFilter = {
    is?: ReviewerWhereInput
    isNot?: ReviewerWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    fileId?: SortOrder
    line?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    thumbsUp?: SortOrder
    thumbsDown?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    line?: SortOrder
    thumbsUp?: SortOrder
    thumbsDown?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    fileId?: SortOrder
    line?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    thumbsUp?: SortOrder
    thumbsDown?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    fileId?: SortOrder
    line?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    thumbsUp?: SortOrder
    thumbsDown?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    line?: SortOrder
    thumbsUp?: SortOrder
    thumbsDown?: SortOrder
  }

  export type EnumCommentLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentLocation | EnumCommentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentLocationWithAggregatesFilter<$PrismaModel> | $Enums.CommentLocation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentLocationFilter<$PrismaModel>
    _max?: NestedEnumCommentLocationFilter<$PrismaModel>
  }

  export type NoteDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    systemPrompt?: SortOrder
    publishToOrigin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    systemPrompt?: SortOrder
    publishToOrigin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    tag?: SortOrder
    systemPrompt?: SortOrder
    publishToOrigin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteDefinitionScalarRelationFilter = {
    is?: NoteDefinitionWhereInput
    isNot?: NoteDefinitionWhereInput
  }

  export type ReviewNoteReviewIdReviewerIdNoteDefinitionIdCompoundUniqueInput = {
    reviewId: string
    reviewerId: string
    noteDefinitionId: string
  }

  export type ReviewNoteCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
    noteDefinitionId?: SortOrder
  }

  export type ReviewNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
    noteDefinitionId?: SortOrder
  }

  export type ReviewNoteMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    reviewId?: SortOrder
    reviewerId?: SortOrder
    noteDefinitionId?: SortOrder
  }

  export type AiProviderScalarRelationFilter = {
    is?: AiProviderWhereInput
    isNot?: AiProviderWhereInput
  }

  export type NoteDefinitionListRelationFilter = {
    every?: NoteDefinitionWhereInput
    some?: NoteDefinitionWhereInput
    none?: NoteDefinitionWhereInput
  }

  export type NoteDefinitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    aiProviderId?: SortOrder
    systemPrompt?: SortOrder
    systemPromptEnabled?: SortOrder
    useProjectInstructions?: SortOrder
  }

  export type ReviewerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    aiProviderId?: SortOrder
    systemPrompt?: SortOrder
    systemPromptEnabled?: SortOrder
    useProjectInstructions?: SortOrder
  }

  export type ReviewerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    aiProviderId?: SortOrder
    systemPrompt?: SortOrder
    systemPromptEnabled?: SortOrder
    useProjectInstructions?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type ReviewerCreateNestedManyWithoutProjectsInput = {
    create?: XOR<ReviewerCreateWithoutProjectsInput, ReviewerUncheckedCreateWithoutProjectsInput> | ReviewerCreateWithoutProjectsInput[] | ReviewerUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutProjectsInput | ReviewerCreateOrConnectWithoutProjectsInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type MergeRequestCreateNestedManyWithoutProjectInput = {
    create?: XOR<MergeRequestCreateWithoutProjectInput, MergeRequestUncheckedCreateWithoutProjectInput> | MergeRequestCreateWithoutProjectInput[] | MergeRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MergeRequestCreateOrConnectWithoutProjectInput | MergeRequestCreateOrConnectWithoutProjectInput[]
    createMany?: MergeRequestCreateManyProjectInputEnvelope
    connect?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
  }

  export type GitConnectorCreateNestedOneWithoutProjectsInput = {
    create?: XOR<GitConnectorCreateWithoutProjectsInput, GitConnectorUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: GitConnectorCreateOrConnectWithoutProjectsInput
    connect?: GitConnectorWhereUniqueInput
  }

  export type ReviewerUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<ReviewerCreateWithoutProjectsInput, ReviewerUncheckedCreateWithoutProjectsInput> | ReviewerCreateWithoutProjectsInput[] | ReviewerUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutProjectsInput | ReviewerCreateOrConnectWithoutProjectsInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type MergeRequestUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MergeRequestCreateWithoutProjectInput, MergeRequestUncheckedCreateWithoutProjectInput> | MergeRequestCreateWithoutProjectInput[] | MergeRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MergeRequestCreateOrConnectWithoutProjectInput | MergeRequestCreateOrConnectWithoutProjectInput[]
    createMany?: MergeRequestCreateManyProjectInputEnvelope
    connect?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
  }

  export type EnumGitProviderTypeFieldUpdateOperationsInput = {
    set?: $Enums.GitProviderType
  }

  export type ReviewerUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<ReviewerCreateWithoutProjectsInput, ReviewerUncheckedCreateWithoutProjectsInput> | ReviewerCreateWithoutProjectsInput[] | ReviewerUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutProjectsInput | ReviewerCreateOrConnectWithoutProjectsInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutProjectsInput | ReviewerUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutProjectsInput | ReviewerUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutProjectsInput | ReviewerUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type MergeRequestUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MergeRequestCreateWithoutProjectInput, MergeRequestUncheckedCreateWithoutProjectInput> | MergeRequestCreateWithoutProjectInput[] | MergeRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MergeRequestCreateOrConnectWithoutProjectInput | MergeRequestCreateOrConnectWithoutProjectInput[]
    upsert?: MergeRequestUpsertWithWhereUniqueWithoutProjectInput | MergeRequestUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MergeRequestCreateManyProjectInputEnvelope
    set?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    disconnect?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    delete?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    connect?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    update?: MergeRequestUpdateWithWhereUniqueWithoutProjectInput | MergeRequestUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MergeRequestUpdateManyWithWhereWithoutProjectInput | MergeRequestUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MergeRequestScalarWhereInput | MergeRequestScalarWhereInput[]
  }

  export type GitConnectorUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<GitConnectorCreateWithoutProjectsInput, GitConnectorUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: GitConnectorCreateOrConnectWithoutProjectsInput
    upsert?: GitConnectorUpsertWithoutProjectsInput
    connect?: GitConnectorWhereUniqueInput
    update?: XOR<XOR<GitConnectorUpdateToOneWithWhereWithoutProjectsInput, GitConnectorUpdateWithoutProjectsInput>, GitConnectorUncheckedUpdateWithoutProjectsInput>
  }

  export type ReviewerUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<ReviewerCreateWithoutProjectsInput, ReviewerUncheckedCreateWithoutProjectsInput> | ReviewerCreateWithoutProjectsInput[] | ReviewerUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutProjectsInput | ReviewerCreateOrConnectWithoutProjectsInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutProjectsInput | ReviewerUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutProjectsInput | ReviewerUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutProjectsInput | ReviewerUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type MergeRequestUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MergeRequestCreateWithoutProjectInput, MergeRequestUncheckedCreateWithoutProjectInput> | MergeRequestCreateWithoutProjectInput[] | MergeRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MergeRequestCreateOrConnectWithoutProjectInput | MergeRequestCreateOrConnectWithoutProjectInput[]
    upsert?: MergeRequestUpsertWithWhereUniqueWithoutProjectInput | MergeRequestUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MergeRequestCreateManyProjectInputEnvelope
    set?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    disconnect?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    delete?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    connect?: MergeRequestWhereUniqueInput | MergeRequestWhereUniqueInput[]
    update?: MergeRequestUpdateWithWhereUniqueWithoutProjectInput | MergeRequestUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MergeRequestUpdateManyWithWhereWithoutProjectInput | MergeRequestUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MergeRequestScalarWhereInput | MergeRequestScalarWhereInput[]
  }

  export type GitProjectCreateNestedManyWithoutConnectorInput = {
    create?: XOR<GitProjectCreateWithoutConnectorInput, GitProjectUncheckedCreateWithoutConnectorInput> | GitProjectCreateWithoutConnectorInput[] | GitProjectUncheckedCreateWithoutConnectorInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutConnectorInput | GitProjectCreateOrConnectWithoutConnectorInput[]
    createMany?: GitProjectCreateManyConnectorInputEnvelope
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
  }

  export type GitProjectUncheckedCreateNestedManyWithoutConnectorInput = {
    create?: XOR<GitProjectCreateWithoutConnectorInput, GitProjectUncheckedCreateWithoutConnectorInput> | GitProjectCreateWithoutConnectorInput[] | GitProjectUncheckedCreateWithoutConnectorInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutConnectorInput | GitProjectCreateOrConnectWithoutConnectorInput[]
    createMany?: GitProjectCreateManyConnectorInputEnvelope
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
  }

  export type GitProjectUpdateManyWithoutConnectorNestedInput = {
    create?: XOR<GitProjectCreateWithoutConnectorInput, GitProjectUncheckedCreateWithoutConnectorInput> | GitProjectCreateWithoutConnectorInput[] | GitProjectUncheckedCreateWithoutConnectorInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutConnectorInput | GitProjectCreateOrConnectWithoutConnectorInput[]
    upsert?: GitProjectUpsertWithWhereUniqueWithoutConnectorInput | GitProjectUpsertWithWhereUniqueWithoutConnectorInput[]
    createMany?: GitProjectCreateManyConnectorInputEnvelope
    set?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    disconnect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    delete?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    update?: GitProjectUpdateWithWhereUniqueWithoutConnectorInput | GitProjectUpdateWithWhereUniqueWithoutConnectorInput[]
    updateMany?: GitProjectUpdateManyWithWhereWithoutConnectorInput | GitProjectUpdateManyWithWhereWithoutConnectorInput[]
    deleteMany?: GitProjectScalarWhereInput | GitProjectScalarWhereInput[]
  }

  export type GitProjectUncheckedUpdateManyWithoutConnectorNestedInput = {
    create?: XOR<GitProjectCreateWithoutConnectorInput, GitProjectUncheckedCreateWithoutConnectorInput> | GitProjectCreateWithoutConnectorInput[] | GitProjectUncheckedCreateWithoutConnectorInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutConnectorInput | GitProjectCreateOrConnectWithoutConnectorInput[]
    upsert?: GitProjectUpsertWithWhereUniqueWithoutConnectorInput | GitProjectUpsertWithWhereUniqueWithoutConnectorInput[]
    createMany?: GitProjectCreateManyConnectorInputEnvelope
    set?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    disconnect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    delete?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    update?: GitProjectUpdateWithWhereUniqueWithoutConnectorInput | GitProjectUpdateWithWhereUniqueWithoutConnectorInput[]
    updateMany?: GitProjectUpdateManyWithWhereWithoutConnectorInput | GitProjectUpdateManyWithWhereWithoutConnectorInput[]
    deleteMany?: GitProjectScalarWhereInput | GitProjectScalarWhereInput[]
  }

  export type ReviewerCreateNestedManyWithoutAiProviderInput = {
    create?: XOR<ReviewerCreateWithoutAiProviderInput, ReviewerUncheckedCreateWithoutAiProviderInput> | ReviewerCreateWithoutAiProviderInput[] | ReviewerUncheckedCreateWithoutAiProviderInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutAiProviderInput | ReviewerCreateOrConnectWithoutAiProviderInput[]
    createMany?: ReviewerCreateManyAiProviderInputEnvelope
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type ReviewerUncheckedCreateNestedManyWithoutAiProviderInput = {
    create?: XOR<ReviewerCreateWithoutAiProviderInput, ReviewerUncheckedCreateWithoutAiProviderInput> | ReviewerCreateWithoutAiProviderInput[] | ReviewerUncheckedCreateWithoutAiProviderInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutAiProviderInput | ReviewerCreateOrConnectWithoutAiProviderInput[]
    createMany?: ReviewerCreateManyAiProviderInputEnvelope
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type EnumAiProviderTypeFieldUpdateOperationsInput = {
    set?: $Enums.AiProviderType
  }

  export type ReviewerUpdateManyWithoutAiProviderNestedInput = {
    create?: XOR<ReviewerCreateWithoutAiProviderInput, ReviewerUncheckedCreateWithoutAiProviderInput> | ReviewerCreateWithoutAiProviderInput[] | ReviewerUncheckedCreateWithoutAiProviderInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutAiProviderInput | ReviewerCreateOrConnectWithoutAiProviderInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutAiProviderInput | ReviewerUpsertWithWhereUniqueWithoutAiProviderInput[]
    createMany?: ReviewerCreateManyAiProviderInputEnvelope
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutAiProviderInput | ReviewerUpdateWithWhereUniqueWithoutAiProviderInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutAiProviderInput | ReviewerUpdateManyWithWhereWithoutAiProviderInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type ReviewerUncheckedUpdateManyWithoutAiProviderNestedInput = {
    create?: XOR<ReviewerCreateWithoutAiProviderInput, ReviewerUncheckedCreateWithoutAiProviderInput> | ReviewerCreateWithoutAiProviderInput[] | ReviewerUncheckedCreateWithoutAiProviderInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutAiProviderInput | ReviewerCreateOrConnectWithoutAiProviderInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutAiProviderInput | ReviewerUpsertWithWhereUniqueWithoutAiProviderInput[]
    createMany?: ReviewerCreateManyAiProviderInputEnvelope
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutAiProviderInput | ReviewerUpdateWithWhereUniqueWithoutAiProviderInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutAiProviderInput | ReviewerUpdateManyWithWhereWithoutAiProviderInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutMergeRequestInput = {
    create?: XOR<ReviewCreateWithoutMergeRequestInput, ReviewUncheckedCreateWithoutMergeRequestInput> | ReviewCreateWithoutMergeRequestInput[] | ReviewUncheckedCreateWithoutMergeRequestInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMergeRequestInput | ReviewCreateOrConnectWithoutMergeRequestInput[]
    createMany?: ReviewCreateManyMergeRequestInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type GitProjectCreateNestedOneWithoutMergeRequestsInput = {
    create?: XOR<GitProjectCreateWithoutMergeRequestsInput, GitProjectUncheckedCreateWithoutMergeRequestsInput>
    connectOrCreate?: GitProjectCreateOrConnectWithoutMergeRequestsInput
    connect?: GitProjectWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutMergeRequestInput = {
    create?: XOR<ReviewCreateWithoutMergeRequestInput, ReviewUncheckedCreateWithoutMergeRequestInput> | ReviewCreateWithoutMergeRequestInput[] | ReviewUncheckedCreateWithoutMergeRequestInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMergeRequestInput | ReviewCreateOrConnectWithoutMergeRequestInput[]
    createMany?: ReviewCreateManyMergeRequestInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutMergeRequestNestedInput = {
    create?: XOR<ReviewCreateWithoutMergeRequestInput, ReviewUncheckedCreateWithoutMergeRequestInput> | ReviewCreateWithoutMergeRequestInput[] | ReviewUncheckedCreateWithoutMergeRequestInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMergeRequestInput | ReviewCreateOrConnectWithoutMergeRequestInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMergeRequestInput | ReviewUpsertWithWhereUniqueWithoutMergeRequestInput[]
    createMany?: ReviewCreateManyMergeRequestInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMergeRequestInput | ReviewUpdateWithWhereUniqueWithoutMergeRequestInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMergeRequestInput | ReviewUpdateManyWithWhereWithoutMergeRequestInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type GitProjectUpdateOneRequiredWithoutMergeRequestsNestedInput = {
    create?: XOR<GitProjectCreateWithoutMergeRequestsInput, GitProjectUncheckedCreateWithoutMergeRequestsInput>
    connectOrCreate?: GitProjectCreateOrConnectWithoutMergeRequestsInput
    upsert?: GitProjectUpsertWithoutMergeRequestsInput
    connect?: GitProjectWhereUniqueInput
    update?: XOR<XOR<GitProjectUpdateToOneWithWhereWithoutMergeRequestsInput, GitProjectUpdateWithoutMergeRequestsInput>, GitProjectUncheckedUpdateWithoutMergeRequestsInput>
  }

  export type ReviewUncheckedUpdateManyWithoutMergeRequestNestedInput = {
    create?: XOR<ReviewCreateWithoutMergeRequestInput, ReviewUncheckedCreateWithoutMergeRequestInput> | ReviewCreateWithoutMergeRequestInput[] | ReviewUncheckedCreateWithoutMergeRequestInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMergeRequestInput | ReviewCreateOrConnectWithoutMergeRequestInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMergeRequestInput | ReviewUpsertWithWhereUniqueWithoutMergeRequestInput[]
    createMany?: ReviewCreateManyMergeRequestInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMergeRequestInput | ReviewUpdateWithWhereUniqueWithoutMergeRequestInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMergeRequestInput | ReviewUpdateManyWithWhereWithoutMergeRequestInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MergeRequestCreateNestedOneWithoutReviewsInput = {
    create?: XOR<MergeRequestCreateWithoutReviewsInput, MergeRequestUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MergeRequestCreateOrConnectWithoutReviewsInput
    connect?: MergeRequestWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutReviewInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReviewNoteCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewInput, ReviewNoteUncheckedCreateWithoutReviewInput> | ReviewNoteCreateWithoutReviewInput[] | ReviewNoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewInput | ReviewNoteCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewNoteCreateManyReviewInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type ReviewerCreateNestedManyWithoutReviewsInput = {
    create?: XOR<ReviewerCreateWithoutReviewsInput, ReviewerUncheckedCreateWithoutReviewsInput> | ReviewerCreateWithoutReviewsInput[] | ReviewerUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutReviewsInput | ReviewerCreateOrConnectWithoutReviewsInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReviewNoteUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewInput, ReviewNoteUncheckedCreateWithoutReviewInput> | ReviewNoteCreateWithoutReviewInput[] | ReviewNoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewInput | ReviewNoteCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewNoteCreateManyReviewInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type ReviewerUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: XOR<ReviewerCreateWithoutReviewsInput, ReviewerUncheckedCreateWithoutReviewsInput> | ReviewerCreateWithoutReviewsInput[] | ReviewerUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutReviewsInput | ReviewerCreateOrConnectWithoutReviewsInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumReviewStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReviewStatus
  }

  export type MergeRequestUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<MergeRequestCreateWithoutReviewsInput, MergeRequestUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MergeRequestCreateOrConnectWithoutReviewsInput
    upsert?: MergeRequestUpsertWithoutReviewsInput
    connect?: MergeRequestWhereUniqueInput
    update?: XOR<XOR<MergeRequestUpdateToOneWithWhereWithoutReviewsInput, MergeRequestUpdateWithoutReviewsInput>, MergeRequestUncheckedUpdateWithoutReviewsInput>
  }

  export type CommentUpdateManyWithoutReviewNestedInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewInput | CommentUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewInput | CommentUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewInput | CommentUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReviewNoteUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewInput, ReviewNoteUncheckedCreateWithoutReviewInput> | ReviewNoteCreateWithoutReviewInput[] | ReviewNoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewInput | ReviewNoteCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutReviewInput | ReviewNoteUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewNoteCreateManyReviewInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutReviewInput | ReviewNoteUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutReviewInput | ReviewNoteUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type ReviewerUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<ReviewerCreateWithoutReviewsInput, ReviewerUncheckedCreateWithoutReviewsInput> | ReviewerCreateWithoutReviewsInput[] | ReviewerUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutReviewsInput | ReviewerCreateOrConnectWithoutReviewsInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutReviewsInput | ReviewerUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutReviewsInput | ReviewerUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutReviewsInput | ReviewerUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput> | CommentCreateWithoutReviewInput[] | CommentUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewInput | CommentCreateOrConnectWithoutReviewInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewInput | CommentUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: CommentCreateManyReviewInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewInput | CommentUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewInput | CommentUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReviewNoteUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewInput, ReviewNoteUncheckedCreateWithoutReviewInput> | ReviewNoteCreateWithoutReviewInput[] | ReviewNoteUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewInput | ReviewNoteCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutReviewInput | ReviewNoteUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewNoteCreateManyReviewInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutReviewInput | ReviewNoteUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutReviewInput | ReviewNoteUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type ReviewerUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<ReviewerCreateWithoutReviewsInput, ReviewerUncheckedCreateWithoutReviewsInput> | ReviewerCreateWithoutReviewsInput[] | ReviewerUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutReviewsInput | ReviewerCreateOrConnectWithoutReviewsInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutReviewsInput | ReviewerUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutReviewsInput | ReviewerUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutReviewsInput | ReviewerUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ReviewCreateWithoutCommentsInput, ReviewUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutCommentsInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewerCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ReviewerCreateWithoutCommentsInput, ReviewerUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ReviewerCreateOrConnectWithoutCommentsInput
    connect?: ReviewerWhereUniqueInput
  }

  export type EnumCommentLocationFieldUpdateOperationsInput = {
    set?: $Enums.CommentLocation
  }

  export type ReviewUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ReviewCreateWithoutCommentsInput, ReviewUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutCommentsInput
    upsert?: ReviewUpsertWithoutCommentsInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutCommentsInput, ReviewUpdateWithoutCommentsInput>, ReviewUncheckedUpdateWithoutCommentsInput>
  }

  export type ReviewerUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ReviewerCreateWithoutCommentsInput, ReviewerUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ReviewerCreateOrConnectWithoutCommentsInput
    upsert?: ReviewerUpsertWithoutCommentsInput
    connect?: ReviewerWhereUniqueInput
    update?: XOR<XOR<ReviewerUpdateToOneWithWhereWithoutCommentsInput, ReviewerUpdateWithoutCommentsInput>, ReviewerUncheckedUpdateWithoutCommentsInput>
  }

  export type ReviewerCreateNestedManyWithoutNoteDefinitionsInput = {
    create?: XOR<ReviewerCreateWithoutNoteDefinitionsInput, ReviewerUncheckedCreateWithoutNoteDefinitionsInput> | ReviewerCreateWithoutNoteDefinitionsInput[] | ReviewerUncheckedCreateWithoutNoteDefinitionsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutNoteDefinitionsInput | ReviewerCreateOrConnectWithoutNoteDefinitionsInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type ReviewNoteCreateNestedManyWithoutNoteDefinitionInput = {
    create?: XOR<ReviewNoteCreateWithoutNoteDefinitionInput, ReviewNoteUncheckedCreateWithoutNoteDefinitionInput> | ReviewNoteCreateWithoutNoteDefinitionInput[] | ReviewNoteUncheckedCreateWithoutNoteDefinitionInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutNoteDefinitionInput | ReviewNoteCreateOrConnectWithoutNoteDefinitionInput[]
    createMany?: ReviewNoteCreateManyNoteDefinitionInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type ReviewerUncheckedCreateNestedManyWithoutNoteDefinitionsInput = {
    create?: XOR<ReviewerCreateWithoutNoteDefinitionsInput, ReviewerUncheckedCreateWithoutNoteDefinitionsInput> | ReviewerCreateWithoutNoteDefinitionsInput[] | ReviewerUncheckedCreateWithoutNoteDefinitionsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutNoteDefinitionsInput | ReviewerCreateOrConnectWithoutNoteDefinitionsInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
  }

  export type ReviewNoteUncheckedCreateNestedManyWithoutNoteDefinitionInput = {
    create?: XOR<ReviewNoteCreateWithoutNoteDefinitionInput, ReviewNoteUncheckedCreateWithoutNoteDefinitionInput> | ReviewNoteCreateWithoutNoteDefinitionInput[] | ReviewNoteUncheckedCreateWithoutNoteDefinitionInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutNoteDefinitionInput | ReviewNoteCreateOrConnectWithoutNoteDefinitionInput[]
    createMany?: ReviewNoteCreateManyNoteDefinitionInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type ReviewerUpdateManyWithoutNoteDefinitionsNestedInput = {
    create?: XOR<ReviewerCreateWithoutNoteDefinitionsInput, ReviewerUncheckedCreateWithoutNoteDefinitionsInput> | ReviewerCreateWithoutNoteDefinitionsInput[] | ReviewerUncheckedCreateWithoutNoteDefinitionsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutNoteDefinitionsInput | ReviewerCreateOrConnectWithoutNoteDefinitionsInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutNoteDefinitionsInput | ReviewerUpsertWithWhereUniqueWithoutNoteDefinitionsInput[]
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutNoteDefinitionsInput | ReviewerUpdateWithWhereUniqueWithoutNoteDefinitionsInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutNoteDefinitionsInput | ReviewerUpdateManyWithWhereWithoutNoteDefinitionsInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type ReviewNoteUpdateManyWithoutNoteDefinitionNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutNoteDefinitionInput, ReviewNoteUncheckedCreateWithoutNoteDefinitionInput> | ReviewNoteCreateWithoutNoteDefinitionInput[] | ReviewNoteUncheckedCreateWithoutNoteDefinitionInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutNoteDefinitionInput | ReviewNoteCreateOrConnectWithoutNoteDefinitionInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutNoteDefinitionInput | ReviewNoteUpsertWithWhereUniqueWithoutNoteDefinitionInput[]
    createMany?: ReviewNoteCreateManyNoteDefinitionInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutNoteDefinitionInput | ReviewNoteUpdateWithWhereUniqueWithoutNoteDefinitionInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutNoteDefinitionInput | ReviewNoteUpdateManyWithWhereWithoutNoteDefinitionInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type ReviewerUncheckedUpdateManyWithoutNoteDefinitionsNestedInput = {
    create?: XOR<ReviewerCreateWithoutNoteDefinitionsInput, ReviewerUncheckedCreateWithoutNoteDefinitionsInput> | ReviewerCreateWithoutNoteDefinitionsInput[] | ReviewerUncheckedCreateWithoutNoteDefinitionsInput[]
    connectOrCreate?: ReviewerCreateOrConnectWithoutNoteDefinitionsInput | ReviewerCreateOrConnectWithoutNoteDefinitionsInput[]
    upsert?: ReviewerUpsertWithWhereUniqueWithoutNoteDefinitionsInput | ReviewerUpsertWithWhereUniqueWithoutNoteDefinitionsInput[]
    set?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    disconnect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    delete?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    connect?: ReviewerWhereUniqueInput | ReviewerWhereUniqueInput[]
    update?: ReviewerUpdateWithWhereUniqueWithoutNoteDefinitionsInput | ReviewerUpdateWithWhereUniqueWithoutNoteDefinitionsInput[]
    updateMany?: ReviewerUpdateManyWithWhereWithoutNoteDefinitionsInput | ReviewerUpdateManyWithWhereWithoutNoteDefinitionsInput[]
    deleteMany?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
  }

  export type ReviewNoteUncheckedUpdateManyWithoutNoteDefinitionNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutNoteDefinitionInput, ReviewNoteUncheckedCreateWithoutNoteDefinitionInput> | ReviewNoteCreateWithoutNoteDefinitionInput[] | ReviewNoteUncheckedCreateWithoutNoteDefinitionInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutNoteDefinitionInput | ReviewNoteCreateOrConnectWithoutNoteDefinitionInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutNoteDefinitionInput | ReviewNoteUpsertWithWhereUniqueWithoutNoteDefinitionInput[]
    createMany?: ReviewNoteCreateManyNoteDefinitionInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutNoteDefinitionInput | ReviewNoteUpdateWithWhereUniqueWithoutNoteDefinitionInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutNoteDefinitionInput | ReviewNoteUpdateManyWithWhereWithoutNoteDefinitionInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type ReviewCreateNestedOneWithoutReviewNotesInput = {
    create?: XOR<ReviewCreateWithoutReviewNotesInput, ReviewUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewNotesInput
    connect?: ReviewWhereUniqueInput
  }

  export type ReviewerCreateNestedOneWithoutReviewNotesInput = {
    create?: XOR<ReviewerCreateWithoutReviewNotesInput, ReviewerUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: ReviewerCreateOrConnectWithoutReviewNotesInput
    connect?: ReviewerWhereUniqueInput
  }

  export type NoteDefinitionCreateNestedOneWithoutReviewNotesInput = {
    create?: XOR<NoteDefinitionCreateWithoutReviewNotesInput, NoteDefinitionUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: NoteDefinitionCreateOrConnectWithoutReviewNotesInput
    connect?: NoteDefinitionWhereUniqueInput
  }

  export type ReviewUpdateOneRequiredWithoutReviewNotesNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewNotesInput, ReviewUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewNotesInput
    upsert?: ReviewUpsertWithoutReviewNotesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutReviewNotesInput, ReviewUpdateWithoutReviewNotesInput>, ReviewUncheckedUpdateWithoutReviewNotesInput>
  }

  export type ReviewerUpdateOneRequiredWithoutReviewNotesNestedInput = {
    create?: XOR<ReviewerCreateWithoutReviewNotesInput, ReviewerUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: ReviewerCreateOrConnectWithoutReviewNotesInput
    upsert?: ReviewerUpsertWithoutReviewNotesInput
    connect?: ReviewerWhereUniqueInput
    update?: XOR<XOR<ReviewerUpdateToOneWithWhereWithoutReviewNotesInput, ReviewerUpdateWithoutReviewNotesInput>, ReviewerUncheckedUpdateWithoutReviewNotesInput>
  }

  export type NoteDefinitionUpdateOneRequiredWithoutReviewNotesNestedInput = {
    create?: XOR<NoteDefinitionCreateWithoutReviewNotesInput, NoteDefinitionUncheckedCreateWithoutReviewNotesInput>
    connectOrCreate?: NoteDefinitionCreateOrConnectWithoutReviewNotesInput
    upsert?: NoteDefinitionUpsertWithoutReviewNotesInput
    connect?: NoteDefinitionWhereUniqueInput
    update?: XOR<XOR<NoteDefinitionUpdateToOneWithWhereWithoutReviewNotesInput, NoteDefinitionUpdateWithoutReviewNotesInput>, NoteDefinitionUncheckedUpdateWithoutReviewNotesInput>
  }

  export type AiProviderCreateNestedOneWithoutReviewerInput = {
    create?: XOR<AiProviderCreateWithoutReviewerInput, AiProviderUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: AiProviderCreateOrConnectWithoutReviewerInput
    connect?: AiProviderWhereUniqueInput
  }

  export type GitProjectCreateNestedManyWithoutReviewersInput = {
    create?: XOR<GitProjectCreateWithoutReviewersInput, GitProjectUncheckedCreateWithoutReviewersInput> | GitProjectCreateWithoutReviewersInput[] | GitProjectUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutReviewersInput | GitProjectCreateOrConnectWithoutReviewersInput[]
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewersInput = {
    create?: XOR<ReviewCreateWithoutReviewersInput, ReviewUncheckedCreateWithoutReviewersInput> | ReviewCreateWithoutReviewersInput[] | ReviewUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewersInput | ReviewCreateOrConnectWithoutReviewersInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutReviewerInput = {
    create?: XOR<CommentCreateWithoutReviewerInput, CommentUncheckedCreateWithoutReviewerInput> | CommentCreateWithoutReviewerInput[] | CommentUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewerInput | CommentCreateOrConnectWithoutReviewerInput[]
    createMany?: CommentCreateManyReviewerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReviewNoteCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewerInput, ReviewNoteUncheckedCreateWithoutReviewerInput> | ReviewNoteCreateWithoutReviewerInput[] | ReviewNoteUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewerInput | ReviewNoteCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewNoteCreateManyReviewerInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type NoteDefinitionCreateNestedManyWithoutReviewersInput = {
    create?: XOR<NoteDefinitionCreateWithoutReviewersInput, NoteDefinitionUncheckedCreateWithoutReviewersInput> | NoteDefinitionCreateWithoutReviewersInput[] | NoteDefinitionUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: NoteDefinitionCreateOrConnectWithoutReviewersInput | NoteDefinitionCreateOrConnectWithoutReviewersInput[]
    connect?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
  }

  export type GitProjectUncheckedCreateNestedManyWithoutReviewersInput = {
    create?: XOR<GitProjectCreateWithoutReviewersInput, GitProjectUncheckedCreateWithoutReviewersInput> | GitProjectCreateWithoutReviewersInput[] | GitProjectUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutReviewersInput | GitProjectCreateOrConnectWithoutReviewersInput[]
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewersInput = {
    create?: XOR<ReviewCreateWithoutReviewersInput, ReviewUncheckedCreateWithoutReviewersInput> | ReviewCreateWithoutReviewersInput[] | ReviewUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewersInput | ReviewCreateOrConnectWithoutReviewersInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<CommentCreateWithoutReviewerInput, CommentUncheckedCreateWithoutReviewerInput> | CommentCreateWithoutReviewerInput[] | CommentUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewerInput | CommentCreateOrConnectWithoutReviewerInput[]
    createMany?: CommentCreateManyReviewerInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReviewNoteUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewerInput, ReviewNoteUncheckedCreateWithoutReviewerInput> | ReviewNoteCreateWithoutReviewerInput[] | ReviewNoteUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewerInput | ReviewNoteCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewNoteCreateManyReviewerInputEnvelope
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
  }

  export type NoteDefinitionUncheckedCreateNestedManyWithoutReviewersInput = {
    create?: XOR<NoteDefinitionCreateWithoutReviewersInput, NoteDefinitionUncheckedCreateWithoutReviewersInput> | NoteDefinitionCreateWithoutReviewersInput[] | NoteDefinitionUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: NoteDefinitionCreateOrConnectWithoutReviewersInput | NoteDefinitionCreateOrConnectWithoutReviewersInput[]
    connect?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
  }

  export type AiProviderUpdateOneRequiredWithoutReviewerNestedInput = {
    create?: XOR<AiProviderCreateWithoutReviewerInput, AiProviderUncheckedCreateWithoutReviewerInput>
    connectOrCreate?: AiProviderCreateOrConnectWithoutReviewerInput
    upsert?: AiProviderUpsertWithoutReviewerInput
    connect?: AiProviderWhereUniqueInput
    update?: XOR<XOR<AiProviderUpdateToOneWithWhereWithoutReviewerInput, AiProviderUpdateWithoutReviewerInput>, AiProviderUncheckedUpdateWithoutReviewerInput>
  }

  export type GitProjectUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<GitProjectCreateWithoutReviewersInput, GitProjectUncheckedCreateWithoutReviewersInput> | GitProjectCreateWithoutReviewersInput[] | GitProjectUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutReviewersInput | GitProjectCreateOrConnectWithoutReviewersInput[]
    upsert?: GitProjectUpsertWithWhereUniqueWithoutReviewersInput | GitProjectUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    disconnect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    delete?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    update?: GitProjectUpdateWithWhereUniqueWithoutReviewersInput | GitProjectUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: GitProjectUpdateManyWithWhereWithoutReviewersInput | GitProjectUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: GitProjectScalarWhereInput | GitProjectScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewersInput, ReviewUncheckedCreateWithoutReviewersInput> | ReviewCreateWithoutReviewersInput[] | ReviewUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewersInput | ReviewCreateOrConnectWithoutReviewersInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewersInput | ReviewUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewersInput | ReviewUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewersInput | ReviewUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<CommentCreateWithoutReviewerInput, CommentUncheckedCreateWithoutReviewerInput> | CommentCreateWithoutReviewerInput[] | CommentUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewerInput | CommentCreateOrConnectWithoutReviewerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewerInput | CommentUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: CommentCreateManyReviewerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewerInput | CommentUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewerInput | CommentUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReviewNoteUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewerInput, ReviewNoteUncheckedCreateWithoutReviewerInput> | ReviewNoteCreateWithoutReviewerInput[] | ReviewNoteUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewerInput | ReviewNoteCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutReviewerInput | ReviewNoteUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewNoteCreateManyReviewerInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutReviewerInput | ReviewNoteUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutReviewerInput | ReviewNoteUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type NoteDefinitionUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<NoteDefinitionCreateWithoutReviewersInput, NoteDefinitionUncheckedCreateWithoutReviewersInput> | NoteDefinitionCreateWithoutReviewersInput[] | NoteDefinitionUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: NoteDefinitionCreateOrConnectWithoutReviewersInput | NoteDefinitionCreateOrConnectWithoutReviewersInput[]
    upsert?: NoteDefinitionUpsertWithWhereUniqueWithoutReviewersInput | NoteDefinitionUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    disconnect?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    delete?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    connect?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    update?: NoteDefinitionUpdateWithWhereUniqueWithoutReviewersInput | NoteDefinitionUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: NoteDefinitionUpdateManyWithWhereWithoutReviewersInput | NoteDefinitionUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: NoteDefinitionScalarWhereInput | NoteDefinitionScalarWhereInput[]
  }

  export type GitProjectUncheckedUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<GitProjectCreateWithoutReviewersInput, GitProjectUncheckedCreateWithoutReviewersInput> | GitProjectCreateWithoutReviewersInput[] | GitProjectUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: GitProjectCreateOrConnectWithoutReviewersInput | GitProjectCreateOrConnectWithoutReviewersInput[]
    upsert?: GitProjectUpsertWithWhereUniqueWithoutReviewersInput | GitProjectUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    disconnect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    delete?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    connect?: GitProjectWhereUniqueInput | GitProjectWhereUniqueInput[]
    update?: GitProjectUpdateWithWhereUniqueWithoutReviewersInput | GitProjectUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: GitProjectUpdateManyWithWhereWithoutReviewersInput | GitProjectUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: GitProjectScalarWhereInput | GitProjectScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewersInput, ReviewUncheckedCreateWithoutReviewersInput> | ReviewCreateWithoutReviewersInput[] | ReviewUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewersInput | ReviewCreateOrConnectWithoutReviewersInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewersInput | ReviewUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewersInput | ReviewUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewersInput | ReviewUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<CommentCreateWithoutReviewerInput, CommentUncheckedCreateWithoutReviewerInput> | CommentCreateWithoutReviewerInput[] | CommentUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewerInput | CommentCreateOrConnectWithoutReviewerInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewerInput | CommentUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: CommentCreateManyReviewerInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewerInput | CommentUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewerInput | CommentUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReviewNoteUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewNoteCreateWithoutReviewerInput, ReviewNoteUncheckedCreateWithoutReviewerInput> | ReviewNoteCreateWithoutReviewerInput[] | ReviewNoteUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewNoteCreateOrConnectWithoutReviewerInput | ReviewNoteCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewNoteUpsertWithWhereUniqueWithoutReviewerInput | ReviewNoteUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewNoteCreateManyReviewerInputEnvelope
    set?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    disconnect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    delete?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    connect?: ReviewNoteWhereUniqueInput | ReviewNoteWhereUniqueInput[]
    update?: ReviewNoteUpdateWithWhereUniqueWithoutReviewerInput | ReviewNoteUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewNoteUpdateManyWithWhereWithoutReviewerInput | ReviewNoteUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
  }

  export type NoteDefinitionUncheckedUpdateManyWithoutReviewersNestedInput = {
    create?: XOR<NoteDefinitionCreateWithoutReviewersInput, NoteDefinitionUncheckedCreateWithoutReviewersInput> | NoteDefinitionCreateWithoutReviewersInput[] | NoteDefinitionUncheckedCreateWithoutReviewersInput[]
    connectOrCreate?: NoteDefinitionCreateOrConnectWithoutReviewersInput | NoteDefinitionCreateOrConnectWithoutReviewersInput[]
    upsert?: NoteDefinitionUpsertWithWhereUniqueWithoutReviewersInput | NoteDefinitionUpsertWithWhereUniqueWithoutReviewersInput[]
    set?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    disconnect?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    delete?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    connect?: NoteDefinitionWhereUniqueInput | NoteDefinitionWhereUniqueInput[]
    update?: NoteDefinitionUpdateWithWhereUniqueWithoutReviewersInput | NoteDefinitionUpdateWithWhereUniqueWithoutReviewersInput[]
    updateMany?: NoteDefinitionUpdateManyWithWhereWithoutReviewersInput | NoteDefinitionUpdateManyWithWhereWithoutReviewersInput[]
    deleteMany?: NoteDefinitionScalarWhereInput | NoteDefinitionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedEnumGitProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GitProviderType | EnumGitProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGitProviderTypeFilter<$PrismaModel> | $Enums.GitProviderType
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGitProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GitProviderType | EnumGitProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GitProviderType[] | ListEnumGitProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGitProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.GitProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGitProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumGitProviderTypeFilter<$PrismaModel>
  }

  export type NestedEnumAiProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AiProviderType | EnumAiProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAiProviderTypeFilter<$PrismaModel> | $Enums.AiProviderType
  }

  export type NestedEnumAiProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AiProviderType | EnumAiProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AiProviderType[] | ListEnumAiProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAiProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.AiProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAiProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumAiProviderTypeFilter<$PrismaModel>
  }

  export type NestedEnumReviewStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusFilter<$PrismaModel> | $Enums.ReviewStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewStatus | EnumReviewStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewStatus[] | ListEnumReviewStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReviewStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewStatusFilter<$PrismaModel>
    _max?: NestedEnumReviewStatusFilter<$PrismaModel>
  }

  export type NestedEnumCommentLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentLocation | EnumCommentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentLocationFilter<$PrismaModel> | $Enums.CommentLocation
  }

  export type NestedEnumCommentLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentLocation | EnumCommentLocationFieldRefInput<$PrismaModel>
    in?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommentLocation[] | ListEnumCommentLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumCommentLocationWithAggregatesFilter<$PrismaModel> | $Enums.CommentLocation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentLocationFilter<$PrismaModel>
    _max?: NestedEnumCommentLocationFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewerCreateWithoutProjectsInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider: AiProviderCreateNestedOneWithoutReviewerInput
    reviews?: ReviewCreateNestedManyWithoutReviewersInput
    comments?: CommentCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    aiProviderId: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewersInput
    comments?: CommentUncheckedCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionUncheckedCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerCreateOrConnectWithoutProjectsInput = {
    where: ReviewerWhereUniqueInput
    create: XOR<ReviewerCreateWithoutProjectsInput, ReviewerUncheckedCreateWithoutProjectsInput>
  }

  export type MergeRequestCreateWithoutProjectInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutMergeRequestInput
  }

  export type MergeRequestUncheckedCreateWithoutProjectInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutMergeRequestInput
  }

  export type MergeRequestCreateOrConnectWithoutProjectInput = {
    where: MergeRequestWhereUniqueInput
    create: XOR<MergeRequestCreateWithoutProjectInput, MergeRequestUncheckedCreateWithoutProjectInput>
  }

  export type MergeRequestCreateManyProjectInputEnvelope = {
    data: MergeRequestCreateManyProjectInput | MergeRequestCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type GitConnectorCreateWithoutProjectsInput = {
    id?: string
    type: $Enums.GitProviderType
    config: string
    createdAt?: Date | string
  }

  export type GitConnectorUncheckedCreateWithoutProjectsInput = {
    id?: string
    type: $Enums.GitProviderType
    config: string
    createdAt?: Date | string
  }

  export type GitConnectorCreateOrConnectWithoutProjectsInput = {
    where: GitConnectorWhereUniqueInput
    create: XOR<GitConnectorCreateWithoutProjectsInput, GitConnectorUncheckedCreateWithoutProjectsInput>
  }

  export type ReviewerUpsertWithWhereUniqueWithoutProjectsInput = {
    where: ReviewerWhereUniqueInput
    update: XOR<ReviewerUpdateWithoutProjectsInput, ReviewerUncheckedUpdateWithoutProjectsInput>
    create: XOR<ReviewerCreateWithoutProjectsInput, ReviewerUncheckedCreateWithoutProjectsInput>
  }

  export type ReviewerUpdateWithWhereUniqueWithoutProjectsInput = {
    where: ReviewerWhereUniqueInput
    data: XOR<ReviewerUpdateWithoutProjectsInput, ReviewerUncheckedUpdateWithoutProjectsInput>
  }

  export type ReviewerUpdateManyWithWhereWithoutProjectsInput = {
    where: ReviewerScalarWhereInput
    data: XOR<ReviewerUpdateManyMutationInput, ReviewerUncheckedUpdateManyWithoutProjectsInput>
  }

  export type ReviewerScalarWhereInput = {
    AND?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
    OR?: ReviewerScalarWhereInput[]
    NOT?: ReviewerScalarWhereInput | ReviewerScalarWhereInput[]
    id?: UuidFilter<"Reviewer"> | string
    name?: StringFilter<"Reviewer"> | string
    aiProviderId?: UuidFilter<"Reviewer"> | string
    systemPrompt?: StringNullableFilter<"Reviewer"> | string | null
    systemPromptEnabled?: BoolFilter<"Reviewer"> | boolean
    useProjectInstructions?: BoolFilter<"Reviewer"> | boolean
  }

  export type MergeRequestUpsertWithWhereUniqueWithoutProjectInput = {
    where: MergeRequestWhereUniqueInput
    update: XOR<MergeRequestUpdateWithoutProjectInput, MergeRequestUncheckedUpdateWithoutProjectInput>
    create: XOR<MergeRequestCreateWithoutProjectInput, MergeRequestUncheckedCreateWithoutProjectInput>
  }

  export type MergeRequestUpdateWithWhereUniqueWithoutProjectInput = {
    where: MergeRequestWhereUniqueInput
    data: XOR<MergeRequestUpdateWithoutProjectInput, MergeRequestUncheckedUpdateWithoutProjectInput>
  }

  export type MergeRequestUpdateManyWithWhereWithoutProjectInput = {
    where: MergeRequestScalarWhereInput
    data: XOR<MergeRequestUpdateManyMutationInput, MergeRequestUncheckedUpdateManyWithoutProjectInput>
  }

  export type MergeRequestScalarWhereInput = {
    AND?: MergeRequestScalarWhereInput | MergeRequestScalarWhereInput[]
    OR?: MergeRequestScalarWhereInput[]
    NOT?: MergeRequestScalarWhereInput | MergeRequestScalarWhereInput[]
    id?: UuidFilter<"MergeRequest"> | string
    originId?: StringFilter<"MergeRequest"> | string
    name?: StringFilter<"MergeRequest"> | string
    url?: StringFilter<"MergeRequest"> | string
    sourceBranch?: StringFilter<"MergeRequest"> | string
    targetBranch?: StringFilter<"MergeRequest"> | string
    authorName?: StringFilter<"MergeRequest"> | string
    authorAvatarUrl?: StringNullableFilter<"MergeRequest"> | string | null
    createdAt?: DateTimeFilter<"MergeRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MergeRequest"> | Date | string
    projectId?: UuidFilter<"MergeRequest"> | string
  }

  export type GitConnectorUpsertWithoutProjectsInput = {
    update: XOR<GitConnectorUpdateWithoutProjectsInput, GitConnectorUncheckedUpdateWithoutProjectsInput>
    create: XOR<GitConnectorCreateWithoutProjectsInput, GitConnectorUncheckedCreateWithoutProjectsInput>
    where?: GitConnectorWhereInput
  }

  export type GitConnectorUpdateToOneWithWhereWithoutProjectsInput = {
    where?: GitConnectorWhereInput
    data: XOR<GitConnectorUpdateWithoutProjectsInput, GitConnectorUncheckedUpdateWithoutProjectsInput>
  }

  export type GitConnectorUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitConnectorUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    config?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitProjectCreateWithoutConnectorInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    reviewers?: ReviewerCreateNestedManyWithoutProjectsInput
    mergeRequests?: MergeRequestCreateNestedManyWithoutProjectInput
  }

  export type GitProjectUncheckedCreateWithoutConnectorInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutProjectsInput
    mergeRequests?: MergeRequestUncheckedCreateNestedManyWithoutProjectInput
  }

  export type GitProjectCreateOrConnectWithoutConnectorInput = {
    where: GitProjectWhereUniqueInput
    create: XOR<GitProjectCreateWithoutConnectorInput, GitProjectUncheckedCreateWithoutConnectorInput>
  }

  export type GitProjectCreateManyConnectorInputEnvelope = {
    data: GitProjectCreateManyConnectorInput | GitProjectCreateManyConnectorInput[]
    skipDuplicates?: boolean
  }

  export type GitProjectUpsertWithWhereUniqueWithoutConnectorInput = {
    where: GitProjectWhereUniqueInput
    update: XOR<GitProjectUpdateWithoutConnectorInput, GitProjectUncheckedUpdateWithoutConnectorInput>
    create: XOR<GitProjectCreateWithoutConnectorInput, GitProjectUncheckedCreateWithoutConnectorInput>
  }

  export type GitProjectUpdateWithWhereUniqueWithoutConnectorInput = {
    where: GitProjectWhereUniqueInput
    data: XOR<GitProjectUpdateWithoutConnectorInput, GitProjectUncheckedUpdateWithoutConnectorInput>
  }

  export type GitProjectUpdateManyWithWhereWithoutConnectorInput = {
    where: GitProjectScalarWhereInput
    data: XOR<GitProjectUpdateManyMutationInput, GitProjectUncheckedUpdateManyWithoutConnectorInput>
  }

  export type GitProjectScalarWhereInput = {
    AND?: GitProjectScalarWhereInput | GitProjectScalarWhereInput[]
    OR?: GitProjectScalarWhereInput[]
    NOT?: GitProjectScalarWhereInput | GitProjectScalarWhereInput[]
    id?: UuidFilter<"GitProject"> | string
    originId?: StringFilter<"GitProject"> | string
    url?: StringFilter<"GitProject"> | string
    name?: StringFilter<"GitProject"> | string
    fullName?: StringFilter<"GitProject"> | string
    providerType?: EnumGitProviderTypeFilter<"GitProject"> | $Enums.GitProviderType
    createdAt?: DateTimeFilter<"GitProject"> | Date | string
    ignoreDraft?: BoolFilter<"GitProject"> | boolean
    ignoreList?: StringNullableFilter<"GitProject"> | string | null
    ignorePattern?: StringNullableFilter<"GitProject"> | string | null
    instructionFile?: StringNullableFilter<"GitProject"> | string | null
    customInstructionFile?: BoolFilter<"GitProject"> | boolean
    connectorId?: UuidFilter<"GitProject"> | string
  }

  export type ReviewerCreateWithoutAiProviderInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    projects?: GitProjectCreateNestedManyWithoutReviewersInput
    reviews?: ReviewCreateNestedManyWithoutReviewersInput
    comments?: CommentCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerUncheckedCreateWithoutAiProviderInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    projects?: GitProjectUncheckedCreateNestedManyWithoutReviewersInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewersInput
    comments?: CommentUncheckedCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionUncheckedCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerCreateOrConnectWithoutAiProviderInput = {
    where: ReviewerWhereUniqueInput
    create: XOR<ReviewerCreateWithoutAiProviderInput, ReviewerUncheckedCreateWithoutAiProviderInput>
  }

  export type ReviewerCreateManyAiProviderInputEnvelope = {
    data: ReviewerCreateManyAiProviderInput | ReviewerCreateManyAiProviderInput[]
    skipDuplicates?: boolean
  }

  export type ReviewerUpsertWithWhereUniqueWithoutAiProviderInput = {
    where: ReviewerWhereUniqueInput
    update: XOR<ReviewerUpdateWithoutAiProviderInput, ReviewerUncheckedUpdateWithoutAiProviderInput>
    create: XOR<ReviewerCreateWithoutAiProviderInput, ReviewerUncheckedCreateWithoutAiProviderInput>
  }

  export type ReviewerUpdateWithWhereUniqueWithoutAiProviderInput = {
    where: ReviewerWhereUniqueInput
    data: XOR<ReviewerUpdateWithoutAiProviderInput, ReviewerUncheckedUpdateWithoutAiProviderInput>
  }

  export type ReviewerUpdateManyWithWhereWithoutAiProviderInput = {
    where: ReviewerScalarWhereInput
    data: XOR<ReviewerUpdateManyMutationInput, ReviewerUncheckedUpdateManyWithoutAiProviderInput>
  }

  export type ReviewCreateWithoutMergeRequestInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    comments?: CommentCreateNestedManyWithoutReviewInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutMergeRequestInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReviewInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutMergeRequestInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMergeRequestInput, ReviewUncheckedCreateWithoutMergeRequestInput>
  }

  export type ReviewCreateManyMergeRequestInputEnvelope = {
    data: ReviewCreateManyMergeRequestInput | ReviewCreateManyMergeRequestInput[]
    skipDuplicates?: boolean
  }

  export type GitProjectCreateWithoutMergeRequestsInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    reviewers?: ReviewerCreateNestedManyWithoutProjectsInput
    connector: GitConnectorCreateNestedOneWithoutProjectsInput
  }

  export type GitProjectUncheckedCreateWithoutMergeRequestsInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    connectorId: string
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type GitProjectCreateOrConnectWithoutMergeRequestsInput = {
    where: GitProjectWhereUniqueInput
    create: XOR<GitProjectCreateWithoutMergeRequestsInput, GitProjectUncheckedCreateWithoutMergeRequestsInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutMergeRequestInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMergeRequestInput, ReviewUncheckedUpdateWithoutMergeRequestInput>
    create: XOR<ReviewCreateWithoutMergeRequestInput, ReviewUncheckedCreateWithoutMergeRequestInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMergeRequestInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMergeRequestInput, ReviewUncheckedUpdateWithoutMergeRequestInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMergeRequestInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutMergeRequestInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: UuidFilter<"Review"> | string
    at?: DateTimeFilter<"Review"> | Date | string
    diffs?: JsonFilter<"Review">
    addedLines?: IntFilter<"Review"> | number
    removedLines?: IntFilter<"Review"> | number
    status?: EnumReviewStatusFilter<"Review"> | $Enums.ReviewStatus
    errorMessage?: StringNullableFilter<"Review"> | string | null
    mergeRequestId?: UuidFilter<"Review"> | string
  }

  export type GitProjectUpsertWithoutMergeRequestsInput = {
    update: XOR<GitProjectUpdateWithoutMergeRequestsInput, GitProjectUncheckedUpdateWithoutMergeRequestsInput>
    create: XOR<GitProjectCreateWithoutMergeRequestsInput, GitProjectUncheckedCreateWithoutMergeRequestsInput>
    where?: GitProjectWhereInput
  }

  export type GitProjectUpdateToOneWithWhereWithoutMergeRequestsInput = {
    where?: GitProjectWhereInput
    data: XOR<GitProjectUpdateWithoutMergeRequestsInput, GitProjectUncheckedUpdateWithoutMergeRequestsInput>
  }

  export type GitProjectUpdateWithoutMergeRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    reviewers?: ReviewerUpdateManyWithoutProjectsNestedInput
    connector?: GitConnectorUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type GitProjectUncheckedUpdateWithoutMergeRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    connectorId?: StringFieldUpdateOperationsInput | string
    reviewers?: ReviewerUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type MergeRequestCreateWithoutReviewsInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: GitProjectCreateNestedOneWithoutMergeRequestsInput
  }

  export type MergeRequestUncheckedCreateWithoutReviewsInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type MergeRequestCreateOrConnectWithoutReviewsInput = {
    where: MergeRequestWhereUniqueInput
    create: XOR<MergeRequestCreateWithoutReviewsInput, MergeRequestUncheckedCreateWithoutReviewsInput>
  }

  export type CommentCreateWithoutReviewInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    reviewer: ReviewerCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutReviewInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    reviewerId: string
  }

  export type CommentCreateOrConnectWithoutReviewInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput>
  }

  export type CommentCreateManyReviewInputEnvelope = {
    data: CommentCreateManyReviewInput | CommentCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ReviewNoteCreateWithoutReviewInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewer: ReviewerCreateNestedOneWithoutReviewNotesInput
    noteDefinition: NoteDefinitionCreateNestedOneWithoutReviewNotesInput
  }

  export type ReviewNoteUncheckedCreateWithoutReviewInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewerId: string
    noteDefinitionId: string
  }

  export type ReviewNoteCreateOrConnectWithoutReviewInput = {
    where: ReviewNoteWhereUniqueInput
    create: XOR<ReviewNoteCreateWithoutReviewInput, ReviewNoteUncheckedCreateWithoutReviewInput>
  }

  export type ReviewNoteCreateManyReviewInputEnvelope = {
    data: ReviewNoteCreateManyReviewInput | ReviewNoteCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type ReviewerCreateWithoutReviewsInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider: AiProviderCreateNestedOneWithoutReviewerInput
    projects?: GitProjectCreateNestedManyWithoutReviewersInput
    comments?: CommentCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    aiProviderId: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    projects?: GitProjectUncheckedCreateNestedManyWithoutReviewersInput
    comments?: CommentUncheckedCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionUncheckedCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerCreateOrConnectWithoutReviewsInput = {
    where: ReviewerWhereUniqueInput
    create: XOR<ReviewerCreateWithoutReviewsInput, ReviewerUncheckedCreateWithoutReviewsInput>
  }

  export type MergeRequestUpsertWithoutReviewsInput = {
    update: XOR<MergeRequestUpdateWithoutReviewsInput, MergeRequestUncheckedUpdateWithoutReviewsInput>
    create: XOR<MergeRequestCreateWithoutReviewsInput, MergeRequestUncheckedCreateWithoutReviewsInput>
    where?: MergeRequestWhereInput
  }

  export type MergeRequestUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MergeRequestWhereInput
    data: XOR<MergeRequestUpdateWithoutReviewsInput, MergeRequestUncheckedUpdateWithoutReviewsInput>
  }

  export type MergeRequestUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: GitProjectUpdateOneRequiredWithoutMergeRequestsNestedInput
  }

  export type MergeRequestUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpsertWithWhereUniqueWithoutReviewInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutReviewInput, CommentUncheckedUpdateWithoutReviewInput>
    create: XOR<CommentCreateWithoutReviewInput, CommentUncheckedCreateWithoutReviewInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutReviewInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutReviewInput, CommentUncheckedUpdateWithoutReviewInput>
  }

  export type CommentUpdateManyWithWhereWithoutReviewInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutReviewInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: UuidFilter<"Comment"> | string
    location?: EnumCommentLocationFilter<"Comment"> | $Enums.CommentLocation
    fileId?: StringFilter<"Comment"> | string
    line?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    thumbsUp?: IntFilter<"Comment"> | number
    thumbsDown?: IntFilter<"Comment"> | number
    reviewId?: UuidFilter<"Comment"> | string
    reviewerId?: UuidFilter<"Comment"> | string
  }

  export type ReviewNoteUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewNoteWhereUniqueInput
    update: XOR<ReviewNoteUpdateWithoutReviewInput, ReviewNoteUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewNoteCreateWithoutReviewInput, ReviewNoteUncheckedCreateWithoutReviewInput>
  }

  export type ReviewNoteUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewNoteWhereUniqueInput
    data: XOR<ReviewNoteUpdateWithoutReviewInput, ReviewNoteUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewNoteUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewNoteScalarWhereInput
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewNoteScalarWhereInput = {
    AND?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
    OR?: ReviewNoteScalarWhereInput[]
    NOT?: ReviewNoteScalarWhereInput | ReviewNoteScalarWhereInput[]
    id?: UuidFilter<"ReviewNote"> | string
    content?: StringFilter<"ReviewNote"> | string
    createdAt?: DateTimeFilter<"ReviewNote"> | Date | string
    reviewId?: UuidFilter<"ReviewNote"> | string
    reviewerId?: UuidFilter<"ReviewNote"> | string
    noteDefinitionId?: UuidFilter<"ReviewNote"> | string
  }

  export type ReviewerUpsertWithWhereUniqueWithoutReviewsInput = {
    where: ReviewerWhereUniqueInput
    update: XOR<ReviewerUpdateWithoutReviewsInput, ReviewerUncheckedUpdateWithoutReviewsInput>
    create: XOR<ReviewerCreateWithoutReviewsInput, ReviewerUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewerUpdateWithWhereUniqueWithoutReviewsInput = {
    where: ReviewerWhereUniqueInput
    data: XOR<ReviewerUpdateWithoutReviewsInput, ReviewerUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewerUpdateManyWithWhereWithoutReviewsInput = {
    where: ReviewerScalarWhereInput
    data: XOR<ReviewerUpdateManyMutationInput, ReviewerUncheckedUpdateManyWithoutReviewsInput>
  }

  export type ReviewCreateWithoutCommentsInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequest: MergeRequestCreateNestedOneWithoutReviewsInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutCommentsInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequestId: string
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutCommentsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCommentsInput, ReviewUncheckedCreateWithoutCommentsInput>
  }

  export type ReviewerCreateWithoutCommentsInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider: AiProviderCreateNestedOneWithoutReviewerInput
    projects?: GitProjectCreateNestedManyWithoutReviewersInput
    reviews?: ReviewCreateNestedManyWithoutReviewersInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    aiProviderId: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    projects?: GitProjectUncheckedCreateNestedManyWithoutReviewersInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewersInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionUncheckedCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerCreateOrConnectWithoutCommentsInput = {
    where: ReviewerWhereUniqueInput
    create: XOR<ReviewerCreateWithoutCommentsInput, ReviewerUncheckedCreateWithoutCommentsInput>
  }

  export type ReviewUpsertWithoutCommentsInput = {
    update: XOR<ReviewUpdateWithoutCommentsInput, ReviewUncheckedUpdateWithoutCommentsInput>
    create: XOR<ReviewCreateWithoutCommentsInput, ReviewUncheckedCreateWithoutCommentsInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutCommentsInput, ReviewUncheckedUpdateWithoutCommentsInput>
  }

  export type ReviewUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequest?: MergeRequestUpdateOneRequiredWithoutReviewsNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequestId?: StringFieldUpdateOperationsInput | string
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewerUpsertWithoutCommentsInput = {
    update: XOR<ReviewerUpdateWithoutCommentsInput, ReviewerUncheckedUpdateWithoutCommentsInput>
    create: XOR<ReviewerCreateWithoutCommentsInput, ReviewerUncheckedCreateWithoutCommentsInput>
    where?: ReviewerWhereInput
  }

  export type ReviewerUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ReviewerWhereInput
    data: XOR<ReviewerUpdateWithoutCommentsInput, ReviewerUncheckedUpdateWithoutCommentsInput>
  }

  export type ReviewerUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    aiProvider?: AiProviderUpdateOneRequiredWithoutReviewerNestedInput
    projects?: GitProjectUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUpdateManyWithoutReviewersNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    projects?: GitProjectUncheckedUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewersNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUncheckedUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerCreateWithoutNoteDefinitionsInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider: AiProviderCreateNestedOneWithoutReviewerInput
    projects?: GitProjectCreateNestedManyWithoutReviewersInput
    reviews?: ReviewCreateNestedManyWithoutReviewersInput
    comments?: CommentCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewerInput
  }

  export type ReviewerUncheckedCreateWithoutNoteDefinitionsInput = {
    id?: string
    name: string
    aiProviderId: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    projects?: GitProjectUncheckedCreateNestedManyWithoutReviewersInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewersInput
    comments?: CommentUncheckedCreateNestedManyWithoutReviewerInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type ReviewerCreateOrConnectWithoutNoteDefinitionsInput = {
    where: ReviewerWhereUniqueInput
    create: XOR<ReviewerCreateWithoutNoteDefinitionsInput, ReviewerUncheckedCreateWithoutNoteDefinitionsInput>
  }

  export type ReviewNoteCreateWithoutNoteDefinitionInput = {
    id?: string
    content: string
    createdAt?: Date | string
    review: ReviewCreateNestedOneWithoutReviewNotesInput
    reviewer: ReviewerCreateNestedOneWithoutReviewNotesInput
  }

  export type ReviewNoteUncheckedCreateWithoutNoteDefinitionInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewId: string
    reviewerId: string
  }

  export type ReviewNoteCreateOrConnectWithoutNoteDefinitionInput = {
    where: ReviewNoteWhereUniqueInput
    create: XOR<ReviewNoteCreateWithoutNoteDefinitionInput, ReviewNoteUncheckedCreateWithoutNoteDefinitionInput>
  }

  export type ReviewNoteCreateManyNoteDefinitionInputEnvelope = {
    data: ReviewNoteCreateManyNoteDefinitionInput | ReviewNoteCreateManyNoteDefinitionInput[]
    skipDuplicates?: boolean
  }

  export type ReviewerUpsertWithWhereUniqueWithoutNoteDefinitionsInput = {
    where: ReviewerWhereUniqueInput
    update: XOR<ReviewerUpdateWithoutNoteDefinitionsInput, ReviewerUncheckedUpdateWithoutNoteDefinitionsInput>
    create: XOR<ReviewerCreateWithoutNoteDefinitionsInput, ReviewerUncheckedCreateWithoutNoteDefinitionsInput>
  }

  export type ReviewerUpdateWithWhereUniqueWithoutNoteDefinitionsInput = {
    where: ReviewerWhereUniqueInput
    data: XOR<ReviewerUpdateWithoutNoteDefinitionsInput, ReviewerUncheckedUpdateWithoutNoteDefinitionsInput>
  }

  export type ReviewerUpdateManyWithWhereWithoutNoteDefinitionsInput = {
    where: ReviewerScalarWhereInput
    data: XOR<ReviewerUpdateManyMutationInput, ReviewerUncheckedUpdateManyWithoutNoteDefinitionsInput>
  }

  export type ReviewNoteUpsertWithWhereUniqueWithoutNoteDefinitionInput = {
    where: ReviewNoteWhereUniqueInput
    update: XOR<ReviewNoteUpdateWithoutNoteDefinitionInput, ReviewNoteUncheckedUpdateWithoutNoteDefinitionInput>
    create: XOR<ReviewNoteCreateWithoutNoteDefinitionInput, ReviewNoteUncheckedCreateWithoutNoteDefinitionInput>
  }

  export type ReviewNoteUpdateWithWhereUniqueWithoutNoteDefinitionInput = {
    where: ReviewNoteWhereUniqueInput
    data: XOR<ReviewNoteUpdateWithoutNoteDefinitionInput, ReviewNoteUncheckedUpdateWithoutNoteDefinitionInput>
  }

  export type ReviewNoteUpdateManyWithWhereWithoutNoteDefinitionInput = {
    where: ReviewNoteScalarWhereInput
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyWithoutNoteDefinitionInput>
  }

  export type ReviewCreateWithoutReviewNotesInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequest: MergeRequestCreateNestedOneWithoutReviewsInput
    comments?: CommentCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewNotesInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequestId: string
    comments?: CommentUncheckedCreateNestedManyWithoutReviewInput
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutReviewNotesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewNotesInput, ReviewUncheckedCreateWithoutReviewNotesInput>
  }

  export type ReviewerCreateWithoutReviewNotesInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    aiProvider: AiProviderCreateNestedOneWithoutReviewerInput
    projects?: GitProjectCreateNestedManyWithoutReviewersInput
    reviews?: ReviewCreateNestedManyWithoutReviewersInput
    comments?: CommentCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerUncheckedCreateWithoutReviewNotesInput = {
    id?: string
    name: string
    aiProviderId: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
    projects?: GitProjectUncheckedCreateNestedManyWithoutReviewersInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewersInput
    comments?: CommentUncheckedCreateNestedManyWithoutReviewerInput
    noteDefinitions?: NoteDefinitionUncheckedCreateNestedManyWithoutReviewersInput
  }

  export type ReviewerCreateOrConnectWithoutReviewNotesInput = {
    where: ReviewerWhereUniqueInput
    create: XOR<ReviewerCreateWithoutReviewNotesInput, ReviewerUncheckedCreateWithoutReviewNotesInput>
  }

  export type NoteDefinitionCreateWithoutReviewNotesInput = {
    id?: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewers?: ReviewerCreateNestedManyWithoutNoteDefinitionsInput
  }

  export type NoteDefinitionUncheckedCreateWithoutReviewNotesInput = {
    id?: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewers?: ReviewerUncheckedCreateNestedManyWithoutNoteDefinitionsInput
  }

  export type NoteDefinitionCreateOrConnectWithoutReviewNotesInput = {
    where: NoteDefinitionWhereUniqueInput
    create: XOR<NoteDefinitionCreateWithoutReviewNotesInput, NoteDefinitionUncheckedCreateWithoutReviewNotesInput>
  }

  export type ReviewUpsertWithoutReviewNotesInput = {
    update: XOR<ReviewUpdateWithoutReviewNotesInput, ReviewUncheckedUpdateWithoutReviewNotesInput>
    create: XOR<ReviewCreateWithoutReviewNotesInput, ReviewUncheckedCreateWithoutReviewNotesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutReviewNotesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutReviewNotesInput, ReviewUncheckedUpdateWithoutReviewNotesInput>
  }

  export type ReviewUpdateWithoutReviewNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequest?: MergeRequestUpdateOneRequiredWithoutReviewsNestedInput
    comments?: CommentUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequestId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewerUpsertWithoutReviewNotesInput = {
    update: XOR<ReviewerUpdateWithoutReviewNotesInput, ReviewerUncheckedUpdateWithoutReviewNotesInput>
    create: XOR<ReviewerCreateWithoutReviewNotesInput, ReviewerUncheckedCreateWithoutReviewNotesInput>
    where?: ReviewerWhereInput
  }

  export type ReviewerUpdateToOneWithWhereWithoutReviewNotesInput = {
    where?: ReviewerWhereInput
    data: XOR<ReviewerUpdateWithoutReviewNotesInput, ReviewerUncheckedUpdateWithoutReviewNotesInput>
  }

  export type ReviewerUpdateWithoutReviewNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    aiProvider?: AiProviderUpdateOneRequiredWithoutReviewerNestedInput
    projects?: GitProjectUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUpdateManyWithoutReviewersNestedInput
    comments?: CommentUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateWithoutReviewNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    projects?: GitProjectUncheckedUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUncheckedUpdateManyWithoutReviewersNestedInput
  }

  export type NoteDefinitionUpsertWithoutReviewNotesInput = {
    update: XOR<NoteDefinitionUpdateWithoutReviewNotesInput, NoteDefinitionUncheckedUpdateWithoutReviewNotesInput>
    create: XOR<NoteDefinitionCreateWithoutReviewNotesInput, NoteDefinitionUncheckedCreateWithoutReviewNotesInput>
    where?: NoteDefinitionWhereInput
  }

  export type NoteDefinitionUpdateToOneWithWhereWithoutReviewNotesInput = {
    where?: NoteDefinitionWhereInput
    data: XOR<NoteDefinitionUpdateWithoutReviewNotesInput, NoteDefinitionUncheckedUpdateWithoutReviewNotesInput>
  }

  export type NoteDefinitionUpdateWithoutReviewNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewers?: ReviewerUpdateManyWithoutNoteDefinitionsNestedInput
  }

  export type NoteDefinitionUncheckedUpdateWithoutReviewNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewers?: ReviewerUncheckedUpdateManyWithoutNoteDefinitionsNestedInput
  }

  export type AiProviderCreateWithoutReviewerInput = {
    id?: string
    type: $Enums.AiProviderType
    baseUrl?: string | null
    apiKey?: string | null
    model: string
  }

  export type AiProviderUncheckedCreateWithoutReviewerInput = {
    id?: string
    type: $Enums.AiProviderType
    baseUrl?: string | null
    apiKey?: string | null
    model: string
  }

  export type AiProviderCreateOrConnectWithoutReviewerInput = {
    where: AiProviderWhereUniqueInput
    create: XOR<AiProviderCreateWithoutReviewerInput, AiProviderUncheckedCreateWithoutReviewerInput>
  }

  export type GitProjectCreateWithoutReviewersInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    mergeRequests?: MergeRequestCreateNestedManyWithoutProjectInput
    connector: GitConnectorCreateNestedOneWithoutProjectsInput
  }

  export type GitProjectUncheckedCreateWithoutReviewersInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
    connectorId: string
    mergeRequests?: MergeRequestUncheckedCreateNestedManyWithoutProjectInput
  }

  export type GitProjectCreateOrConnectWithoutReviewersInput = {
    where: GitProjectWhereUniqueInput
    create: XOR<GitProjectCreateWithoutReviewersInput, GitProjectUncheckedCreateWithoutReviewersInput>
  }

  export type ReviewCreateWithoutReviewersInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequest: MergeRequestCreateNestedOneWithoutReviewsInput
    comments?: CommentCreateNestedManyWithoutReviewInput
    reviewNotes?: ReviewNoteCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutReviewersInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
    mergeRequestId: string
    comments?: CommentUncheckedCreateNestedManyWithoutReviewInput
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutReviewersInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewersInput, ReviewUncheckedCreateWithoutReviewersInput>
  }

  export type CommentCreateWithoutReviewerInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    review: ReviewCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutReviewerInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    reviewId: string
  }

  export type CommentCreateOrConnectWithoutReviewerInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReviewerInput, CommentUncheckedCreateWithoutReviewerInput>
  }

  export type CommentCreateManyReviewerInputEnvelope = {
    data: CommentCreateManyReviewerInput | CommentCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewNoteCreateWithoutReviewerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    review: ReviewCreateNestedOneWithoutReviewNotesInput
    noteDefinition: NoteDefinitionCreateNestedOneWithoutReviewNotesInput
  }

  export type ReviewNoteUncheckedCreateWithoutReviewerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewId: string
    noteDefinitionId: string
  }

  export type ReviewNoteCreateOrConnectWithoutReviewerInput = {
    where: ReviewNoteWhereUniqueInput
    create: XOR<ReviewNoteCreateWithoutReviewerInput, ReviewNoteUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewNoteCreateManyReviewerInputEnvelope = {
    data: ReviewNoteCreateManyReviewerInput | ReviewNoteCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type NoteDefinitionCreateWithoutReviewersInput = {
    id?: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewNotes?: ReviewNoteCreateNestedManyWithoutNoteDefinitionInput
  }

  export type NoteDefinitionUncheckedCreateWithoutReviewersInput = {
    id?: string
    title: string
    tag: string
    systemPrompt: string
    publishToOrigin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewNotes?: ReviewNoteUncheckedCreateNestedManyWithoutNoteDefinitionInput
  }

  export type NoteDefinitionCreateOrConnectWithoutReviewersInput = {
    where: NoteDefinitionWhereUniqueInput
    create: XOR<NoteDefinitionCreateWithoutReviewersInput, NoteDefinitionUncheckedCreateWithoutReviewersInput>
  }

  export type AiProviderUpsertWithoutReviewerInput = {
    update: XOR<AiProviderUpdateWithoutReviewerInput, AiProviderUncheckedUpdateWithoutReviewerInput>
    create: XOR<AiProviderCreateWithoutReviewerInput, AiProviderUncheckedCreateWithoutReviewerInput>
    where?: AiProviderWhereInput
  }

  export type AiProviderUpdateToOneWithWhereWithoutReviewerInput = {
    where?: AiProviderWhereInput
    data: XOR<AiProviderUpdateWithoutReviewerInput, AiProviderUncheckedUpdateWithoutReviewerInput>
  }

  export type AiProviderUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAiProviderTypeFieldUpdateOperationsInput | $Enums.AiProviderType
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
  }

  export type AiProviderUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAiProviderTypeFieldUpdateOperationsInput | $Enums.AiProviderType
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    model?: StringFieldUpdateOperationsInput | string
  }

  export type GitProjectUpsertWithWhereUniqueWithoutReviewersInput = {
    where: GitProjectWhereUniqueInput
    update: XOR<GitProjectUpdateWithoutReviewersInput, GitProjectUncheckedUpdateWithoutReviewersInput>
    create: XOR<GitProjectCreateWithoutReviewersInput, GitProjectUncheckedCreateWithoutReviewersInput>
  }

  export type GitProjectUpdateWithWhereUniqueWithoutReviewersInput = {
    where: GitProjectWhereUniqueInput
    data: XOR<GitProjectUpdateWithoutReviewersInput, GitProjectUncheckedUpdateWithoutReviewersInput>
  }

  export type GitProjectUpdateManyWithWhereWithoutReviewersInput = {
    where: GitProjectScalarWhereInput
    data: XOR<GitProjectUpdateManyMutationInput, GitProjectUncheckedUpdateManyWithoutReviewersInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewersInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewersInput, ReviewUncheckedUpdateWithoutReviewersInput>
    create: XOR<ReviewCreateWithoutReviewersInput, ReviewUncheckedCreateWithoutReviewersInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewersInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewersInput, ReviewUncheckedUpdateWithoutReviewersInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewersInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewersInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutReviewerInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutReviewerInput, CommentUncheckedUpdateWithoutReviewerInput>
    create: XOR<CommentCreateWithoutReviewerInput, CommentUncheckedCreateWithoutReviewerInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutReviewerInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutReviewerInput, CommentUncheckedUpdateWithoutReviewerInput>
  }

  export type CommentUpdateManyWithWhereWithoutReviewerInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewNoteUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewNoteWhereUniqueInput
    update: XOR<ReviewNoteUpdateWithoutReviewerInput, ReviewNoteUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewNoteCreateWithoutReviewerInput, ReviewNoteUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewNoteUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewNoteWhereUniqueInput
    data: XOR<ReviewNoteUpdateWithoutReviewerInput, ReviewNoteUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewNoteUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewNoteScalarWhereInput
    data: XOR<ReviewNoteUpdateManyMutationInput, ReviewNoteUncheckedUpdateManyWithoutReviewerInput>
  }

  export type NoteDefinitionUpsertWithWhereUniqueWithoutReviewersInput = {
    where: NoteDefinitionWhereUniqueInput
    update: XOR<NoteDefinitionUpdateWithoutReviewersInput, NoteDefinitionUncheckedUpdateWithoutReviewersInput>
    create: XOR<NoteDefinitionCreateWithoutReviewersInput, NoteDefinitionUncheckedCreateWithoutReviewersInput>
  }

  export type NoteDefinitionUpdateWithWhereUniqueWithoutReviewersInput = {
    where: NoteDefinitionWhereUniqueInput
    data: XOR<NoteDefinitionUpdateWithoutReviewersInput, NoteDefinitionUncheckedUpdateWithoutReviewersInput>
  }

  export type NoteDefinitionUpdateManyWithWhereWithoutReviewersInput = {
    where: NoteDefinitionScalarWhereInput
    data: XOR<NoteDefinitionUpdateManyMutationInput, NoteDefinitionUncheckedUpdateManyWithoutReviewersInput>
  }

  export type NoteDefinitionScalarWhereInput = {
    AND?: NoteDefinitionScalarWhereInput | NoteDefinitionScalarWhereInput[]
    OR?: NoteDefinitionScalarWhereInput[]
    NOT?: NoteDefinitionScalarWhereInput | NoteDefinitionScalarWhereInput[]
    id?: UuidFilter<"NoteDefinition"> | string
    title?: StringFilter<"NoteDefinition"> | string
    tag?: StringFilter<"NoteDefinition"> | string
    systemPrompt?: StringFilter<"NoteDefinition"> | string
    publishToOrigin?: BoolFilter<"NoteDefinition"> | boolean
    createdAt?: DateTimeFilter<"NoteDefinition"> | Date | string
    updatedAt?: DateTimeFilter<"NoteDefinition"> | Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MergeRequestCreateManyProjectInput = {
    id?: string
    originId: string
    name: string
    url: string
    sourceBranch: string
    targetBranch: string
    authorName: string
    authorAvatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewerUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    aiProvider?: AiProviderUpdateOneRequiredWithoutReviewerNestedInput
    reviews?: ReviewUpdateManyWithoutReviewersNestedInput
    comments?: CommentUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    reviews?: ReviewUncheckedUpdateManyWithoutReviewersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUncheckedUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateManyWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MergeRequestUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutMergeRequestNestedInput
  }

  export type MergeRequestUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutMergeRequestNestedInput
  }

  export type MergeRequestUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    sourceBranch?: StringFieldUpdateOperationsInput | string
    targetBranch?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAvatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GitProjectCreateManyConnectorInput = {
    id?: string
    originId: string
    url: string
    name: string
    fullName: string
    providerType: $Enums.GitProviderType
    createdAt?: Date | string
    ignoreDraft?: boolean
    ignoreList?: string | null
    ignorePattern?: string | null
    instructionFile?: string | null
    customInstructionFile?: boolean
  }

  export type GitProjectUpdateWithoutConnectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    reviewers?: ReviewerUpdateManyWithoutProjectsNestedInput
    mergeRequests?: MergeRequestUpdateManyWithoutProjectNestedInput
  }

  export type GitProjectUncheckedUpdateWithoutConnectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    reviewers?: ReviewerUncheckedUpdateManyWithoutProjectsNestedInput
    mergeRequests?: MergeRequestUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type GitProjectUncheckedUpdateManyWithoutConnectorInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewerCreateManyAiProviderInput = {
    id?: string
    name: string
    systemPrompt?: string | null
    systemPromptEnabled?: boolean
    useProjectInstructions?: boolean
  }

  export type ReviewerUpdateWithoutAiProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    projects?: GitProjectUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUpdateManyWithoutReviewersNestedInput
    comments?: CommentUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateWithoutAiProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    projects?: GitProjectUncheckedUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUncheckedUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateManyWithoutAiProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewCreateManyMergeRequestInput = {
    id?: string
    at?: Date | string
    diffs: PrismaJson.GitMergeRequestDiffs
    addedLines: number
    removedLines: number
    status?: $Enums.ReviewStatus
    errorMessage?: string | null
  }

  export type ReviewUpdateWithoutMergeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutReviewNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutMergeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutReviewNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewNestedInput
    reviewers?: ReviewerUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutMergeRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: JsonNullValueInput | InputJsonValue
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyReviewInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    reviewerId: string
  }

  export type ReviewNoteCreateManyReviewInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewerId: string
    noteDefinitionId: string
  }

  export type CommentUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    reviewer?: ReviewerUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    reviewerId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    reviewerId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewNoteUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: ReviewerUpdateOneRequiredWithoutReviewNotesNestedInput
    noteDefinition?: NoteDefinitionUpdateOneRequiredWithoutReviewNotesNestedInput
  }

  export type ReviewNoteUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    noteDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewNoteUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    noteDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewerUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    aiProvider?: AiProviderUpdateOneRequiredWithoutReviewerNestedInput
    projects?: GitProjectUpdateManyWithoutReviewersNestedInput
    comments?: CommentUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    projects?: GitProjectUncheckedUpdateManyWithoutReviewersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewerNestedInput
    noteDefinitions?: NoteDefinitionUncheckedUpdateManyWithoutReviewersNestedInput
  }

  export type ReviewerUncheckedUpdateManyWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewNoteCreateManyNoteDefinitionInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewId: string
    reviewerId: string
  }

  export type ReviewerUpdateWithoutNoteDefinitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    aiProvider?: AiProviderUpdateOneRequiredWithoutReviewerNestedInput
    projects?: GitProjectUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUpdateManyWithoutReviewersNestedInput
    comments?: CommentUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewerNestedInput
  }

  export type ReviewerUncheckedUpdateWithoutNoteDefinitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
    projects?: GitProjectUncheckedUpdateManyWithoutReviewersNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewersNestedInput
    comments?: CommentUncheckedUpdateManyWithoutReviewerNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type ReviewerUncheckedUpdateManyWithoutNoteDefinitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    aiProviderId?: StringFieldUpdateOperationsInput | string
    systemPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    systemPromptEnabled?: BoolFieldUpdateOperationsInput | boolean
    useProjectInstructions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewNoteUpdateWithoutNoteDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutReviewNotesNestedInput
    reviewer?: ReviewerUpdateOneRequiredWithoutReviewNotesNestedInput
  }

  export type ReviewNoteUncheckedUpdateWithoutNoteDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewNoteUncheckedUpdateManyWithoutNoteDefinitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyReviewerInput = {
    id?: string
    location: $Enums.CommentLocation
    fileId: string
    line: number
    text: string
    createdAt?: Date | string
    thumbsUp?: number
    thumbsDown?: number
    reviewId: string
  }

  export type ReviewNoteCreateManyReviewerInput = {
    id?: string
    content: string
    createdAt?: Date | string
    reviewId: string
    noteDefinitionId: string
  }

  export type GitProjectUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    mergeRequests?: MergeRequestUpdateManyWithoutProjectNestedInput
    connector?: GitConnectorUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type GitProjectUncheckedUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    connectorId?: StringFieldUpdateOperationsInput | string
    mergeRequests?: MergeRequestUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type GitProjectUncheckedUpdateManyWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    originId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    providerType?: EnumGitProviderTypeFieldUpdateOperationsInput | $Enums.GitProviderType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ignoreDraft?: BoolFieldUpdateOperationsInput | boolean
    ignoreList?: NullableStringFieldUpdateOperationsInput | string | null
    ignorePattern?: NullableStringFieldUpdateOperationsInput | string | null
    instructionFile?: NullableStringFieldUpdateOperationsInput | string | null
    customInstructionFile?: BoolFieldUpdateOperationsInput | boolean
    connectorId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequest?: MergeRequestUpdateOneRequiredWithoutReviewsNestedInput
    comments?: CommentUpdateManyWithoutReviewNestedInput
    reviewNotes?: ReviewNoteUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: PrismaJson.GitMergeRequestDiffs
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequestId?: StringFieldUpdateOperationsInput | string
    comments?: CommentUncheckedUpdateManyWithoutReviewNestedInput
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    at?: DateTimeFieldUpdateOperationsInput | Date | string
    diffs?: JsonNullValueInput | InputJsonValue
    addedLines?: IntFieldUpdateOperationsInput | number
    removedLines?: IntFieldUpdateOperationsInput | number
    status?: EnumReviewStatusFieldUpdateOperationsInput | $Enums.ReviewStatus
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    mergeRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    review?: ReviewUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: EnumCommentLocationFieldUpdateOperationsInput | $Enums.CommentLocation
    fileId?: StringFieldUpdateOperationsInput | string
    line?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    thumbsUp?: IntFieldUpdateOperationsInput | number
    thumbsDown?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewNoteUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutReviewNotesNestedInput
    noteDefinition?: NoteDefinitionUpdateOneRequiredWithoutReviewNotesNestedInput
  }

  export type ReviewNoteUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: StringFieldUpdateOperationsInput | string
    noteDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewNoteUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: StringFieldUpdateOperationsInput | string
    noteDefinitionId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteDefinitionUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewNotes?: ReviewNoteUpdateManyWithoutNoteDefinitionNestedInput
  }

  export type NoteDefinitionUncheckedUpdateWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewNotes?: ReviewNoteUncheckedUpdateManyWithoutNoteDefinitionNestedInput
  }

  export type NoteDefinitionUncheckedUpdateManyWithoutReviewersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    systemPrompt?: StringFieldUpdateOperationsInput | string
    publishToOrigin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}