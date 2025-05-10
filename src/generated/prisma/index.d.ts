
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
 * Model Members
 * 
 */
export type Members = $Result.DefaultSelection<Prisma.$MembersPayload>
/**
 * Model MembersFoodType
 * 
 */
export type MembersFoodType = $Result.DefaultSelection<Prisma.$MembersFoodTypePayload>
/**
 * Model FoodType
 * 
 */
export type FoodType = $Result.DefaultSelection<Prisma.$FoodTypePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  M: 'M',
  F: 'F'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Members
 * const members = await prisma.members.findMany()
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
   * // Fetch zero or more Members
   * const members = await prisma.members.findMany()
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
   * `prisma.members`: Exposes CRUD operations for the **Members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.MembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.membersFoodType`: Exposes CRUD operations for the **MembersFoodType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MembersFoodTypes
    * const membersFoodTypes = await prisma.membersFoodType.findMany()
    * ```
    */
  get membersFoodType(): Prisma.MembersFoodTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodType`: Exposes CRUD operations for the **FoodType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodTypes
    * const foodTypes = await prisma.foodType.findMany()
    * ```
    */
  get foodType(): Prisma.FoodTypeDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Members: 'Members',
    MembersFoodType: 'MembersFoodType',
    FoodType: 'FoodType',
    Review: 'Review',
    Store: 'Store'
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
      modelProps: "members" | "membersFoodType" | "foodType" | "review" | "store"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Members: {
        payload: Prisma.$MembersPayload<ExtArgs>
        fields: Prisma.MembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findFirst: {
            args: Prisma.MembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findMany: {
            args: Prisma.MembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          create: {
            args: Prisma.MembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          createMany: {
            args: Prisma.MembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          update: {
            args: Prisma.MembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          deleteMany: {
            args: Prisma.MembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          aggregate: {
            args: Prisma.MembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembers>
          }
          groupBy: {
            args: Prisma.MembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembersCountArgs<ExtArgs>
            result: $Utils.Optional<MembersCountAggregateOutputType> | number
          }
        }
      }
      MembersFoodType: {
        payload: Prisma.$MembersFoodTypePayload<ExtArgs>
        fields: Prisma.MembersFoodTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembersFoodTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembersFoodTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload>
          }
          findFirst: {
            args: Prisma.MembersFoodTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembersFoodTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload>
          }
          findMany: {
            args: Prisma.MembersFoodTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload>[]
          }
          create: {
            args: Prisma.MembersFoodTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload>
          }
          createMany: {
            args: Prisma.MembersFoodTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MembersFoodTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload>
          }
          update: {
            args: Prisma.MembersFoodTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload>
          }
          deleteMany: {
            args: Prisma.MembersFoodTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembersFoodTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MembersFoodTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersFoodTypePayload>
          }
          aggregate: {
            args: Prisma.MembersFoodTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembersFoodType>
          }
          groupBy: {
            args: Prisma.MembersFoodTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersFoodTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembersFoodTypeCountArgs<ExtArgs>
            result: $Utils.Optional<MembersFoodTypeCountAggregateOutputType> | number
          }
        }
      }
      FoodType: {
        payload: Prisma.$FoodTypePayload<ExtArgs>
        fields: Prisma.FoodTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          findFirst: {
            args: Prisma.FoodTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          findMany: {
            args: Prisma.FoodTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>[]
          }
          create: {
            args: Prisma.FoodTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          createMany: {
            args: Prisma.FoodTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          update: {
            args: Prisma.FoodTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          deleteMany: {
            args: Prisma.FoodTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodTypePayload>
          }
          aggregate: {
            args: Prisma.FoodTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodType>
          }
          groupBy: {
            args: Prisma.FoodTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodTypeCountArgs<ExtArgs>
            result: $Utils.Optional<FoodTypeCountAggregateOutputType> | number
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
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
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
    members?: MembersOmit
    membersFoodType?: MembersFoodTypeOmit
    foodType?: FoodTypeOmit
    review?: ReviewOmit
    store?: StoreOmit
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
   * Count Type MembersCountOutputType
   */

  export type MembersCountOutputType = {
    membersFoodTypes: number
    review: number
  }

  export type MembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersFoodTypes?: boolean | MembersCountOutputTypeCountMembersFoodTypesArgs
    review?: boolean | MembersCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersCountOutputType
     */
    select?: MembersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeCountMembersFoodTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersFoodTypeWhereInput
  }

  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type FoodTypeCountOutputType
   */

  export type FoodTypeCountOutputType = {
    membersFoodTypes: number
  }

  export type FoodTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersFoodTypes?: boolean | FoodTypeCountOutputTypeCountMembersFoodTypesArgs
  }

  // Custom InputTypes
  /**
   * FoodTypeCountOutputType without action
   */
  export type FoodTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodTypeCountOutputType
     */
    select?: FoodTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodTypeCountOutputType without action
   */
  export type FoodTypeCountOutputTypeCountMembersFoodTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersFoodTypeWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    review: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | StoreCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Members
   */

  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersAvgAggregateOutputType = {
    id: number | null
  }

  export type MembersSumAggregateOutputType = {
    id: number | null
  }

  export type MembersMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    gender: $Enums.Gender | null
    birth: Date | null
    address: string | null
    phoneNumber: string | null
  }

  export type MembersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    gender: $Enums.Gender | null
    birth: Date | null
    address: string | null
    phoneNumber: string | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    gender: number
    birth: number
    address: number
    phoneNumber: number
    _all: number
  }


  export type MembersAvgAggregateInputType = {
    id?: true
  }

  export type MembersSumAggregateInputType = {
    id?: true
  }

  export type MembersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    phoneNumber?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    phoneNumber?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    phoneNumber?: true
    _all?: true
  }

  export type MembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to aggregate.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type MembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithAggregationInput | MembersOrderByWithAggregationInput[]
    by: MembersScalarFieldEnum[] | MembersScalarFieldEnum
    having?: MembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _avg?: MembersAvgAggregateInputType
    _sum?: MembersSumAggregateInputType
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }

  export type MembersGroupByOutputType = {
    id: number
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date
    address: string
    phoneNumber: string
    _count: MembersCountAggregateOutputType | null
    _avg: MembersAvgAggregateOutputType | null
    _sum: MembersSumAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends MembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type MembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    address?: boolean
    phoneNumber?: boolean
    membersFoodTypes?: boolean | Members$membersFoodTypesArgs<ExtArgs>
    review?: boolean | Members$reviewArgs<ExtArgs>
    _count?: boolean | MembersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>



  export type MembersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    address?: boolean
    phoneNumber?: boolean
  }

  export type MembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "gender" | "birth" | "address" | "phoneNumber", ExtArgs["result"]["members"]>
  export type MembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersFoodTypes?: boolean | Members$membersFoodTypesArgs<ExtArgs>
    review?: boolean | Members$reviewArgs<ExtArgs>
    _count?: boolean | MembersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Members"
    objects: {
      membersFoodTypes: Prisma.$MembersFoodTypePayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      gender: $Enums.Gender
      birth: Date
      address: string
      phoneNumber: string
    }, ExtArgs["result"]["members"]>
    composites: {}
  }

  type MembersGetPayload<S extends boolean | null | undefined | MembersDefaultArgs> = $Result.GetResult<Prisma.$MembersPayload, S>

  type MembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface MembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Members'], meta: { name: 'Members' } }
    /**
     * Find zero or one Members that matches the filter.
     * @param {MembersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembersFindUniqueArgs>(args: SelectSubset<T, MembersFindUniqueArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembersFindUniqueOrThrowArgs>(args: SelectSubset<T, MembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembersFindFirstArgs>(args?: SelectSubset<T, MembersFindFirstArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembersFindFirstOrThrowArgs>(args?: SelectSubset<T, MembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembersFindManyArgs>(args?: SelectSubset<T, MembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Members.
     * @param {MembersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
     */
    create<T extends MembersCreateArgs>(args: SelectSubset<T, MembersCreateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MembersCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembersCreateManyArgs>(args?: SelectSubset<T, MembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Members.
     * @param {MembersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
     */
    delete<T extends MembersDeleteArgs>(args: SelectSubset<T, MembersDeleteArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Members.
     * @param {MembersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembersUpdateArgs>(args: SelectSubset<T, MembersUpdateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MembersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembersDeleteManyArgs>(args?: SelectSubset<T, MembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembersUpdateManyArgs>(args: SelectSubset<T, MembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Members.
     * @param {MembersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
     */
    upsert<T extends MembersUpsertArgs>(args: SelectSubset<T, MembersUpsertArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MembersCountArgs>(
      args?: Subset<T, MembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersGroupByArgs} args - Group by arguments.
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
      T extends MembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembersGroupByArgs['orderBy'] }
        : { orderBy?: MembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Members model
   */
  readonly fields: MembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membersFoodTypes<T extends Members$membersFoodTypesArgs<ExtArgs> = {}>(args?: Subset<T, Members$membersFoodTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends Members$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Members$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Members model
   */
  interface MembersFieldRefs {
    readonly id: FieldRef<"Members", 'Int'>
    readonly email: FieldRef<"Members", 'String'>
    readonly name: FieldRef<"Members", 'String'>
    readonly gender: FieldRef<"Members", 'Gender'>
    readonly birth: FieldRef<"Members", 'DateTime'>
    readonly address: FieldRef<"Members", 'String'>
    readonly phoneNumber: FieldRef<"Members", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Members findUnique
   */
  export type MembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findUniqueOrThrow
   */
  export type MembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findFirst
   */
  export type MembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findFirstOrThrow
   */
  export type MembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findMany
   */
  export type MembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members create
   */
  export type MembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to create a Members.
     */
    data: XOR<MembersCreateInput, MembersUncheckedCreateInput>
  }

  /**
   * Members createMany
   */
  export type MembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MembersCreateManyInput | MembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Members update
   */
  export type MembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to update a Members.
     */
    data: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
    /**
     * Choose, which Members to update.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members updateMany
   */
  export type MembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Members upsert
   */
  export type MembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The filter to search for the Members to update in case it exists.
     */
    where: MembersWhereUniqueInput
    /**
     * In case the Members found by the `where` argument doesn't exist, create a new Members with this data.
     */
    create: XOR<MembersCreateInput, MembersUncheckedCreateInput>
    /**
     * In case the Members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
  }

  /**
   * Members delete
   */
  export type MembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter which Members to delete.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members deleteMany
   */
  export type MembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Members.membersFoodTypes
   */
  export type Members$membersFoodTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    where?: MembersFoodTypeWhereInput
    orderBy?: MembersFoodTypeOrderByWithRelationInput | MembersFoodTypeOrderByWithRelationInput[]
    cursor?: MembersFoodTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersFoodTypeScalarFieldEnum | MembersFoodTypeScalarFieldEnum[]
  }

  /**
   * Members.review
   */
  export type Members$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Members without action
   */
  export type MembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
  }


  /**
   * Model MembersFoodType
   */

  export type AggregateMembersFoodType = {
    _count: MembersFoodTypeCountAggregateOutputType | null
    _avg: MembersFoodTypeAvgAggregateOutputType | null
    _sum: MembersFoodTypeSumAggregateOutputType | null
    _min: MembersFoodTypeMinAggregateOutputType | null
    _max: MembersFoodTypeMaxAggregateOutputType | null
  }

  export type MembersFoodTypeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foodTypeId: number | null
  }

  export type MembersFoodTypeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    foodTypeId: number | null
  }

  export type MembersFoodTypeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foodTypeId: number | null
  }

  export type MembersFoodTypeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foodTypeId: number | null
  }

  export type MembersFoodTypeCountAggregateOutputType = {
    id: number
    userId: number
    foodTypeId: number
    _all: number
  }


  export type MembersFoodTypeAvgAggregateInputType = {
    id?: true
    userId?: true
    foodTypeId?: true
  }

  export type MembersFoodTypeSumAggregateInputType = {
    id?: true
    userId?: true
    foodTypeId?: true
  }

  export type MembersFoodTypeMinAggregateInputType = {
    id?: true
    userId?: true
    foodTypeId?: true
  }

  export type MembersFoodTypeMaxAggregateInputType = {
    id?: true
    userId?: true
    foodTypeId?: true
  }

  export type MembersFoodTypeCountAggregateInputType = {
    id?: true
    userId?: true
    foodTypeId?: true
    _all?: true
  }

  export type MembersFoodTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembersFoodType to aggregate.
     */
    where?: MembersFoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembersFoodTypes to fetch.
     */
    orderBy?: MembersFoodTypeOrderByWithRelationInput | MembersFoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembersFoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembersFoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembersFoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MembersFoodTypes
    **/
    _count?: true | MembersFoodTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MembersFoodTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MembersFoodTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersFoodTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersFoodTypeMaxAggregateInputType
  }

  export type GetMembersFoodTypeAggregateType<T extends MembersFoodTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateMembersFoodType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembersFoodType[P]>
      : GetScalarType<T[P], AggregateMembersFoodType[P]>
  }




  export type MembersFoodTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersFoodTypeWhereInput
    orderBy?: MembersFoodTypeOrderByWithAggregationInput | MembersFoodTypeOrderByWithAggregationInput[]
    by: MembersFoodTypeScalarFieldEnum[] | MembersFoodTypeScalarFieldEnum
    having?: MembersFoodTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersFoodTypeCountAggregateInputType | true
    _avg?: MembersFoodTypeAvgAggregateInputType
    _sum?: MembersFoodTypeSumAggregateInputType
    _min?: MembersFoodTypeMinAggregateInputType
    _max?: MembersFoodTypeMaxAggregateInputType
  }

  export type MembersFoodTypeGroupByOutputType = {
    id: number
    userId: number
    foodTypeId: number
    _count: MembersFoodTypeCountAggregateOutputType | null
    _avg: MembersFoodTypeAvgAggregateOutputType | null
    _sum: MembersFoodTypeSumAggregateOutputType | null
    _min: MembersFoodTypeMinAggregateOutputType | null
    _max: MembersFoodTypeMaxAggregateOutputType | null
  }

  type GetMembersFoodTypeGroupByPayload<T extends MembersFoodTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersFoodTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersFoodTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersFoodTypeGroupByOutputType[P]>
            : GetScalarType<T[P], MembersFoodTypeGroupByOutputType[P]>
        }
      >
    >


  export type MembersFoodTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodTypeId?: boolean
    members?: boolean | MembersDefaultArgs<ExtArgs>
    foodType?: boolean | FoodTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membersFoodType"]>



  export type MembersFoodTypeSelectScalar = {
    id?: boolean
    userId?: boolean
    foodTypeId?: boolean
  }

  export type MembersFoodTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodTypeId", ExtArgs["result"]["membersFoodType"]>
  export type MembersFoodTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | MembersDefaultArgs<ExtArgs>
    foodType?: boolean | FoodTypeDefaultArgs<ExtArgs>
  }

  export type $MembersFoodTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MembersFoodType"
    objects: {
      members: Prisma.$MembersPayload<ExtArgs>
      foodType: Prisma.$FoodTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      foodTypeId: number
    }, ExtArgs["result"]["membersFoodType"]>
    composites: {}
  }

  type MembersFoodTypeGetPayload<S extends boolean | null | undefined | MembersFoodTypeDefaultArgs> = $Result.GetResult<Prisma.$MembersFoodTypePayload, S>

  type MembersFoodTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembersFoodTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembersFoodTypeCountAggregateInputType | true
    }

  export interface MembersFoodTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MembersFoodType'], meta: { name: 'MembersFoodType' } }
    /**
     * Find zero or one MembersFoodType that matches the filter.
     * @param {MembersFoodTypeFindUniqueArgs} args - Arguments to find a MembersFoodType
     * @example
     * // Get one MembersFoodType
     * const membersFoodType = await prisma.membersFoodType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembersFoodTypeFindUniqueArgs>(args: SelectSubset<T, MembersFoodTypeFindUniqueArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MembersFoodType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembersFoodTypeFindUniqueOrThrowArgs} args - Arguments to find a MembersFoodType
     * @example
     * // Get one MembersFoodType
     * const membersFoodType = await prisma.membersFoodType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembersFoodTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, MembersFoodTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembersFoodType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFoodTypeFindFirstArgs} args - Arguments to find a MembersFoodType
     * @example
     * // Get one MembersFoodType
     * const membersFoodType = await prisma.membersFoodType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembersFoodTypeFindFirstArgs>(args?: SelectSubset<T, MembersFoodTypeFindFirstArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MembersFoodType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFoodTypeFindFirstOrThrowArgs} args - Arguments to find a MembersFoodType
     * @example
     * // Get one MembersFoodType
     * const membersFoodType = await prisma.membersFoodType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembersFoodTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, MembersFoodTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MembersFoodTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFoodTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MembersFoodTypes
     * const membersFoodTypes = await prisma.membersFoodType.findMany()
     * 
     * // Get first 10 MembersFoodTypes
     * const membersFoodTypes = await prisma.membersFoodType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersFoodTypeWithIdOnly = await prisma.membersFoodType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembersFoodTypeFindManyArgs>(args?: SelectSubset<T, MembersFoodTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MembersFoodType.
     * @param {MembersFoodTypeCreateArgs} args - Arguments to create a MembersFoodType.
     * @example
     * // Create one MembersFoodType
     * const MembersFoodType = await prisma.membersFoodType.create({
     *   data: {
     *     // ... data to create a MembersFoodType
     *   }
     * })
     * 
     */
    create<T extends MembersFoodTypeCreateArgs>(args: SelectSubset<T, MembersFoodTypeCreateArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MembersFoodTypes.
     * @param {MembersFoodTypeCreateManyArgs} args - Arguments to create many MembersFoodTypes.
     * @example
     * // Create many MembersFoodTypes
     * const membersFoodType = await prisma.membersFoodType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembersFoodTypeCreateManyArgs>(args?: SelectSubset<T, MembersFoodTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MembersFoodType.
     * @param {MembersFoodTypeDeleteArgs} args - Arguments to delete one MembersFoodType.
     * @example
     * // Delete one MembersFoodType
     * const MembersFoodType = await prisma.membersFoodType.delete({
     *   where: {
     *     // ... filter to delete one MembersFoodType
     *   }
     * })
     * 
     */
    delete<T extends MembersFoodTypeDeleteArgs>(args: SelectSubset<T, MembersFoodTypeDeleteArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MembersFoodType.
     * @param {MembersFoodTypeUpdateArgs} args - Arguments to update one MembersFoodType.
     * @example
     * // Update one MembersFoodType
     * const membersFoodType = await prisma.membersFoodType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembersFoodTypeUpdateArgs>(args: SelectSubset<T, MembersFoodTypeUpdateArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MembersFoodTypes.
     * @param {MembersFoodTypeDeleteManyArgs} args - Arguments to filter MembersFoodTypes to delete.
     * @example
     * // Delete a few MembersFoodTypes
     * const { count } = await prisma.membersFoodType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembersFoodTypeDeleteManyArgs>(args?: SelectSubset<T, MembersFoodTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MembersFoodTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFoodTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MembersFoodTypes
     * const membersFoodType = await prisma.membersFoodType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembersFoodTypeUpdateManyArgs>(args: SelectSubset<T, MembersFoodTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MembersFoodType.
     * @param {MembersFoodTypeUpsertArgs} args - Arguments to update or create a MembersFoodType.
     * @example
     * // Update or create a MembersFoodType
     * const membersFoodType = await prisma.membersFoodType.upsert({
     *   create: {
     *     // ... data to create a MembersFoodType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MembersFoodType we want to update
     *   }
     * })
     */
    upsert<T extends MembersFoodTypeUpsertArgs>(args: SelectSubset<T, MembersFoodTypeUpsertArgs<ExtArgs>>): Prisma__MembersFoodTypeClient<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MembersFoodTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFoodTypeCountArgs} args - Arguments to filter MembersFoodTypes to count.
     * @example
     * // Count the number of MembersFoodTypes
     * const count = await prisma.membersFoodType.count({
     *   where: {
     *     // ... the filter for the MembersFoodTypes we want to count
     *   }
     * })
    **/
    count<T extends MembersFoodTypeCountArgs>(
      args?: Subset<T, MembersFoodTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersFoodTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MembersFoodType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFoodTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersFoodTypeAggregateArgs>(args: Subset<T, MembersFoodTypeAggregateArgs>): Prisma.PrismaPromise<GetMembersFoodTypeAggregateType<T>>

    /**
     * Group by MembersFoodType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFoodTypeGroupByArgs} args - Group by arguments.
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
      T extends MembersFoodTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembersFoodTypeGroupByArgs['orderBy'] }
        : { orderBy?: MembersFoodTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembersFoodTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersFoodTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MembersFoodType model
   */
  readonly fields: MembersFoodTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MembersFoodType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembersFoodTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends MembersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembersDefaultArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodType<T extends FoodTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodTypeDefaultArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MembersFoodType model
   */
  interface MembersFoodTypeFieldRefs {
    readonly id: FieldRef<"MembersFoodType", 'Int'>
    readonly userId: FieldRef<"MembersFoodType", 'Int'>
    readonly foodTypeId: FieldRef<"MembersFoodType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MembersFoodType findUnique
   */
  export type MembersFoodTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which MembersFoodType to fetch.
     */
    where: MembersFoodTypeWhereUniqueInput
  }

  /**
   * MembersFoodType findUniqueOrThrow
   */
  export type MembersFoodTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which MembersFoodType to fetch.
     */
    where: MembersFoodTypeWhereUniqueInput
  }

  /**
   * MembersFoodType findFirst
   */
  export type MembersFoodTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which MembersFoodType to fetch.
     */
    where?: MembersFoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembersFoodTypes to fetch.
     */
    orderBy?: MembersFoodTypeOrderByWithRelationInput | MembersFoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembersFoodTypes.
     */
    cursor?: MembersFoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembersFoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembersFoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembersFoodTypes.
     */
    distinct?: MembersFoodTypeScalarFieldEnum | MembersFoodTypeScalarFieldEnum[]
  }

  /**
   * MembersFoodType findFirstOrThrow
   */
  export type MembersFoodTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which MembersFoodType to fetch.
     */
    where?: MembersFoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembersFoodTypes to fetch.
     */
    orderBy?: MembersFoodTypeOrderByWithRelationInput | MembersFoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MembersFoodTypes.
     */
    cursor?: MembersFoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembersFoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembersFoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MembersFoodTypes.
     */
    distinct?: MembersFoodTypeScalarFieldEnum | MembersFoodTypeScalarFieldEnum[]
  }

  /**
   * MembersFoodType findMany
   */
  export type MembersFoodTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which MembersFoodTypes to fetch.
     */
    where?: MembersFoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MembersFoodTypes to fetch.
     */
    orderBy?: MembersFoodTypeOrderByWithRelationInput | MembersFoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MembersFoodTypes.
     */
    cursor?: MembersFoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MembersFoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MembersFoodTypes.
     */
    skip?: number
    distinct?: MembersFoodTypeScalarFieldEnum | MembersFoodTypeScalarFieldEnum[]
  }

  /**
   * MembersFoodType create
   */
  export type MembersFoodTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a MembersFoodType.
     */
    data: XOR<MembersFoodTypeCreateInput, MembersFoodTypeUncheckedCreateInput>
  }

  /**
   * MembersFoodType createMany
   */
  export type MembersFoodTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MembersFoodTypes.
     */
    data: MembersFoodTypeCreateManyInput | MembersFoodTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MembersFoodType update
   */
  export type MembersFoodTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a MembersFoodType.
     */
    data: XOR<MembersFoodTypeUpdateInput, MembersFoodTypeUncheckedUpdateInput>
    /**
     * Choose, which MembersFoodType to update.
     */
    where: MembersFoodTypeWhereUniqueInput
  }

  /**
   * MembersFoodType updateMany
   */
  export type MembersFoodTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MembersFoodTypes.
     */
    data: XOR<MembersFoodTypeUpdateManyMutationInput, MembersFoodTypeUncheckedUpdateManyInput>
    /**
     * Filter which MembersFoodTypes to update
     */
    where?: MembersFoodTypeWhereInput
    /**
     * Limit how many MembersFoodTypes to update.
     */
    limit?: number
  }

  /**
   * MembersFoodType upsert
   */
  export type MembersFoodTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the MembersFoodType to update in case it exists.
     */
    where: MembersFoodTypeWhereUniqueInput
    /**
     * In case the MembersFoodType found by the `where` argument doesn't exist, create a new MembersFoodType with this data.
     */
    create: XOR<MembersFoodTypeCreateInput, MembersFoodTypeUncheckedCreateInput>
    /**
     * In case the MembersFoodType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembersFoodTypeUpdateInput, MembersFoodTypeUncheckedUpdateInput>
  }

  /**
   * MembersFoodType delete
   */
  export type MembersFoodTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    /**
     * Filter which MembersFoodType to delete.
     */
    where: MembersFoodTypeWhereUniqueInput
  }

  /**
   * MembersFoodType deleteMany
   */
  export type MembersFoodTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MembersFoodTypes to delete
     */
    where?: MembersFoodTypeWhereInput
    /**
     * Limit how many MembersFoodTypes to delete.
     */
    limit?: number
  }

  /**
   * MembersFoodType without action
   */
  export type MembersFoodTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
  }


  /**
   * Model FoodType
   */

  export type AggregateFoodType = {
    _count: FoodTypeCountAggregateOutputType | null
    _avg: FoodTypeAvgAggregateOutputType | null
    _sum: FoodTypeSumAggregateOutputType | null
    _min: FoodTypeMinAggregateOutputType | null
    _max: FoodTypeMaxAggregateOutputType | null
  }

  export type FoodTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodTypeSumAggregateOutputType = {
    id: number | null
  }

  export type FoodTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    storeTypeName: string | null
  }

  export type FoodTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    storeTypeName: string | null
  }

  export type FoodTypeCountAggregateOutputType = {
    id: number
    name: number
    storeTypeName: number
    _all: number
  }


  export type FoodTypeAvgAggregateInputType = {
    id?: true
  }

  export type FoodTypeSumAggregateInputType = {
    id?: true
  }

  export type FoodTypeMinAggregateInputType = {
    id?: true
    name?: true
    storeTypeName?: true
  }

  export type FoodTypeMaxAggregateInputType = {
    id?: true
    name?: true
    storeTypeName?: true
  }

  export type FoodTypeCountAggregateInputType = {
    id?: true
    name?: true
    storeTypeName?: true
    _all?: true
  }

  export type FoodTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodType to aggregate.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodTypes
    **/
    _count?: true | FoodTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodTypeMaxAggregateInputType
  }

  export type GetFoodTypeAggregateType<T extends FoodTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodType[P]>
      : GetScalarType<T[P], AggregateFoodType[P]>
  }




  export type FoodTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodTypeWhereInput
    orderBy?: FoodTypeOrderByWithAggregationInput | FoodTypeOrderByWithAggregationInput[]
    by: FoodTypeScalarFieldEnum[] | FoodTypeScalarFieldEnum
    having?: FoodTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodTypeCountAggregateInputType | true
    _avg?: FoodTypeAvgAggregateInputType
    _sum?: FoodTypeSumAggregateInputType
    _min?: FoodTypeMinAggregateInputType
    _max?: FoodTypeMaxAggregateInputType
  }

  export type FoodTypeGroupByOutputType = {
    id: number
    name: string
    storeTypeName: string
    _count: FoodTypeCountAggregateOutputType | null
    _avg: FoodTypeAvgAggregateOutputType | null
    _sum: FoodTypeSumAggregateOutputType | null
    _min: FoodTypeMinAggregateOutputType | null
    _max: FoodTypeMaxAggregateOutputType | null
  }

  type GetFoodTypeGroupByPayload<T extends FoodTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodTypeGroupByOutputType[P]>
            : GetScalarType<T[P], FoodTypeGroupByOutputType[P]>
        }
      >
    >


  export type FoodTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    storeTypeName?: boolean
    membersFoodTypes?: boolean | FoodType$membersFoodTypesArgs<ExtArgs>
    _count?: boolean | FoodTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodType"]>



  export type FoodTypeSelectScalar = {
    id?: boolean
    name?: boolean
    storeTypeName?: boolean
  }

  export type FoodTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "storeTypeName", ExtArgs["result"]["foodType"]>
  export type FoodTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersFoodTypes?: boolean | FoodType$membersFoodTypesArgs<ExtArgs>
    _count?: boolean | FoodTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodType"
    objects: {
      membersFoodTypes: Prisma.$MembersFoodTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      storeTypeName: string
    }, ExtArgs["result"]["foodType"]>
    composites: {}
  }

  type FoodTypeGetPayload<S extends boolean | null | undefined | FoodTypeDefaultArgs> = $Result.GetResult<Prisma.$FoodTypePayload, S>

  type FoodTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodTypeCountAggregateInputType | true
    }

  export interface FoodTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodType'], meta: { name: 'FoodType' } }
    /**
     * Find zero or one FoodType that matches the filter.
     * @param {FoodTypeFindUniqueArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodTypeFindUniqueArgs>(args: SelectSubset<T, FoodTypeFindUniqueArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodTypeFindUniqueOrThrowArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeFindFirstArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodTypeFindFirstArgs>(args?: SelectSubset<T, FoodTypeFindFirstArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeFindFirstOrThrowArgs} args - Arguments to find a FoodType
     * @example
     * // Get one FoodType
     * const foodType = await prisma.foodType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodTypes
     * const foodTypes = await prisma.foodType.findMany()
     * 
     * // Get first 10 FoodTypes
     * const foodTypes = await prisma.foodType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodTypeWithIdOnly = await prisma.foodType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodTypeFindManyArgs>(args?: SelectSubset<T, FoodTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodType.
     * @param {FoodTypeCreateArgs} args - Arguments to create a FoodType.
     * @example
     * // Create one FoodType
     * const FoodType = await prisma.foodType.create({
     *   data: {
     *     // ... data to create a FoodType
     *   }
     * })
     * 
     */
    create<T extends FoodTypeCreateArgs>(args: SelectSubset<T, FoodTypeCreateArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodTypes.
     * @param {FoodTypeCreateManyArgs} args - Arguments to create many FoodTypes.
     * @example
     * // Create many FoodTypes
     * const foodType = await prisma.foodType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodTypeCreateManyArgs>(args?: SelectSubset<T, FoodTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodType.
     * @param {FoodTypeDeleteArgs} args - Arguments to delete one FoodType.
     * @example
     * // Delete one FoodType
     * const FoodType = await prisma.foodType.delete({
     *   where: {
     *     // ... filter to delete one FoodType
     *   }
     * })
     * 
     */
    delete<T extends FoodTypeDeleteArgs>(args: SelectSubset<T, FoodTypeDeleteArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodType.
     * @param {FoodTypeUpdateArgs} args - Arguments to update one FoodType.
     * @example
     * // Update one FoodType
     * const foodType = await prisma.foodType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodTypeUpdateArgs>(args: SelectSubset<T, FoodTypeUpdateArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodTypes.
     * @param {FoodTypeDeleteManyArgs} args - Arguments to filter FoodTypes to delete.
     * @example
     * // Delete a few FoodTypes
     * const { count } = await prisma.foodType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodTypeDeleteManyArgs>(args?: SelectSubset<T, FoodTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodTypes
     * const foodType = await prisma.foodType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodTypeUpdateManyArgs>(args: SelectSubset<T, FoodTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodType.
     * @param {FoodTypeUpsertArgs} args - Arguments to update or create a FoodType.
     * @example
     * // Update or create a FoodType
     * const foodType = await prisma.foodType.upsert({
     *   create: {
     *     // ... data to create a FoodType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodType we want to update
     *   }
     * })
     */
    upsert<T extends FoodTypeUpsertArgs>(args: SelectSubset<T, FoodTypeUpsertArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeCountArgs} args - Arguments to filter FoodTypes to count.
     * @example
     * // Count the number of FoodTypes
     * const count = await prisma.foodType.count({
     *   where: {
     *     // ... the filter for the FoodTypes we want to count
     *   }
     * })
    **/
    count<T extends FoodTypeCountArgs>(
      args?: Subset<T, FoodTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodTypeAggregateArgs>(args: Subset<T, FoodTypeAggregateArgs>): Prisma.PrismaPromise<GetFoodTypeAggregateType<T>>

    /**
     * Group by FoodType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodTypeGroupByArgs} args - Group by arguments.
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
      T extends FoodTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodTypeGroupByArgs['orderBy'] }
        : { orderBy?: FoodTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodType model
   */
  readonly fields: FoodTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    membersFoodTypes<T extends FoodType$membersFoodTypesArgs<ExtArgs> = {}>(args?: Subset<T, FoodType$membersFoodTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersFoodTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FoodType model
   */
  interface FoodTypeFieldRefs {
    readonly id: FieldRef<"FoodType", 'Int'>
    readonly name: FieldRef<"FoodType", 'String'>
    readonly storeTypeName: FieldRef<"FoodType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodType findUnique
   */
  export type FoodTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType findUniqueOrThrow
   */
  export type FoodTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType findFirst
   */
  export type FoodTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodTypes.
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodTypes.
     */
    distinct?: FoodTypeScalarFieldEnum | FoodTypeScalarFieldEnum[]
  }

  /**
   * FoodType findFirstOrThrow
   */
  export type FoodTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodType to fetch.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodTypes.
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodTypes.
     */
    distinct?: FoodTypeScalarFieldEnum | FoodTypeScalarFieldEnum[]
  }

  /**
   * FoodType findMany
   */
  export type FoodTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter, which FoodTypes to fetch.
     */
    where?: FoodTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodTypes to fetch.
     */
    orderBy?: FoodTypeOrderByWithRelationInput | FoodTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodTypes.
     */
    cursor?: FoodTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodTypes.
     */
    skip?: number
    distinct?: FoodTypeScalarFieldEnum | FoodTypeScalarFieldEnum[]
  }

  /**
   * FoodType create
   */
  export type FoodTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodType.
     */
    data: XOR<FoodTypeCreateInput, FoodTypeUncheckedCreateInput>
  }

  /**
   * FoodType createMany
   */
  export type FoodTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodTypes.
     */
    data: FoodTypeCreateManyInput | FoodTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodType update
   */
  export type FoodTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodType.
     */
    data: XOR<FoodTypeUpdateInput, FoodTypeUncheckedUpdateInput>
    /**
     * Choose, which FoodType to update.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType updateMany
   */
  export type FoodTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodTypes.
     */
    data: XOR<FoodTypeUpdateManyMutationInput, FoodTypeUncheckedUpdateManyInput>
    /**
     * Filter which FoodTypes to update
     */
    where?: FoodTypeWhereInput
    /**
     * Limit how many FoodTypes to update.
     */
    limit?: number
  }

  /**
   * FoodType upsert
   */
  export type FoodTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodType to update in case it exists.
     */
    where: FoodTypeWhereUniqueInput
    /**
     * In case the FoodType found by the `where` argument doesn't exist, create a new FoodType with this data.
     */
    create: XOR<FoodTypeCreateInput, FoodTypeUncheckedCreateInput>
    /**
     * In case the FoodType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodTypeUpdateInput, FoodTypeUncheckedUpdateInput>
  }

  /**
   * FoodType delete
   */
  export type FoodTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
    /**
     * Filter which FoodType to delete.
     */
    where: FoodTypeWhereUniqueInput
  }

  /**
   * FoodType deleteMany
   */
  export type FoodTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodTypes to delete
     */
    where?: FoodTypeWhereInput
    /**
     * Limit how many FoodTypes to delete.
     */
    limit?: number
  }

  /**
   * FoodType.membersFoodTypes
   */
  export type FoodType$membersFoodTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MembersFoodType
     */
    select?: MembersFoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MembersFoodType
     */
    omit?: MembersFoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersFoodTypeInclude<ExtArgs> | null
    where?: MembersFoodTypeWhereInput
    orderBy?: MembersFoodTypeOrderByWithRelationInput | MembersFoodTypeOrderByWithRelationInput[]
    cursor?: MembersFoodTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersFoodTypeScalarFieldEnum | MembersFoodTypeScalarFieldEnum[]
  }

  /**
   * FoodType without action
   */
  export type FoodTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodType
     */
    select?: FoodTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodType
     */
    omit?: FoodTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodTypeInclude<ExtArgs> | null
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
    id: number | null
    userId: number | null
    storeId: number | null
    star: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    storeId: number | null
    star: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    storeId: number | null
    uploadedAt: Date | null
    star: number | null
    contents: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    storeId: number | null
    uploadedAt: Date | null
    star: number | null
    contents: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    storeId: number
    uploadedAt: number
    star: number
    contents: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    star?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    star?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    uploadedAt?: true
    star?: true
    contents?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    uploadedAt?: true
    star?: true
    contents?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    storeId?: true
    uploadedAt?: true
    star?: true
    contents?: true
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
    id: number
    userId: number
    storeId: number
    uploadedAt: Date
    star: number
    contents: string
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
    userId?: boolean
    storeId?: boolean
    uploadedAt?: boolean
    star?: boolean
    contents?: boolean
    members?: boolean | MembersDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    storeId?: boolean
    uploadedAt?: boolean
    star?: boolean
    contents?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "storeId" | "uploadedAt" | "star" | "contents", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | MembersDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      members: Prisma.$MembersPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      storeId: number
      uploadedAt: Date
      star: number
      contents: string
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
    members<T extends MembersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembersDefaultArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly storeId: FieldRef<"Review", 'Int'>
    readonly uploadedAt: FieldRef<"Review", 'DateTime'>
    readonly star: FieldRef<"Review", 'Float'>
    readonly contents: FieldRef<"Review", 'String'>
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
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    foodTypeId: number | null
    locationId: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
    foodTypeId: number | null
    locationId: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    name: string | null
    foodTypeId: number | null
    address: string | null
    openTime: string | null
    closeTime: string | null
    locationId: number | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    foodTypeId: number | null
    address: string | null
    openTime: string | null
    closeTime: string | null
    locationId: number | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    foodTypeId: number
    address: number
    openTime: number
    closeTime: number
    locationId: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    foodTypeId?: true
    locationId?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    foodTypeId?: true
    locationId?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    foodTypeId?: true
    address?: true
    openTime?: true
    closeTime?: true
    locationId?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    foodTypeId?: true
    address?: true
    openTime?: true
    closeTime?: true
    locationId?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    foodTypeId?: true
    address?: true
    openTime?: true
    closeTime?: true
    locationId?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    foodTypeId?: boolean
    address?: boolean
    openTime?: boolean
    closeTime?: boolean
    locationId?: boolean
    review?: boolean | Store$reviewArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    foodTypeId?: boolean
    address?: boolean
    openTime?: boolean
    closeTime?: boolean
    locationId?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "foodTypeId" | "address" | "openTime" | "closeTime" | "locationId", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | Store$reviewArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      foodTypeId: number
      address: string
      openTime: string
      closeTime: string
      locationId: number
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    review<T extends Store$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Store$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly name: FieldRef<"Store", 'String'>
    readonly foodTypeId: FieldRef<"Store", 'Int'>
    readonly address: FieldRef<"Store", 'String'>
    readonly openTime: FieldRef<"Store", 'String'>
    readonly closeTime: FieldRef<"Store", 'String'>
    readonly locationId: FieldRef<"Store", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.review
   */
  export type Store$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
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


  export const MembersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    gender: 'gender',
    birth: 'birth',
    address: 'address',
    phoneNumber: 'phoneNumber'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


  export const MembersFoodTypeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodTypeId: 'foodTypeId'
  };

  export type MembersFoodTypeScalarFieldEnum = (typeof MembersFoodTypeScalarFieldEnum)[keyof typeof MembersFoodTypeScalarFieldEnum]


  export const FoodTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    storeTypeName: 'storeTypeName'
  };

  export type FoodTypeScalarFieldEnum = (typeof FoodTypeScalarFieldEnum)[keyof typeof FoodTypeScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storeId: 'storeId',
    uploadedAt: 'uploadedAt',
    star: 'star',
    contents: 'contents'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    foodTypeId: 'foodTypeId',
    address: 'address',
    openTime: 'openTime',
    closeTime: 'closeTime',
    locationId: 'locationId'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const MembersOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    address: 'address',
    phoneNumber: 'phoneNumber'
  };

  export type MembersOrderByRelevanceFieldEnum = (typeof MembersOrderByRelevanceFieldEnum)[keyof typeof MembersOrderByRelevanceFieldEnum]


  export const FoodTypeOrderByRelevanceFieldEnum: {
    name: 'name',
    storeTypeName: 'storeTypeName'
  };

  export type FoodTypeOrderByRelevanceFieldEnum = (typeof FoodTypeOrderByRelevanceFieldEnum)[keyof typeof FoodTypeOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    contents: 'contents'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const StoreOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address',
    openTime: 'openTime',
    closeTime: 'closeTime'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MembersWhereInput = {
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    id?: IntFilter<"Members"> | number
    email?: StringFilter<"Members"> | string
    name?: StringFilter<"Members"> | string
    gender?: EnumGenderFilter<"Members"> | $Enums.Gender
    birth?: DateTimeFilter<"Members"> | Date | string
    address?: StringFilter<"Members"> | string
    phoneNumber?: StringFilter<"Members"> | string
    membersFoodTypes?: MembersFoodTypeListRelationFilter
    review?: ReviewListRelationFilter
  }

  export type MembersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    membersFoodTypes?: MembersFoodTypeOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
    _relevance?: MembersOrderByRelevanceInput
  }

  export type MembersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    name?: StringFilter<"Members"> | string
    gender?: EnumGenderFilter<"Members"> | $Enums.Gender
    birth?: DateTimeFilter<"Members"> | Date | string
    address?: StringFilter<"Members"> | string
    phoneNumber?: StringFilter<"Members"> | string
    membersFoodTypes?: MembersFoodTypeListRelationFilter
    review?: ReviewListRelationFilter
  }, "id" | "email">

  export type MembersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    _count?: MembersCountOrderByAggregateInput
    _avg?: MembersAvgOrderByAggregateInput
    _max?: MembersMaxOrderByAggregateInput
    _min?: MembersMinOrderByAggregateInput
    _sum?: MembersSumOrderByAggregateInput
  }

  export type MembersScalarWhereWithAggregatesInput = {
    AND?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    OR?: MembersScalarWhereWithAggregatesInput[]
    NOT?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Members"> | number
    email?: StringWithAggregatesFilter<"Members"> | string
    name?: StringWithAggregatesFilter<"Members"> | string
    gender?: EnumGenderWithAggregatesFilter<"Members"> | $Enums.Gender
    birth?: DateTimeWithAggregatesFilter<"Members"> | Date | string
    address?: StringWithAggregatesFilter<"Members"> | string
    phoneNumber?: StringWithAggregatesFilter<"Members"> | string
  }

  export type MembersFoodTypeWhereInput = {
    AND?: MembersFoodTypeWhereInput | MembersFoodTypeWhereInput[]
    OR?: MembersFoodTypeWhereInput[]
    NOT?: MembersFoodTypeWhereInput | MembersFoodTypeWhereInput[]
    id?: IntFilter<"MembersFoodType"> | number
    userId?: IntFilter<"MembersFoodType"> | number
    foodTypeId?: IntFilter<"MembersFoodType"> | number
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
    foodType?: XOR<FoodTypeScalarRelationFilter, FoodTypeWhereInput>
  }

  export type MembersFoodTypeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodTypeId?: SortOrder
    members?: MembersOrderByWithRelationInput
    foodType?: FoodTypeOrderByWithRelationInput
  }

  export type MembersFoodTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MembersFoodTypeWhereInput | MembersFoodTypeWhereInput[]
    OR?: MembersFoodTypeWhereInput[]
    NOT?: MembersFoodTypeWhereInput | MembersFoodTypeWhereInput[]
    userId?: IntFilter<"MembersFoodType"> | number
    foodTypeId?: IntFilter<"MembersFoodType"> | number
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
    foodType?: XOR<FoodTypeScalarRelationFilter, FoodTypeWhereInput>
  }, "id">

  export type MembersFoodTypeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodTypeId?: SortOrder
    _count?: MembersFoodTypeCountOrderByAggregateInput
    _avg?: MembersFoodTypeAvgOrderByAggregateInput
    _max?: MembersFoodTypeMaxOrderByAggregateInput
    _min?: MembersFoodTypeMinOrderByAggregateInput
    _sum?: MembersFoodTypeSumOrderByAggregateInput
  }

  export type MembersFoodTypeScalarWhereWithAggregatesInput = {
    AND?: MembersFoodTypeScalarWhereWithAggregatesInput | MembersFoodTypeScalarWhereWithAggregatesInput[]
    OR?: MembersFoodTypeScalarWhereWithAggregatesInput[]
    NOT?: MembersFoodTypeScalarWhereWithAggregatesInput | MembersFoodTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MembersFoodType"> | number
    userId?: IntWithAggregatesFilter<"MembersFoodType"> | number
    foodTypeId?: IntWithAggregatesFilter<"MembersFoodType"> | number
  }

  export type FoodTypeWhereInput = {
    AND?: FoodTypeWhereInput | FoodTypeWhereInput[]
    OR?: FoodTypeWhereInput[]
    NOT?: FoodTypeWhereInput | FoodTypeWhereInput[]
    id?: IntFilter<"FoodType"> | number
    name?: StringFilter<"FoodType"> | string
    storeTypeName?: StringFilter<"FoodType"> | string
    membersFoodTypes?: MembersFoodTypeListRelationFilter
  }

  export type FoodTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    storeTypeName?: SortOrder
    membersFoodTypes?: MembersFoodTypeOrderByRelationAggregateInput
    _relevance?: FoodTypeOrderByRelevanceInput
  }

  export type FoodTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodTypeWhereInput | FoodTypeWhereInput[]
    OR?: FoodTypeWhereInput[]
    NOT?: FoodTypeWhereInput | FoodTypeWhereInput[]
    name?: StringFilter<"FoodType"> | string
    storeTypeName?: StringFilter<"FoodType"> | string
    membersFoodTypes?: MembersFoodTypeListRelationFilter
  }, "id">

  export type FoodTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    storeTypeName?: SortOrder
    _count?: FoodTypeCountOrderByAggregateInput
    _avg?: FoodTypeAvgOrderByAggregateInput
    _max?: FoodTypeMaxOrderByAggregateInput
    _min?: FoodTypeMinOrderByAggregateInput
    _sum?: FoodTypeSumOrderByAggregateInput
  }

  export type FoodTypeScalarWhereWithAggregatesInput = {
    AND?: FoodTypeScalarWhereWithAggregatesInput | FoodTypeScalarWhereWithAggregatesInput[]
    OR?: FoodTypeScalarWhereWithAggregatesInput[]
    NOT?: FoodTypeScalarWhereWithAggregatesInput | FoodTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodType"> | number
    name?: StringWithAggregatesFilter<"FoodType"> | string
    storeTypeName?: StringWithAggregatesFilter<"FoodType"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    storeId?: IntFilter<"Review"> | number
    uploadedAt?: DateTimeFilter<"Review"> | Date | string
    star?: FloatFilter<"Review"> | number
    contents?: StringFilter<"Review"> | string
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    uploadedAt?: SortOrder
    star?: SortOrder
    contents?: SortOrder
    members?: MembersOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    storeId?: IntFilter<"Review"> | number
    uploadedAt?: DateTimeFilter<"Review"> | Date | string
    star?: FloatFilter<"Review"> | number
    contents?: StringFilter<"Review"> | string
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    uploadedAt?: SortOrder
    star?: SortOrder
    contents?: SortOrder
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
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    storeId?: IntWithAggregatesFilter<"Review"> | number
    uploadedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    star?: FloatWithAggregatesFilter<"Review"> | number
    contents?: StringWithAggregatesFilter<"Review"> | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    foodTypeId?: IntFilter<"Store"> | number
    address?: StringFilter<"Store"> | string
    openTime?: StringFilter<"Store"> | string
    closeTime?: StringFilter<"Store"> | string
    locationId?: IntFilter<"Store"> | number
    review?: ReviewListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    foodTypeId?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    locationId?: SortOrder
    review?: ReviewOrderByRelationAggregateInput
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    foodTypeId?: IntFilter<"Store"> | number
    address?: StringFilter<"Store"> | string
    openTime?: StringFilter<"Store"> | string
    closeTime?: StringFilter<"Store"> | string
    locationId?: IntFilter<"Store"> | number
    review?: ReviewListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    foodTypeId?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    locationId?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    name?: StringWithAggregatesFilter<"Store"> | string
    foodTypeId?: IntWithAggregatesFilter<"Store"> | number
    address?: StringWithAggregatesFilter<"Store"> | string
    openTime?: StringWithAggregatesFilter<"Store"> | string
    closeTime?: StringWithAggregatesFilter<"Store"> | string
    locationId?: IntWithAggregatesFilter<"Store"> | number
  }

  export type MembersCreateInput = {
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutMembersInput
    review?: ReviewCreateNestedManyWithoutMembersInput
  }

  export type MembersUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeUncheckedCreateNestedManyWithoutMembersInput
    review?: ReviewUncheckedCreateNestedManyWithoutMembersInput
  }

  export type MembersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUpdateManyWithoutMembersNestedInput
    review?: ReviewUpdateManyWithoutMembersNestedInput
  }

  export type MembersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUncheckedUpdateManyWithoutMembersNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type MembersCreateManyInput = {
    id?: number
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
  }

  export type MembersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type MembersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type MembersFoodTypeCreateInput = {
    members: MembersCreateNestedOneWithoutMembersFoodTypesInput
    foodType: FoodTypeCreateNestedOneWithoutMembersFoodTypesInput
  }

  export type MembersFoodTypeUncheckedCreateInput = {
    id?: number
    userId: number
    foodTypeId: number
  }

  export type MembersFoodTypeUpdateInput = {
    members?: MembersUpdateOneRequiredWithoutMembersFoodTypesNestedInput
    foodType?: FoodTypeUpdateOneRequiredWithoutMembersFoodTypesNestedInput
  }

  export type MembersFoodTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MembersFoodTypeCreateManyInput = {
    id?: number
    userId: number
    foodTypeId: number
  }

  export type MembersFoodTypeUpdateManyMutationInput = {

  }

  export type MembersFoodTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type FoodTypeCreateInput = {
    name: string
    storeTypeName: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUncheckedCreateInput = {
    id?: number
    name: string
    storeTypeName: string
    membersFoodTypes?: MembersFoodTypeUncheckedCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUncheckedUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeCreateManyInput = {
    id?: number
    name: string
    storeTypeName: string
  }

  export type FoodTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
  }

  export type FoodTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    uploadedAt: Date | string
    star: number
    contents: string
    members: MembersCreateNestedOneWithoutReviewInput
    store: StoreCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    storeId: number
    uploadedAt: Date | string
    star: number
    contents: string
  }

  export type ReviewUpdateInput = {
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
    members?: MembersUpdateOneRequiredWithoutReviewNestedInput
    store?: StoreUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    storeId: number
    uploadedAt: Date | string
    star: number
    contents: string
  }

  export type ReviewUpdateManyMutationInput = {
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
  }

  export type StoreCreateInput = {
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
    review?: ReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
    review?: ReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    review?: ReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    review?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
  }

  export type StoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MembersFoodTypeListRelationFilter = {
    every?: MembersFoodTypeWhereInput
    some?: MembersFoodTypeWhereInput
    none?: MembersFoodTypeWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type MembersFoodTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembersOrderByRelevanceInput = {
    fields: MembersOrderByRelevanceFieldEnum | MembersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MembersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type MembersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MembersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type MembersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
  }

  export type MembersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MembersScalarRelationFilter = {
    is?: MembersWhereInput
    isNot?: MembersWhereInput
  }

  export type FoodTypeScalarRelationFilter = {
    is?: FoodTypeWhereInput
    isNot?: FoodTypeWhereInput
  }

  export type MembersFoodTypeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodTypeId?: SortOrder
  }

  export type MembersFoodTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodTypeId?: SortOrder
  }

  export type MembersFoodTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodTypeId?: SortOrder
  }

  export type MembersFoodTypeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodTypeId?: SortOrder
  }

  export type MembersFoodTypeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodTypeId?: SortOrder
  }

  export type FoodTypeOrderByRelevanceInput = {
    fields: FoodTypeOrderByRelevanceFieldEnum | FoodTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    storeTypeName?: SortOrder
  }

  export type FoodTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    storeTypeName?: SortOrder
  }

  export type FoodTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    storeTypeName?: SortOrder
  }

  export type FoodTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    uploadedAt?: SortOrder
    star?: SortOrder
    contents?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    star?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    uploadedAt?: SortOrder
    star?: SortOrder
    contents?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    uploadedAt?: SortOrder
    star?: SortOrder
    contents?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeId?: SortOrder
    star?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodTypeId?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    locationId?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    foodTypeId?: SortOrder
    locationId?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodTypeId?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    locationId?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodTypeId?: SortOrder
    address?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    locationId?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    foodTypeId?: SortOrder
    locationId?: SortOrder
  }

  export type MembersFoodTypeCreateNestedManyWithoutMembersInput = {
    create?: XOR<MembersFoodTypeCreateWithoutMembersInput, MembersFoodTypeUncheckedCreateWithoutMembersInput> | MembersFoodTypeCreateWithoutMembersInput[] | MembersFoodTypeUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutMembersInput | MembersFoodTypeCreateOrConnectWithoutMembersInput[]
    createMany?: MembersFoodTypeCreateManyMembersInputEnvelope
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutMembersInput = {
    create?: XOR<ReviewCreateWithoutMembersInput, ReviewUncheckedCreateWithoutMembersInput> | ReviewCreateWithoutMembersInput[] | ReviewUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMembersInput | ReviewCreateOrConnectWithoutMembersInput[]
    createMany?: ReviewCreateManyMembersInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MembersFoodTypeUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<MembersFoodTypeCreateWithoutMembersInput, MembersFoodTypeUncheckedCreateWithoutMembersInput> | MembersFoodTypeCreateWithoutMembersInput[] | MembersFoodTypeUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutMembersInput | MembersFoodTypeCreateOrConnectWithoutMembersInput[]
    createMany?: MembersFoodTypeCreateManyMembersInputEnvelope
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<ReviewCreateWithoutMembersInput, ReviewUncheckedCreateWithoutMembersInput> | ReviewCreateWithoutMembersInput[] | ReviewUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMembersInput | ReviewCreateOrConnectWithoutMembersInput[]
    createMany?: ReviewCreateManyMembersInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MembersFoodTypeUpdateManyWithoutMembersNestedInput = {
    create?: XOR<MembersFoodTypeCreateWithoutMembersInput, MembersFoodTypeUncheckedCreateWithoutMembersInput> | MembersFoodTypeCreateWithoutMembersInput[] | MembersFoodTypeUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutMembersInput | MembersFoodTypeCreateOrConnectWithoutMembersInput[]
    upsert?: MembersFoodTypeUpsertWithWhereUniqueWithoutMembersInput | MembersFoodTypeUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: MembersFoodTypeCreateManyMembersInputEnvelope
    set?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    disconnect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    delete?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    update?: MembersFoodTypeUpdateWithWhereUniqueWithoutMembersInput | MembersFoodTypeUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: MembersFoodTypeUpdateManyWithWhereWithoutMembersInput | MembersFoodTypeUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: MembersFoodTypeScalarWhereInput | MembersFoodTypeScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ReviewCreateWithoutMembersInput, ReviewUncheckedCreateWithoutMembersInput> | ReviewCreateWithoutMembersInput[] | ReviewUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMembersInput | ReviewCreateOrConnectWithoutMembersInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMembersInput | ReviewUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: ReviewCreateManyMembersInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMembersInput | ReviewUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMembersInput | ReviewUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembersFoodTypeUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<MembersFoodTypeCreateWithoutMembersInput, MembersFoodTypeUncheckedCreateWithoutMembersInput> | MembersFoodTypeCreateWithoutMembersInput[] | MembersFoodTypeUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutMembersInput | MembersFoodTypeCreateOrConnectWithoutMembersInput[]
    upsert?: MembersFoodTypeUpsertWithWhereUniqueWithoutMembersInput | MembersFoodTypeUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: MembersFoodTypeCreateManyMembersInputEnvelope
    set?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    disconnect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    delete?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    update?: MembersFoodTypeUpdateWithWhereUniqueWithoutMembersInput | MembersFoodTypeUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: MembersFoodTypeUpdateManyWithWhereWithoutMembersInput | MembersFoodTypeUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: MembersFoodTypeScalarWhereInput | MembersFoodTypeScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<ReviewCreateWithoutMembersInput, ReviewUncheckedCreateWithoutMembersInput> | ReviewCreateWithoutMembersInput[] | ReviewUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMembersInput | ReviewCreateOrConnectWithoutMembersInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMembersInput | ReviewUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: ReviewCreateManyMembersInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMembersInput | ReviewUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMembersInput | ReviewUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MembersCreateNestedOneWithoutMembersFoodTypesInput = {
    create?: XOR<MembersCreateWithoutMembersFoodTypesInput, MembersUncheckedCreateWithoutMembersFoodTypesInput>
    connectOrCreate?: MembersCreateOrConnectWithoutMembersFoodTypesInput
    connect?: MembersWhereUniqueInput
  }

  export type FoodTypeCreateNestedOneWithoutMembersFoodTypesInput = {
    create?: XOR<FoodTypeCreateWithoutMembersFoodTypesInput, FoodTypeUncheckedCreateWithoutMembersFoodTypesInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutMembersFoodTypesInput
    connect?: FoodTypeWhereUniqueInput
  }

  export type MembersUpdateOneRequiredWithoutMembersFoodTypesNestedInput = {
    create?: XOR<MembersCreateWithoutMembersFoodTypesInput, MembersUncheckedCreateWithoutMembersFoodTypesInput>
    connectOrCreate?: MembersCreateOrConnectWithoutMembersFoodTypesInput
    upsert?: MembersUpsertWithoutMembersFoodTypesInput
    connect?: MembersWhereUniqueInput
    update?: XOR<XOR<MembersUpdateToOneWithWhereWithoutMembersFoodTypesInput, MembersUpdateWithoutMembersFoodTypesInput>, MembersUncheckedUpdateWithoutMembersFoodTypesInput>
  }

  export type FoodTypeUpdateOneRequiredWithoutMembersFoodTypesNestedInput = {
    create?: XOR<FoodTypeCreateWithoutMembersFoodTypesInput, FoodTypeUncheckedCreateWithoutMembersFoodTypesInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutMembersFoodTypesInput
    upsert?: FoodTypeUpsertWithoutMembersFoodTypesInput
    connect?: FoodTypeWhereUniqueInput
    update?: XOR<XOR<FoodTypeUpdateToOneWithWhereWithoutMembersFoodTypesInput, FoodTypeUpdateWithoutMembersFoodTypesInput>, FoodTypeUncheckedUpdateWithoutMembersFoodTypesInput>
  }

  export type MembersFoodTypeCreateNestedManyWithoutFoodTypeInput = {
    create?: XOR<MembersFoodTypeCreateWithoutFoodTypeInput, MembersFoodTypeUncheckedCreateWithoutFoodTypeInput> | MembersFoodTypeCreateWithoutFoodTypeInput[] | MembersFoodTypeUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutFoodTypeInput | MembersFoodTypeCreateOrConnectWithoutFoodTypeInput[]
    createMany?: MembersFoodTypeCreateManyFoodTypeInputEnvelope
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
  }

  export type MembersFoodTypeUncheckedCreateNestedManyWithoutFoodTypeInput = {
    create?: XOR<MembersFoodTypeCreateWithoutFoodTypeInput, MembersFoodTypeUncheckedCreateWithoutFoodTypeInput> | MembersFoodTypeCreateWithoutFoodTypeInput[] | MembersFoodTypeUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutFoodTypeInput | MembersFoodTypeCreateOrConnectWithoutFoodTypeInput[]
    createMany?: MembersFoodTypeCreateManyFoodTypeInputEnvelope
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
  }

  export type MembersFoodTypeUpdateManyWithoutFoodTypeNestedInput = {
    create?: XOR<MembersFoodTypeCreateWithoutFoodTypeInput, MembersFoodTypeUncheckedCreateWithoutFoodTypeInput> | MembersFoodTypeCreateWithoutFoodTypeInput[] | MembersFoodTypeUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutFoodTypeInput | MembersFoodTypeCreateOrConnectWithoutFoodTypeInput[]
    upsert?: MembersFoodTypeUpsertWithWhereUniqueWithoutFoodTypeInput | MembersFoodTypeUpsertWithWhereUniqueWithoutFoodTypeInput[]
    createMany?: MembersFoodTypeCreateManyFoodTypeInputEnvelope
    set?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    disconnect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    delete?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    update?: MembersFoodTypeUpdateWithWhereUniqueWithoutFoodTypeInput | MembersFoodTypeUpdateWithWhereUniqueWithoutFoodTypeInput[]
    updateMany?: MembersFoodTypeUpdateManyWithWhereWithoutFoodTypeInput | MembersFoodTypeUpdateManyWithWhereWithoutFoodTypeInput[]
    deleteMany?: MembersFoodTypeScalarWhereInput | MembersFoodTypeScalarWhereInput[]
  }

  export type MembersFoodTypeUncheckedUpdateManyWithoutFoodTypeNestedInput = {
    create?: XOR<MembersFoodTypeCreateWithoutFoodTypeInput, MembersFoodTypeUncheckedCreateWithoutFoodTypeInput> | MembersFoodTypeCreateWithoutFoodTypeInput[] | MembersFoodTypeUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutFoodTypeInput | MembersFoodTypeCreateOrConnectWithoutFoodTypeInput[]
    upsert?: MembersFoodTypeUpsertWithWhereUniqueWithoutFoodTypeInput | MembersFoodTypeUpsertWithWhereUniqueWithoutFoodTypeInput[]
    createMany?: MembersFoodTypeCreateManyFoodTypeInputEnvelope
    set?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    disconnect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    delete?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
    update?: MembersFoodTypeUpdateWithWhereUniqueWithoutFoodTypeInput | MembersFoodTypeUpdateWithWhereUniqueWithoutFoodTypeInput[]
    updateMany?: MembersFoodTypeUpdateManyWithWhereWithoutFoodTypeInput | MembersFoodTypeUpdateManyWithWhereWithoutFoodTypeInput[]
    deleteMany?: MembersFoodTypeScalarWhereInput | MembersFoodTypeScalarWhereInput[]
  }

  export type MembersCreateNestedOneWithoutReviewInput = {
    create?: XOR<MembersCreateWithoutReviewInput, MembersUncheckedCreateWithoutReviewInput>
    connectOrCreate?: MembersCreateOrConnectWithoutReviewInput
    connect?: MembersWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutReviewInput = {
    create?: XOR<StoreCreateWithoutReviewInput, StoreUncheckedCreateWithoutReviewInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewInput
    connect?: StoreWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MembersUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<MembersCreateWithoutReviewInput, MembersUncheckedCreateWithoutReviewInput>
    connectOrCreate?: MembersCreateOrConnectWithoutReviewInput
    upsert?: MembersUpsertWithoutReviewInput
    connect?: MembersWhereUniqueInput
    update?: XOR<XOR<MembersUpdateToOneWithWhereWithoutReviewInput, MembersUpdateWithoutReviewInput>, MembersUncheckedUpdateWithoutReviewInput>
  }

  export type StoreUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<StoreCreateWithoutReviewInput, StoreUncheckedCreateWithoutReviewInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewInput
    upsert?: StoreUpsertWithoutReviewInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutReviewInput, StoreUpdateWithoutReviewInput>, StoreUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutStoreInput | ReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutStoreInput | ReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutStoreInput | ReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MembersFoodTypeCreateWithoutMembersInput = {
    foodType: FoodTypeCreateNestedOneWithoutMembersFoodTypesInput
  }

  export type MembersFoodTypeUncheckedCreateWithoutMembersInput = {
    id?: number
    foodTypeId: number
  }

  export type MembersFoodTypeCreateOrConnectWithoutMembersInput = {
    where: MembersFoodTypeWhereUniqueInput
    create: XOR<MembersFoodTypeCreateWithoutMembersInput, MembersFoodTypeUncheckedCreateWithoutMembersInput>
  }

  export type MembersFoodTypeCreateManyMembersInputEnvelope = {
    data: MembersFoodTypeCreateManyMembersInput | MembersFoodTypeCreateManyMembersInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutMembersInput = {
    uploadedAt: Date | string
    star: number
    contents: string
    store: StoreCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutMembersInput = {
    id?: number
    storeId: number
    uploadedAt: Date | string
    star: number
    contents: string
  }

  export type ReviewCreateOrConnectWithoutMembersInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMembersInput, ReviewUncheckedCreateWithoutMembersInput>
  }

  export type ReviewCreateManyMembersInputEnvelope = {
    data: ReviewCreateManyMembersInput | ReviewCreateManyMembersInput[]
    skipDuplicates?: boolean
  }

  export type MembersFoodTypeUpsertWithWhereUniqueWithoutMembersInput = {
    where: MembersFoodTypeWhereUniqueInput
    update: XOR<MembersFoodTypeUpdateWithoutMembersInput, MembersFoodTypeUncheckedUpdateWithoutMembersInput>
    create: XOR<MembersFoodTypeCreateWithoutMembersInput, MembersFoodTypeUncheckedCreateWithoutMembersInput>
  }

  export type MembersFoodTypeUpdateWithWhereUniqueWithoutMembersInput = {
    where: MembersFoodTypeWhereUniqueInput
    data: XOR<MembersFoodTypeUpdateWithoutMembersInput, MembersFoodTypeUncheckedUpdateWithoutMembersInput>
  }

  export type MembersFoodTypeUpdateManyWithWhereWithoutMembersInput = {
    where: MembersFoodTypeScalarWhereInput
    data: XOR<MembersFoodTypeUpdateManyMutationInput, MembersFoodTypeUncheckedUpdateManyWithoutMembersInput>
  }

  export type MembersFoodTypeScalarWhereInput = {
    AND?: MembersFoodTypeScalarWhereInput | MembersFoodTypeScalarWhereInput[]
    OR?: MembersFoodTypeScalarWhereInput[]
    NOT?: MembersFoodTypeScalarWhereInput | MembersFoodTypeScalarWhereInput[]
    id?: IntFilter<"MembersFoodType"> | number
    userId?: IntFilter<"MembersFoodType"> | number
    foodTypeId?: IntFilter<"MembersFoodType"> | number
  }

  export type ReviewUpsertWithWhereUniqueWithoutMembersInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMembersInput, ReviewUncheckedUpdateWithoutMembersInput>
    create: XOR<ReviewCreateWithoutMembersInput, ReviewUncheckedCreateWithoutMembersInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMembersInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMembersInput, ReviewUncheckedUpdateWithoutMembersInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMembersInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutMembersInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    storeId?: IntFilter<"Review"> | number
    uploadedAt?: DateTimeFilter<"Review"> | Date | string
    star?: FloatFilter<"Review"> | number
    contents?: StringFilter<"Review"> | string
  }

  export type MembersCreateWithoutMembersFoodTypesInput = {
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    review?: ReviewCreateNestedManyWithoutMembersInput
  }

  export type MembersUncheckedCreateWithoutMembersFoodTypesInput = {
    id?: number
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    review?: ReviewUncheckedCreateNestedManyWithoutMembersInput
  }

  export type MembersCreateOrConnectWithoutMembersFoodTypesInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutMembersFoodTypesInput, MembersUncheckedCreateWithoutMembersFoodTypesInput>
  }

  export type FoodTypeCreateWithoutMembersFoodTypesInput = {
    name: string
    storeTypeName: string
  }

  export type FoodTypeUncheckedCreateWithoutMembersFoodTypesInput = {
    id?: number
    name: string
    storeTypeName: string
  }

  export type FoodTypeCreateOrConnectWithoutMembersFoodTypesInput = {
    where: FoodTypeWhereUniqueInput
    create: XOR<FoodTypeCreateWithoutMembersFoodTypesInput, FoodTypeUncheckedCreateWithoutMembersFoodTypesInput>
  }

  export type MembersUpsertWithoutMembersFoodTypesInput = {
    update: XOR<MembersUpdateWithoutMembersFoodTypesInput, MembersUncheckedUpdateWithoutMembersFoodTypesInput>
    create: XOR<MembersCreateWithoutMembersFoodTypesInput, MembersUncheckedCreateWithoutMembersFoodTypesInput>
    where?: MembersWhereInput
  }

  export type MembersUpdateToOneWithWhereWithoutMembersFoodTypesInput = {
    where?: MembersWhereInput
    data: XOR<MembersUpdateWithoutMembersFoodTypesInput, MembersUncheckedUpdateWithoutMembersFoodTypesInput>
  }

  export type MembersUpdateWithoutMembersFoodTypesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateManyWithoutMembersNestedInput
  }

  export type MembersUncheckedUpdateWithoutMembersFoodTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    review?: ReviewUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type FoodTypeUpsertWithoutMembersFoodTypesInput = {
    update: XOR<FoodTypeUpdateWithoutMembersFoodTypesInput, FoodTypeUncheckedUpdateWithoutMembersFoodTypesInput>
    create: XOR<FoodTypeCreateWithoutMembersFoodTypesInput, FoodTypeUncheckedCreateWithoutMembersFoodTypesInput>
    where?: FoodTypeWhereInput
  }

  export type FoodTypeUpdateToOneWithWhereWithoutMembersFoodTypesInput = {
    where?: FoodTypeWhereInput
    data: XOR<FoodTypeUpdateWithoutMembersFoodTypesInput, FoodTypeUncheckedUpdateWithoutMembersFoodTypesInput>
  }

  export type FoodTypeUpdateWithoutMembersFoodTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
  }

  export type FoodTypeUncheckedUpdateWithoutMembersFoodTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
  }

  export type MembersFoodTypeCreateWithoutFoodTypeInput = {
    members: MembersCreateNestedOneWithoutMembersFoodTypesInput
  }

  export type MembersFoodTypeUncheckedCreateWithoutFoodTypeInput = {
    id?: number
    userId: number
  }

  export type MembersFoodTypeCreateOrConnectWithoutFoodTypeInput = {
    where: MembersFoodTypeWhereUniqueInput
    create: XOR<MembersFoodTypeCreateWithoutFoodTypeInput, MembersFoodTypeUncheckedCreateWithoutFoodTypeInput>
  }

  export type MembersFoodTypeCreateManyFoodTypeInputEnvelope = {
    data: MembersFoodTypeCreateManyFoodTypeInput | MembersFoodTypeCreateManyFoodTypeInput[]
    skipDuplicates?: boolean
  }

  export type MembersFoodTypeUpsertWithWhereUniqueWithoutFoodTypeInput = {
    where: MembersFoodTypeWhereUniqueInput
    update: XOR<MembersFoodTypeUpdateWithoutFoodTypeInput, MembersFoodTypeUncheckedUpdateWithoutFoodTypeInput>
    create: XOR<MembersFoodTypeCreateWithoutFoodTypeInput, MembersFoodTypeUncheckedCreateWithoutFoodTypeInput>
  }

  export type MembersFoodTypeUpdateWithWhereUniqueWithoutFoodTypeInput = {
    where: MembersFoodTypeWhereUniqueInput
    data: XOR<MembersFoodTypeUpdateWithoutFoodTypeInput, MembersFoodTypeUncheckedUpdateWithoutFoodTypeInput>
  }

  export type MembersFoodTypeUpdateManyWithWhereWithoutFoodTypeInput = {
    where: MembersFoodTypeScalarWhereInput
    data: XOR<MembersFoodTypeUpdateManyMutationInput, MembersFoodTypeUncheckedUpdateManyWithoutFoodTypeInput>
  }

  export type MembersCreateWithoutReviewInput = {
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutMembersInput
  }

  export type MembersUncheckedCreateWithoutReviewInput = {
    id?: number
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeUncheckedCreateNestedManyWithoutMembersInput
  }

  export type MembersCreateOrConnectWithoutReviewInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutReviewInput, MembersUncheckedCreateWithoutReviewInput>
  }

  export type StoreCreateWithoutReviewInput = {
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
  }

  export type StoreUncheckedCreateWithoutReviewInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
  }

  export type StoreCreateOrConnectWithoutReviewInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutReviewInput, StoreUncheckedCreateWithoutReviewInput>
  }

  export type MembersUpsertWithoutReviewInput = {
    update: XOR<MembersUpdateWithoutReviewInput, MembersUncheckedUpdateWithoutReviewInput>
    create: XOR<MembersCreateWithoutReviewInput, MembersUncheckedCreateWithoutReviewInput>
    where?: MembersWhereInput
  }

  export type MembersUpdateToOneWithWhereWithoutReviewInput = {
    where?: MembersWhereInput
    data: XOR<MembersUpdateWithoutReviewInput, MembersUncheckedUpdateWithoutReviewInput>
  }

  export type MembersUpdateWithoutReviewInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUpdateManyWithoutMembersNestedInput
  }

  export type MembersUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type StoreUpsertWithoutReviewInput = {
    update: XOR<StoreUpdateWithoutReviewInput, StoreUncheckedUpdateWithoutReviewInput>
    create: XOR<StoreCreateWithoutReviewInput, StoreUncheckedCreateWithoutReviewInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutReviewInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutReviewInput, StoreUncheckedUpdateWithoutReviewInput>
  }

  export type StoreUpdateWithoutReviewInput = {
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateWithoutStoreInput = {
    uploadedAt: Date | string
    star: number
    contents: string
    members: MembersCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutStoreInput = {
    id?: number
    userId: number
    uploadedAt: Date | string
    star: number
    contents: string
  }

  export type ReviewCreateOrConnectWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewCreateManyStoreInputEnvelope = {
    data: ReviewCreateManyStoreInput | ReviewCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
    create: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutStoreInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutStoreInput, ReviewUncheckedUpdateWithoutStoreInput>
  }

  export type ReviewUpdateManyWithWhereWithoutStoreInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutStoreInput>
  }

  export type MembersFoodTypeCreateManyMembersInput = {
    id?: number
    foodTypeId: number
  }

  export type ReviewCreateManyMembersInput = {
    id?: number
    storeId: number
    uploadedAt: Date | string
    star: number
    contents: string
  }

  export type MembersFoodTypeUpdateWithoutMembersInput = {
    foodType?: FoodTypeUpdateOneRequiredWithoutMembersFoodTypesNestedInput
  }

  export type MembersFoodTypeUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type MembersFoodTypeUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewUpdateWithoutMembersInput = {
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
  }

  export type MembersFoodTypeCreateManyFoodTypeInput = {
    id?: number
    userId: number
  }

  export type MembersFoodTypeUpdateWithoutFoodTypeInput = {
    members?: MembersUpdateOneRequiredWithoutMembersFoodTypesNestedInput
  }

  export type MembersFoodTypeUncheckedUpdateWithoutFoodTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MembersFoodTypeUncheckedUpdateManyWithoutFoodTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyStoreInput = {
    id?: number
    userId: number
    uploadedAt: Date | string
    star: number
    contents: string
  }

  export type ReviewUpdateWithoutStoreInput = {
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
    members?: MembersUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    star?: FloatFieldUpdateOperationsInput | number
    contents?: StringFieldUpdateOperationsInput | string
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