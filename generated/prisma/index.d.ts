
/**
 * Client
**/

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
 * Model Curation
 * 
 */
export type Curation = $Result.DefaultSelection<Prisma.$CurationPayload>
/**
 * Model CurationItem
 * 
 */
export type CurationItem = $Result.DefaultSelection<Prisma.$CurationItemPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model CurationTag
 * 
 */
export type CurationTag = $Result.DefaultSelection<Prisma.$CurationTagPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  admin: 'admin',
  editor: 'editor',
  viewer: 'viewer'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CurationStatus: {
  draft: 'draft',
  published: 'published',
  archived: 'archived'
};

export type CurationStatus = (typeof CurationStatus)[keyof typeof CurationStatus]


export const MessageStatus: {
  new: 'new',
  read: 'read',
  replied: 'replied',
  archived: 'archived'
};

export type MessageStatus = (typeof MessageStatus)[keyof typeof MessageStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CurationStatus = $Enums.CurationStatus

export const CurationStatus: typeof $Enums.CurationStatus

export type MessageStatus = $Enums.MessageStatus

export const MessageStatus: typeof $Enums.MessageStatus

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.curation`: Exposes CRUD operations for the **Curation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curations
    * const curations = await prisma.curation.findMany()
    * ```
    */
  get curation(): Prisma.CurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curationItem`: Exposes CRUD operations for the **CurationItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurationItems
    * const curationItems = await prisma.curationItem.findMany()
    * ```
    */
  get curationItem(): Prisma.CurationItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curationTag`: Exposes CRUD operations for the **CurationTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurationTags
    * const curationTags = await prisma.curationTag.findMany()
    * ```
    */
  get curationTag(): Prisma.CurationTagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Curation: 'Curation',
    CurationItem: 'CurationItem',
    Message: 'Message',
    Tag: 'Tag',
    CurationTag: 'CurationTag'
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
      modelProps: "user" | "curation" | "curationItem" | "message" | "tag" | "curationTag"
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
      Curation: {
        payload: Prisma.$CurationPayload<ExtArgs>
        fields: Prisma.CurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>
          }
          findFirst: {
            args: Prisma.CurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>
          }
          findMany: {
            args: Prisma.CurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>[]
          }
          create: {
            args: Prisma.CurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>
          }
          createMany: {
            args: Prisma.CurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>[]
          }
          delete: {
            args: Prisma.CurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>
          }
          update: {
            args: Prisma.CurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>
          }
          deleteMany: {
            args: Prisma.CurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>[]
          }
          upsert: {
            args: Prisma.CurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationPayload>
          }
          aggregate: {
            args: Prisma.CurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuration>
          }
          groupBy: {
            args: Prisma.CurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurationCountArgs<ExtArgs>
            result: $Utils.Optional<CurationCountAggregateOutputType> | number
          }
        }
      }
      CurationItem: {
        payload: Prisma.$CurationItemPayload<ExtArgs>
        fields: Prisma.CurationItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurationItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurationItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>
          }
          findFirst: {
            args: Prisma.CurationItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurationItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>
          }
          findMany: {
            args: Prisma.CurationItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>[]
          }
          create: {
            args: Prisma.CurationItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>
          }
          createMany: {
            args: Prisma.CurationItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurationItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>[]
          }
          delete: {
            args: Prisma.CurationItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>
          }
          update: {
            args: Prisma.CurationItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>
          }
          deleteMany: {
            args: Prisma.CurationItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurationItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurationItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>[]
          }
          upsert: {
            args: Prisma.CurationItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationItemPayload>
          }
          aggregate: {
            args: Prisma.CurationItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurationItem>
          }
          groupBy: {
            args: Prisma.CurationItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurationItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurationItemCountArgs<ExtArgs>
            result: $Utils.Optional<CurationItemCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      CurationTag: {
        payload: Prisma.$CurationTagPayload<ExtArgs>
        fields: Prisma.CurationTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurationTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurationTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>
          }
          findFirst: {
            args: Prisma.CurationTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurationTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>
          }
          findMany: {
            args: Prisma.CurationTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>[]
          }
          create: {
            args: Prisma.CurationTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>
          }
          createMany: {
            args: Prisma.CurationTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurationTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>[]
          }
          delete: {
            args: Prisma.CurationTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>
          }
          update: {
            args: Prisma.CurationTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>
          }
          deleteMany: {
            args: Prisma.CurationTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurationTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurationTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>[]
          }
          upsert: {
            args: Prisma.CurationTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurationTagPayload>
          }
          aggregate: {
            args: Prisma.CurationTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurationTag>
          }
          groupBy: {
            args: Prisma.CurationTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurationTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurationTagCountArgs<ExtArgs>
            result: $Utils.Optional<CurationTagCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    curation?: CurationOmit
    curationItem?: CurationItemOmit
    message?: MessageOmit
    tag?: TagOmit
    curationTag?: CurationTagOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    createdCurations: number
    assignedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCurations?: boolean | UserCountOutputTypeCountCreatedCurationsArgs
    assignedMessages?: boolean | UserCountOutputTypeCountAssignedMessagesArgs
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
  export type UserCountOutputTypeCountCreatedCurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type CurationCountOutputType
   */

  export type CurationCountOutputType = {
    items: number
    curationTags: number
  }

  export type CurationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CurationCountOutputTypeCountItemsArgs
    curationTags?: boolean | CurationCountOutputTypeCountCurationTagsArgs
  }

  // Custom InputTypes
  /**
   * CurationCountOutputType without action
   */
  export type CurationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationCountOutputType
     */
    select?: CurationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CurationCountOutputType without action
   */
  export type CurationCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurationItemWhereInput
  }

  /**
   * CurationCountOutputType without action
   */
  export type CurationCountOutputTypeCountCurationTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurationTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    curationTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curationTags?: boolean | TagCountOutputTypeCountCurationTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountCurationTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurationTagWhereInput
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
    email: string | null
    name: string | null
    image: string | null
    role: $Enums.UserRole | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    role: $Enums.UserRole | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    role: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    role?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    role?: true
    passwordHash?: true
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
    email: string
    name: string
    image: string | null
    role: $Enums.UserRole
    passwordHash: string | null
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
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdCurations?: boolean | User$createdCurationsArgs<ExtArgs>
    assignedMessages?: boolean | User$assignedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    role?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "image" | "role" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdCurations?: boolean | User$createdCurationsArgs<ExtArgs>
    assignedMessages?: boolean | User$assignedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdCurations: Prisma.$CurationPayload<ExtArgs>[]
      assignedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      image: string | null
      role: $Enums.UserRole
      passwordHash: string | null
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
    createdCurations<T extends User$createdCurationsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedMessages<T extends User$assignedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly passwordHash: FieldRef<"User", 'String'>
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
   * User.createdCurations
   */
  export type User$createdCurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    where?: CurationWhereInput
    orderBy?: CurationOrderByWithRelationInput | CurationOrderByWithRelationInput[]
    cursor?: CurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * User.assignedMessages
   */
  export type User$assignedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
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
   * Model Curation
   */

  export type AggregateCuration = {
    _count: CurationCountAggregateOutputType | null
    _min: CurationMinAggregateOutputType | null
    _max: CurationMaxAggregateOutputType | null
  }

  export type CurationMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    coverImageUrl: string | null
    description: string | null
    status: $Enums.CurationStatus | null
    createdBy: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    coverImageUrl: string | null
    description: string | null
    status: $Enums.CurationStatus | null
    createdBy: string | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurationCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    coverImageUrl: number
    description: number
    status: number
    createdBy: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CurationMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    coverImageUrl?: true
    description?: true
    status?: true
    createdBy?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurationMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    coverImageUrl?: true
    description?: true
    status?: true
    createdBy?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurationCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    coverImageUrl?: true
    description?: true
    status?: true
    createdBy?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curation to aggregate.
     */
    where?: CurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curations to fetch.
     */
    orderBy?: CurationOrderByWithRelationInput | CurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Curations
    **/
    _count?: true | CurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurationMaxAggregateInputType
  }

  export type GetCurationAggregateType<T extends CurationAggregateArgs> = {
        [P in keyof T & keyof AggregateCuration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuration[P]>
      : GetScalarType<T[P], AggregateCuration[P]>
  }




  export type CurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurationWhereInput
    orderBy?: CurationOrderByWithAggregationInput | CurationOrderByWithAggregationInput[]
    by: CurationScalarFieldEnum[] | CurationScalarFieldEnum
    having?: CurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurationCountAggregateInputType | true
    _min?: CurationMinAggregateInputType
    _max?: CurationMaxAggregateInputType
  }

  export type CurationGroupByOutputType = {
    id: string
    title: string
    slug: string
    coverImageUrl: string
    description: string | null
    status: $Enums.CurationStatus
    createdBy: string
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CurationCountAggregateOutputType | null
    _min: CurationMinAggregateOutputType | null
    _max: CurationMaxAggregateOutputType | null
  }

  type GetCurationGroupByPayload<T extends CurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurationGroupByOutputType[P]>
            : GetScalarType<T[P], CurationGroupByOutputType[P]>
        }
      >
    >


  export type CurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    coverImageUrl?: boolean
    description?: boolean
    status?: boolean
    createdBy?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Curation$itemsArgs<ExtArgs>
    curationTags?: boolean | Curation$curationTagsArgs<ExtArgs>
    _count?: boolean | CurationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation"]>

  export type CurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    coverImageUrl?: boolean
    description?: boolean
    status?: boolean
    createdBy?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation"]>

  export type CurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    coverImageUrl?: boolean
    description?: boolean
    status?: boolean
    createdBy?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation"]>

  export type CurationSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    coverImageUrl?: boolean
    description?: boolean
    status?: boolean
    createdBy?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "coverImageUrl" | "description" | "status" | "createdBy" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["curation"]>
  export type CurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Curation$itemsArgs<ExtArgs>
    curationTags?: boolean | Curation$curationTagsArgs<ExtArgs>
    _count?: boolean | CurationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curation"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$CurationItemPayload<ExtArgs>[]
      curationTags: Prisma.$CurationTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      coverImageUrl: string
      description: string | null
      status: $Enums.CurationStatus
      createdBy: string
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["curation"]>
    composites: {}
  }

  type CurationGetPayload<S extends boolean | null | undefined | CurationDefaultArgs> = $Result.GetResult<Prisma.$CurationPayload, S>

  type CurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurationCountAggregateInputType | true
    }

  export interface CurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curation'], meta: { name: 'Curation' } }
    /**
     * Find zero or one Curation that matches the filter.
     * @param {CurationFindUniqueArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurationFindUniqueArgs>(args: SelectSubset<T, CurationFindUniqueArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurationFindUniqueOrThrowArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurationFindUniqueOrThrowArgs>(args: SelectSubset<T, CurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationFindFirstArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurationFindFirstArgs>(args?: SelectSubset<T, CurationFindFirstArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationFindFirstOrThrowArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurationFindFirstOrThrowArgs>(args?: SelectSubset<T, CurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curations
     * const curations = await prisma.curation.findMany()
     * 
     * // Get first 10 Curations
     * const curations = await prisma.curation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curationWithIdOnly = await prisma.curation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurationFindManyArgs>(args?: SelectSubset<T, CurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curation.
     * @param {CurationCreateArgs} args - Arguments to create a Curation.
     * @example
     * // Create one Curation
     * const Curation = await prisma.curation.create({
     *   data: {
     *     // ... data to create a Curation
     *   }
     * })
     * 
     */
    create<T extends CurationCreateArgs>(args: SelectSubset<T, CurationCreateArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curations.
     * @param {CurationCreateManyArgs} args - Arguments to create many Curations.
     * @example
     * // Create many Curations
     * const curation = await prisma.curation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurationCreateManyArgs>(args?: SelectSubset<T, CurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curations and returns the data saved in the database.
     * @param {CurationCreateManyAndReturnArgs} args - Arguments to create many Curations.
     * @example
     * // Create many Curations
     * const curation = await prisma.curation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curations and only return the `id`
     * const curationWithIdOnly = await prisma.curation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurationCreateManyAndReturnArgs>(args?: SelectSubset<T, CurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curation.
     * @param {CurationDeleteArgs} args - Arguments to delete one Curation.
     * @example
     * // Delete one Curation
     * const Curation = await prisma.curation.delete({
     *   where: {
     *     // ... filter to delete one Curation
     *   }
     * })
     * 
     */
    delete<T extends CurationDeleteArgs>(args: SelectSubset<T, CurationDeleteArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curation.
     * @param {CurationUpdateArgs} args - Arguments to update one Curation.
     * @example
     * // Update one Curation
     * const curation = await prisma.curation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurationUpdateArgs>(args: SelectSubset<T, CurationUpdateArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curations.
     * @param {CurationDeleteManyArgs} args - Arguments to filter Curations to delete.
     * @example
     * // Delete a few Curations
     * const { count } = await prisma.curation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurationDeleteManyArgs>(args?: SelectSubset<T, CurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curations
     * const curation = await prisma.curation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurationUpdateManyArgs>(args: SelectSubset<T, CurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curations and returns the data updated in the database.
     * @param {CurationUpdateManyAndReturnArgs} args - Arguments to update many Curations.
     * @example
     * // Update many Curations
     * const curation = await prisma.curation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curations and only return the `id`
     * const curationWithIdOnly = await prisma.curation.updateManyAndReturn({
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
    updateManyAndReturn<T extends CurationUpdateManyAndReturnArgs>(args: SelectSubset<T, CurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curation.
     * @param {CurationUpsertArgs} args - Arguments to update or create a Curation.
     * @example
     * // Update or create a Curation
     * const curation = await prisma.curation.upsert({
     *   create: {
     *     // ... data to create a Curation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curation we want to update
     *   }
     * })
     */
    upsert<T extends CurationUpsertArgs>(args: SelectSubset<T, CurationUpsertArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationCountArgs} args - Arguments to filter Curations to count.
     * @example
     * // Count the number of Curations
     * const count = await prisma.curation.count({
     *   where: {
     *     // ... the filter for the Curations we want to count
     *   }
     * })
    **/
    count<T extends CurationCountArgs>(
      args?: Subset<T, CurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurationAggregateArgs>(args: Subset<T, CurationAggregateArgs>): Prisma.PrismaPromise<GetCurationAggregateType<T>>

    /**
     * Group by Curation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationGroupByArgs} args - Group by arguments.
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
      T extends CurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurationGroupByArgs['orderBy'] }
        : { orderBy?: CurationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curation model
   */
  readonly fields: CurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Curation$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Curation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curationTags<T extends Curation$curationTagsArgs<ExtArgs> = {}>(args?: Subset<T, Curation$curationTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Curation model
   */
  interface CurationFieldRefs {
    readonly id: FieldRef<"Curation", 'String'>
    readonly title: FieldRef<"Curation", 'String'>
    readonly slug: FieldRef<"Curation", 'String'>
    readonly coverImageUrl: FieldRef<"Curation", 'String'>
    readonly description: FieldRef<"Curation", 'String'>
    readonly status: FieldRef<"Curation", 'CurationStatus'>
    readonly createdBy: FieldRef<"Curation", 'String'>
    readonly publishedAt: FieldRef<"Curation", 'DateTime'>
    readonly createdAt: FieldRef<"Curation", 'DateTime'>
    readonly updatedAt: FieldRef<"Curation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curation findUnique
   */
  export type CurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * Filter, which Curation to fetch.
     */
    where: CurationWhereUniqueInput
  }

  /**
   * Curation findUniqueOrThrow
   */
  export type CurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * Filter, which Curation to fetch.
     */
    where: CurationWhereUniqueInput
  }

  /**
   * Curation findFirst
   */
  export type CurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * Filter, which Curation to fetch.
     */
    where?: CurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curations to fetch.
     */
    orderBy?: CurationOrderByWithRelationInput | CurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curations.
     */
    cursor?: CurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curations.
     */
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * Curation findFirstOrThrow
   */
  export type CurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * Filter, which Curation to fetch.
     */
    where?: CurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curations to fetch.
     */
    orderBy?: CurationOrderByWithRelationInput | CurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curations.
     */
    cursor?: CurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curations.
     */
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * Curation findMany
   */
  export type CurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * Filter, which Curations to fetch.
     */
    where?: CurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curations to fetch.
     */
    orderBy?: CurationOrderByWithRelationInput | CurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Curations.
     */
    cursor?: CurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curations.
     */
    skip?: number
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * Curation create
   */
  export type CurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * The data needed to create a Curation.
     */
    data: XOR<CurationCreateInput, CurationUncheckedCreateInput>
  }

  /**
   * Curation createMany
   */
  export type CurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Curations.
     */
    data: CurationCreateManyInput | CurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curation createManyAndReturn
   */
  export type CurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * The data used to create many Curations.
     */
    data: CurationCreateManyInput | CurationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curation update
   */
  export type CurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * The data needed to update a Curation.
     */
    data: XOR<CurationUpdateInput, CurationUncheckedUpdateInput>
    /**
     * Choose, which Curation to update.
     */
    where: CurationWhereUniqueInput
  }

  /**
   * Curation updateMany
   */
  export type CurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Curations.
     */
    data: XOR<CurationUpdateManyMutationInput, CurationUncheckedUpdateManyInput>
    /**
     * Filter which Curations to update
     */
    where?: CurationWhereInput
    /**
     * Limit how many Curations to update.
     */
    limit?: number
  }

  /**
   * Curation updateManyAndReturn
   */
  export type CurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * The data used to update Curations.
     */
    data: XOR<CurationUpdateManyMutationInput, CurationUncheckedUpdateManyInput>
    /**
     * Filter which Curations to update
     */
    where?: CurationWhereInput
    /**
     * Limit how many Curations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curation upsert
   */
  export type CurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * The filter to search for the Curation to update in case it exists.
     */
    where: CurationWhereUniqueInput
    /**
     * In case the Curation found by the `where` argument doesn't exist, create a new Curation with this data.
     */
    create: XOR<CurationCreateInput, CurationUncheckedCreateInput>
    /**
     * In case the Curation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurationUpdateInput, CurationUncheckedUpdateInput>
  }

  /**
   * Curation delete
   */
  export type CurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
    /**
     * Filter which Curation to delete.
     */
    where: CurationWhereUniqueInput
  }

  /**
   * Curation deleteMany
   */
  export type CurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curations to delete
     */
    where?: CurationWhereInput
    /**
     * Limit how many Curations to delete.
     */
    limit?: number
  }

  /**
   * Curation.items
   */
  export type Curation$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    where?: CurationItemWhereInput
    orderBy?: CurationItemOrderByWithRelationInput | CurationItemOrderByWithRelationInput[]
    cursor?: CurationItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurationItemScalarFieldEnum | CurationItemScalarFieldEnum[]
  }

  /**
   * Curation.curationTags
   */
  export type Curation$curationTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    where?: CurationTagWhereInput
    orderBy?: CurationTagOrderByWithRelationInput | CurationTagOrderByWithRelationInput[]
    cursor?: CurationTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurationTagScalarFieldEnum | CurationTagScalarFieldEnum[]
  }

  /**
   * Curation without action
   */
  export type CurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curation
     */
    select?: CurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curation
     */
    omit?: CurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationInclude<ExtArgs> | null
  }


  /**
   * Model CurationItem
   */

  export type AggregateCurationItem = {
    _count: CurationItemCountAggregateOutputType | null
    _avg: CurationItemAvgAggregateOutputType | null
    _sum: CurationItemSumAggregateOutputType | null
    _min: CurationItemMinAggregateOutputType | null
    _max: CurationItemMaxAggregateOutputType | null
  }

  export type CurationItemAvgAggregateOutputType = {
    price: number | null
    sortOrder: number | null
  }

  export type CurationItemSumAggregateOutputType = {
    price: number | null
    sortOrder: number | null
  }

  export type CurationItemMinAggregateOutputType = {
    id: string | null
    curationId: string | null
    title: string | null
    description: string | null
    price: number | null
    category: string | null
    shopLocation: string | null
    imageUrl: string | null
    linkUrl: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurationItemMaxAggregateOutputType = {
    id: string | null
    curationId: string | null
    title: string | null
    description: string | null
    price: number | null
    category: string | null
    shopLocation: string | null
    imageUrl: string | null
    linkUrl: string | null
    sortOrder: number | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurationItemCountAggregateOutputType = {
    id: number
    curationId: number
    title: number
    description: number
    price: number
    category: number
    shopLocation: number
    imageUrl: number
    linkUrl: number
    sortOrder: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CurationItemAvgAggregateInputType = {
    price?: true
    sortOrder?: true
  }

  export type CurationItemSumAggregateInputType = {
    price?: true
    sortOrder?: true
  }

  export type CurationItemMinAggregateInputType = {
    id?: true
    curationId?: true
    title?: true
    description?: true
    price?: true
    category?: true
    shopLocation?: true
    imageUrl?: true
    linkUrl?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurationItemMaxAggregateInputType = {
    id?: true
    curationId?: true
    title?: true
    description?: true
    price?: true
    category?: true
    shopLocation?: true
    imageUrl?: true
    linkUrl?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurationItemCountAggregateInputType = {
    id?: true
    curationId?: true
    title?: true
    description?: true
    price?: true
    category?: true
    shopLocation?: true
    imageUrl?: true
    linkUrl?: true
    sortOrder?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CurationItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurationItem to aggregate.
     */
    where?: CurationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationItems to fetch.
     */
    orderBy?: CurationItemOrderByWithRelationInput | CurationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurationItems
    **/
    _count?: true | CurationItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurationItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurationItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurationItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurationItemMaxAggregateInputType
  }

  export type GetCurationItemAggregateType<T extends CurationItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCurationItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurationItem[P]>
      : GetScalarType<T[P], AggregateCurationItem[P]>
  }




  export type CurationItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurationItemWhereInput
    orderBy?: CurationItemOrderByWithAggregationInput | CurationItemOrderByWithAggregationInput[]
    by: CurationItemScalarFieldEnum[] | CurationItemScalarFieldEnum
    having?: CurationItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurationItemCountAggregateInputType | true
    _avg?: CurationItemAvgAggregateInputType
    _sum?: CurationItemSumAggregateInputType
    _min?: CurationItemMinAggregateInputType
    _max?: CurationItemMaxAggregateInputType
  }

  export type CurationItemGroupByOutputType = {
    id: string
    curationId: string
    title: string
    description: string | null
    price: number | null
    category: string | null
    shopLocation: string | null
    imageUrl: string | null
    linkUrl: string | null
    sortOrder: number
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: CurationItemCountAggregateOutputType | null
    _avg: CurationItemAvgAggregateOutputType | null
    _sum: CurationItemSumAggregateOutputType | null
    _min: CurationItemMinAggregateOutputType | null
    _max: CurationItemMaxAggregateOutputType | null
  }

  type GetCurationItemGroupByPayload<T extends CurationItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurationItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurationItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurationItemGroupByOutputType[P]>
            : GetScalarType<T[P], CurationItemGroupByOutputType[P]>
        }
      >
    >


  export type CurationItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curationId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    shopLocation?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curation?: boolean | CurationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curationItem"]>

  export type CurationItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curationId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    shopLocation?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curation?: boolean | CurationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curationItem"]>

  export type CurationItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    curationId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    shopLocation?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curation?: boolean | CurationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curationItem"]>

  export type CurationItemSelectScalar = {
    id?: boolean
    curationId?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    shopLocation?: boolean
    imageUrl?: boolean
    linkUrl?: boolean
    sortOrder?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CurationItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "curationId" | "title" | "description" | "price" | "category" | "shopLocation" | "imageUrl" | "linkUrl" | "sortOrder" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["curationItem"]>
  export type CurationItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | CurationDefaultArgs<ExtArgs>
  }
  export type CurationItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | CurationDefaultArgs<ExtArgs>
  }
  export type CurationItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | CurationDefaultArgs<ExtArgs>
  }

  export type $CurationItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurationItem"
    objects: {
      curation: Prisma.$CurationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      curationId: string
      title: string
      description: string | null
      price: number | null
      category: string | null
      shopLocation: string | null
      imageUrl: string | null
      linkUrl: string | null
      sortOrder: number
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["curationItem"]>
    composites: {}
  }

  type CurationItemGetPayload<S extends boolean | null | undefined | CurationItemDefaultArgs> = $Result.GetResult<Prisma.$CurationItemPayload, S>

  type CurationItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurationItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurationItemCountAggregateInputType | true
    }

  export interface CurationItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurationItem'], meta: { name: 'CurationItem' } }
    /**
     * Find zero or one CurationItem that matches the filter.
     * @param {CurationItemFindUniqueArgs} args - Arguments to find a CurationItem
     * @example
     * // Get one CurationItem
     * const curationItem = await prisma.curationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurationItemFindUniqueArgs>(args: SelectSubset<T, CurationItemFindUniqueArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurationItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurationItemFindUniqueOrThrowArgs} args - Arguments to find a CurationItem
     * @example
     * // Get one CurationItem
     * const curationItem = await prisma.curationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurationItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CurationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationItemFindFirstArgs} args - Arguments to find a CurationItem
     * @example
     * // Get one CurationItem
     * const curationItem = await prisma.curationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurationItemFindFirstArgs>(args?: SelectSubset<T, CurationItemFindFirstArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationItemFindFirstOrThrowArgs} args - Arguments to find a CurationItem
     * @example
     * // Get one CurationItem
     * const curationItem = await prisma.curationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurationItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CurationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurationItems
     * const curationItems = await prisma.curationItem.findMany()
     * 
     * // Get first 10 CurationItems
     * const curationItems = await prisma.curationItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curationItemWithIdOnly = await prisma.curationItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurationItemFindManyArgs>(args?: SelectSubset<T, CurationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurationItem.
     * @param {CurationItemCreateArgs} args - Arguments to create a CurationItem.
     * @example
     * // Create one CurationItem
     * const CurationItem = await prisma.curationItem.create({
     *   data: {
     *     // ... data to create a CurationItem
     *   }
     * })
     * 
     */
    create<T extends CurationItemCreateArgs>(args: SelectSubset<T, CurationItemCreateArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurationItems.
     * @param {CurationItemCreateManyArgs} args - Arguments to create many CurationItems.
     * @example
     * // Create many CurationItems
     * const curationItem = await prisma.curationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurationItemCreateManyArgs>(args?: SelectSubset<T, CurationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurationItems and returns the data saved in the database.
     * @param {CurationItemCreateManyAndReturnArgs} args - Arguments to create many CurationItems.
     * @example
     * // Create many CurationItems
     * const curationItem = await prisma.curationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurationItems and only return the `id`
     * const curationItemWithIdOnly = await prisma.curationItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurationItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CurationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurationItem.
     * @param {CurationItemDeleteArgs} args - Arguments to delete one CurationItem.
     * @example
     * // Delete one CurationItem
     * const CurationItem = await prisma.curationItem.delete({
     *   where: {
     *     // ... filter to delete one CurationItem
     *   }
     * })
     * 
     */
    delete<T extends CurationItemDeleteArgs>(args: SelectSubset<T, CurationItemDeleteArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurationItem.
     * @param {CurationItemUpdateArgs} args - Arguments to update one CurationItem.
     * @example
     * // Update one CurationItem
     * const curationItem = await prisma.curationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurationItemUpdateArgs>(args: SelectSubset<T, CurationItemUpdateArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurationItems.
     * @param {CurationItemDeleteManyArgs} args - Arguments to filter CurationItems to delete.
     * @example
     * // Delete a few CurationItems
     * const { count } = await prisma.curationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurationItemDeleteManyArgs>(args?: SelectSubset<T, CurationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurationItems
     * const curationItem = await prisma.curationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurationItemUpdateManyArgs>(args: SelectSubset<T, CurationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurationItems and returns the data updated in the database.
     * @param {CurationItemUpdateManyAndReturnArgs} args - Arguments to update many CurationItems.
     * @example
     * // Update many CurationItems
     * const curationItem = await prisma.curationItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurationItems and only return the `id`
     * const curationItemWithIdOnly = await prisma.curationItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CurationItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CurationItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurationItem.
     * @param {CurationItemUpsertArgs} args - Arguments to update or create a CurationItem.
     * @example
     * // Update or create a CurationItem
     * const curationItem = await prisma.curationItem.upsert({
     *   create: {
     *     // ... data to create a CurationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurationItem we want to update
     *   }
     * })
     */
    upsert<T extends CurationItemUpsertArgs>(args: SelectSubset<T, CurationItemUpsertArgs<ExtArgs>>): Prisma__CurationItemClient<$Result.GetResult<Prisma.$CurationItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationItemCountArgs} args - Arguments to filter CurationItems to count.
     * @example
     * // Count the number of CurationItems
     * const count = await prisma.curationItem.count({
     *   where: {
     *     // ... the filter for the CurationItems we want to count
     *   }
     * })
    **/
    count<T extends CurationItemCountArgs>(
      args?: Subset<T, CurationItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurationItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurationItemAggregateArgs>(args: Subset<T, CurationItemAggregateArgs>): Prisma.PrismaPromise<GetCurationItemAggregateType<T>>

    /**
     * Group by CurationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationItemGroupByArgs} args - Group by arguments.
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
      T extends CurationItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurationItemGroupByArgs['orderBy'] }
        : { orderBy?: CurationItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurationItem model
   */
  readonly fields: CurationItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurationItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurationItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curation<T extends CurationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurationDefaultArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CurationItem model
   */
  interface CurationItemFieldRefs {
    readonly id: FieldRef<"CurationItem", 'String'>
    readonly curationId: FieldRef<"CurationItem", 'String'>
    readonly title: FieldRef<"CurationItem", 'String'>
    readonly description: FieldRef<"CurationItem", 'String'>
    readonly price: FieldRef<"CurationItem", 'Float'>
    readonly category: FieldRef<"CurationItem", 'String'>
    readonly shopLocation: FieldRef<"CurationItem", 'String'>
    readonly imageUrl: FieldRef<"CurationItem", 'String'>
    readonly linkUrl: FieldRef<"CurationItem", 'String'>
    readonly sortOrder: FieldRef<"CurationItem", 'Int'>
    readonly isVisible: FieldRef<"CurationItem", 'Boolean'>
    readonly createdAt: FieldRef<"CurationItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CurationItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CurationItem findUnique
   */
  export type CurationItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * Filter, which CurationItem to fetch.
     */
    where: CurationItemWhereUniqueInput
  }

  /**
   * CurationItem findUniqueOrThrow
   */
  export type CurationItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * Filter, which CurationItem to fetch.
     */
    where: CurationItemWhereUniqueInput
  }

  /**
   * CurationItem findFirst
   */
  export type CurationItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * Filter, which CurationItem to fetch.
     */
    where?: CurationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationItems to fetch.
     */
    orderBy?: CurationItemOrderByWithRelationInput | CurationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurationItems.
     */
    cursor?: CurationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurationItems.
     */
    distinct?: CurationItemScalarFieldEnum | CurationItemScalarFieldEnum[]
  }

  /**
   * CurationItem findFirstOrThrow
   */
  export type CurationItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * Filter, which CurationItem to fetch.
     */
    where?: CurationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationItems to fetch.
     */
    orderBy?: CurationItemOrderByWithRelationInput | CurationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurationItems.
     */
    cursor?: CurationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurationItems.
     */
    distinct?: CurationItemScalarFieldEnum | CurationItemScalarFieldEnum[]
  }

  /**
   * CurationItem findMany
   */
  export type CurationItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * Filter, which CurationItems to fetch.
     */
    where?: CurationItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationItems to fetch.
     */
    orderBy?: CurationItemOrderByWithRelationInput | CurationItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurationItems.
     */
    cursor?: CurationItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationItems.
     */
    skip?: number
    distinct?: CurationItemScalarFieldEnum | CurationItemScalarFieldEnum[]
  }

  /**
   * CurationItem create
   */
  export type CurationItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CurationItem.
     */
    data: XOR<CurationItemCreateInput, CurationItemUncheckedCreateInput>
  }

  /**
   * CurationItem createMany
   */
  export type CurationItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurationItems.
     */
    data: CurationItemCreateManyInput | CurationItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurationItem createManyAndReturn
   */
  export type CurationItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * The data used to create many CurationItems.
     */
    data: CurationItemCreateManyInput | CurationItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurationItem update
   */
  export type CurationItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CurationItem.
     */
    data: XOR<CurationItemUpdateInput, CurationItemUncheckedUpdateInput>
    /**
     * Choose, which CurationItem to update.
     */
    where: CurationItemWhereUniqueInput
  }

  /**
   * CurationItem updateMany
   */
  export type CurationItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurationItems.
     */
    data: XOR<CurationItemUpdateManyMutationInput, CurationItemUncheckedUpdateManyInput>
    /**
     * Filter which CurationItems to update
     */
    where?: CurationItemWhereInput
    /**
     * Limit how many CurationItems to update.
     */
    limit?: number
  }

  /**
   * CurationItem updateManyAndReturn
   */
  export type CurationItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * The data used to update CurationItems.
     */
    data: XOR<CurationItemUpdateManyMutationInput, CurationItemUncheckedUpdateManyInput>
    /**
     * Filter which CurationItems to update
     */
    where?: CurationItemWhereInput
    /**
     * Limit how many CurationItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurationItem upsert
   */
  export type CurationItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CurationItem to update in case it exists.
     */
    where: CurationItemWhereUniqueInput
    /**
     * In case the CurationItem found by the `where` argument doesn't exist, create a new CurationItem with this data.
     */
    create: XOR<CurationItemCreateInput, CurationItemUncheckedCreateInput>
    /**
     * In case the CurationItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurationItemUpdateInput, CurationItemUncheckedUpdateInput>
  }

  /**
   * CurationItem delete
   */
  export type CurationItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
    /**
     * Filter which CurationItem to delete.
     */
    where: CurationItemWhereUniqueInput
  }

  /**
   * CurationItem deleteMany
   */
  export type CurationItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurationItems to delete
     */
    where?: CurationItemWhereInput
    /**
     * Limit how many CurationItems to delete.
     */
    limit?: number
  }

  /**
   * CurationItem without action
   */
  export type CurationItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationItem
     */
    select?: CurationItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationItem
     */
    omit?: CurationItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationItemInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    status: $Enums.MessageStatus | null
    assignedTo: string | null
    repliedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    status: $Enums.MessageStatus | null
    assignedTo: string | null
    repliedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    status: number
    assignedTo: number
    repliedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    status?: true
    assignedTo?: true
    repliedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    status?: true
    assignedTo?: true
    repliedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    status?: true
    assignedTo?: true
    repliedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string | null
    message: string
    status: $Enums.MessageStatus
    assignedTo: string | null
    repliedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    assignedTo?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | Message$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    assignedTo?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | Message$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    assignedTo?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignee?: boolean | Message$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    assignedTo?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "status" | "assignedTo" | "repliedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Message$assigneeArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Message$assigneeArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Message$assigneeArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      assignee: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string | null
      message: string
      status: $Enums.MessageStatus
      assignedTo: string | null
      repliedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignee<T extends Message$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Message$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly name: FieldRef<"Message", 'String'>
    readonly email: FieldRef<"Message", 'String'>
    readonly subject: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly status: FieldRef<"Message", 'MessageStatus'>
    readonly assignedTo: FieldRef<"Message", 'String'>
    readonly repliedAt: FieldRef<"Message", 'DateTime'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.assignee
   */
  export type Message$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    curationTags?: boolean | Tag$curationTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curationTags?: boolean | Tag$curationTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      curationTags: Prisma.$CurationTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curationTags<T extends Tag$curationTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$curationTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.curationTags
   */
  export type Tag$curationTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    where?: CurationTagWhereInput
    orderBy?: CurationTagOrderByWithRelationInput | CurationTagOrderByWithRelationInput[]
    cursor?: CurationTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurationTagScalarFieldEnum | CurationTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model CurationTag
   */

  export type AggregateCurationTag = {
    _count: CurationTagCountAggregateOutputType | null
    _min: CurationTagMinAggregateOutputType | null
    _max: CurationTagMaxAggregateOutputType | null
  }

  export type CurationTagMinAggregateOutputType = {
    curationId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type CurationTagMaxAggregateOutputType = {
    curationId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type CurationTagCountAggregateOutputType = {
    curationId: number
    tagId: number
    createdAt: number
    _all: number
  }


  export type CurationTagMinAggregateInputType = {
    curationId?: true
    tagId?: true
    createdAt?: true
  }

  export type CurationTagMaxAggregateInputType = {
    curationId?: true
    tagId?: true
    createdAt?: true
  }

  export type CurationTagCountAggregateInputType = {
    curationId?: true
    tagId?: true
    createdAt?: true
    _all?: true
  }

  export type CurationTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurationTag to aggregate.
     */
    where?: CurationTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationTags to fetch.
     */
    orderBy?: CurationTagOrderByWithRelationInput | CurationTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurationTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurationTags
    **/
    _count?: true | CurationTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurationTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurationTagMaxAggregateInputType
  }

  export type GetCurationTagAggregateType<T extends CurationTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCurationTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurationTag[P]>
      : GetScalarType<T[P], AggregateCurationTag[P]>
  }




  export type CurationTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurationTagWhereInput
    orderBy?: CurationTagOrderByWithAggregationInput | CurationTagOrderByWithAggregationInput[]
    by: CurationTagScalarFieldEnum[] | CurationTagScalarFieldEnum
    having?: CurationTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurationTagCountAggregateInputType | true
    _min?: CurationTagMinAggregateInputType
    _max?: CurationTagMaxAggregateInputType
  }

  export type CurationTagGroupByOutputType = {
    curationId: string
    tagId: string
    createdAt: Date
    _count: CurationTagCountAggregateOutputType | null
    _min: CurationTagMinAggregateOutputType | null
    _max: CurationTagMaxAggregateOutputType | null
  }

  type GetCurationTagGroupByPayload<T extends CurationTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurationTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurationTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurationTagGroupByOutputType[P]>
            : GetScalarType<T[P], CurationTagGroupByOutputType[P]>
        }
      >
    >


  export type CurationTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curationId?: boolean
    tagId?: boolean
    createdAt?: boolean
    curation?: boolean | CurationDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curationTag"]>

  export type CurationTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curationId?: boolean
    tagId?: boolean
    createdAt?: boolean
    curation?: boolean | CurationDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curationTag"]>

  export type CurationTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curationId?: boolean
    tagId?: boolean
    createdAt?: boolean
    curation?: boolean | CurationDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curationTag"]>

  export type CurationTagSelectScalar = {
    curationId?: boolean
    tagId?: boolean
    createdAt?: boolean
  }

  export type CurationTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"curationId" | "tagId" | "createdAt", ExtArgs["result"]["curationTag"]>
  export type CurationTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | CurationDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type CurationTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | CurationDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type CurationTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | CurationDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $CurationTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurationTag"
    objects: {
      curation: Prisma.$CurationPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      curationId: string
      tagId: string
      createdAt: Date
    }, ExtArgs["result"]["curationTag"]>
    composites: {}
  }

  type CurationTagGetPayload<S extends boolean | null | undefined | CurationTagDefaultArgs> = $Result.GetResult<Prisma.$CurationTagPayload, S>

  type CurationTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurationTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurationTagCountAggregateInputType | true
    }

  export interface CurationTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurationTag'], meta: { name: 'CurationTag' } }
    /**
     * Find zero or one CurationTag that matches the filter.
     * @param {CurationTagFindUniqueArgs} args - Arguments to find a CurationTag
     * @example
     * // Get one CurationTag
     * const curationTag = await prisma.curationTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurationTagFindUniqueArgs>(args: SelectSubset<T, CurationTagFindUniqueArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurationTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurationTagFindUniqueOrThrowArgs} args - Arguments to find a CurationTag
     * @example
     * // Get one CurationTag
     * const curationTag = await prisma.curationTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurationTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CurationTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurationTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationTagFindFirstArgs} args - Arguments to find a CurationTag
     * @example
     * // Get one CurationTag
     * const curationTag = await prisma.curationTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurationTagFindFirstArgs>(args?: SelectSubset<T, CurationTagFindFirstArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurationTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationTagFindFirstOrThrowArgs} args - Arguments to find a CurationTag
     * @example
     * // Get one CurationTag
     * const curationTag = await prisma.curationTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurationTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CurationTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurationTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurationTags
     * const curationTags = await prisma.curationTag.findMany()
     * 
     * // Get first 10 CurationTags
     * const curationTags = await prisma.curationTag.findMany({ take: 10 })
     * 
     * // Only select the `curationId`
     * const curationTagWithCurationIdOnly = await prisma.curationTag.findMany({ select: { curationId: true } })
     * 
     */
    findMany<T extends CurationTagFindManyArgs>(args?: SelectSubset<T, CurationTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurationTag.
     * @param {CurationTagCreateArgs} args - Arguments to create a CurationTag.
     * @example
     * // Create one CurationTag
     * const CurationTag = await prisma.curationTag.create({
     *   data: {
     *     // ... data to create a CurationTag
     *   }
     * })
     * 
     */
    create<T extends CurationTagCreateArgs>(args: SelectSubset<T, CurationTagCreateArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurationTags.
     * @param {CurationTagCreateManyArgs} args - Arguments to create many CurationTags.
     * @example
     * // Create many CurationTags
     * const curationTag = await prisma.curationTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurationTagCreateManyArgs>(args?: SelectSubset<T, CurationTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurationTags and returns the data saved in the database.
     * @param {CurationTagCreateManyAndReturnArgs} args - Arguments to create many CurationTags.
     * @example
     * // Create many CurationTags
     * const curationTag = await prisma.curationTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurationTags and only return the `curationId`
     * const curationTagWithCurationIdOnly = await prisma.curationTag.createManyAndReturn({
     *   select: { curationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurationTagCreateManyAndReturnArgs>(args?: SelectSubset<T, CurationTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurationTag.
     * @param {CurationTagDeleteArgs} args - Arguments to delete one CurationTag.
     * @example
     * // Delete one CurationTag
     * const CurationTag = await prisma.curationTag.delete({
     *   where: {
     *     // ... filter to delete one CurationTag
     *   }
     * })
     * 
     */
    delete<T extends CurationTagDeleteArgs>(args: SelectSubset<T, CurationTagDeleteArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurationTag.
     * @param {CurationTagUpdateArgs} args - Arguments to update one CurationTag.
     * @example
     * // Update one CurationTag
     * const curationTag = await prisma.curationTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurationTagUpdateArgs>(args: SelectSubset<T, CurationTagUpdateArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurationTags.
     * @param {CurationTagDeleteManyArgs} args - Arguments to filter CurationTags to delete.
     * @example
     * // Delete a few CurationTags
     * const { count } = await prisma.curationTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurationTagDeleteManyArgs>(args?: SelectSubset<T, CurationTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurationTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurationTags
     * const curationTag = await prisma.curationTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurationTagUpdateManyArgs>(args: SelectSubset<T, CurationTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurationTags and returns the data updated in the database.
     * @param {CurationTagUpdateManyAndReturnArgs} args - Arguments to update many CurationTags.
     * @example
     * // Update many CurationTags
     * const curationTag = await prisma.curationTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurationTags and only return the `curationId`
     * const curationTagWithCurationIdOnly = await prisma.curationTag.updateManyAndReturn({
     *   select: { curationId: true },
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
    updateManyAndReturn<T extends CurationTagUpdateManyAndReturnArgs>(args: SelectSubset<T, CurationTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurationTag.
     * @param {CurationTagUpsertArgs} args - Arguments to update or create a CurationTag.
     * @example
     * // Update or create a CurationTag
     * const curationTag = await prisma.curationTag.upsert({
     *   create: {
     *     // ... data to create a CurationTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurationTag we want to update
     *   }
     * })
     */
    upsert<T extends CurationTagUpsertArgs>(args: SelectSubset<T, CurationTagUpsertArgs<ExtArgs>>): Prisma__CurationTagClient<$Result.GetResult<Prisma.$CurationTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurationTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationTagCountArgs} args - Arguments to filter CurationTags to count.
     * @example
     * // Count the number of CurationTags
     * const count = await prisma.curationTag.count({
     *   where: {
     *     // ... the filter for the CurationTags we want to count
     *   }
     * })
    **/
    count<T extends CurationTagCountArgs>(
      args?: Subset<T, CurationTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurationTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurationTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurationTagAggregateArgs>(args: Subset<T, CurationTagAggregateArgs>): Prisma.PrismaPromise<GetCurationTagAggregateType<T>>

    /**
     * Group by CurationTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationTagGroupByArgs} args - Group by arguments.
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
      T extends CurationTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurationTagGroupByArgs['orderBy'] }
        : { orderBy?: CurationTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurationTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurationTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurationTag model
   */
  readonly fields: CurationTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurationTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurationTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curation<T extends CurationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CurationDefaultArgs<ExtArgs>>): Prisma__CurationClient<$Result.GetResult<Prisma.$CurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CurationTag model
   */
  interface CurationTagFieldRefs {
    readonly curationId: FieldRef<"CurationTag", 'String'>
    readonly tagId: FieldRef<"CurationTag", 'String'>
    readonly createdAt: FieldRef<"CurationTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CurationTag findUnique
   */
  export type CurationTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * Filter, which CurationTag to fetch.
     */
    where: CurationTagWhereUniqueInput
  }

  /**
   * CurationTag findUniqueOrThrow
   */
  export type CurationTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * Filter, which CurationTag to fetch.
     */
    where: CurationTagWhereUniqueInput
  }

  /**
   * CurationTag findFirst
   */
  export type CurationTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * Filter, which CurationTag to fetch.
     */
    where?: CurationTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationTags to fetch.
     */
    orderBy?: CurationTagOrderByWithRelationInput | CurationTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurationTags.
     */
    cursor?: CurationTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurationTags.
     */
    distinct?: CurationTagScalarFieldEnum | CurationTagScalarFieldEnum[]
  }

  /**
   * CurationTag findFirstOrThrow
   */
  export type CurationTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * Filter, which CurationTag to fetch.
     */
    where?: CurationTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationTags to fetch.
     */
    orderBy?: CurationTagOrderByWithRelationInput | CurationTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurationTags.
     */
    cursor?: CurationTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurationTags.
     */
    distinct?: CurationTagScalarFieldEnum | CurationTagScalarFieldEnum[]
  }

  /**
   * CurationTag findMany
   */
  export type CurationTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * Filter, which CurationTags to fetch.
     */
    where?: CurationTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurationTags to fetch.
     */
    orderBy?: CurationTagOrderByWithRelationInput | CurationTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurationTags.
     */
    cursor?: CurationTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurationTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurationTags.
     */
    skip?: number
    distinct?: CurationTagScalarFieldEnum | CurationTagScalarFieldEnum[]
  }

  /**
   * CurationTag create
   */
  export type CurationTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CurationTag.
     */
    data: XOR<CurationTagCreateInput, CurationTagUncheckedCreateInput>
  }

  /**
   * CurationTag createMany
   */
  export type CurationTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurationTags.
     */
    data: CurationTagCreateManyInput | CurationTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurationTag createManyAndReturn
   */
  export type CurationTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * The data used to create many CurationTags.
     */
    data: CurationTagCreateManyInput | CurationTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurationTag update
   */
  export type CurationTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CurationTag.
     */
    data: XOR<CurationTagUpdateInput, CurationTagUncheckedUpdateInput>
    /**
     * Choose, which CurationTag to update.
     */
    where: CurationTagWhereUniqueInput
  }

  /**
   * CurationTag updateMany
   */
  export type CurationTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurationTags.
     */
    data: XOR<CurationTagUpdateManyMutationInput, CurationTagUncheckedUpdateManyInput>
    /**
     * Filter which CurationTags to update
     */
    where?: CurationTagWhereInput
    /**
     * Limit how many CurationTags to update.
     */
    limit?: number
  }

  /**
   * CurationTag updateManyAndReturn
   */
  export type CurationTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * The data used to update CurationTags.
     */
    data: XOR<CurationTagUpdateManyMutationInput, CurationTagUncheckedUpdateManyInput>
    /**
     * Filter which CurationTags to update
     */
    where?: CurationTagWhereInput
    /**
     * Limit how many CurationTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurationTag upsert
   */
  export type CurationTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CurationTag to update in case it exists.
     */
    where: CurationTagWhereUniqueInput
    /**
     * In case the CurationTag found by the `where` argument doesn't exist, create a new CurationTag with this data.
     */
    create: XOR<CurationTagCreateInput, CurationTagUncheckedCreateInput>
    /**
     * In case the CurationTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurationTagUpdateInput, CurationTagUncheckedUpdateInput>
  }

  /**
   * CurationTag delete
   */
  export type CurationTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
    /**
     * Filter which CurationTag to delete.
     */
    where: CurationTagWhereUniqueInput
  }

  /**
   * CurationTag deleteMany
   */
  export type CurationTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurationTags to delete
     */
    where?: CurationTagWhereInput
    /**
     * Limit how many CurationTags to delete.
     */
    limit?: number
  }

  /**
   * CurationTag without action
   */
  export type CurationTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurationTag
     */
    select?: CurationTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurationTag
     */
    omit?: CurationTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurationTagInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    image: 'image',
    role: 'role',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CurationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    coverImageUrl: 'coverImageUrl',
    description: 'description',
    status: 'status',
    createdBy: 'createdBy',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CurationScalarFieldEnum = (typeof CurationScalarFieldEnum)[keyof typeof CurationScalarFieldEnum]


  export const CurationItemScalarFieldEnum: {
    id: 'id',
    curationId: 'curationId',
    title: 'title',
    description: 'description',
    price: 'price',
    category: 'category',
    shopLocation: 'shopLocation',
    imageUrl: 'imageUrl',
    linkUrl: 'linkUrl',
    sortOrder: 'sortOrder',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CurationItemScalarFieldEnum = (typeof CurationItemScalarFieldEnum)[keyof typeof CurationItemScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    status: 'status',
    assignedTo: 'assignedTo',
    repliedAt: 'repliedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CurationTagScalarFieldEnum: {
    curationId: 'curationId',
    tagId: 'tagId',
    createdAt: 'createdAt'
  };

  export type CurationTagScalarFieldEnum = (typeof CurationTagScalarFieldEnum)[keyof typeof CurationTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CurationStatus'
   */
  export type EnumCurationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurationStatus'>
    


  /**
   * Reference to a field of type 'CurationStatus[]'
   */
  export type ListEnumCurationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MessageStatus'
   */
  export type EnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus'>
    


  /**
   * Reference to a field of type 'MessageStatus[]'
   */
  export type ListEnumMessageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCurations?: CurationListRelationFilter
    assignedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdCurations?: CurationOrderByRelationAggregateInput
    assignedMessages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    passwordHash?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdCurations?: CurationListRelationFilter
    assignedMessages?: MessageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
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
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CurationWhereInput = {
    AND?: CurationWhereInput | CurationWhereInput[]
    OR?: CurationWhereInput[]
    NOT?: CurationWhereInput | CurationWhereInput[]
    id?: UuidFilter<"Curation"> | string
    title?: StringFilter<"Curation"> | string
    slug?: StringFilter<"Curation"> | string
    coverImageUrl?: StringFilter<"Curation"> | string
    description?: StringNullableFilter<"Curation"> | string | null
    status?: EnumCurationStatusFilter<"Curation"> | $Enums.CurationStatus
    createdBy?: UuidFilter<"Curation"> | string
    publishedAt?: DateTimeNullableFilter<"Curation"> | Date | string | null
    createdAt?: DateTimeFilter<"Curation"> | Date | string
    updatedAt?: DateTimeFilter<"Curation"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CurationItemListRelationFilter
    curationTags?: CurationTagListRelationFilter
  }

  export type CurationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    items?: CurationItemOrderByRelationAggregateInput
    curationTags?: CurationTagOrderByRelationAggregateInput
  }

  export type CurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CurationWhereInput | CurationWhereInput[]
    OR?: CurationWhereInput[]
    NOT?: CurationWhereInput | CurationWhereInput[]
    title?: StringFilter<"Curation"> | string
    coverImageUrl?: StringFilter<"Curation"> | string
    description?: StringNullableFilter<"Curation"> | string | null
    status?: EnumCurationStatusFilter<"Curation"> | $Enums.CurationStatus
    createdBy?: UuidFilter<"Curation"> | string
    publishedAt?: DateTimeNullableFilter<"Curation"> | Date | string | null
    createdAt?: DateTimeFilter<"Curation"> | Date | string
    updatedAt?: DateTimeFilter<"Curation"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: CurationItemListRelationFilter
    curationTags?: CurationTagListRelationFilter
  }, "id" | "slug">

  export type CurationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CurationCountOrderByAggregateInput
    _max?: CurationMaxOrderByAggregateInput
    _min?: CurationMinOrderByAggregateInput
  }

  export type CurationScalarWhereWithAggregatesInput = {
    AND?: CurationScalarWhereWithAggregatesInput | CurationScalarWhereWithAggregatesInput[]
    OR?: CurationScalarWhereWithAggregatesInput[]
    NOT?: CurationScalarWhereWithAggregatesInput | CurationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Curation"> | string
    title?: StringWithAggregatesFilter<"Curation"> | string
    slug?: StringWithAggregatesFilter<"Curation"> | string
    coverImageUrl?: StringWithAggregatesFilter<"Curation"> | string
    description?: StringNullableWithAggregatesFilter<"Curation"> | string | null
    status?: EnumCurationStatusWithAggregatesFilter<"Curation"> | $Enums.CurationStatus
    createdBy?: UuidWithAggregatesFilter<"Curation"> | string
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Curation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Curation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Curation"> | Date | string
  }

  export type CurationItemWhereInput = {
    AND?: CurationItemWhereInput | CurationItemWhereInput[]
    OR?: CurationItemWhereInput[]
    NOT?: CurationItemWhereInput | CurationItemWhereInput[]
    id?: UuidFilter<"CurationItem"> | string
    curationId?: UuidFilter<"CurationItem"> | string
    title?: StringFilter<"CurationItem"> | string
    description?: StringNullableFilter<"CurationItem"> | string | null
    price?: FloatNullableFilter<"CurationItem"> | number | null
    category?: StringNullableFilter<"CurationItem"> | string | null
    shopLocation?: StringNullableFilter<"CurationItem"> | string | null
    imageUrl?: StringNullableFilter<"CurationItem"> | string | null
    linkUrl?: StringNullableFilter<"CurationItem"> | string | null
    sortOrder?: IntFilter<"CurationItem"> | number
    isVisible?: BoolFilter<"CurationItem"> | boolean
    createdAt?: DateTimeFilter<"CurationItem"> | Date | string
    updatedAt?: DateTimeFilter<"CurationItem"> | Date | string
    curation?: XOR<CurationScalarRelationFilter, CurationWhereInput>
  }

  export type CurationItemOrderByWithRelationInput = {
    id?: SortOrder
    curationId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    shopLocation?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curation?: CurationOrderByWithRelationInput
  }

  export type CurationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CurationItemWhereInput | CurationItemWhereInput[]
    OR?: CurationItemWhereInput[]
    NOT?: CurationItemWhereInput | CurationItemWhereInput[]
    curationId?: UuidFilter<"CurationItem"> | string
    title?: StringFilter<"CurationItem"> | string
    description?: StringNullableFilter<"CurationItem"> | string | null
    price?: FloatNullableFilter<"CurationItem"> | number | null
    category?: StringNullableFilter<"CurationItem"> | string | null
    shopLocation?: StringNullableFilter<"CurationItem"> | string | null
    imageUrl?: StringNullableFilter<"CurationItem"> | string | null
    linkUrl?: StringNullableFilter<"CurationItem"> | string | null
    sortOrder?: IntFilter<"CurationItem"> | number
    isVisible?: BoolFilter<"CurationItem"> | boolean
    createdAt?: DateTimeFilter<"CurationItem"> | Date | string
    updatedAt?: DateTimeFilter<"CurationItem"> | Date | string
    curation?: XOR<CurationScalarRelationFilter, CurationWhereInput>
  }, "id">

  export type CurationItemOrderByWithAggregationInput = {
    id?: SortOrder
    curationId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    shopLocation?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    linkUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CurationItemCountOrderByAggregateInput
    _avg?: CurationItemAvgOrderByAggregateInput
    _max?: CurationItemMaxOrderByAggregateInput
    _min?: CurationItemMinOrderByAggregateInput
    _sum?: CurationItemSumOrderByAggregateInput
  }

  export type CurationItemScalarWhereWithAggregatesInput = {
    AND?: CurationItemScalarWhereWithAggregatesInput | CurationItemScalarWhereWithAggregatesInput[]
    OR?: CurationItemScalarWhereWithAggregatesInput[]
    NOT?: CurationItemScalarWhereWithAggregatesInput | CurationItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CurationItem"> | string
    curationId?: UuidWithAggregatesFilter<"CurationItem"> | string
    title?: StringWithAggregatesFilter<"CurationItem"> | string
    description?: StringNullableWithAggregatesFilter<"CurationItem"> | string | null
    price?: FloatNullableWithAggregatesFilter<"CurationItem"> | number | null
    category?: StringNullableWithAggregatesFilter<"CurationItem"> | string | null
    shopLocation?: StringNullableWithAggregatesFilter<"CurationItem"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"CurationItem"> | string | null
    linkUrl?: StringNullableWithAggregatesFilter<"CurationItem"> | string | null
    sortOrder?: IntWithAggregatesFilter<"CurationItem"> | number
    isVisible?: BoolWithAggregatesFilter<"CurationItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CurationItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CurationItem"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    name?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    message?: StringFilter<"Message"> | string
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    assignedTo?: UuidNullableFilter<"Message"> | string | null
    repliedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignee?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    name?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    message?: StringFilter<"Message"> | string
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    assignedTo?: UuidNullableFilter<"Message"> | string | null
    repliedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    name?: StringWithAggregatesFilter<"Message"> | string
    email?: StringWithAggregatesFilter<"Message"> | string
    subject?: StringNullableWithAggregatesFilter<"Message"> | string | null
    message?: StringWithAggregatesFilter<"Message"> | string
    status?: EnumMessageStatusWithAggregatesFilter<"Message"> | $Enums.MessageStatus
    assignedTo?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    repliedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: UuidFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    curationTags?: CurationTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    curationTags?: CurationTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    curationTags?: CurationTagListRelationFilter
  }, "id" | "name" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type CurationTagWhereInput = {
    AND?: CurationTagWhereInput | CurationTagWhereInput[]
    OR?: CurationTagWhereInput[]
    NOT?: CurationTagWhereInput | CurationTagWhereInput[]
    curationId?: UuidFilter<"CurationTag"> | string
    tagId?: UuidFilter<"CurationTag"> | string
    createdAt?: DateTimeFilter<"CurationTag"> | Date | string
    curation?: XOR<CurationScalarRelationFilter, CurationWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type CurationTagOrderByWithRelationInput = {
    curationId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    curation?: CurationOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type CurationTagWhereUniqueInput = Prisma.AtLeast<{
    curationId_tagId?: CurationTagCurationIdTagIdCompoundUniqueInput
    AND?: CurationTagWhereInput | CurationTagWhereInput[]
    OR?: CurationTagWhereInput[]
    NOT?: CurationTagWhereInput | CurationTagWhereInput[]
    curationId?: UuidFilter<"CurationTag"> | string
    tagId?: UuidFilter<"CurationTag"> | string
    createdAt?: DateTimeFilter<"CurationTag"> | Date | string
    curation?: XOR<CurationScalarRelationFilter, CurationWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "curationId_tagId">

  export type CurationTagOrderByWithAggregationInput = {
    curationId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    _count?: CurationTagCountOrderByAggregateInput
    _max?: CurationTagMaxOrderByAggregateInput
    _min?: CurationTagMinOrderByAggregateInput
  }

  export type CurationTagScalarWhereWithAggregatesInput = {
    AND?: CurationTagScalarWhereWithAggregatesInput | CurationTagScalarWhereWithAggregatesInput[]
    OR?: CurationTagScalarWhereWithAggregatesInput[]
    NOT?: CurationTagScalarWhereWithAggregatesInput | CurationTagScalarWhereWithAggregatesInput[]
    curationId?: UuidWithAggregatesFilter<"CurationTag"> | string
    tagId?: UuidWithAggregatesFilter<"CurationTag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CurationTag"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    image?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCurations?: CurationCreateNestedManyWithoutCreatorInput
    assignedMessages?: MessageCreateNestedManyWithoutAssigneeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    image?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCurations?: CurationUncheckedCreateNestedManyWithoutCreatorInput
    assignedMessages?: MessageUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCurations?: CurationUpdateManyWithoutCreatorNestedInput
    assignedMessages?: MessageUpdateManyWithoutAssigneeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCurations?: CurationUncheckedUpdateManyWithoutCreatorNestedInput
    assignedMessages?: MessageUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    image?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationCreateInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCurationsInput
    items?: CurationItemCreateNestedManyWithoutCurationInput
    curationTags?: CurationTagCreateNestedManyWithoutCurationInput
  }

  export type CurationUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    createdBy: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CurationItemUncheckedCreateNestedManyWithoutCurationInput
    curationTags?: CurationTagUncheckedCreateNestedManyWithoutCurationInput
  }

  export type CurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCurationsNestedInput
    items?: CurationItemUpdateManyWithoutCurationNestedInput
    curationTags?: CurationTagUpdateManyWithoutCurationNestedInput
  }

  export type CurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CurationItemUncheckedUpdateManyWithoutCurationNestedInput
    curationTags?: CurationTagUncheckedUpdateManyWithoutCurationNestedInput
  }

  export type CurationCreateManyInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    createdBy: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationItemCreateInput = {
    id?: string
    title: string
    description?: string | null
    price?: number | null
    category?: string | null
    shopLocation?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    curation: CurationCreateNestedOneWithoutItemsInput
  }

  export type CurationItemUncheckedCreateInput = {
    id?: string
    curationId: string
    title: string
    description?: string | null
    price?: number | null
    category?: string | null
    shopLocation?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurationItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopLocation?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curation?: CurationUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CurationItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    curationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopLocation?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationItemCreateManyInput = {
    id?: string
    curationId: string
    title: string
    description?: string | null
    price?: number | null
    category?: string | null
    shopLocation?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurationItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopLocation?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    curationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopLocation?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    status?: $Enums.MessageStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignee?: UserCreateNestedOneWithoutAssignedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    status?: $Enums.MessageStatus
    assignedTo?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignee?: UserUpdateOneWithoutAssignedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    status?: $Enums.MessageStatus
    assignedTo?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    curationTags?: CurationTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    curationTags?: CurationTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curationTags?: CurationTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curationTags?: CurationTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationTagCreateInput = {
    createdAt?: Date | string
    curation: CurationCreateNestedOneWithoutCurationTagsInput
    tag: TagCreateNestedOneWithoutCurationTagsInput
  }

  export type CurationTagUncheckedCreateInput = {
    curationId: string
    tagId: string
    createdAt?: Date | string
  }

  export type CurationTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curation?: CurationUpdateOneRequiredWithoutCurationTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutCurationTagsNestedInput
  }

  export type CurationTagUncheckedUpdateInput = {
    curationId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationTagCreateManyInput = {
    curationId: string
    tagId: string
    createdAt?: Date | string
  }

  export type CurationTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationTagUncheckedUpdateManyInput = {
    curationId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type CurationListRelationFilter = {
    every?: CurationWhereInput
    some?: CurationWhereInput
    none?: CurationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CurationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type EnumCurationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CurationStatus | EnumCurationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCurationStatusFilter<$PrismaModel> | $Enums.CurationStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CurationItemListRelationFilter = {
    every?: CurationItemWhereInput
    some?: CurationItemWhereInput
    none?: CurationItemWhereInput
  }

  export type CurationTagListRelationFilter = {
    every?: CurationTagWhereInput
    some?: CurationTagWhereInput
    none?: CurationTagWhereInput
  }

  export type CurationItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurationTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCurationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurationStatus | EnumCurationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCurationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CurationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurationStatusFilter<$PrismaModel>
    _max?: NestedEnumCurationStatusFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CurationScalarRelationFilter = {
    is?: CurationWhereInput
    isNot?: CurationWhereInput
  }

  export type CurationItemCountOrderByAggregateInput = {
    id?: SortOrder
    curationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    shopLocation?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurationItemAvgOrderByAggregateInput = {
    price?: SortOrder
    sortOrder?: SortOrder
  }

  export type CurationItemMaxOrderByAggregateInput = {
    id?: SortOrder
    curationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    shopLocation?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurationItemMinOrderByAggregateInput = {
    id?: SortOrder
    curationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    shopLocation?: SortOrder
    imageUrl?: SortOrder
    linkUrl?: SortOrder
    sortOrder?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurationItemSumOrderByAggregateInput = {
    price?: SortOrder
    sortOrder?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type CurationTagCurationIdTagIdCompoundUniqueInput = {
    curationId: string
    tagId: string
  }

  export type CurationTagCountOrderByAggregateInput = {
    curationId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type CurationTagMaxOrderByAggregateInput = {
    curationId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type CurationTagMinOrderByAggregateInput = {
    curationId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type CurationCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CurationCreateWithoutCreatorInput, CurationUncheckedCreateWithoutCreatorInput> | CurationCreateWithoutCreatorInput[] | CurationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CurationCreateOrConnectWithoutCreatorInput | CurationCreateOrConnectWithoutCreatorInput[]
    createMany?: CurationCreateManyCreatorInputEnvelope
    connect?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type CurationUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CurationCreateWithoutCreatorInput, CurationUncheckedCreateWithoutCreatorInput> | CurationCreateWithoutCreatorInput[] | CurationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CurationCreateOrConnectWithoutCreatorInput | CurationCreateOrConnectWithoutCreatorInput[]
    createMany?: CurationCreateManyCreatorInputEnvelope
    connect?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CurationUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CurationCreateWithoutCreatorInput, CurationUncheckedCreateWithoutCreatorInput> | CurationCreateWithoutCreatorInput[] | CurationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CurationCreateOrConnectWithoutCreatorInput | CurationCreateOrConnectWithoutCreatorInput[]
    upsert?: CurationUpsertWithWhereUniqueWithoutCreatorInput | CurationUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CurationCreateManyCreatorInputEnvelope
    set?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    disconnect?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    delete?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    connect?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    update?: CurationUpdateWithWhereUniqueWithoutCreatorInput | CurationUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CurationUpdateManyWithWhereWithoutCreatorInput | CurationUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CurationScalarWhereInput | CurationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAssigneeInput | MessageUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAssigneeInput | MessageUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAssigneeInput | MessageUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type CurationUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CurationCreateWithoutCreatorInput, CurationUncheckedCreateWithoutCreatorInput> | CurationCreateWithoutCreatorInput[] | CurationUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CurationCreateOrConnectWithoutCreatorInput | CurationCreateOrConnectWithoutCreatorInput[]
    upsert?: CurationUpsertWithWhereUniqueWithoutCreatorInput | CurationUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CurationCreateManyCreatorInputEnvelope
    set?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    disconnect?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    delete?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    connect?: CurationWhereUniqueInput | CurationWhereUniqueInput[]
    update?: CurationUpdateWithWhereUniqueWithoutCreatorInput | CurationUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CurationUpdateManyWithWhereWithoutCreatorInput | CurationUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CurationScalarWhereInput | CurationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAssigneeInput | MessageUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAssigneeInput | MessageUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAssigneeInput | MessageUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedCurationsInput = {
    create?: XOR<UserCreateWithoutCreatedCurationsInput, UserUncheckedCreateWithoutCreatedCurationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCurationsInput
    connect?: UserWhereUniqueInput
  }

  export type CurationItemCreateNestedManyWithoutCurationInput = {
    create?: XOR<CurationItemCreateWithoutCurationInput, CurationItemUncheckedCreateWithoutCurationInput> | CurationItemCreateWithoutCurationInput[] | CurationItemUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationItemCreateOrConnectWithoutCurationInput | CurationItemCreateOrConnectWithoutCurationInput[]
    createMany?: CurationItemCreateManyCurationInputEnvelope
    connect?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
  }

  export type CurationTagCreateNestedManyWithoutCurationInput = {
    create?: XOR<CurationTagCreateWithoutCurationInput, CurationTagUncheckedCreateWithoutCurationInput> | CurationTagCreateWithoutCurationInput[] | CurationTagUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutCurationInput | CurationTagCreateOrConnectWithoutCurationInput[]
    createMany?: CurationTagCreateManyCurationInputEnvelope
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
  }

  export type CurationItemUncheckedCreateNestedManyWithoutCurationInput = {
    create?: XOR<CurationItemCreateWithoutCurationInput, CurationItemUncheckedCreateWithoutCurationInput> | CurationItemCreateWithoutCurationInput[] | CurationItemUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationItemCreateOrConnectWithoutCurationInput | CurationItemCreateOrConnectWithoutCurationInput[]
    createMany?: CurationItemCreateManyCurationInputEnvelope
    connect?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
  }

  export type CurationTagUncheckedCreateNestedManyWithoutCurationInput = {
    create?: XOR<CurationTagCreateWithoutCurationInput, CurationTagUncheckedCreateWithoutCurationInput> | CurationTagCreateWithoutCurationInput[] | CurationTagUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutCurationInput | CurationTagCreateOrConnectWithoutCurationInput[]
    createMany?: CurationTagCreateManyCurationInputEnvelope
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
  }

  export type EnumCurationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CurationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCreatedCurationsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCurationsInput, UserUncheckedCreateWithoutCreatedCurationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCurationsInput
    upsert?: UserUpsertWithoutCreatedCurationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedCurationsInput, UserUpdateWithoutCreatedCurationsInput>, UserUncheckedUpdateWithoutCreatedCurationsInput>
  }

  export type CurationItemUpdateManyWithoutCurationNestedInput = {
    create?: XOR<CurationItemCreateWithoutCurationInput, CurationItemUncheckedCreateWithoutCurationInput> | CurationItemCreateWithoutCurationInput[] | CurationItemUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationItemCreateOrConnectWithoutCurationInput | CurationItemCreateOrConnectWithoutCurationInput[]
    upsert?: CurationItemUpsertWithWhereUniqueWithoutCurationInput | CurationItemUpsertWithWhereUniqueWithoutCurationInput[]
    createMany?: CurationItemCreateManyCurationInputEnvelope
    set?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    disconnect?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    delete?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    connect?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    update?: CurationItemUpdateWithWhereUniqueWithoutCurationInput | CurationItemUpdateWithWhereUniqueWithoutCurationInput[]
    updateMany?: CurationItemUpdateManyWithWhereWithoutCurationInput | CurationItemUpdateManyWithWhereWithoutCurationInput[]
    deleteMany?: CurationItemScalarWhereInput | CurationItemScalarWhereInput[]
  }

  export type CurationTagUpdateManyWithoutCurationNestedInput = {
    create?: XOR<CurationTagCreateWithoutCurationInput, CurationTagUncheckedCreateWithoutCurationInput> | CurationTagCreateWithoutCurationInput[] | CurationTagUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutCurationInput | CurationTagCreateOrConnectWithoutCurationInput[]
    upsert?: CurationTagUpsertWithWhereUniqueWithoutCurationInput | CurationTagUpsertWithWhereUniqueWithoutCurationInput[]
    createMany?: CurationTagCreateManyCurationInputEnvelope
    set?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    disconnect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    delete?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    update?: CurationTagUpdateWithWhereUniqueWithoutCurationInput | CurationTagUpdateWithWhereUniqueWithoutCurationInput[]
    updateMany?: CurationTagUpdateManyWithWhereWithoutCurationInput | CurationTagUpdateManyWithWhereWithoutCurationInput[]
    deleteMany?: CurationTagScalarWhereInput | CurationTagScalarWhereInput[]
  }

  export type CurationItemUncheckedUpdateManyWithoutCurationNestedInput = {
    create?: XOR<CurationItemCreateWithoutCurationInput, CurationItemUncheckedCreateWithoutCurationInput> | CurationItemCreateWithoutCurationInput[] | CurationItemUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationItemCreateOrConnectWithoutCurationInput | CurationItemCreateOrConnectWithoutCurationInput[]
    upsert?: CurationItemUpsertWithWhereUniqueWithoutCurationInput | CurationItemUpsertWithWhereUniqueWithoutCurationInput[]
    createMany?: CurationItemCreateManyCurationInputEnvelope
    set?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    disconnect?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    delete?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    connect?: CurationItemWhereUniqueInput | CurationItemWhereUniqueInput[]
    update?: CurationItemUpdateWithWhereUniqueWithoutCurationInput | CurationItemUpdateWithWhereUniqueWithoutCurationInput[]
    updateMany?: CurationItemUpdateManyWithWhereWithoutCurationInput | CurationItemUpdateManyWithWhereWithoutCurationInput[]
    deleteMany?: CurationItemScalarWhereInput | CurationItemScalarWhereInput[]
  }

  export type CurationTagUncheckedUpdateManyWithoutCurationNestedInput = {
    create?: XOR<CurationTagCreateWithoutCurationInput, CurationTagUncheckedCreateWithoutCurationInput> | CurationTagCreateWithoutCurationInput[] | CurationTagUncheckedCreateWithoutCurationInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutCurationInput | CurationTagCreateOrConnectWithoutCurationInput[]
    upsert?: CurationTagUpsertWithWhereUniqueWithoutCurationInput | CurationTagUpsertWithWhereUniqueWithoutCurationInput[]
    createMany?: CurationTagCreateManyCurationInputEnvelope
    set?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    disconnect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    delete?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    update?: CurationTagUpdateWithWhereUniqueWithoutCurationInput | CurationTagUpdateWithWhereUniqueWithoutCurationInput[]
    updateMany?: CurationTagUpdateManyWithWhereWithoutCurationInput | CurationTagUpdateManyWithWhereWithoutCurationInput[]
    deleteMany?: CurationTagScalarWhereInput | CurationTagScalarWhereInput[]
  }

  export type CurationCreateNestedOneWithoutItemsInput = {
    create?: XOR<CurationCreateWithoutItemsInput, CurationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CurationCreateOrConnectWithoutItemsInput
    connect?: CurationWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CurationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CurationCreateWithoutItemsInput, CurationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CurationCreateOrConnectWithoutItemsInput
    upsert?: CurationUpsertWithoutItemsInput
    connect?: CurationWhereUniqueInput
    update?: XOR<XOR<CurationUpdateToOneWithWhereWithoutItemsInput, CurationUpdateWithoutItemsInput>, CurationUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutAssignedMessagesInput = {
    create?: XOR<UserCreateWithoutAssignedMessagesInput, UserUncheckedCreateWithoutAssignedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMessageStatusFieldUpdateOperationsInput = {
    set?: $Enums.MessageStatus
  }

  export type UserUpdateOneWithoutAssignedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutAssignedMessagesInput, UserUncheckedCreateWithoutAssignedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedMessagesInput
    upsert?: UserUpsertWithoutAssignedMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedMessagesInput, UserUpdateWithoutAssignedMessagesInput>, UserUncheckedUpdateWithoutAssignedMessagesInput>
  }

  export type CurationTagCreateNestedManyWithoutTagInput = {
    create?: XOR<CurationTagCreateWithoutTagInput, CurationTagUncheckedCreateWithoutTagInput> | CurationTagCreateWithoutTagInput[] | CurationTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutTagInput | CurationTagCreateOrConnectWithoutTagInput[]
    createMany?: CurationTagCreateManyTagInputEnvelope
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
  }

  export type CurationTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<CurationTagCreateWithoutTagInput, CurationTagUncheckedCreateWithoutTagInput> | CurationTagCreateWithoutTagInput[] | CurationTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutTagInput | CurationTagCreateOrConnectWithoutTagInput[]
    createMany?: CurationTagCreateManyTagInputEnvelope
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
  }

  export type CurationTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<CurationTagCreateWithoutTagInput, CurationTagUncheckedCreateWithoutTagInput> | CurationTagCreateWithoutTagInput[] | CurationTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutTagInput | CurationTagCreateOrConnectWithoutTagInput[]
    upsert?: CurationTagUpsertWithWhereUniqueWithoutTagInput | CurationTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CurationTagCreateManyTagInputEnvelope
    set?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    disconnect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    delete?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    update?: CurationTagUpdateWithWhereUniqueWithoutTagInput | CurationTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CurationTagUpdateManyWithWhereWithoutTagInput | CurationTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CurationTagScalarWhereInput | CurationTagScalarWhereInput[]
  }

  export type CurationTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<CurationTagCreateWithoutTagInput, CurationTagUncheckedCreateWithoutTagInput> | CurationTagCreateWithoutTagInput[] | CurationTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: CurationTagCreateOrConnectWithoutTagInput | CurationTagCreateOrConnectWithoutTagInput[]
    upsert?: CurationTagUpsertWithWhereUniqueWithoutTagInput | CurationTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: CurationTagCreateManyTagInputEnvelope
    set?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    disconnect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    delete?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    connect?: CurationTagWhereUniqueInput | CurationTagWhereUniqueInput[]
    update?: CurationTagUpdateWithWhereUniqueWithoutTagInput | CurationTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: CurationTagUpdateManyWithWhereWithoutTagInput | CurationTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: CurationTagScalarWhereInput | CurationTagScalarWhereInput[]
  }

  export type CurationCreateNestedOneWithoutCurationTagsInput = {
    create?: XOR<CurationCreateWithoutCurationTagsInput, CurationUncheckedCreateWithoutCurationTagsInput>
    connectOrCreate?: CurationCreateOrConnectWithoutCurationTagsInput
    connect?: CurationWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutCurationTagsInput = {
    create?: XOR<TagCreateWithoutCurationTagsInput, TagUncheckedCreateWithoutCurationTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutCurationTagsInput
    connect?: TagWhereUniqueInput
  }

  export type CurationUpdateOneRequiredWithoutCurationTagsNestedInput = {
    create?: XOR<CurationCreateWithoutCurationTagsInput, CurationUncheckedCreateWithoutCurationTagsInput>
    connectOrCreate?: CurationCreateOrConnectWithoutCurationTagsInput
    upsert?: CurationUpsertWithoutCurationTagsInput
    connect?: CurationWhereUniqueInput
    update?: XOR<XOR<CurationUpdateToOneWithWhereWithoutCurationTagsInput, CurationUpdateWithoutCurationTagsInput>, CurationUncheckedUpdateWithoutCurationTagsInput>
  }

  export type TagUpdateOneRequiredWithoutCurationTagsNestedInput = {
    create?: XOR<TagCreateWithoutCurationTagsInput, TagUncheckedCreateWithoutCurationTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutCurationTagsInput
    upsert?: TagUpsertWithoutCurationTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutCurationTagsInput, TagUpdateWithoutCurationTagsInput>, TagUncheckedUpdateWithoutCurationTagsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumCurationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CurationStatus | EnumCurationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCurationStatusFilter<$PrismaModel> | $Enums.CurationStatus
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

  export type NestedEnumCurationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurationStatus | EnumCurationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurationStatus[] | ListEnumCurationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCurationStatusWithAggregatesFilter<$PrismaModel> | $Enums.CurationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurationStatusFilter<$PrismaModel>
    _max?: NestedEnumCurationStatusFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMessageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusFilter<$PrismaModel> | $Enums.MessageStatus
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageStatus | EnumMessageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageStatus[] | ListEnumMessageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageStatusWithAggregatesFilter<$PrismaModel> | $Enums.MessageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageStatusFilter<$PrismaModel>
    _max?: NestedEnumMessageStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CurationCreateWithoutCreatorInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CurationItemCreateNestedManyWithoutCurationInput
    curationTags?: CurationTagCreateNestedManyWithoutCurationInput
  }

  export type CurationUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CurationItemUncheckedCreateNestedManyWithoutCurationInput
    curationTags?: CurationTagUncheckedCreateNestedManyWithoutCurationInput
  }

  export type CurationCreateOrConnectWithoutCreatorInput = {
    where: CurationWhereUniqueInput
    create: XOR<CurationCreateWithoutCreatorInput, CurationUncheckedCreateWithoutCreatorInput>
  }

  export type CurationCreateManyCreatorInputEnvelope = {
    data: CurationCreateManyCreatorInput | CurationCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutAssigneeInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    status?: $Enums.MessageStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutAssigneeInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    status?: $Enums.MessageStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutAssigneeInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput>
  }

  export type MessageCreateManyAssigneeInputEnvelope = {
    data: MessageCreateManyAssigneeInput | MessageCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type CurationUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CurationWhereUniqueInput
    update: XOR<CurationUpdateWithoutCreatorInput, CurationUncheckedUpdateWithoutCreatorInput>
    create: XOR<CurationCreateWithoutCreatorInput, CurationUncheckedCreateWithoutCreatorInput>
  }

  export type CurationUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CurationWhereUniqueInput
    data: XOR<CurationUpdateWithoutCreatorInput, CurationUncheckedUpdateWithoutCreatorInput>
  }

  export type CurationUpdateManyWithWhereWithoutCreatorInput = {
    where: CurationScalarWhereInput
    data: XOR<CurationUpdateManyMutationInput, CurationUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CurationScalarWhereInput = {
    AND?: CurationScalarWhereInput | CurationScalarWhereInput[]
    OR?: CurationScalarWhereInput[]
    NOT?: CurationScalarWhereInput | CurationScalarWhereInput[]
    id?: UuidFilter<"Curation"> | string
    title?: StringFilter<"Curation"> | string
    slug?: StringFilter<"Curation"> | string
    coverImageUrl?: StringFilter<"Curation"> | string
    description?: StringNullableFilter<"Curation"> | string | null
    status?: EnumCurationStatusFilter<"Curation"> | $Enums.CurationStatus
    createdBy?: UuidFilter<"Curation"> | string
    publishedAt?: DateTimeNullableFilter<"Curation"> | Date | string | null
    createdAt?: DateTimeFilter<"Curation"> | Date | string
    updatedAt?: DateTimeFilter<"Curation"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAssigneeInput, MessageUncheckedUpdateWithoutAssigneeInput>
    create: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAssigneeInput, MessageUncheckedUpdateWithoutAssigneeInput>
  }

  export type MessageUpdateManyWithWhereWithoutAssigneeInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: UuidFilter<"Message"> | string
    name?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    message?: StringFilter<"Message"> | string
    status?: EnumMessageStatusFilter<"Message"> | $Enums.MessageStatus
    assignedTo?: UuidNullableFilter<"Message"> | string | null
    repliedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type UserCreateWithoutCreatedCurationsInput = {
    id?: string
    email: string
    name: string
    image?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedMessages?: MessageCreateNestedManyWithoutAssigneeInput
  }

  export type UserUncheckedCreateWithoutCreatedCurationsInput = {
    id?: string
    email: string
    name: string
    image?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedMessages?: MessageUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type UserCreateOrConnectWithoutCreatedCurationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCurationsInput, UserUncheckedCreateWithoutCreatedCurationsInput>
  }

  export type CurationItemCreateWithoutCurationInput = {
    id?: string
    title: string
    description?: string | null
    price?: number | null
    category?: string | null
    shopLocation?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurationItemUncheckedCreateWithoutCurationInput = {
    id?: string
    title: string
    description?: string | null
    price?: number | null
    category?: string | null
    shopLocation?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurationItemCreateOrConnectWithoutCurationInput = {
    where: CurationItemWhereUniqueInput
    create: XOR<CurationItemCreateWithoutCurationInput, CurationItemUncheckedCreateWithoutCurationInput>
  }

  export type CurationItemCreateManyCurationInputEnvelope = {
    data: CurationItemCreateManyCurationInput | CurationItemCreateManyCurationInput[]
    skipDuplicates?: boolean
  }

  export type CurationTagCreateWithoutCurationInput = {
    createdAt?: Date | string
    tag: TagCreateNestedOneWithoutCurationTagsInput
  }

  export type CurationTagUncheckedCreateWithoutCurationInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type CurationTagCreateOrConnectWithoutCurationInput = {
    where: CurationTagWhereUniqueInput
    create: XOR<CurationTagCreateWithoutCurationInput, CurationTagUncheckedCreateWithoutCurationInput>
  }

  export type CurationTagCreateManyCurationInputEnvelope = {
    data: CurationTagCreateManyCurationInput | CurationTagCreateManyCurationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedCurationsInput = {
    update: XOR<UserUpdateWithoutCreatedCurationsInput, UserUncheckedUpdateWithoutCreatedCurationsInput>
    create: XOR<UserCreateWithoutCreatedCurationsInput, UserUncheckedCreateWithoutCreatedCurationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedCurationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedCurationsInput, UserUncheckedUpdateWithoutCreatedCurationsInput>
  }

  export type UserUpdateWithoutCreatedCurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedMessages?: MessageUpdateManyWithoutAssigneeNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedMessages?: MessageUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type CurationItemUpsertWithWhereUniqueWithoutCurationInput = {
    where: CurationItemWhereUniqueInput
    update: XOR<CurationItemUpdateWithoutCurationInput, CurationItemUncheckedUpdateWithoutCurationInput>
    create: XOR<CurationItemCreateWithoutCurationInput, CurationItemUncheckedCreateWithoutCurationInput>
  }

  export type CurationItemUpdateWithWhereUniqueWithoutCurationInput = {
    where: CurationItemWhereUniqueInput
    data: XOR<CurationItemUpdateWithoutCurationInput, CurationItemUncheckedUpdateWithoutCurationInput>
  }

  export type CurationItemUpdateManyWithWhereWithoutCurationInput = {
    where: CurationItemScalarWhereInput
    data: XOR<CurationItemUpdateManyMutationInput, CurationItemUncheckedUpdateManyWithoutCurationInput>
  }

  export type CurationItemScalarWhereInput = {
    AND?: CurationItemScalarWhereInput | CurationItemScalarWhereInput[]
    OR?: CurationItemScalarWhereInput[]
    NOT?: CurationItemScalarWhereInput | CurationItemScalarWhereInput[]
    id?: UuidFilter<"CurationItem"> | string
    curationId?: UuidFilter<"CurationItem"> | string
    title?: StringFilter<"CurationItem"> | string
    description?: StringNullableFilter<"CurationItem"> | string | null
    price?: FloatNullableFilter<"CurationItem"> | number | null
    category?: StringNullableFilter<"CurationItem"> | string | null
    shopLocation?: StringNullableFilter<"CurationItem"> | string | null
    imageUrl?: StringNullableFilter<"CurationItem"> | string | null
    linkUrl?: StringNullableFilter<"CurationItem"> | string | null
    sortOrder?: IntFilter<"CurationItem"> | number
    isVisible?: BoolFilter<"CurationItem"> | boolean
    createdAt?: DateTimeFilter<"CurationItem"> | Date | string
    updatedAt?: DateTimeFilter<"CurationItem"> | Date | string
  }

  export type CurationTagUpsertWithWhereUniqueWithoutCurationInput = {
    where: CurationTagWhereUniqueInput
    update: XOR<CurationTagUpdateWithoutCurationInput, CurationTagUncheckedUpdateWithoutCurationInput>
    create: XOR<CurationTagCreateWithoutCurationInput, CurationTagUncheckedCreateWithoutCurationInput>
  }

  export type CurationTagUpdateWithWhereUniqueWithoutCurationInput = {
    where: CurationTagWhereUniqueInput
    data: XOR<CurationTagUpdateWithoutCurationInput, CurationTagUncheckedUpdateWithoutCurationInput>
  }

  export type CurationTagUpdateManyWithWhereWithoutCurationInput = {
    where: CurationTagScalarWhereInput
    data: XOR<CurationTagUpdateManyMutationInput, CurationTagUncheckedUpdateManyWithoutCurationInput>
  }

  export type CurationTagScalarWhereInput = {
    AND?: CurationTagScalarWhereInput | CurationTagScalarWhereInput[]
    OR?: CurationTagScalarWhereInput[]
    NOT?: CurationTagScalarWhereInput | CurationTagScalarWhereInput[]
    curationId?: UuidFilter<"CurationTag"> | string
    tagId?: UuidFilter<"CurationTag"> | string
    createdAt?: DateTimeFilter<"CurationTag"> | Date | string
  }

  export type CurationCreateWithoutItemsInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCurationsInput
    curationTags?: CurationTagCreateNestedManyWithoutCurationInput
  }

  export type CurationUncheckedCreateWithoutItemsInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    createdBy: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    curationTags?: CurationTagUncheckedCreateNestedManyWithoutCurationInput
  }

  export type CurationCreateOrConnectWithoutItemsInput = {
    where: CurationWhereUniqueInput
    create: XOR<CurationCreateWithoutItemsInput, CurationUncheckedCreateWithoutItemsInput>
  }

  export type CurationUpsertWithoutItemsInput = {
    update: XOR<CurationUpdateWithoutItemsInput, CurationUncheckedUpdateWithoutItemsInput>
    create: XOR<CurationCreateWithoutItemsInput, CurationUncheckedCreateWithoutItemsInput>
    where?: CurationWhereInput
  }

  export type CurationUpdateToOneWithWhereWithoutItemsInput = {
    where?: CurationWhereInput
    data: XOR<CurationUpdateWithoutItemsInput, CurationUncheckedUpdateWithoutItemsInput>
  }

  export type CurationUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCurationsNestedInput
    curationTags?: CurationTagUpdateManyWithoutCurationNestedInput
  }

  export type CurationUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curationTags?: CurationTagUncheckedUpdateManyWithoutCurationNestedInput
  }

  export type UserCreateWithoutAssignedMessagesInput = {
    id?: string
    email: string
    name: string
    image?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCurations?: CurationCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAssignedMessagesInput = {
    id?: string
    email: string
    name: string
    image?: string | null
    role?: $Enums.UserRole
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdCurations?: CurationUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAssignedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedMessagesInput, UserUncheckedCreateWithoutAssignedMessagesInput>
  }

  export type UserUpsertWithoutAssignedMessagesInput = {
    update: XOR<UserUpdateWithoutAssignedMessagesInput, UserUncheckedUpdateWithoutAssignedMessagesInput>
    create: XOR<UserCreateWithoutAssignedMessagesInput, UserUncheckedCreateWithoutAssignedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedMessagesInput, UserUncheckedUpdateWithoutAssignedMessagesInput>
  }

  export type UserUpdateWithoutAssignedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCurations?: CurationUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdCurations?: CurationUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CurationTagCreateWithoutTagInput = {
    createdAt?: Date | string
    curation: CurationCreateNestedOneWithoutCurationTagsInput
  }

  export type CurationTagUncheckedCreateWithoutTagInput = {
    curationId: string
    createdAt?: Date | string
  }

  export type CurationTagCreateOrConnectWithoutTagInput = {
    where: CurationTagWhereUniqueInput
    create: XOR<CurationTagCreateWithoutTagInput, CurationTagUncheckedCreateWithoutTagInput>
  }

  export type CurationTagCreateManyTagInputEnvelope = {
    data: CurationTagCreateManyTagInput | CurationTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type CurationTagUpsertWithWhereUniqueWithoutTagInput = {
    where: CurationTagWhereUniqueInput
    update: XOR<CurationTagUpdateWithoutTagInput, CurationTagUncheckedUpdateWithoutTagInput>
    create: XOR<CurationTagCreateWithoutTagInput, CurationTagUncheckedCreateWithoutTagInput>
  }

  export type CurationTagUpdateWithWhereUniqueWithoutTagInput = {
    where: CurationTagWhereUniqueInput
    data: XOR<CurationTagUpdateWithoutTagInput, CurationTagUncheckedUpdateWithoutTagInput>
  }

  export type CurationTagUpdateManyWithWhereWithoutTagInput = {
    where: CurationTagScalarWhereInput
    data: XOR<CurationTagUpdateManyMutationInput, CurationTagUncheckedUpdateManyWithoutTagInput>
  }

  export type CurationCreateWithoutCurationTagsInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedCurationsInput
    items?: CurationItemCreateNestedManyWithoutCurationInput
  }

  export type CurationUncheckedCreateWithoutCurationTagsInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    createdBy: string
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CurationItemUncheckedCreateNestedManyWithoutCurationInput
  }

  export type CurationCreateOrConnectWithoutCurationTagsInput = {
    where: CurationWhereUniqueInput
    create: XOR<CurationCreateWithoutCurationTagsInput, CurationUncheckedCreateWithoutCurationTagsInput>
  }

  export type TagCreateWithoutCurationTagsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutCurationTagsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutCurationTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutCurationTagsInput, TagUncheckedCreateWithoutCurationTagsInput>
  }

  export type CurationUpsertWithoutCurationTagsInput = {
    update: XOR<CurationUpdateWithoutCurationTagsInput, CurationUncheckedUpdateWithoutCurationTagsInput>
    create: XOR<CurationCreateWithoutCurationTagsInput, CurationUncheckedCreateWithoutCurationTagsInput>
    where?: CurationWhereInput
  }

  export type CurationUpdateToOneWithWhereWithoutCurationTagsInput = {
    where?: CurationWhereInput
    data: XOR<CurationUpdateWithoutCurationTagsInput, CurationUncheckedUpdateWithoutCurationTagsInput>
  }

  export type CurationUpdateWithoutCurationTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedCurationsNestedInput
    items?: CurationItemUpdateManyWithoutCurationNestedInput
  }

  export type CurationUncheckedUpdateWithoutCurationTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    createdBy?: StringFieldUpdateOperationsInput | string
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CurationItemUncheckedUpdateManyWithoutCurationNestedInput
  }

  export type TagUpsertWithoutCurationTagsInput = {
    update: XOR<TagUpdateWithoutCurationTagsInput, TagUncheckedUpdateWithoutCurationTagsInput>
    create: XOR<TagCreateWithoutCurationTagsInput, TagUncheckedCreateWithoutCurationTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutCurationTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutCurationTagsInput, TagUncheckedUpdateWithoutCurationTagsInput>
  }

  export type TagUpdateWithoutCurationTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutCurationTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationCreateManyCreatorInput = {
    id?: string
    title: string
    slug: string
    coverImageUrl: string
    description?: string | null
    status?: $Enums.CurationStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyAssigneeInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    status?: $Enums.MessageStatus
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurationUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CurationItemUpdateManyWithoutCurationNestedInput
    curationTags?: CurationTagUpdateManyWithoutCurationNestedInput
  }

  export type CurationUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CurationItemUncheckedUpdateManyWithoutCurationNestedInput
    curationTags?: CurationTagUncheckedUpdateManyWithoutCurationNestedInput
  }

  export type CurationUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCurationStatusFieldUpdateOperationsInput | $Enums.CurationStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumMessageStatusFieldUpdateOperationsInput | $Enums.MessageStatus
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationItemCreateManyCurationInput = {
    id?: string
    title: string
    description?: string | null
    price?: number | null
    category?: string | null
    shopLocation?: string | null
    imageUrl?: string | null
    linkUrl?: string | null
    sortOrder?: number
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurationTagCreateManyCurationInput = {
    tagId: string
    createdAt?: Date | string
  }

  export type CurationItemUpdateWithoutCurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopLocation?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationItemUncheckedUpdateWithoutCurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopLocation?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationItemUncheckedUpdateManyWithoutCurationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopLocation?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationTagUpdateWithoutCurationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TagUpdateOneRequiredWithoutCurationTagsNestedInput
  }

  export type CurationTagUncheckedUpdateWithoutCurationInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationTagUncheckedUpdateManyWithoutCurationInput = {
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationTagCreateManyTagInput = {
    curationId: string
    createdAt?: Date | string
  }

  export type CurationTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    curation?: CurationUpdateOneRequiredWithoutCurationTagsNestedInput
  }

  export type CurationTagUncheckedUpdateWithoutTagInput = {
    curationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurationTagUncheckedUpdateManyWithoutTagInput = {
    curationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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