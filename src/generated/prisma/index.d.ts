
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
 * Model Locations
 * 
 */
export type Locations = $Result.DefaultSelection<Prisma.$LocationsPayload>
/**
 * Model StoreStatus
 * 
 */
export type StoreStatus = $Result.DefaultSelection<Prisma.$StoreStatusPayload>
/**
 * Model Missions
 * 
 */
export type Missions = $Result.DefaultSelection<Prisma.$MissionsPayload>
/**
 * Model AcceptedMissions
 * 
 */
export type AcceptedMissions = $Result.DefaultSelection<Prisma.$AcceptedMissionsPayload>
/**
 * Model CompletedMissions
 * 
 */
export type CompletedMissions = $Result.DefaultSelection<Prisma.$CompletedMissionsPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

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

  /**
   * `prisma.locations`: Exposes CRUD operations for the **Locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.LocationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeStatus`: Exposes CRUD operations for the **StoreStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreStatuses
    * const storeStatuses = await prisma.storeStatus.findMany()
    * ```
    */
  get storeStatus(): Prisma.StoreStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missions`: Exposes CRUD operations for the **Missions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.missions.findMany()
    * ```
    */
  get missions(): Prisma.MissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.acceptedMissions`: Exposes CRUD operations for the **AcceptedMissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcceptedMissions
    * const acceptedMissions = await prisma.acceptedMissions.findMany()
    * ```
    */
  get acceptedMissions(): Prisma.AcceptedMissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedMissions`: Exposes CRUD operations for the **CompletedMissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedMissions
    * const completedMissions = await prisma.completedMissions.findMany()
    * ```
    */
  get completedMissions(): Prisma.CompletedMissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
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
    Store: 'Store',
    Locations: 'Locations',
    StoreStatus: 'StoreStatus',
    Missions: 'Missions',
    AcceptedMissions: 'AcceptedMissions',
    CompletedMissions: 'CompletedMissions',
    Session: 'Session'
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
      modelProps: "members" | "membersFoodType" | "foodType" | "review" | "store" | "locations" | "storeStatus" | "missions" | "acceptedMissions" | "completedMissions" | "session"
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
      Locations: {
        payload: Prisma.$LocationsPayload<ExtArgs>
        fields: Prisma.LocationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findFirst: {
            args: Prisma.LocationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findMany: {
            args: Prisma.LocationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          create: {
            args: Prisma.LocationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          createMany: {
            args: Prisma.LocationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          update: {
            args: Prisma.LocationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          deleteMany: {
            args: Prisma.LocationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.LocationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
      StoreStatus: {
        payload: Prisma.$StoreStatusPayload<ExtArgs>
        fields: Prisma.StoreStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload>
          }
          findFirst: {
            args: Prisma.StoreStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload>
          }
          findMany: {
            args: Prisma.StoreStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload>[]
          }
          create: {
            args: Prisma.StoreStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload>
          }
          createMany: {
            args: Prisma.StoreStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload>
          }
          update: {
            args: Prisma.StoreStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload>
          }
          deleteMany: {
            args: Prisma.StoreStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreStatusPayload>
          }
          aggregate: {
            args: Prisma.StoreStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreStatus>
          }
          groupBy: {
            args: Prisma.StoreStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreStatusCountArgs<ExtArgs>
            result: $Utils.Optional<StoreStatusCountAggregateOutputType> | number
          }
        }
      }
      Missions: {
        payload: Prisma.$MissionsPayload<ExtArgs>
        fields: Prisma.MissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload>
          }
          findFirst: {
            args: Prisma.MissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload>
          }
          findMany: {
            args: Prisma.MissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload>[]
          }
          create: {
            args: Prisma.MissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload>
          }
          createMany: {
            args: Prisma.MissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload>
          }
          update: {
            args: Prisma.MissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload>
          }
          deleteMany: {
            args: Prisma.MissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionsPayload>
          }
          aggregate: {
            args: Prisma.MissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissions>
          }
          groupBy: {
            args: Prisma.MissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionsCountArgs<ExtArgs>
            result: $Utils.Optional<MissionsCountAggregateOutputType> | number
          }
        }
      }
      AcceptedMissions: {
        payload: Prisma.$AcceptedMissionsPayload<ExtArgs>
        fields: Prisma.AcceptedMissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcceptedMissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcceptedMissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload>
          }
          findFirst: {
            args: Prisma.AcceptedMissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcceptedMissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload>
          }
          findMany: {
            args: Prisma.AcceptedMissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload>[]
          }
          create: {
            args: Prisma.AcceptedMissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload>
          }
          createMany: {
            args: Prisma.AcceptedMissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AcceptedMissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload>
          }
          update: {
            args: Prisma.AcceptedMissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload>
          }
          deleteMany: {
            args: Prisma.AcceptedMissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcceptedMissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcceptedMissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcceptedMissionsPayload>
          }
          aggregate: {
            args: Prisma.AcceptedMissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcceptedMissions>
          }
          groupBy: {
            args: Prisma.AcceptedMissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcceptedMissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcceptedMissionsCountArgs<ExtArgs>
            result: $Utils.Optional<AcceptedMissionsCountAggregateOutputType> | number
          }
        }
      }
      CompletedMissions: {
        payload: Prisma.$CompletedMissionsPayload<ExtArgs>
        fields: Prisma.CompletedMissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedMissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedMissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload>
          }
          findFirst: {
            args: Prisma.CompletedMissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedMissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload>
          }
          findMany: {
            args: Prisma.CompletedMissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload>[]
          }
          create: {
            args: Prisma.CompletedMissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload>
          }
          createMany: {
            args: Prisma.CompletedMissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompletedMissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload>
          }
          update: {
            args: Prisma.CompletedMissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload>
          }
          deleteMany: {
            args: Prisma.CompletedMissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedMissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompletedMissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedMissionsPayload>
          }
          aggregate: {
            args: Prisma.CompletedMissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedMissions>
          }
          groupBy: {
            args: Prisma.CompletedMissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedMissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedMissionsCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedMissionsCountAggregateOutputType> | number
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
    locations?: LocationsOmit
    storeStatus?: StoreStatusOmit
    missions?: MissionsOmit
    acceptedMissions?: AcceptedMissionsOmit
    completedMissions?: CompletedMissionsOmit
    session?: SessionOmit
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
    acceptedMissions: number
    completedMissions: number
    review: number
  }

  export type MembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersFoodTypes?: boolean | MembersCountOutputTypeCountMembersFoodTypesArgs
    acceptedMissions?: boolean | MembersCountOutputTypeCountAcceptedMissionsArgs
    completedMissions?: boolean | MembersCountOutputTypeCountCompletedMissionsArgs
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
  export type MembersCountOutputTypeCountAcceptedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedMissionsWhereInput
  }

  /**
   * MembersCountOutputType without action
   */
  export type MembersCountOutputTypeCountCompletedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedMissionsWhereInput
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
    store: number
  }

  export type FoodTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membersFoodTypes?: boolean | FoodTypeCountOutputTypeCountMembersFoodTypesArgs
    store?: boolean | FoodTypeCountOutputTypeCountStoreArgs
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
   * FoodTypeCountOutputType without action
   */
  export type FoodTypeCountOutputTypeCountStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    review: number
    storeStatus: number
    missions: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    review?: boolean | StoreCountOutputTypeCountReviewArgs
    storeStatus?: boolean | StoreCountOutputTypeCountStoreStatusArgs
    missions?: boolean | StoreCountOutputTypeCountMissionsArgs
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
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountStoreStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreStatusWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionsWhereInput
  }


  /**
   * Count Type LocationsCountOutputType
   */

  export type LocationsCountOutputType = {
    store: number
    missions: number
  }

  export type LocationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | LocationsCountOutputTypeCountStoreArgs
    missions?: boolean | LocationsCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * LocationsCountOutputType without action
   */
  export type LocationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationsCountOutputType
     */
    select?: LocationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationsCountOutputType without action
   */
  export type LocationsCountOutputTypeCountStoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * LocationsCountOutputType without action
   */
  export type LocationsCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionsWhereInput
  }


  /**
   * Count Type MissionsCountOutputType
   */

  export type MissionsCountOutputType = {
    acceptedMissions: number
    completedMissions: number
  }

  export type MissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acceptedMissions?: boolean | MissionsCountOutputTypeCountAcceptedMissionsArgs
    completedMissions?: boolean | MissionsCountOutputTypeCountCompletedMissionsArgs
  }

  // Custom InputTypes
  /**
   * MissionsCountOutputType without action
   */
  export type MissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionsCountOutputType
     */
    select?: MissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionsCountOutputType without action
   */
  export type MissionsCountOutputTypeCountAcceptedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedMissionsWhereInput
  }

  /**
   * MissionsCountOutputType without action
   */
  export type MissionsCountOutputTypeCountCompletedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedMissionsWhereInput
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
    acceptedMissions?: boolean | Members$acceptedMissionsArgs<ExtArgs>
    completedMissions?: boolean | Members$completedMissionsArgs<ExtArgs>
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
    acceptedMissions?: boolean | Members$acceptedMissionsArgs<ExtArgs>
    completedMissions?: boolean | Members$completedMissionsArgs<ExtArgs>
    review?: boolean | Members$reviewArgs<ExtArgs>
    _count?: boolean | MembersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Members"
    objects: {
      membersFoodTypes: Prisma.$MembersFoodTypePayload<ExtArgs>[]
      acceptedMissions: Prisma.$AcceptedMissionsPayload<ExtArgs>[]
      completedMissions: Prisma.$CompletedMissionsPayload<ExtArgs>[]
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
    acceptedMissions<T extends Members$acceptedMissionsArgs<ExtArgs> = {}>(args?: Subset<T, Members$acceptedMissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completedMissions<T extends Members$completedMissionsArgs<ExtArgs> = {}>(args?: Subset<T, Members$completedMissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Members.acceptedMissions
   */
  export type Members$acceptedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    where?: AcceptedMissionsWhereInput
    orderBy?: AcceptedMissionsOrderByWithRelationInput | AcceptedMissionsOrderByWithRelationInput[]
    cursor?: AcceptedMissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcceptedMissionsScalarFieldEnum | AcceptedMissionsScalarFieldEnum[]
  }

  /**
   * Members.completedMissions
   */
  export type Members$completedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    where?: CompletedMissionsWhereInput
    orderBy?: CompletedMissionsOrderByWithRelationInput | CompletedMissionsOrderByWithRelationInput[]
    cursor?: CompletedMissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedMissionsScalarFieldEnum | CompletedMissionsScalarFieldEnum[]
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
    store?: boolean | FoodType$storeArgs<ExtArgs>
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
    store?: boolean | FoodType$storeArgs<ExtArgs>
    _count?: boolean | FoodTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodType"
    objects: {
      membersFoodTypes: Prisma.$MembersFoodTypePayload<ExtArgs>[]
      store: Prisma.$StorePayload<ExtArgs>[]
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
    store<T extends FoodType$storeArgs<ExtArgs> = {}>(args?: Subset<T, FoodType$storeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * FoodType.store
   */
  export type FoodType$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
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
    storeStatus?: boolean | Store$storeStatusArgs<ExtArgs>
    missions?: boolean | Store$missionsArgs<ExtArgs>
    foodType?: boolean | FoodTypeDefaultArgs<ExtArgs>
    locations?: boolean | LocationsDefaultArgs<ExtArgs>
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
    storeStatus?: boolean | Store$storeStatusArgs<ExtArgs>
    missions?: boolean | Store$missionsArgs<ExtArgs>
    foodType?: boolean | FoodTypeDefaultArgs<ExtArgs>
    locations?: boolean | LocationsDefaultArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      review: Prisma.$ReviewPayload<ExtArgs>[]
      storeStatus: Prisma.$StoreStatusPayload<ExtArgs>[]
      missions: Prisma.$MissionsPayload<ExtArgs>[]
      foodType: Prisma.$FoodTypePayload<ExtArgs>
      locations: Prisma.$LocationsPayload<ExtArgs>
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
    storeStatus<T extends Store$storeStatusArgs<ExtArgs> = {}>(args?: Subset<T, Store$storeStatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missions<T extends Store$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Store$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    foodType<T extends FoodTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodTypeDefaultArgs<ExtArgs>>): Prisma__FoodTypeClient<$Result.GetResult<Prisma.$FoodTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends LocationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationsDefaultArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Store.storeStatus
   */
  export type Store$storeStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    where?: StoreStatusWhereInput
    orderBy?: StoreStatusOrderByWithRelationInput | StoreStatusOrderByWithRelationInput[]
    cursor?: StoreStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreStatusScalarFieldEnum | StoreStatusScalarFieldEnum[]
  }

  /**
   * Store.missions
   */
  export type Store$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    where?: MissionsWhereInput
    orderBy?: MissionsOrderByWithRelationInput | MissionsOrderByWithRelationInput[]
    cursor?: MissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
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
   * Model Locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationsSumAggregateOutputType = {
    id: number | null
  }

  export type LocationsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LocationsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LocationsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LocationsAvgAggregateInputType = {
    id?: true
  }

  export type LocationsSumAggregateInputType = {
    id?: true
  }

  export type LocationsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LocationsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LocationsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to aggregate.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type LocationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithAggregationInput | LocationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: LocationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _avg?: LocationsAvgAggregateInputType
    _sum?: LocationsSumAggregateInputType
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    id: number
    name: string
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends LocationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type LocationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    store?: boolean | Locations$storeArgs<ExtArgs>
    missions?: boolean | Locations$missionsArgs<ExtArgs>
    _count?: boolean | LocationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>



  export type LocationsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LocationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["locations"]>
  export type LocationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | Locations$storeArgs<ExtArgs>
    missions?: boolean | Locations$missionsArgs<ExtArgs>
    _count?: boolean | LocationsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locations"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>[]
      missions: Prisma.$MissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type LocationsGetPayload<S extends boolean | null | undefined | LocationsDefaultArgs> = $Result.GetResult<Prisma.$LocationsPayload, S>

  type LocationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface LocationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locations'], meta: { name: 'Locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {LocationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationsFindUniqueArgs>(args: SelectSubset<T, LocationsFindUniqueArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationsFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationsFindFirstArgs>(args?: SelectSubset<T, LocationsFindFirstArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationsFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationsFindManyArgs>(args?: SelectSubset<T, LocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {LocationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends LocationsCreateArgs>(args: SelectSubset<T, LocationsCreateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationsCreateManyArgs>(args?: SelectSubset<T, LocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Locations.
     * @param {LocationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends LocationsDeleteArgs>(args: SelectSubset<T, LocationsDeleteArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {LocationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationsUpdateArgs>(args: SelectSubset<T, LocationsUpdateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationsDeleteManyArgs>(args?: SelectSubset<T, LocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationsUpdateManyArgs>(args: SelectSubset<T, LocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Locations.
     * @param {LocationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends LocationsUpsertArgs>(args: SelectSubset<T, LocationsUpsertArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationsCountArgs>(
      args?: Subset<T, LocationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsGroupByArgs} args - Group by arguments.
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
      T extends LocationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationsGroupByArgs['orderBy'] }
        : { orderBy?: LocationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locations model
   */
  readonly fields: LocationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends Locations$storeArgs<ExtArgs> = {}>(args?: Subset<T, Locations$storeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missions<T extends Locations$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Locations$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Locations model
   */
  interface LocationsFieldRefs {
    readonly id: FieldRef<"Locations", 'Int'>
    readonly name: FieldRef<"Locations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Locations findUnique
   */
  export type LocationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findUniqueOrThrow
   */
  export type LocationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findFirst
   */
  export type LocationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findFirstOrThrow
   */
  export type LocationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findMany
   */
  export type LocationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations create
   */
  export type LocationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Locations.
     */
    data: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
  }

  /**
   * Locations createMany
   */
  export type LocationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locations update
   */
  export type LocationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Locations.
     */
    data: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
    /**
     * Choose, which Locations to update.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations updateMany
   */
  export type LocationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Locations upsert
   */
  export type LocationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Locations to update in case it exists.
     */
    where: LocationsWhereUniqueInput
    /**
     * In case the Locations found by the `where` argument doesn't exist, create a new Locations with this data.
     */
    create: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
    /**
     * In case the Locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
  }

  /**
   * Locations delete
   */
  export type LocationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter which Locations to delete.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations deleteMany
   */
  export type LocationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Locations.store
   */
  export type Locations$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Locations.missions
   */
  export type Locations$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    where?: MissionsWhereInput
    orderBy?: MissionsOrderByWithRelationInput | MissionsOrderByWithRelationInput[]
    cursor?: MissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * Locations without action
   */
  export type LocationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
  }


  /**
   * Model StoreStatus
   */

  export type AggregateStoreStatus = {
    _count: StoreStatusCountAggregateOutputType | null
    _avg: StoreStatusAvgAggregateOutputType | null
    _sum: StoreStatusSumAggregateOutputType | null
    _min: StoreStatusMinAggregateOutputType | null
    _max: StoreStatusMaxAggregateOutputType | null
  }

  export type StoreStatusAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    reviewsCount: number | null
    starTotal: number | null
  }

  export type StoreStatusSumAggregateOutputType = {
    id: number | null
    storeId: number | null
    reviewsCount: number | null
    starTotal: number | null
  }

  export type StoreStatusMinAggregateOutputType = {
    id: number | null
    storeId: number | null
    reviewsCount: number | null
    starTotal: number | null
  }

  export type StoreStatusMaxAggregateOutputType = {
    id: number | null
    storeId: number | null
    reviewsCount: number | null
    starTotal: number | null
  }

  export type StoreStatusCountAggregateOutputType = {
    id: number
    storeId: number
    reviewsCount: number
    starTotal: number
    _all: number
  }


  export type StoreStatusAvgAggregateInputType = {
    id?: true
    storeId?: true
    reviewsCount?: true
    starTotal?: true
  }

  export type StoreStatusSumAggregateInputType = {
    id?: true
    storeId?: true
    reviewsCount?: true
    starTotal?: true
  }

  export type StoreStatusMinAggregateInputType = {
    id?: true
    storeId?: true
    reviewsCount?: true
    starTotal?: true
  }

  export type StoreStatusMaxAggregateInputType = {
    id?: true
    storeId?: true
    reviewsCount?: true
    starTotal?: true
  }

  export type StoreStatusCountAggregateInputType = {
    id?: true
    storeId?: true
    reviewsCount?: true
    starTotal?: true
    _all?: true
  }

  export type StoreStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreStatus to aggregate.
     */
    where?: StoreStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatuses to fetch.
     */
    orderBy?: StoreStatusOrderByWithRelationInput | StoreStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreStatuses
    **/
    _count?: true | StoreStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreStatusMaxAggregateInputType
  }

  export type GetStoreStatusAggregateType<T extends StoreStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreStatus[P]>
      : GetScalarType<T[P], AggregateStoreStatus[P]>
  }




  export type StoreStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreStatusWhereInput
    orderBy?: StoreStatusOrderByWithAggregationInput | StoreStatusOrderByWithAggregationInput[]
    by: StoreStatusScalarFieldEnum[] | StoreStatusScalarFieldEnum
    having?: StoreStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreStatusCountAggregateInputType | true
    _avg?: StoreStatusAvgAggregateInputType
    _sum?: StoreStatusSumAggregateInputType
    _min?: StoreStatusMinAggregateInputType
    _max?: StoreStatusMaxAggregateInputType
  }

  export type StoreStatusGroupByOutputType = {
    id: number
    storeId: number
    reviewsCount: number
    starTotal: number
    _count: StoreStatusCountAggregateOutputType | null
    _avg: StoreStatusAvgAggregateOutputType | null
    _sum: StoreStatusSumAggregateOutputType | null
    _min: StoreStatusMinAggregateOutputType | null
    _max: StoreStatusMaxAggregateOutputType | null
  }

  type GetStoreStatusGroupByPayload<T extends StoreStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreStatusGroupByOutputType[P]>
            : GetScalarType<T[P], StoreStatusGroupByOutputType[P]>
        }
      >
    >


  export type StoreStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    reviewsCount?: boolean
    starTotal?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeStatus"]>



  export type StoreStatusSelectScalar = {
    id?: boolean
    storeId?: boolean
    reviewsCount?: boolean
    starTotal?: boolean
  }

  export type StoreStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "reviewsCount" | "starTotal", ExtArgs["result"]["storeStatus"]>
  export type StoreStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $StoreStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreStatus"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeId: number
      reviewsCount: number
      starTotal: number
    }, ExtArgs["result"]["storeStatus"]>
    composites: {}
  }

  type StoreStatusGetPayload<S extends boolean | null | undefined | StoreStatusDefaultArgs> = $Result.GetResult<Prisma.$StoreStatusPayload, S>

  type StoreStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreStatusCountAggregateInputType | true
    }

  export interface StoreStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreStatus'], meta: { name: 'StoreStatus' } }
    /**
     * Find zero or one StoreStatus that matches the filter.
     * @param {StoreStatusFindUniqueArgs} args - Arguments to find a StoreStatus
     * @example
     * // Get one StoreStatus
     * const storeStatus = await prisma.storeStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreStatusFindUniqueArgs>(args: SelectSubset<T, StoreStatusFindUniqueArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreStatusFindUniqueOrThrowArgs} args - Arguments to find a StoreStatus
     * @example
     * // Get one StoreStatus
     * const storeStatus = await prisma.storeStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatusFindFirstArgs} args - Arguments to find a StoreStatus
     * @example
     * // Get one StoreStatus
     * const storeStatus = await prisma.storeStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreStatusFindFirstArgs>(args?: SelectSubset<T, StoreStatusFindFirstArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatusFindFirstOrThrowArgs} args - Arguments to find a StoreStatus
     * @example
     * // Get one StoreStatus
     * const storeStatus = await prisma.storeStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreStatuses
     * const storeStatuses = await prisma.storeStatus.findMany()
     * 
     * // Get first 10 StoreStatuses
     * const storeStatuses = await prisma.storeStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeStatusWithIdOnly = await prisma.storeStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreStatusFindManyArgs>(args?: SelectSubset<T, StoreStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreStatus.
     * @param {StoreStatusCreateArgs} args - Arguments to create a StoreStatus.
     * @example
     * // Create one StoreStatus
     * const StoreStatus = await prisma.storeStatus.create({
     *   data: {
     *     // ... data to create a StoreStatus
     *   }
     * })
     * 
     */
    create<T extends StoreStatusCreateArgs>(args: SelectSubset<T, StoreStatusCreateArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreStatuses.
     * @param {StoreStatusCreateManyArgs} args - Arguments to create many StoreStatuses.
     * @example
     * // Create many StoreStatuses
     * const storeStatus = await prisma.storeStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreStatusCreateManyArgs>(args?: SelectSubset<T, StoreStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreStatus.
     * @param {StoreStatusDeleteArgs} args - Arguments to delete one StoreStatus.
     * @example
     * // Delete one StoreStatus
     * const StoreStatus = await prisma.storeStatus.delete({
     *   where: {
     *     // ... filter to delete one StoreStatus
     *   }
     * })
     * 
     */
    delete<T extends StoreStatusDeleteArgs>(args: SelectSubset<T, StoreStatusDeleteArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreStatus.
     * @param {StoreStatusUpdateArgs} args - Arguments to update one StoreStatus.
     * @example
     * // Update one StoreStatus
     * const storeStatus = await prisma.storeStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreStatusUpdateArgs>(args: SelectSubset<T, StoreStatusUpdateArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreStatuses.
     * @param {StoreStatusDeleteManyArgs} args - Arguments to filter StoreStatuses to delete.
     * @example
     * // Delete a few StoreStatuses
     * const { count } = await prisma.storeStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreStatusDeleteManyArgs>(args?: SelectSubset<T, StoreStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreStatuses
     * const storeStatus = await prisma.storeStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreStatusUpdateManyArgs>(args: SelectSubset<T, StoreStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreStatus.
     * @param {StoreStatusUpsertArgs} args - Arguments to update or create a StoreStatus.
     * @example
     * // Update or create a StoreStatus
     * const storeStatus = await prisma.storeStatus.upsert({
     *   create: {
     *     // ... data to create a StoreStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreStatus we want to update
     *   }
     * })
     */
    upsert<T extends StoreStatusUpsertArgs>(args: SelectSubset<T, StoreStatusUpsertArgs<ExtArgs>>): Prisma__StoreStatusClient<$Result.GetResult<Prisma.$StoreStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatusCountArgs} args - Arguments to filter StoreStatuses to count.
     * @example
     * // Count the number of StoreStatuses
     * const count = await prisma.storeStatus.count({
     *   where: {
     *     // ... the filter for the StoreStatuses we want to count
     *   }
     * })
    **/
    count<T extends StoreStatusCountArgs>(
      args?: Subset<T, StoreStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreStatusAggregateArgs>(args: Subset<T, StoreStatusAggregateArgs>): Prisma.PrismaPromise<GetStoreStatusAggregateType<T>>

    /**
     * Group by StoreStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreStatusGroupByArgs} args - Group by arguments.
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
      T extends StoreStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreStatusGroupByArgs['orderBy'] }
        : { orderBy?: StoreStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreStatus model
   */
  readonly fields: StoreStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the StoreStatus model
   */
  interface StoreStatusFieldRefs {
    readonly id: FieldRef<"StoreStatus", 'Int'>
    readonly storeId: FieldRef<"StoreStatus", 'Int'>
    readonly reviewsCount: FieldRef<"StoreStatus", 'Int'>
    readonly starTotal: FieldRef<"StoreStatus", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StoreStatus findUnique
   */
  export type StoreStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatus to fetch.
     */
    where: StoreStatusWhereUniqueInput
  }

  /**
   * StoreStatus findUniqueOrThrow
   */
  export type StoreStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatus to fetch.
     */
    where: StoreStatusWhereUniqueInput
  }

  /**
   * StoreStatus findFirst
   */
  export type StoreStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatus to fetch.
     */
    where?: StoreStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatuses to fetch.
     */
    orderBy?: StoreStatusOrderByWithRelationInput | StoreStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreStatuses.
     */
    cursor?: StoreStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreStatuses.
     */
    distinct?: StoreStatusScalarFieldEnum | StoreStatusScalarFieldEnum[]
  }

  /**
   * StoreStatus findFirstOrThrow
   */
  export type StoreStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatus to fetch.
     */
    where?: StoreStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatuses to fetch.
     */
    orderBy?: StoreStatusOrderByWithRelationInput | StoreStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreStatuses.
     */
    cursor?: StoreStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreStatuses.
     */
    distinct?: StoreStatusScalarFieldEnum | StoreStatusScalarFieldEnum[]
  }

  /**
   * StoreStatus findMany
   */
  export type StoreStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * Filter, which StoreStatuses to fetch.
     */
    where?: StoreStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreStatuses to fetch.
     */
    orderBy?: StoreStatusOrderByWithRelationInput | StoreStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreStatuses.
     */
    cursor?: StoreStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreStatuses.
     */
    skip?: number
    distinct?: StoreStatusScalarFieldEnum | StoreStatusScalarFieldEnum[]
  }

  /**
   * StoreStatus create
   */
  export type StoreStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreStatus.
     */
    data: XOR<StoreStatusCreateInput, StoreStatusUncheckedCreateInput>
  }

  /**
   * StoreStatus createMany
   */
  export type StoreStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreStatuses.
     */
    data: StoreStatusCreateManyInput | StoreStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreStatus update
   */
  export type StoreStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreStatus.
     */
    data: XOR<StoreStatusUpdateInput, StoreStatusUncheckedUpdateInput>
    /**
     * Choose, which StoreStatus to update.
     */
    where: StoreStatusWhereUniqueInput
  }

  /**
   * StoreStatus updateMany
   */
  export type StoreStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreStatuses.
     */
    data: XOR<StoreStatusUpdateManyMutationInput, StoreStatusUncheckedUpdateManyInput>
    /**
     * Filter which StoreStatuses to update
     */
    where?: StoreStatusWhereInput
    /**
     * Limit how many StoreStatuses to update.
     */
    limit?: number
  }

  /**
   * StoreStatus upsert
   */
  export type StoreStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreStatus to update in case it exists.
     */
    where: StoreStatusWhereUniqueInput
    /**
     * In case the StoreStatus found by the `where` argument doesn't exist, create a new StoreStatus with this data.
     */
    create: XOR<StoreStatusCreateInput, StoreStatusUncheckedCreateInput>
    /**
     * In case the StoreStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreStatusUpdateInput, StoreStatusUncheckedUpdateInput>
  }

  /**
   * StoreStatus delete
   */
  export type StoreStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
    /**
     * Filter which StoreStatus to delete.
     */
    where: StoreStatusWhereUniqueInput
  }

  /**
   * StoreStatus deleteMany
   */
  export type StoreStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreStatuses to delete
     */
    where?: StoreStatusWhereInput
    /**
     * Limit how many StoreStatuses to delete.
     */
    limit?: number
  }

  /**
   * StoreStatus without action
   */
  export type StoreStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreStatus
     */
    select?: StoreStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreStatus
     */
    omit?: StoreStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreStatusInclude<ExtArgs> | null
  }


  /**
   * Model Missions
   */

  export type AggregateMissions = {
    _count: MissionsCountAggregateOutputType | null
    _avg: MissionsAvgAggregateOutputType | null
    _sum: MissionsSumAggregateOutputType | null
    _min: MissionsMinAggregateOutputType | null
    _max: MissionsMaxAggregateOutputType | null
  }

  export type MissionsAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    goal: number | null
    rewards: number | null
    locationId: number | null
  }

  export type MissionsSumAggregateOutputType = {
    id: number | null
    storeId: number | null
    goal: number | null
    rewards: number | null
    locationId: number | null
  }

  export type MissionsMinAggregateOutputType = {
    id: number | null
    storeId: number | null
    goal: number | null
    rewards: number | null
    expireDate: Date | null
    locationId: number | null
  }

  export type MissionsMaxAggregateOutputType = {
    id: number | null
    storeId: number | null
    goal: number | null
    rewards: number | null
    expireDate: Date | null
    locationId: number | null
  }

  export type MissionsCountAggregateOutputType = {
    id: number
    storeId: number
    goal: number
    rewards: number
    expireDate: number
    locationId: number
    _all: number
  }


  export type MissionsAvgAggregateInputType = {
    id?: true
    storeId?: true
    goal?: true
    rewards?: true
    locationId?: true
  }

  export type MissionsSumAggregateInputType = {
    id?: true
    storeId?: true
    goal?: true
    rewards?: true
    locationId?: true
  }

  export type MissionsMinAggregateInputType = {
    id?: true
    storeId?: true
    goal?: true
    rewards?: true
    expireDate?: true
    locationId?: true
  }

  export type MissionsMaxAggregateInputType = {
    id?: true
    storeId?: true
    goal?: true
    rewards?: true
    expireDate?: true
    locationId?: true
  }

  export type MissionsCountAggregateInputType = {
    id?: true
    storeId?: true
    goal?: true
    rewards?: true
    expireDate?: true
    locationId?: true
    _all?: true
  }

  export type MissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to aggregate.
     */
    where?: MissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionsOrderByWithRelationInput | MissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionsMaxAggregateInputType
  }

  export type GetMissionsAggregateType<T extends MissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateMissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissions[P]>
      : GetScalarType<T[P], AggregateMissions[P]>
  }




  export type MissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionsWhereInput
    orderBy?: MissionsOrderByWithAggregationInput | MissionsOrderByWithAggregationInput[]
    by: MissionsScalarFieldEnum[] | MissionsScalarFieldEnum
    having?: MissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionsCountAggregateInputType | true
    _avg?: MissionsAvgAggregateInputType
    _sum?: MissionsSumAggregateInputType
    _min?: MissionsMinAggregateInputType
    _max?: MissionsMaxAggregateInputType
  }

  export type MissionsGroupByOutputType = {
    id: number
    storeId: number
    goal: number
    rewards: number
    expireDate: Date
    locationId: number
    _count: MissionsCountAggregateOutputType | null
    _avg: MissionsAvgAggregateOutputType | null
    _sum: MissionsSumAggregateOutputType | null
    _min: MissionsMinAggregateOutputType | null
    _max: MissionsMaxAggregateOutputType | null
  }

  type GetMissionsGroupByPayload<T extends MissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionsGroupByOutputType[P]>
            : GetScalarType<T[P], MissionsGroupByOutputType[P]>
        }
      >
    >


  export type MissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    goal?: boolean
    rewards?: boolean
    expireDate?: boolean
    locationId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    locations?: boolean | LocationsDefaultArgs<ExtArgs>
    acceptedMissions?: boolean | Missions$acceptedMissionsArgs<ExtArgs>
    completedMissions?: boolean | Missions$completedMissionsArgs<ExtArgs>
    _count?: boolean | MissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missions"]>



  export type MissionsSelectScalar = {
    id?: boolean
    storeId?: boolean
    goal?: boolean
    rewards?: boolean
    expireDate?: boolean
    locationId?: boolean
  }

  export type MissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "goal" | "rewards" | "expireDate" | "locationId", ExtArgs["result"]["missions"]>
  export type MissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    locations?: boolean | LocationsDefaultArgs<ExtArgs>
    acceptedMissions?: boolean | Missions$acceptedMissionsArgs<ExtArgs>
    completedMissions?: boolean | Missions$completedMissionsArgs<ExtArgs>
    _count?: boolean | MissionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Missions"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      locations: Prisma.$LocationsPayload<ExtArgs>
      acceptedMissions: Prisma.$AcceptedMissionsPayload<ExtArgs>[]
      completedMissions: Prisma.$CompletedMissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeId: number
      goal: number
      rewards: number
      expireDate: Date
      locationId: number
    }, ExtArgs["result"]["missions"]>
    composites: {}
  }

  type MissionsGetPayload<S extends boolean | null | undefined | MissionsDefaultArgs> = $Result.GetResult<Prisma.$MissionsPayload, S>

  type MissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionsCountAggregateInputType | true
    }

  export interface MissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Missions'], meta: { name: 'Missions' } }
    /**
     * Find zero or one Missions that matches the filter.
     * @param {MissionsFindUniqueArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionsFindUniqueArgs>(args: SelectSubset<T, MissionsFindUniqueArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Missions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionsFindUniqueOrThrowArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsFindFirstArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionsFindFirstArgs>(args?: SelectSubset<T, MissionsFindFirstArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsFindFirstOrThrowArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.missions.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.missions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionsWithIdOnly = await prisma.missions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionsFindManyArgs>(args?: SelectSubset<T, MissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Missions.
     * @param {MissionsCreateArgs} args - Arguments to create a Missions.
     * @example
     * // Create one Missions
     * const Missions = await prisma.missions.create({
     *   data: {
     *     // ... data to create a Missions
     *   }
     * })
     * 
     */
    create<T extends MissionsCreateArgs>(args: SelectSubset<T, MissionsCreateArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionsCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const missions = await prisma.missions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionsCreateManyArgs>(args?: SelectSubset<T, MissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Missions.
     * @param {MissionsDeleteArgs} args - Arguments to delete one Missions.
     * @example
     * // Delete one Missions
     * const Missions = await prisma.missions.delete({
     *   where: {
     *     // ... filter to delete one Missions
     *   }
     * })
     * 
     */
    delete<T extends MissionsDeleteArgs>(args: SelectSubset<T, MissionsDeleteArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Missions.
     * @param {MissionsUpdateArgs} args - Arguments to update one Missions.
     * @example
     * // Update one Missions
     * const missions = await prisma.missions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionsUpdateArgs>(args: SelectSubset<T, MissionsUpdateArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionsDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.missions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionsDeleteManyArgs>(args?: SelectSubset<T, MissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const missions = await prisma.missions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionsUpdateManyArgs>(args: SelectSubset<T, MissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Missions.
     * @param {MissionsUpsertArgs} args - Arguments to update or create a Missions.
     * @example
     * // Update or create a Missions
     * const missions = await prisma.missions.upsert({
     *   create: {
     *     // ... data to create a Missions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Missions we want to update
     *   }
     * })
     */
    upsert<T extends MissionsUpsertArgs>(args: SelectSubset<T, MissionsUpsertArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.missions.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionsCountArgs>(
      args?: Subset<T, MissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionsAggregateArgs>(args: Subset<T, MissionsAggregateArgs>): Prisma.PrismaPromise<GetMissionsAggregateType<T>>

    /**
     * Group by Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsGroupByArgs} args - Group by arguments.
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
      T extends MissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionsGroupByArgs['orderBy'] }
        : { orderBy?: MissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Missions model
   */
  readonly fields: MissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Missions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends LocationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationsDefaultArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    acceptedMissions<T extends Missions$acceptedMissionsArgs<ExtArgs> = {}>(args?: Subset<T, Missions$acceptedMissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    completedMissions<T extends Missions$completedMissionsArgs<ExtArgs> = {}>(args?: Subset<T, Missions$completedMissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Missions model
   */
  interface MissionsFieldRefs {
    readonly id: FieldRef<"Missions", 'Int'>
    readonly storeId: FieldRef<"Missions", 'Int'>
    readonly goal: FieldRef<"Missions", 'Int'>
    readonly rewards: FieldRef<"Missions", 'Int'>
    readonly expireDate: FieldRef<"Missions", 'DateTime'>
    readonly locationId: FieldRef<"Missions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Missions findUnique
   */
  export type MissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where: MissionsWhereUniqueInput
  }

  /**
   * Missions findUniqueOrThrow
   */
  export type MissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where: MissionsWhereUniqueInput
  }

  /**
   * Missions findFirst
   */
  export type MissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionsOrderByWithRelationInput | MissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * Missions findFirstOrThrow
   */
  export type MissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionsOrderByWithRelationInput | MissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * Missions findMany
   */
  export type MissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionsOrderByWithRelationInput | MissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * Missions create
   */
  export type MissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Missions.
     */
    data: XOR<MissionsCreateInput, MissionsUncheckedCreateInput>
  }

  /**
   * Missions createMany
   */
  export type MissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionsCreateManyInput | MissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Missions update
   */
  export type MissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Missions.
     */
    data: XOR<MissionsUpdateInput, MissionsUncheckedUpdateInput>
    /**
     * Choose, which Missions to update.
     */
    where: MissionsWhereUniqueInput
  }

  /**
   * Missions updateMany
   */
  export type MissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionsUpdateManyMutationInput, MissionsUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionsWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Missions upsert
   */
  export type MissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Missions to update in case it exists.
     */
    where: MissionsWhereUniqueInput
    /**
     * In case the Missions found by the `where` argument doesn't exist, create a new Missions with this data.
     */
    create: XOR<MissionsCreateInput, MissionsUncheckedCreateInput>
    /**
     * In case the Missions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionsUpdateInput, MissionsUncheckedUpdateInput>
  }

  /**
   * Missions delete
   */
  export type MissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
    /**
     * Filter which Missions to delete.
     */
    where: MissionsWhereUniqueInput
  }

  /**
   * Missions deleteMany
   */
  export type MissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionsWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Missions.acceptedMissions
   */
  export type Missions$acceptedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    where?: AcceptedMissionsWhereInput
    orderBy?: AcceptedMissionsOrderByWithRelationInput | AcceptedMissionsOrderByWithRelationInput[]
    cursor?: AcceptedMissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcceptedMissionsScalarFieldEnum | AcceptedMissionsScalarFieldEnum[]
  }

  /**
   * Missions.completedMissions
   */
  export type Missions$completedMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    where?: CompletedMissionsWhereInput
    orderBy?: CompletedMissionsOrderByWithRelationInput | CompletedMissionsOrderByWithRelationInput[]
    cursor?: CompletedMissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedMissionsScalarFieldEnum | CompletedMissionsScalarFieldEnum[]
  }

  /**
   * Missions without action
   */
  export type MissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Missions
     */
    select?: MissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Missions
     */
    omit?: MissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MissionsInclude<ExtArgs> | null
  }


  /**
   * Model AcceptedMissions
   */

  export type AggregateAcceptedMissions = {
    _count: AcceptedMissionsCountAggregateOutputType | null
    _avg: AcceptedMissionsAvgAggregateOutputType | null
    _sum: AcceptedMissionsSumAggregateOutputType | null
    _min: AcceptedMissionsMinAggregateOutputType | null
    _max: AcceptedMissionsMaxAggregateOutputType | null
  }

  export type AcceptedMissionsAvgAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type AcceptedMissionsSumAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type AcceptedMissionsMinAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
    verificationCode: string | null
    completedAt: Date | null
  }

  export type AcceptedMissionsMaxAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
    verificationCode: string | null
    completedAt: Date | null
  }

  export type AcceptedMissionsCountAggregateOutputType = {
    id: number
    missionId: number
    userId: number
    verificationCode: number
    completedAt: number
    _all: number
  }


  export type AcceptedMissionsAvgAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type AcceptedMissionsSumAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type AcceptedMissionsMinAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
    verificationCode?: true
    completedAt?: true
  }

  export type AcceptedMissionsMaxAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
    verificationCode?: true
    completedAt?: true
  }

  export type AcceptedMissionsCountAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
    verificationCode?: true
    completedAt?: true
    _all?: true
  }

  export type AcceptedMissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedMissions to aggregate.
     */
    where?: AcceptedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedMissions to fetch.
     */
    orderBy?: AcceptedMissionsOrderByWithRelationInput | AcceptedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcceptedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcceptedMissions
    **/
    _count?: true | AcceptedMissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcceptedMissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcceptedMissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcceptedMissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcceptedMissionsMaxAggregateInputType
  }

  export type GetAcceptedMissionsAggregateType<T extends AcceptedMissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateAcceptedMissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcceptedMissions[P]>
      : GetScalarType<T[P], AggregateAcceptedMissions[P]>
  }




  export type AcceptedMissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcceptedMissionsWhereInput
    orderBy?: AcceptedMissionsOrderByWithAggregationInput | AcceptedMissionsOrderByWithAggregationInput[]
    by: AcceptedMissionsScalarFieldEnum[] | AcceptedMissionsScalarFieldEnum
    having?: AcceptedMissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcceptedMissionsCountAggregateInputType | true
    _avg?: AcceptedMissionsAvgAggregateInputType
    _sum?: AcceptedMissionsSumAggregateInputType
    _min?: AcceptedMissionsMinAggregateInputType
    _max?: AcceptedMissionsMaxAggregateInputType
  }

  export type AcceptedMissionsGroupByOutputType = {
    id: number
    missionId: number
    userId: number
    verificationCode: string
    completedAt: Date | null
    _count: AcceptedMissionsCountAggregateOutputType | null
    _avg: AcceptedMissionsAvgAggregateOutputType | null
    _sum: AcceptedMissionsSumAggregateOutputType | null
    _min: AcceptedMissionsMinAggregateOutputType | null
    _max: AcceptedMissionsMaxAggregateOutputType | null
  }

  type GetAcceptedMissionsGroupByPayload<T extends AcceptedMissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcceptedMissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcceptedMissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcceptedMissionsGroupByOutputType[P]>
            : GetScalarType<T[P], AcceptedMissionsGroupByOutputType[P]>
        }
      >
    >


  export type AcceptedMissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    userId?: boolean
    verificationCode?: boolean
    completedAt?: boolean
    missions?: boolean | MissionsDefaultArgs<ExtArgs>
    members?: boolean | MembersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acceptedMissions"]>



  export type AcceptedMissionsSelectScalar = {
    id?: boolean
    missionId?: boolean
    userId?: boolean
    verificationCode?: boolean
    completedAt?: boolean
  }

  export type AcceptedMissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "userId" | "verificationCode" | "completedAt", ExtArgs["result"]["acceptedMissions"]>
  export type AcceptedMissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | MissionsDefaultArgs<ExtArgs>
    members?: boolean | MembersDefaultArgs<ExtArgs>
  }

  export type $AcceptedMissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcceptedMissions"
    objects: {
      missions: Prisma.$MissionsPayload<ExtArgs>
      members: Prisma.$MembersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missionId: number
      userId: number
      verificationCode: string
      completedAt: Date | null
    }, ExtArgs["result"]["acceptedMissions"]>
    composites: {}
  }

  type AcceptedMissionsGetPayload<S extends boolean | null | undefined | AcceptedMissionsDefaultArgs> = $Result.GetResult<Prisma.$AcceptedMissionsPayload, S>

  type AcceptedMissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcceptedMissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcceptedMissionsCountAggregateInputType | true
    }

  export interface AcceptedMissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcceptedMissions'], meta: { name: 'AcceptedMissions' } }
    /**
     * Find zero or one AcceptedMissions that matches the filter.
     * @param {AcceptedMissionsFindUniqueArgs} args - Arguments to find a AcceptedMissions
     * @example
     * // Get one AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcceptedMissionsFindUniqueArgs>(args: SelectSubset<T, AcceptedMissionsFindUniqueArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcceptedMissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcceptedMissionsFindUniqueOrThrowArgs} args - Arguments to find a AcceptedMissions
     * @example
     * // Get one AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcceptedMissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, AcceptedMissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedMissionsFindFirstArgs} args - Arguments to find a AcceptedMissions
     * @example
     * // Get one AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcceptedMissionsFindFirstArgs>(args?: SelectSubset<T, AcceptedMissionsFindFirstArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcceptedMissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedMissionsFindFirstOrThrowArgs} args - Arguments to find a AcceptedMissions
     * @example
     * // Get one AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcceptedMissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, AcceptedMissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcceptedMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedMissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.findMany()
     * 
     * // Get first 10 AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acceptedMissionsWithIdOnly = await prisma.acceptedMissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcceptedMissionsFindManyArgs>(args?: SelectSubset<T, AcceptedMissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcceptedMissions.
     * @param {AcceptedMissionsCreateArgs} args - Arguments to create a AcceptedMissions.
     * @example
     * // Create one AcceptedMissions
     * const AcceptedMissions = await prisma.acceptedMissions.create({
     *   data: {
     *     // ... data to create a AcceptedMissions
     *   }
     * })
     * 
     */
    create<T extends AcceptedMissionsCreateArgs>(args: SelectSubset<T, AcceptedMissionsCreateArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcceptedMissions.
     * @param {AcceptedMissionsCreateManyArgs} args - Arguments to create many AcceptedMissions.
     * @example
     * // Create many AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcceptedMissionsCreateManyArgs>(args?: SelectSubset<T, AcceptedMissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AcceptedMissions.
     * @param {AcceptedMissionsDeleteArgs} args - Arguments to delete one AcceptedMissions.
     * @example
     * // Delete one AcceptedMissions
     * const AcceptedMissions = await prisma.acceptedMissions.delete({
     *   where: {
     *     // ... filter to delete one AcceptedMissions
     *   }
     * })
     * 
     */
    delete<T extends AcceptedMissionsDeleteArgs>(args: SelectSubset<T, AcceptedMissionsDeleteArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcceptedMissions.
     * @param {AcceptedMissionsUpdateArgs} args - Arguments to update one AcceptedMissions.
     * @example
     * // Update one AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcceptedMissionsUpdateArgs>(args: SelectSubset<T, AcceptedMissionsUpdateArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcceptedMissions.
     * @param {AcceptedMissionsDeleteManyArgs} args - Arguments to filter AcceptedMissions to delete.
     * @example
     * // Delete a few AcceptedMissions
     * const { count } = await prisma.acceptedMissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcceptedMissionsDeleteManyArgs>(args?: SelectSubset<T, AcceptedMissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcceptedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedMissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcceptedMissionsUpdateManyArgs>(args: SelectSubset<T, AcceptedMissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcceptedMissions.
     * @param {AcceptedMissionsUpsertArgs} args - Arguments to update or create a AcceptedMissions.
     * @example
     * // Update or create a AcceptedMissions
     * const acceptedMissions = await prisma.acceptedMissions.upsert({
     *   create: {
     *     // ... data to create a AcceptedMissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcceptedMissions we want to update
     *   }
     * })
     */
    upsert<T extends AcceptedMissionsUpsertArgs>(args: SelectSubset<T, AcceptedMissionsUpsertArgs<ExtArgs>>): Prisma__AcceptedMissionsClient<$Result.GetResult<Prisma.$AcceptedMissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcceptedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedMissionsCountArgs} args - Arguments to filter AcceptedMissions to count.
     * @example
     * // Count the number of AcceptedMissions
     * const count = await prisma.acceptedMissions.count({
     *   where: {
     *     // ... the filter for the AcceptedMissions we want to count
     *   }
     * })
    **/
    count<T extends AcceptedMissionsCountArgs>(
      args?: Subset<T, AcceptedMissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcceptedMissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcceptedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedMissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcceptedMissionsAggregateArgs>(args: Subset<T, AcceptedMissionsAggregateArgs>): Prisma.PrismaPromise<GetAcceptedMissionsAggregateType<T>>

    /**
     * Group by AcceptedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcceptedMissionsGroupByArgs} args - Group by arguments.
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
      T extends AcceptedMissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcceptedMissionsGroupByArgs['orderBy'] }
        : { orderBy?: AcceptedMissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcceptedMissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcceptedMissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcceptedMissions model
   */
  readonly fields: AcceptedMissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcceptedMissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcceptedMissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends MissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionsDefaultArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends MembersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembersDefaultArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AcceptedMissions model
   */
  interface AcceptedMissionsFieldRefs {
    readonly id: FieldRef<"AcceptedMissions", 'Int'>
    readonly missionId: FieldRef<"AcceptedMissions", 'Int'>
    readonly userId: FieldRef<"AcceptedMissions", 'Int'>
    readonly verificationCode: FieldRef<"AcceptedMissions", 'String'>
    readonly completedAt: FieldRef<"AcceptedMissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcceptedMissions findUnique
   */
  export type AcceptedMissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedMissions to fetch.
     */
    where: AcceptedMissionsWhereUniqueInput
  }

  /**
   * AcceptedMissions findUniqueOrThrow
   */
  export type AcceptedMissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedMissions to fetch.
     */
    where: AcceptedMissionsWhereUniqueInput
  }

  /**
   * AcceptedMissions findFirst
   */
  export type AcceptedMissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedMissions to fetch.
     */
    where?: AcceptedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedMissions to fetch.
     */
    orderBy?: AcceptedMissionsOrderByWithRelationInput | AcceptedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedMissions.
     */
    cursor?: AcceptedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedMissions.
     */
    distinct?: AcceptedMissionsScalarFieldEnum | AcceptedMissionsScalarFieldEnum[]
  }

  /**
   * AcceptedMissions findFirstOrThrow
   */
  export type AcceptedMissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedMissions to fetch.
     */
    where?: AcceptedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedMissions to fetch.
     */
    orderBy?: AcceptedMissionsOrderByWithRelationInput | AcceptedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcceptedMissions.
     */
    cursor?: AcceptedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcceptedMissions.
     */
    distinct?: AcceptedMissionsScalarFieldEnum | AcceptedMissionsScalarFieldEnum[]
  }

  /**
   * AcceptedMissions findMany
   */
  export type AcceptedMissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which AcceptedMissions to fetch.
     */
    where?: AcceptedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcceptedMissions to fetch.
     */
    orderBy?: AcceptedMissionsOrderByWithRelationInput | AcceptedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcceptedMissions.
     */
    cursor?: AcceptedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcceptedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcceptedMissions.
     */
    skip?: number
    distinct?: AcceptedMissionsScalarFieldEnum | AcceptedMissionsScalarFieldEnum[]
  }

  /**
   * AcceptedMissions create
   */
  export type AcceptedMissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a AcceptedMissions.
     */
    data: XOR<AcceptedMissionsCreateInput, AcceptedMissionsUncheckedCreateInput>
  }

  /**
   * AcceptedMissions createMany
   */
  export type AcceptedMissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcceptedMissions.
     */
    data: AcceptedMissionsCreateManyInput | AcceptedMissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcceptedMissions update
   */
  export type AcceptedMissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a AcceptedMissions.
     */
    data: XOR<AcceptedMissionsUpdateInput, AcceptedMissionsUncheckedUpdateInput>
    /**
     * Choose, which AcceptedMissions to update.
     */
    where: AcceptedMissionsWhereUniqueInput
  }

  /**
   * AcceptedMissions updateMany
   */
  export type AcceptedMissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcceptedMissions.
     */
    data: XOR<AcceptedMissionsUpdateManyMutationInput, AcceptedMissionsUncheckedUpdateManyInput>
    /**
     * Filter which AcceptedMissions to update
     */
    where?: AcceptedMissionsWhereInput
    /**
     * Limit how many AcceptedMissions to update.
     */
    limit?: number
  }

  /**
   * AcceptedMissions upsert
   */
  export type AcceptedMissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the AcceptedMissions to update in case it exists.
     */
    where: AcceptedMissionsWhereUniqueInput
    /**
     * In case the AcceptedMissions found by the `where` argument doesn't exist, create a new AcceptedMissions with this data.
     */
    create: XOR<AcceptedMissionsCreateInput, AcceptedMissionsUncheckedCreateInput>
    /**
     * In case the AcceptedMissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcceptedMissionsUpdateInput, AcceptedMissionsUncheckedUpdateInput>
  }

  /**
   * AcceptedMissions delete
   */
  export type AcceptedMissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
    /**
     * Filter which AcceptedMissions to delete.
     */
    where: AcceptedMissionsWhereUniqueInput
  }

  /**
   * AcceptedMissions deleteMany
   */
  export type AcceptedMissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcceptedMissions to delete
     */
    where?: AcceptedMissionsWhereInput
    /**
     * Limit how many AcceptedMissions to delete.
     */
    limit?: number
  }

  /**
   * AcceptedMissions without action
   */
  export type AcceptedMissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcceptedMissions
     */
    select?: AcceptedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcceptedMissions
     */
    omit?: AcceptedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcceptedMissionsInclude<ExtArgs> | null
  }


  /**
   * Model CompletedMissions
   */

  export type AggregateCompletedMissions = {
    _count: CompletedMissionsCountAggregateOutputType | null
    _avg: CompletedMissionsAvgAggregateOutputType | null
    _sum: CompletedMissionsSumAggregateOutputType | null
    _min: CompletedMissionsMinAggregateOutputType | null
    _max: CompletedMissionsMaxAggregateOutputType | null
  }

  export type CompletedMissionsAvgAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type CompletedMissionsSumAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
  }

  export type CompletedMissionsMinAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
    completedAt: Date | null
  }

  export type CompletedMissionsMaxAggregateOutputType = {
    id: number | null
    missionId: number | null
    userId: number | null
    completedAt: Date | null
  }

  export type CompletedMissionsCountAggregateOutputType = {
    id: number
    missionId: number
    userId: number
    completedAt: number
    _all: number
  }


  export type CompletedMissionsAvgAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type CompletedMissionsSumAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
  }

  export type CompletedMissionsMinAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
    completedAt?: true
  }

  export type CompletedMissionsMaxAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
    completedAt?: true
  }

  export type CompletedMissionsCountAggregateInputType = {
    id?: true
    missionId?: true
    userId?: true
    completedAt?: true
    _all?: true
  }

  export type CompletedMissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedMissions to aggregate.
     */
    where?: CompletedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedMissions to fetch.
     */
    orderBy?: CompletedMissionsOrderByWithRelationInput | CompletedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedMissions
    **/
    _count?: true | CompletedMissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedMissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedMissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedMissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedMissionsMaxAggregateInputType
  }

  export type GetCompletedMissionsAggregateType<T extends CompletedMissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedMissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedMissions[P]>
      : GetScalarType<T[P], AggregateCompletedMissions[P]>
  }




  export type CompletedMissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedMissionsWhereInput
    orderBy?: CompletedMissionsOrderByWithAggregationInput | CompletedMissionsOrderByWithAggregationInput[]
    by: CompletedMissionsScalarFieldEnum[] | CompletedMissionsScalarFieldEnum
    having?: CompletedMissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedMissionsCountAggregateInputType | true
    _avg?: CompletedMissionsAvgAggregateInputType
    _sum?: CompletedMissionsSumAggregateInputType
    _min?: CompletedMissionsMinAggregateInputType
    _max?: CompletedMissionsMaxAggregateInputType
  }

  export type CompletedMissionsGroupByOutputType = {
    id: number
    missionId: number
    userId: number
    completedAt: Date
    _count: CompletedMissionsCountAggregateOutputType | null
    _avg: CompletedMissionsAvgAggregateOutputType | null
    _sum: CompletedMissionsSumAggregateOutputType | null
    _min: CompletedMissionsMinAggregateOutputType | null
    _max: CompletedMissionsMaxAggregateOutputType | null
  }

  type GetCompletedMissionsGroupByPayload<T extends CompletedMissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedMissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedMissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedMissionsGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedMissionsGroupByOutputType[P]>
        }
      >
    >


  export type CompletedMissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    missionId?: boolean
    userId?: boolean
    completedAt?: boolean
    missions?: boolean | MissionsDefaultArgs<ExtArgs>
    members?: boolean | MembersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedMissions"]>



  export type CompletedMissionsSelectScalar = {
    id?: boolean
    missionId?: boolean
    userId?: boolean
    completedAt?: boolean
  }

  export type CompletedMissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "missionId" | "userId" | "completedAt", ExtArgs["result"]["completedMissions"]>
  export type CompletedMissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | MissionsDefaultArgs<ExtArgs>
    members?: boolean | MembersDefaultArgs<ExtArgs>
  }

  export type $CompletedMissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedMissions"
    objects: {
      missions: Prisma.$MissionsPayload<ExtArgs>
      members: Prisma.$MembersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      missionId: number
      userId: number
      completedAt: Date
    }, ExtArgs["result"]["completedMissions"]>
    composites: {}
  }

  type CompletedMissionsGetPayload<S extends boolean | null | undefined | CompletedMissionsDefaultArgs> = $Result.GetResult<Prisma.$CompletedMissionsPayload, S>

  type CompletedMissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedMissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedMissionsCountAggregateInputType | true
    }

  export interface CompletedMissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedMissions'], meta: { name: 'CompletedMissions' } }
    /**
     * Find zero or one CompletedMissions that matches the filter.
     * @param {CompletedMissionsFindUniqueArgs} args - Arguments to find a CompletedMissions
     * @example
     * // Get one CompletedMissions
     * const completedMissions = await prisma.completedMissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedMissionsFindUniqueArgs>(args: SelectSubset<T, CompletedMissionsFindUniqueArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedMissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedMissionsFindUniqueOrThrowArgs} args - Arguments to find a CompletedMissions
     * @example
     * // Get one CompletedMissions
     * const completedMissions = await prisma.completedMissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedMissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedMissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedMissionsFindFirstArgs} args - Arguments to find a CompletedMissions
     * @example
     * // Get one CompletedMissions
     * const completedMissions = await prisma.completedMissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedMissionsFindFirstArgs>(args?: SelectSubset<T, CompletedMissionsFindFirstArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedMissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedMissionsFindFirstOrThrowArgs} args - Arguments to find a CompletedMissions
     * @example
     * // Get one CompletedMissions
     * const completedMissions = await prisma.completedMissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedMissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedMissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedMissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedMissions
     * const completedMissions = await prisma.completedMissions.findMany()
     * 
     * // Get first 10 CompletedMissions
     * const completedMissions = await prisma.completedMissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedMissionsWithIdOnly = await prisma.completedMissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedMissionsFindManyArgs>(args?: SelectSubset<T, CompletedMissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedMissions.
     * @param {CompletedMissionsCreateArgs} args - Arguments to create a CompletedMissions.
     * @example
     * // Create one CompletedMissions
     * const CompletedMissions = await prisma.completedMissions.create({
     *   data: {
     *     // ... data to create a CompletedMissions
     *   }
     * })
     * 
     */
    create<T extends CompletedMissionsCreateArgs>(args: SelectSubset<T, CompletedMissionsCreateArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedMissions.
     * @param {CompletedMissionsCreateManyArgs} args - Arguments to create many CompletedMissions.
     * @example
     * // Create many CompletedMissions
     * const completedMissions = await prisma.completedMissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedMissionsCreateManyArgs>(args?: SelectSubset<T, CompletedMissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompletedMissions.
     * @param {CompletedMissionsDeleteArgs} args - Arguments to delete one CompletedMissions.
     * @example
     * // Delete one CompletedMissions
     * const CompletedMissions = await prisma.completedMissions.delete({
     *   where: {
     *     // ... filter to delete one CompletedMissions
     *   }
     * })
     * 
     */
    delete<T extends CompletedMissionsDeleteArgs>(args: SelectSubset<T, CompletedMissionsDeleteArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedMissions.
     * @param {CompletedMissionsUpdateArgs} args - Arguments to update one CompletedMissions.
     * @example
     * // Update one CompletedMissions
     * const completedMissions = await prisma.completedMissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedMissionsUpdateArgs>(args: SelectSubset<T, CompletedMissionsUpdateArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedMissions.
     * @param {CompletedMissionsDeleteManyArgs} args - Arguments to filter CompletedMissions to delete.
     * @example
     * // Delete a few CompletedMissions
     * const { count } = await prisma.completedMissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedMissionsDeleteManyArgs>(args?: SelectSubset<T, CompletedMissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedMissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedMissions
     * const completedMissions = await prisma.completedMissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedMissionsUpdateManyArgs>(args: SelectSubset<T, CompletedMissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompletedMissions.
     * @param {CompletedMissionsUpsertArgs} args - Arguments to update or create a CompletedMissions.
     * @example
     * // Update or create a CompletedMissions
     * const completedMissions = await prisma.completedMissions.upsert({
     *   create: {
     *     // ... data to create a CompletedMissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedMissions we want to update
     *   }
     * })
     */
    upsert<T extends CompletedMissionsUpsertArgs>(args: SelectSubset<T, CompletedMissionsUpsertArgs<ExtArgs>>): Prisma__CompletedMissionsClient<$Result.GetResult<Prisma.$CompletedMissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedMissionsCountArgs} args - Arguments to filter CompletedMissions to count.
     * @example
     * // Count the number of CompletedMissions
     * const count = await prisma.completedMissions.count({
     *   where: {
     *     // ... the filter for the CompletedMissions we want to count
     *   }
     * })
    **/
    count<T extends CompletedMissionsCountArgs>(
      args?: Subset<T, CompletedMissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedMissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedMissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompletedMissionsAggregateArgs>(args: Subset<T, CompletedMissionsAggregateArgs>): Prisma.PrismaPromise<GetCompletedMissionsAggregateType<T>>

    /**
     * Group by CompletedMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedMissionsGroupByArgs} args - Group by arguments.
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
      T extends CompletedMissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedMissionsGroupByArgs['orderBy'] }
        : { orderBy?: CompletedMissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompletedMissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedMissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedMissions model
   */
  readonly fields: CompletedMissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedMissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedMissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends MissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MissionsDefaultArgs<ExtArgs>>): Prisma__MissionsClient<$Result.GetResult<Prisma.$MissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends MembersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MembersDefaultArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompletedMissions model
   */
  interface CompletedMissionsFieldRefs {
    readonly id: FieldRef<"CompletedMissions", 'Int'>
    readonly missionId: FieldRef<"CompletedMissions", 'Int'>
    readonly userId: FieldRef<"CompletedMissions", 'Int'>
    readonly completedAt: FieldRef<"CompletedMissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompletedMissions findUnique
   */
  export type CompletedMissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which CompletedMissions to fetch.
     */
    where: CompletedMissionsWhereUniqueInput
  }

  /**
   * CompletedMissions findUniqueOrThrow
   */
  export type CompletedMissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which CompletedMissions to fetch.
     */
    where: CompletedMissionsWhereUniqueInput
  }

  /**
   * CompletedMissions findFirst
   */
  export type CompletedMissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which CompletedMissions to fetch.
     */
    where?: CompletedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedMissions to fetch.
     */
    orderBy?: CompletedMissionsOrderByWithRelationInput | CompletedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedMissions.
     */
    cursor?: CompletedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedMissions.
     */
    distinct?: CompletedMissionsScalarFieldEnum | CompletedMissionsScalarFieldEnum[]
  }

  /**
   * CompletedMissions findFirstOrThrow
   */
  export type CompletedMissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which CompletedMissions to fetch.
     */
    where?: CompletedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedMissions to fetch.
     */
    orderBy?: CompletedMissionsOrderByWithRelationInput | CompletedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedMissions.
     */
    cursor?: CompletedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedMissions.
     */
    distinct?: CompletedMissionsScalarFieldEnum | CompletedMissionsScalarFieldEnum[]
  }

  /**
   * CompletedMissions findMany
   */
  export type CompletedMissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * Filter, which CompletedMissions to fetch.
     */
    where?: CompletedMissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedMissions to fetch.
     */
    orderBy?: CompletedMissionsOrderByWithRelationInput | CompletedMissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedMissions.
     */
    cursor?: CompletedMissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedMissions.
     */
    skip?: number
    distinct?: CompletedMissionsScalarFieldEnum | CompletedMissionsScalarFieldEnum[]
  }

  /**
   * CompletedMissions create
   */
  export type CompletedMissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedMissions.
     */
    data: XOR<CompletedMissionsCreateInput, CompletedMissionsUncheckedCreateInput>
  }

  /**
   * CompletedMissions createMany
   */
  export type CompletedMissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedMissions.
     */
    data: CompletedMissionsCreateManyInput | CompletedMissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedMissions update
   */
  export type CompletedMissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedMissions.
     */
    data: XOR<CompletedMissionsUpdateInput, CompletedMissionsUncheckedUpdateInput>
    /**
     * Choose, which CompletedMissions to update.
     */
    where: CompletedMissionsWhereUniqueInput
  }

  /**
   * CompletedMissions updateMany
   */
  export type CompletedMissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedMissions.
     */
    data: XOR<CompletedMissionsUpdateManyMutationInput, CompletedMissionsUncheckedUpdateManyInput>
    /**
     * Filter which CompletedMissions to update
     */
    where?: CompletedMissionsWhereInput
    /**
     * Limit how many CompletedMissions to update.
     */
    limit?: number
  }

  /**
   * CompletedMissions upsert
   */
  export type CompletedMissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedMissions to update in case it exists.
     */
    where: CompletedMissionsWhereUniqueInput
    /**
     * In case the CompletedMissions found by the `where` argument doesn't exist, create a new CompletedMissions with this data.
     */
    create: XOR<CompletedMissionsCreateInput, CompletedMissionsUncheckedCreateInput>
    /**
     * In case the CompletedMissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedMissionsUpdateInput, CompletedMissionsUncheckedUpdateInput>
  }

  /**
   * CompletedMissions delete
   */
  export type CompletedMissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
    /**
     * Filter which CompletedMissions to delete.
     */
    where: CompletedMissionsWhereUniqueInput
  }

  /**
   * CompletedMissions deleteMany
   */
  export type CompletedMissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedMissions to delete
     */
    where?: CompletedMissionsWhereInput
    /**
     * Limit how many CompletedMissions to delete.
     */
    limit?: number
  }

  /**
   * CompletedMissions without action
   */
  export type CompletedMissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedMissions
     */
    select?: CompletedMissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedMissions
     */
    omit?: CompletedMissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedMissionsInclude<ExtArgs> | null
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
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
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
    sid: string
    data: string
    expiresAt: Date
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
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
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
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
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


  export const LocationsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const StoreStatusScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    reviewsCount: 'reviewsCount',
    starTotal: 'starTotal'
  };

  export type StoreStatusScalarFieldEnum = (typeof StoreStatusScalarFieldEnum)[keyof typeof StoreStatusScalarFieldEnum]


  export const MissionsScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    goal: 'goal',
    rewards: 'rewards',
    expireDate: 'expireDate',
    locationId: 'locationId'
  };

  export type MissionsScalarFieldEnum = (typeof MissionsScalarFieldEnum)[keyof typeof MissionsScalarFieldEnum]


  export const AcceptedMissionsScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    userId: 'userId',
    verificationCode: 'verificationCode',
    completedAt: 'completedAt'
  };

  export type AcceptedMissionsScalarFieldEnum = (typeof AcceptedMissionsScalarFieldEnum)[keyof typeof AcceptedMissionsScalarFieldEnum]


  export const CompletedMissionsScalarFieldEnum: {
    id: 'id',
    missionId: 'missionId',
    userId: 'userId',
    completedAt: 'completedAt'
  };

  export type CompletedMissionsScalarFieldEnum = (typeof CompletedMissionsScalarFieldEnum)[keyof typeof CompletedMissionsScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


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


  export const LocationsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type LocationsOrderByRelevanceFieldEnum = (typeof LocationsOrderByRelevanceFieldEnum)[keyof typeof LocationsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AcceptedMissionsOrderByRelevanceFieldEnum: {
    verificationCode: 'verificationCode'
  };

  export type AcceptedMissionsOrderByRelevanceFieldEnum = (typeof AcceptedMissionsOrderByRelevanceFieldEnum)[keyof typeof AcceptedMissionsOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


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
    acceptedMissions?: AcceptedMissionsListRelationFilter
    completedMissions?: CompletedMissionsListRelationFilter
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
    acceptedMissions?: AcceptedMissionsOrderByRelationAggregateInput
    completedMissions?: CompletedMissionsOrderByRelationAggregateInput
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
    acceptedMissions?: AcceptedMissionsListRelationFilter
    completedMissions?: CompletedMissionsListRelationFilter
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
    store?: StoreListRelationFilter
  }

  export type FoodTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    storeTypeName?: SortOrder
    membersFoodTypes?: MembersFoodTypeOrderByRelationAggregateInput
    store?: StoreOrderByRelationAggregateInput
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
    store?: StoreListRelationFilter
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
    storeStatus?: StoreStatusListRelationFilter
    missions?: MissionsListRelationFilter
    foodType?: XOR<FoodTypeScalarRelationFilter, FoodTypeWhereInput>
    locations?: XOR<LocationsScalarRelationFilter, LocationsWhereInput>
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
    storeStatus?: StoreStatusOrderByRelationAggregateInput
    missions?: MissionsOrderByRelationAggregateInput
    foodType?: FoodTypeOrderByWithRelationInput
    locations?: LocationsOrderByWithRelationInput
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
    storeStatus?: StoreStatusListRelationFilter
    missions?: MissionsListRelationFilter
    foodType?: XOR<FoodTypeScalarRelationFilter, FoodTypeWhereInput>
    locations?: XOR<LocationsScalarRelationFilter, LocationsWhereInput>
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

  export type LocationsWhereInput = {
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    id?: IntFilter<"Locations"> | number
    name?: StringFilter<"Locations"> | string
    store?: StoreListRelationFilter
    missions?: MissionsListRelationFilter
  }

  export type LocationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    store?: StoreOrderByRelationAggregateInput
    missions?: MissionsOrderByRelationAggregateInput
    _relevance?: LocationsOrderByRelevanceInput
  }

  export type LocationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    name?: StringFilter<"Locations"> | string
    store?: StoreListRelationFilter
    missions?: MissionsListRelationFilter
  }, "id">

  export type LocationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LocationsCountOrderByAggregateInput
    _avg?: LocationsAvgOrderByAggregateInput
    _max?: LocationsMaxOrderByAggregateInput
    _min?: LocationsMinOrderByAggregateInput
    _sum?: LocationsSumOrderByAggregateInput
  }

  export type LocationsScalarWhereWithAggregatesInput = {
    AND?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    OR?: LocationsScalarWhereWithAggregatesInput[]
    NOT?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Locations"> | number
    name?: StringWithAggregatesFilter<"Locations"> | string
  }

  export type StoreStatusWhereInput = {
    AND?: StoreStatusWhereInput | StoreStatusWhereInput[]
    OR?: StoreStatusWhereInput[]
    NOT?: StoreStatusWhereInput | StoreStatusWhereInput[]
    id?: IntFilter<"StoreStatus"> | number
    storeId?: IntFilter<"StoreStatus"> | number
    reviewsCount?: IntFilter<"StoreStatus"> | number
    starTotal?: FloatFilter<"StoreStatus"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type StoreStatusOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    reviewsCount?: SortOrder
    starTotal?: SortOrder
    store?: StoreOrderByWithRelationInput
  }

  export type StoreStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreStatusWhereInput | StoreStatusWhereInput[]
    OR?: StoreStatusWhereInput[]
    NOT?: StoreStatusWhereInput | StoreStatusWhereInput[]
    storeId?: IntFilter<"StoreStatus"> | number
    reviewsCount?: IntFilter<"StoreStatus"> | number
    starTotal?: FloatFilter<"StoreStatus"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type StoreStatusOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    reviewsCount?: SortOrder
    starTotal?: SortOrder
    _count?: StoreStatusCountOrderByAggregateInput
    _avg?: StoreStatusAvgOrderByAggregateInput
    _max?: StoreStatusMaxOrderByAggregateInput
    _min?: StoreStatusMinOrderByAggregateInput
    _sum?: StoreStatusSumOrderByAggregateInput
  }

  export type StoreStatusScalarWhereWithAggregatesInput = {
    AND?: StoreStatusScalarWhereWithAggregatesInput | StoreStatusScalarWhereWithAggregatesInput[]
    OR?: StoreStatusScalarWhereWithAggregatesInput[]
    NOT?: StoreStatusScalarWhereWithAggregatesInput | StoreStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreStatus"> | number
    storeId?: IntWithAggregatesFilter<"StoreStatus"> | number
    reviewsCount?: IntWithAggregatesFilter<"StoreStatus"> | number
    starTotal?: FloatWithAggregatesFilter<"StoreStatus"> | number
  }

  export type MissionsWhereInput = {
    AND?: MissionsWhereInput | MissionsWhereInput[]
    OR?: MissionsWhereInput[]
    NOT?: MissionsWhereInput | MissionsWhereInput[]
    id?: IntFilter<"Missions"> | number
    storeId?: IntFilter<"Missions"> | number
    goal?: IntFilter<"Missions"> | number
    rewards?: IntFilter<"Missions"> | number
    expireDate?: DateTimeFilter<"Missions"> | Date | string
    locationId?: IntFilter<"Missions"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    locations?: XOR<LocationsScalarRelationFilter, LocationsWhereInput>
    acceptedMissions?: AcceptedMissionsListRelationFilter
    completedMissions?: CompletedMissionsListRelationFilter
  }

  export type MissionsOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    goal?: SortOrder
    rewards?: SortOrder
    expireDate?: SortOrder
    locationId?: SortOrder
    store?: StoreOrderByWithRelationInput
    locations?: LocationsOrderByWithRelationInput
    acceptedMissions?: AcceptedMissionsOrderByRelationAggregateInput
    completedMissions?: CompletedMissionsOrderByRelationAggregateInput
  }

  export type MissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MissionsWhereInput | MissionsWhereInput[]
    OR?: MissionsWhereInput[]
    NOT?: MissionsWhereInput | MissionsWhereInput[]
    storeId?: IntFilter<"Missions"> | number
    goal?: IntFilter<"Missions"> | number
    rewards?: IntFilter<"Missions"> | number
    expireDate?: DateTimeFilter<"Missions"> | Date | string
    locationId?: IntFilter<"Missions"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    locations?: XOR<LocationsScalarRelationFilter, LocationsWhereInput>
    acceptedMissions?: AcceptedMissionsListRelationFilter
    completedMissions?: CompletedMissionsListRelationFilter
  }, "id">

  export type MissionsOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    goal?: SortOrder
    rewards?: SortOrder
    expireDate?: SortOrder
    locationId?: SortOrder
    _count?: MissionsCountOrderByAggregateInput
    _avg?: MissionsAvgOrderByAggregateInput
    _max?: MissionsMaxOrderByAggregateInput
    _min?: MissionsMinOrderByAggregateInput
    _sum?: MissionsSumOrderByAggregateInput
  }

  export type MissionsScalarWhereWithAggregatesInput = {
    AND?: MissionsScalarWhereWithAggregatesInput | MissionsScalarWhereWithAggregatesInput[]
    OR?: MissionsScalarWhereWithAggregatesInput[]
    NOT?: MissionsScalarWhereWithAggregatesInput | MissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Missions"> | number
    storeId?: IntWithAggregatesFilter<"Missions"> | number
    goal?: IntWithAggregatesFilter<"Missions"> | number
    rewards?: IntWithAggregatesFilter<"Missions"> | number
    expireDate?: DateTimeWithAggregatesFilter<"Missions"> | Date | string
    locationId?: IntWithAggregatesFilter<"Missions"> | number
  }

  export type AcceptedMissionsWhereInput = {
    AND?: AcceptedMissionsWhereInput | AcceptedMissionsWhereInput[]
    OR?: AcceptedMissionsWhereInput[]
    NOT?: AcceptedMissionsWhereInput | AcceptedMissionsWhereInput[]
    id?: IntFilter<"AcceptedMissions"> | number
    missionId?: IntFilter<"AcceptedMissions"> | number
    userId?: IntFilter<"AcceptedMissions"> | number
    verificationCode?: StringFilter<"AcceptedMissions"> | string
    completedAt?: DateTimeNullableFilter<"AcceptedMissions"> | Date | string | null
    missions?: XOR<MissionsScalarRelationFilter, MissionsWhereInput>
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
  }

  export type AcceptedMissionsOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    verificationCode?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    missions?: MissionsOrderByWithRelationInput
    members?: MembersOrderByWithRelationInput
    _relevance?: AcceptedMissionsOrderByRelevanceInput
  }

  export type AcceptedMissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcceptedMissionsWhereInput | AcceptedMissionsWhereInput[]
    OR?: AcceptedMissionsWhereInput[]
    NOT?: AcceptedMissionsWhereInput | AcceptedMissionsWhereInput[]
    missionId?: IntFilter<"AcceptedMissions"> | number
    userId?: IntFilter<"AcceptedMissions"> | number
    verificationCode?: StringFilter<"AcceptedMissions"> | string
    completedAt?: DateTimeNullableFilter<"AcceptedMissions"> | Date | string | null
    missions?: XOR<MissionsScalarRelationFilter, MissionsWhereInput>
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
  }, "id">

  export type AcceptedMissionsOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    verificationCode?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: AcceptedMissionsCountOrderByAggregateInput
    _avg?: AcceptedMissionsAvgOrderByAggregateInput
    _max?: AcceptedMissionsMaxOrderByAggregateInput
    _min?: AcceptedMissionsMinOrderByAggregateInput
    _sum?: AcceptedMissionsSumOrderByAggregateInput
  }

  export type AcceptedMissionsScalarWhereWithAggregatesInput = {
    AND?: AcceptedMissionsScalarWhereWithAggregatesInput | AcceptedMissionsScalarWhereWithAggregatesInput[]
    OR?: AcceptedMissionsScalarWhereWithAggregatesInput[]
    NOT?: AcceptedMissionsScalarWhereWithAggregatesInput | AcceptedMissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcceptedMissions"> | number
    missionId?: IntWithAggregatesFilter<"AcceptedMissions"> | number
    userId?: IntWithAggregatesFilter<"AcceptedMissions"> | number
    verificationCode?: StringWithAggregatesFilter<"AcceptedMissions"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AcceptedMissions"> | Date | string | null
  }

  export type CompletedMissionsWhereInput = {
    AND?: CompletedMissionsWhereInput | CompletedMissionsWhereInput[]
    OR?: CompletedMissionsWhereInput[]
    NOT?: CompletedMissionsWhereInput | CompletedMissionsWhereInput[]
    id?: IntFilter<"CompletedMissions"> | number
    missionId?: IntFilter<"CompletedMissions"> | number
    userId?: IntFilter<"CompletedMissions"> | number
    completedAt?: DateTimeFilter<"CompletedMissions"> | Date | string
    missions?: XOR<MissionsScalarRelationFilter, MissionsWhereInput>
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
  }

  export type CompletedMissionsOrderByWithRelationInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
    missions?: MissionsOrderByWithRelationInput
    members?: MembersOrderByWithRelationInput
  }

  export type CompletedMissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompletedMissionsWhereInput | CompletedMissionsWhereInput[]
    OR?: CompletedMissionsWhereInput[]
    NOT?: CompletedMissionsWhereInput | CompletedMissionsWhereInput[]
    missionId?: IntFilter<"CompletedMissions"> | number
    userId?: IntFilter<"CompletedMissions"> | number
    completedAt?: DateTimeFilter<"CompletedMissions"> | Date | string
    missions?: XOR<MissionsScalarRelationFilter, MissionsWhereInput>
    members?: XOR<MembersScalarRelationFilter, MembersWhereInput>
  }, "id">

  export type CompletedMissionsOrderByWithAggregationInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
    _count?: CompletedMissionsCountOrderByAggregateInput
    _avg?: CompletedMissionsAvgOrderByAggregateInput
    _max?: CompletedMissionsMaxOrderByAggregateInput
    _min?: CompletedMissionsMinOrderByAggregateInput
    _sum?: CompletedMissionsSumOrderByAggregateInput
  }

  export type CompletedMissionsScalarWhereWithAggregatesInput = {
    AND?: CompletedMissionsScalarWhereWithAggregatesInput | CompletedMissionsScalarWhereWithAggregatesInput[]
    OR?: CompletedMissionsScalarWhereWithAggregatesInput[]
    NOT?: CompletedMissionsScalarWhereWithAggregatesInput | CompletedMissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompletedMissions"> | number
    missionId?: IntWithAggregatesFilter<"CompletedMissions"> | number
    userId?: IntWithAggregatesFilter<"CompletedMissions"> | number
    completedAt?: DateTimeWithAggregatesFilter<"CompletedMissions"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type MembersCreateInput = {
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutMembersInput
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMembersInput
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
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMembersInput
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
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMembersNestedInput
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
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMembersNestedInput
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
    store?: StoreCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUncheckedCreateInput = {
    id?: number
    name: string
    storeTypeName: string
    membersFoodTypes?: MembersFoodTypeUncheckedCreateNestedManyWithoutFoodTypeInput
    store?: StoreUncheckedCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUpdateManyWithoutFoodTypeNestedInput
    store?: StoreUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUncheckedUpdateManyWithoutFoodTypeNestedInput
    store?: StoreUncheckedUpdateManyWithoutFoodTypeNestedInput
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
    address: string
    openTime: string
    closeTime: string
    review?: ReviewCreateNestedManyWithoutStoreInput
    storeStatus?: StoreStatusCreateNestedManyWithoutStoreInput
    missions?: MissionsCreateNestedManyWithoutStoreInput
    foodType: FoodTypeCreateNestedOneWithoutStoreInput
    locations: LocationsCreateNestedOneWithoutStoreInput
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
    storeStatus?: StoreStatusUncheckedCreateNestedManyWithoutStoreInput
    missions?: MissionsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateManyWithoutStoreNestedInput
    storeStatus?: StoreStatusUpdateManyWithoutStoreNestedInput
    missions?: MissionsUpdateManyWithoutStoreNestedInput
    foodType?: FoodTypeUpdateOneRequiredWithoutStoreNestedInput
    locations?: LocationsUpdateOneRequiredWithoutStoreNestedInput
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
    storeStatus?: StoreStatusUncheckedUpdateManyWithoutStoreNestedInput
    missions?: MissionsUncheckedUpdateManyWithoutStoreNestedInput
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
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
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

  export type LocationsCreateInput = {
    name: string
    store?: StoreCreateNestedManyWithoutLocationsInput
    missions?: MissionsCreateNestedManyWithoutLocationsInput
  }

  export type LocationsUncheckedCreateInput = {
    id?: number
    name: string
    store?: StoreUncheckedCreateNestedManyWithoutLocationsInput
    missions?: MissionsUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateManyWithoutLocationsNestedInput
    missions?: MissionsUpdateManyWithoutLocationsNestedInput
  }

  export type LocationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    store?: StoreUncheckedUpdateManyWithoutLocationsNestedInput
    missions?: MissionsUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type LocationsCreateManyInput = {
    id?: number
    name: string
  }

  export type LocationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LocationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StoreStatusCreateInput = {
    reviewsCount: number
    starTotal: number
    store: StoreCreateNestedOneWithoutStoreStatusInput
  }

  export type StoreStatusUncheckedCreateInput = {
    id?: number
    storeId: number
    reviewsCount: number
    starTotal: number
  }

  export type StoreStatusUpdateInput = {
    reviewsCount?: IntFieldUpdateOperationsInput | number
    starTotal?: FloatFieldUpdateOperationsInput | number
    store?: StoreUpdateOneRequiredWithoutStoreStatusNestedInput
  }

  export type StoreStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    starTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreStatusCreateManyInput = {
    id?: number
    storeId: number
    reviewsCount: number
    starTotal: number
  }

  export type StoreStatusUpdateManyMutationInput = {
    reviewsCount?: IntFieldUpdateOperationsInput | number
    starTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    starTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type MissionsCreateInput = {
    goal: number
    rewards: number
    expireDate: Date | string
    store: StoreCreateNestedOneWithoutMissionsInput
    locations: LocationsCreateNestedOneWithoutMissionsInput
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMissionsInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMissionsInput
  }

  export type MissionsUncheckedCreateInput = {
    id?: number
    storeId: number
    goal: number
    rewards: number
    expireDate: Date | string
    locationId: number
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMissionsInput
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMissionsInput
  }

  export type MissionsUpdateInput = {
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
    locations?: LocationsUpdateOneRequiredWithoutMissionsNestedInput
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMissionsNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: IntFieldUpdateOperationsInput | number
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsCreateManyInput = {
    id?: number
    storeId: number
    goal: number
    rewards: number
    expireDate: Date | string
    locationId: number
  }

  export type MissionsUpdateManyMutationInput = {
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type AcceptedMissionsCreateInput = {
    verificationCode: string
    completedAt?: Date | string | null
    missions: MissionsCreateNestedOneWithoutAcceptedMissionsInput
    members: MembersCreateNestedOneWithoutAcceptedMissionsInput
  }

  export type AcceptedMissionsUncheckedCreateInput = {
    id?: number
    missionId: number
    userId: number
    verificationCode: string
    completedAt?: Date | string | null
  }

  export type AcceptedMissionsUpdateInput = {
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missions?: MissionsUpdateOneRequiredWithoutAcceptedMissionsNestedInput
    members?: MembersUpdateOneRequiredWithoutAcceptedMissionsNestedInput
  }

  export type AcceptedMissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcceptedMissionsCreateManyInput = {
    id?: number
    missionId: number
    userId: number
    verificationCode: string
    completedAt?: Date | string | null
  }

  export type AcceptedMissionsUpdateManyMutationInput = {
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcceptedMissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompletedMissionsCreateInput = {
    completedAt: Date | string
    missions: MissionsCreateNestedOneWithoutCompletedMissionsInput
    members: MembersCreateNestedOneWithoutCompletedMissionsInput
  }

  export type CompletedMissionsUncheckedCreateInput = {
    id?: number
    missionId: number
    userId: number
    completedAt: Date | string
  }

  export type CompletedMissionsUpdateInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionsUpdateOneRequiredWithoutCompletedMissionsNestedInput
    members?: MembersUpdateOneRequiredWithoutCompletedMissionsNestedInput
  }

  export type CompletedMissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedMissionsCreateManyInput = {
    id?: number
    missionId: number
    userId: number
    completedAt: Date | string
  }

  export type CompletedMissionsUpdateManyMutationInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedMissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AcceptedMissionsListRelationFilter = {
    every?: AcceptedMissionsWhereInput
    some?: AcceptedMissionsWhereInput
    none?: AcceptedMissionsWhereInput
  }

  export type CompletedMissionsListRelationFilter = {
    every?: CompletedMissionsWhereInput
    some?: CompletedMissionsWhereInput
    none?: CompletedMissionsWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type MembersFoodTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcceptedMissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompletedMissionsOrderByRelationAggregateInput = {
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

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type StoreStatusListRelationFilter = {
    every?: StoreStatusWhereInput
    some?: StoreStatusWhereInput
    none?: StoreStatusWhereInput
  }

  export type MissionsListRelationFilter = {
    every?: MissionsWhereInput
    some?: MissionsWhereInput
    none?: MissionsWhereInput
  }

  export type LocationsScalarRelationFilter = {
    is?: LocationsWhereInput
    isNot?: LocationsWhereInput
  }

  export type StoreStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type LocationsOrderByRelevanceInput = {
    fields: LocationsOrderByRelevanceFieldEnum | LocationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LocationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LocationsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LocationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LocationsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreStatusCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    reviewsCount?: SortOrder
    starTotal?: SortOrder
  }

  export type StoreStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    reviewsCount?: SortOrder
    starTotal?: SortOrder
  }

  export type StoreStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    reviewsCount?: SortOrder
    starTotal?: SortOrder
  }

  export type StoreStatusMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    reviewsCount?: SortOrder
    starTotal?: SortOrder
  }

  export type StoreStatusSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    reviewsCount?: SortOrder
    starTotal?: SortOrder
  }

  export type MissionsCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    goal?: SortOrder
    rewards?: SortOrder
    expireDate?: SortOrder
    locationId?: SortOrder
  }

  export type MissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    goal?: SortOrder
    rewards?: SortOrder
    locationId?: SortOrder
  }

  export type MissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    goal?: SortOrder
    rewards?: SortOrder
    expireDate?: SortOrder
    locationId?: SortOrder
  }

  export type MissionsMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    goal?: SortOrder
    rewards?: SortOrder
    expireDate?: SortOrder
    locationId?: SortOrder
  }

  export type MissionsSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    goal?: SortOrder
    rewards?: SortOrder
    locationId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MissionsScalarRelationFilter = {
    is?: MissionsWhereInput
    isNot?: MissionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AcceptedMissionsOrderByRelevanceInput = {
    fields: AcceptedMissionsOrderByRelevanceFieldEnum | AcceptedMissionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AcceptedMissionsCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    verificationCode?: SortOrder
    completedAt?: SortOrder
  }

  export type AcceptedMissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type AcceptedMissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    verificationCode?: SortOrder
    completedAt?: SortOrder
  }

  export type AcceptedMissionsMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    verificationCode?: SortOrder
    completedAt?: SortOrder
  }

  export type AcceptedMissionsSumOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CompletedMissionsCountOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
  }

  export type CompletedMissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type CompletedMissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
  }

  export type CompletedMissionsMinOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
    completedAt?: SortOrder
  }

  export type CompletedMissionsSumOrderByAggregateInput = {
    id?: SortOrder
    missionId?: SortOrder
    userId?: SortOrder
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type MembersFoodTypeCreateNestedManyWithoutMembersInput = {
    create?: XOR<MembersFoodTypeCreateWithoutMembersInput, MembersFoodTypeUncheckedCreateWithoutMembersInput> | MembersFoodTypeCreateWithoutMembersInput[] | MembersFoodTypeUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutMembersInput | MembersFoodTypeCreateOrConnectWithoutMembersInput[]
    createMany?: MembersFoodTypeCreateManyMembersInputEnvelope
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
  }

  export type AcceptedMissionsCreateNestedManyWithoutMembersInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMembersInput, AcceptedMissionsUncheckedCreateWithoutMembersInput> | AcceptedMissionsCreateWithoutMembersInput[] | AcceptedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMembersInput | AcceptedMissionsCreateOrConnectWithoutMembersInput[]
    createMany?: AcceptedMissionsCreateManyMembersInputEnvelope
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
  }

  export type CompletedMissionsCreateNestedManyWithoutMembersInput = {
    create?: XOR<CompletedMissionsCreateWithoutMembersInput, CompletedMissionsUncheckedCreateWithoutMembersInput> | CompletedMissionsCreateWithoutMembersInput[] | CompletedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMembersInput | CompletedMissionsCreateOrConnectWithoutMembersInput[]
    createMany?: CompletedMissionsCreateManyMembersInputEnvelope
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
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

  export type AcceptedMissionsUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMembersInput, AcceptedMissionsUncheckedCreateWithoutMembersInput> | AcceptedMissionsCreateWithoutMembersInput[] | AcceptedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMembersInput | AcceptedMissionsCreateOrConnectWithoutMembersInput[]
    createMany?: AcceptedMissionsCreateManyMembersInputEnvelope
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
  }

  export type CompletedMissionsUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<CompletedMissionsCreateWithoutMembersInput, CompletedMissionsUncheckedCreateWithoutMembersInput> | CompletedMissionsCreateWithoutMembersInput[] | CompletedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMembersInput | CompletedMissionsCreateOrConnectWithoutMembersInput[]
    createMany?: CompletedMissionsCreateManyMembersInputEnvelope
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
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

  export type AcceptedMissionsUpdateManyWithoutMembersNestedInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMembersInput, AcceptedMissionsUncheckedCreateWithoutMembersInput> | AcceptedMissionsCreateWithoutMembersInput[] | AcceptedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMembersInput | AcceptedMissionsCreateOrConnectWithoutMembersInput[]
    upsert?: AcceptedMissionsUpsertWithWhereUniqueWithoutMembersInput | AcceptedMissionsUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: AcceptedMissionsCreateManyMembersInputEnvelope
    set?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    disconnect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    delete?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    update?: AcceptedMissionsUpdateWithWhereUniqueWithoutMembersInput | AcceptedMissionsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: AcceptedMissionsUpdateManyWithWhereWithoutMembersInput | AcceptedMissionsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: AcceptedMissionsScalarWhereInput | AcceptedMissionsScalarWhereInput[]
  }

  export type CompletedMissionsUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CompletedMissionsCreateWithoutMembersInput, CompletedMissionsUncheckedCreateWithoutMembersInput> | CompletedMissionsCreateWithoutMembersInput[] | CompletedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMembersInput | CompletedMissionsCreateOrConnectWithoutMembersInput[]
    upsert?: CompletedMissionsUpsertWithWhereUniqueWithoutMembersInput | CompletedMissionsUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: CompletedMissionsCreateManyMembersInputEnvelope
    set?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    disconnect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    delete?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    update?: CompletedMissionsUpdateWithWhereUniqueWithoutMembersInput | CompletedMissionsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CompletedMissionsUpdateManyWithWhereWithoutMembersInput | CompletedMissionsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CompletedMissionsScalarWhereInput | CompletedMissionsScalarWhereInput[]
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

  export type AcceptedMissionsUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMembersInput, AcceptedMissionsUncheckedCreateWithoutMembersInput> | AcceptedMissionsCreateWithoutMembersInput[] | AcceptedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMembersInput | AcceptedMissionsCreateOrConnectWithoutMembersInput[]
    upsert?: AcceptedMissionsUpsertWithWhereUniqueWithoutMembersInput | AcceptedMissionsUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: AcceptedMissionsCreateManyMembersInputEnvelope
    set?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    disconnect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    delete?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    update?: AcceptedMissionsUpdateWithWhereUniqueWithoutMembersInput | AcceptedMissionsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: AcceptedMissionsUpdateManyWithWhereWithoutMembersInput | AcceptedMissionsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: AcceptedMissionsScalarWhereInput | AcceptedMissionsScalarWhereInput[]
  }

  export type CompletedMissionsUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<CompletedMissionsCreateWithoutMembersInput, CompletedMissionsUncheckedCreateWithoutMembersInput> | CompletedMissionsCreateWithoutMembersInput[] | CompletedMissionsUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMembersInput | CompletedMissionsCreateOrConnectWithoutMembersInput[]
    upsert?: CompletedMissionsUpsertWithWhereUniqueWithoutMembersInput | CompletedMissionsUpsertWithWhereUniqueWithoutMembersInput[]
    createMany?: CompletedMissionsCreateManyMembersInputEnvelope
    set?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    disconnect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    delete?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    update?: CompletedMissionsUpdateWithWhereUniqueWithoutMembersInput | CompletedMissionsUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: CompletedMissionsUpdateManyWithWhereWithoutMembersInput | CompletedMissionsUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: CompletedMissionsScalarWhereInput | CompletedMissionsScalarWhereInput[]
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

  export type StoreCreateNestedManyWithoutFoodTypeInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput> | StoreCreateWithoutFoodTypeInput[] | StoreUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput | StoreCreateOrConnectWithoutFoodTypeInput[]
    createMany?: StoreCreateManyFoodTypeInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type MembersFoodTypeUncheckedCreateNestedManyWithoutFoodTypeInput = {
    create?: XOR<MembersFoodTypeCreateWithoutFoodTypeInput, MembersFoodTypeUncheckedCreateWithoutFoodTypeInput> | MembersFoodTypeCreateWithoutFoodTypeInput[] | MembersFoodTypeUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: MembersFoodTypeCreateOrConnectWithoutFoodTypeInput | MembersFoodTypeCreateOrConnectWithoutFoodTypeInput[]
    createMany?: MembersFoodTypeCreateManyFoodTypeInputEnvelope
    connect?: MembersFoodTypeWhereUniqueInput | MembersFoodTypeWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutFoodTypeInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput> | StoreCreateWithoutFoodTypeInput[] | StoreUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput | StoreCreateOrConnectWithoutFoodTypeInput[]
    createMany?: StoreCreateManyFoodTypeInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
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

  export type StoreUpdateManyWithoutFoodTypeNestedInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput> | StoreCreateWithoutFoodTypeInput[] | StoreUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput | StoreCreateOrConnectWithoutFoodTypeInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutFoodTypeInput | StoreUpsertWithWhereUniqueWithoutFoodTypeInput[]
    createMany?: StoreCreateManyFoodTypeInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutFoodTypeInput | StoreUpdateWithWhereUniqueWithoutFoodTypeInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutFoodTypeInput | StoreUpdateManyWithWhereWithoutFoodTypeInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
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

  export type StoreUncheckedUpdateManyWithoutFoodTypeNestedInput = {
    create?: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput> | StoreCreateWithoutFoodTypeInput[] | StoreUncheckedCreateWithoutFoodTypeInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutFoodTypeInput | StoreCreateOrConnectWithoutFoodTypeInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutFoodTypeInput | StoreUpsertWithWhereUniqueWithoutFoodTypeInput[]
    createMany?: StoreCreateManyFoodTypeInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutFoodTypeInput | StoreUpdateWithWhereUniqueWithoutFoodTypeInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutFoodTypeInput | StoreUpdateManyWithWhereWithoutFoodTypeInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
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

  export type StoreStatusCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreStatusCreateWithoutStoreInput, StoreStatusUncheckedCreateWithoutStoreInput> | StoreStatusCreateWithoutStoreInput[] | StoreStatusUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreStatusCreateOrConnectWithoutStoreInput | StoreStatusCreateOrConnectWithoutStoreInput[]
    createMany?: StoreStatusCreateManyStoreInputEnvelope
    connect?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
  }

  export type MissionsCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionsCreateWithoutStoreInput, MissionsUncheckedCreateWithoutStoreInput> | MissionsCreateWithoutStoreInput[] | MissionsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutStoreInput | MissionsCreateOrConnectWithoutStoreInput[]
    createMany?: MissionsCreateManyStoreInputEnvelope
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
  }

  export type FoodTypeCreateNestedOneWithoutStoreInput = {
    create?: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutStoreInput
    connect?: FoodTypeWhereUniqueInput
  }

  export type LocationsCreateNestedOneWithoutStoreInput = {
    create?: XOR<LocationsCreateWithoutStoreInput, LocationsUncheckedCreateWithoutStoreInput>
    connectOrCreate?: LocationsCreateOrConnectWithoutStoreInput
    connect?: LocationsWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<ReviewCreateWithoutStoreInput, ReviewUncheckedCreateWithoutStoreInput> | ReviewCreateWithoutStoreInput[] | ReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutStoreInput | ReviewCreateOrConnectWithoutStoreInput[]
    createMany?: ReviewCreateManyStoreInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StoreStatusUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreStatusCreateWithoutStoreInput, StoreStatusUncheckedCreateWithoutStoreInput> | StoreStatusCreateWithoutStoreInput[] | StoreStatusUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreStatusCreateOrConnectWithoutStoreInput | StoreStatusCreateOrConnectWithoutStoreInput[]
    createMany?: StoreStatusCreateManyStoreInputEnvelope
    connect?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
  }

  export type MissionsUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<MissionsCreateWithoutStoreInput, MissionsUncheckedCreateWithoutStoreInput> | MissionsCreateWithoutStoreInput[] | MissionsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutStoreInput | MissionsCreateOrConnectWithoutStoreInput[]
    createMany?: MissionsCreateManyStoreInputEnvelope
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
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

  export type StoreStatusUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreStatusCreateWithoutStoreInput, StoreStatusUncheckedCreateWithoutStoreInput> | StoreStatusCreateWithoutStoreInput[] | StoreStatusUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreStatusCreateOrConnectWithoutStoreInput | StoreStatusCreateOrConnectWithoutStoreInput[]
    upsert?: StoreStatusUpsertWithWhereUniqueWithoutStoreInput | StoreStatusUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreStatusCreateManyStoreInputEnvelope
    set?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    disconnect?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    delete?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    connect?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    update?: StoreStatusUpdateWithWhereUniqueWithoutStoreInput | StoreStatusUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreStatusUpdateManyWithWhereWithoutStoreInput | StoreStatusUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreStatusScalarWhereInput | StoreStatusScalarWhereInput[]
  }

  export type MissionsUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionsCreateWithoutStoreInput, MissionsUncheckedCreateWithoutStoreInput> | MissionsCreateWithoutStoreInput[] | MissionsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutStoreInput | MissionsCreateOrConnectWithoutStoreInput[]
    upsert?: MissionsUpsertWithWhereUniqueWithoutStoreInput | MissionsUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionsCreateManyStoreInputEnvelope
    set?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    disconnect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    delete?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    update?: MissionsUpdateWithWhereUniqueWithoutStoreInput | MissionsUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionsUpdateManyWithWhereWithoutStoreInput | MissionsUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionsScalarWhereInput | MissionsScalarWhereInput[]
  }

  export type FoodTypeUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
    connectOrCreate?: FoodTypeCreateOrConnectWithoutStoreInput
    upsert?: FoodTypeUpsertWithoutStoreInput
    connect?: FoodTypeWhereUniqueInput
    update?: XOR<XOR<FoodTypeUpdateToOneWithWhereWithoutStoreInput, FoodTypeUpdateWithoutStoreInput>, FoodTypeUncheckedUpdateWithoutStoreInput>
  }

  export type LocationsUpdateOneRequiredWithoutStoreNestedInput = {
    create?: XOR<LocationsCreateWithoutStoreInput, LocationsUncheckedCreateWithoutStoreInput>
    connectOrCreate?: LocationsCreateOrConnectWithoutStoreInput
    upsert?: LocationsUpsertWithoutStoreInput
    connect?: LocationsWhereUniqueInput
    update?: XOR<XOR<LocationsUpdateToOneWithWhereWithoutStoreInput, LocationsUpdateWithoutStoreInput>, LocationsUncheckedUpdateWithoutStoreInput>
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

  export type StoreStatusUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreStatusCreateWithoutStoreInput, StoreStatusUncheckedCreateWithoutStoreInput> | StoreStatusCreateWithoutStoreInput[] | StoreStatusUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreStatusCreateOrConnectWithoutStoreInput | StoreStatusCreateOrConnectWithoutStoreInput[]
    upsert?: StoreStatusUpsertWithWhereUniqueWithoutStoreInput | StoreStatusUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreStatusCreateManyStoreInputEnvelope
    set?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    disconnect?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    delete?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    connect?: StoreStatusWhereUniqueInput | StoreStatusWhereUniqueInput[]
    update?: StoreStatusUpdateWithWhereUniqueWithoutStoreInput | StoreStatusUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreStatusUpdateManyWithWhereWithoutStoreInput | StoreStatusUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreStatusScalarWhereInput | StoreStatusScalarWhereInput[]
  }

  export type MissionsUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<MissionsCreateWithoutStoreInput, MissionsUncheckedCreateWithoutStoreInput> | MissionsCreateWithoutStoreInput[] | MissionsUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutStoreInput | MissionsCreateOrConnectWithoutStoreInput[]
    upsert?: MissionsUpsertWithWhereUniqueWithoutStoreInput | MissionsUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: MissionsCreateManyStoreInputEnvelope
    set?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    disconnect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    delete?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    update?: MissionsUpdateWithWhereUniqueWithoutStoreInput | MissionsUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: MissionsUpdateManyWithWhereWithoutStoreInput | MissionsUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: MissionsScalarWhereInput | MissionsScalarWhereInput[]
  }

  export type StoreCreateNestedManyWithoutLocationsInput = {
    create?: XOR<StoreCreateWithoutLocationsInput, StoreUncheckedCreateWithoutLocationsInput> | StoreCreateWithoutLocationsInput[] | StoreUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocationsInput | StoreCreateOrConnectWithoutLocationsInput[]
    createMany?: StoreCreateManyLocationsInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type MissionsCreateNestedManyWithoutLocationsInput = {
    create?: XOR<MissionsCreateWithoutLocationsInput, MissionsUncheckedCreateWithoutLocationsInput> | MissionsCreateWithoutLocationsInput[] | MissionsUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutLocationsInput | MissionsCreateOrConnectWithoutLocationsInput[]
    createMany?: MissionsCreateManyLocationsInputEnvelope
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<StoreCreateWithoutLocationsInput, StoreUncheckedCreateWithoutLocationsInput> | StoreCreateWithoutLocationsInput[] | StoreUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocationsInput | StoreCreateOrConnectWithoutLocationsInput[]
    createMany?: StoreCreateManyLocationsInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type MissionsUncheckedCreateNestedManyWithoutLocationsInput = {
    create?: XOR<MissionsCreateWithoutLocationsInput, MissionsUncheckedCreateWithoutLocationsInput> | MissionsCreateWithoutLocationsInput[] | MissionsUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutLocationsInput | MissionsCreateOrConnectWithoutLocationsInput[]
    createMany?: MissionsCreateManyLocationsInputEnvelope
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
  }

  export type StoreUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<StoreCreateWithoutLocationsInput, StoreUncheckedCreateWithoutLocationsInput> | StoreCreateWithoutLocationsInput[] | StoreUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocationsInput | StoreCreateOrConnectWithoutLocationsInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutLocationsInput | StoreUpsertWithWhereUniqueWithoutLocationsInput[]
    createMany?: StoreCreateManyLocationsInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutLocationsInput | StoreUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutLocationsInput | StoreUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type MissionsUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<MissionsCreateWithoutLocationsInput, MissionsUncheckedCreateWithoutLocationsInput> | MissionsCreateWithoutLocationsInput[] | MissionsUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutLocationsInput | MissionsCreateOrConnectWithoutLocationsInput[]
    upsert?: MissionsUpsertWithWhereUniqueWithoutLocationsInput | MissionsUpsertWithWhereUniqueWithoutLocationsInput[]
    createMany?: MissionsCreateManyLocationsInputEnvelope
    set?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    disconnect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    delete?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    update?: MissionsUpdateWithWhereUniqueWithoutLocationsInput | MissionsUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: MissionsUpdateManyWithWhereWithoutLocationsInput | MissionsUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: MissionsScalarWhereInput | MissionsScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<StoreCreateWithoutLocationsInput, StoreUncheckedCreateWithoutLocationsInput> | StoreCreateWithoutLocationsInput[] | StoreUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutLocationsInput | StoreCreateOrConnectWithoutLocationsInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutLocationsInput | StoreUpsertWithWhereUniqueWithoutLocationsInput[]
    createMany?: StoreCreateManyLocationsInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutLocationsInput | StoreUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutLocationsInput | StoreUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type MissionsUncheckedUpdateManyWithoutLocationsNestedInput = {
    create?: XOR<MissionsCreateWithoutLocationsInput, MissionsUncheckedCreateWithoutLocationsInput> | MissionsCreateWithoutLocationsInput[] | MissionsUncheckedCreateWithoutLocationsInput[]
    connectOrCreate?: MissionsCreateOrConnectWithoutLocationsInput | MissionsCreateOrConnectWithoutLocationsInput[]
    upsert?: MissionsUpsertWithWhereUniqueWithoutLocationsInput | MissionsUpsertWithWhereUniqueWithoutLocationsInput[]
    createMany?: MissionsCreateManyLocationsInputEnvelope
    set?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    disconnect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    delete?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    connect?: MissionsWhereUniqueInput | MissionsWhereUniqueInput[]
    update?: MissionsUpdateWithWhereUniqueWithoutLocationsInput | MissionsUpdateWithWhereUniqueWithoutLocationsInput[]
    updateMany?: MissionsUpdateManyWithWhereWithoutLocationsInput | MissionsUpdateManyWithWhereWithoutLocationsInput[]
    deleteMany?: MissionsScalarWhereInput | MissionsScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutStoreStatusInput = {
    create?: XOR<StoreCreateWithoutStoreStatusInput, StoreUncheckedCreateWithoutStoreStatusInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreStatusInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutStoreStatusNestedInput = {
    create?: XOR<StoreCreateWithoutStoreStatusInput, StoreUncheckedCreateWithoutStoreStatusInput>
    connectOrCreate?: StoreCreateOrConnectWithoutStoreStatusInput
    upsert?: StoreUpsertWithoutStoreStatusInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutStoreStatusInput, StoreUpdateWithoutStoreStatusInput>, StoreUncheckedUpdateWithoutStoreStatusInput>
  }

  export type StoreCreateNestedOneWithoutMissionsInput = {
    create?: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionsInput
    connect?: StoreWhereUniqueInput
  }

  export type LocationsCreateNestedOneWithoutMissionsInput = {
    create?: XOR<LocationsCreateWithoutMissionsInput, LocationsUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: LocationsCreateOrConnectWithoutMissionsInput
    connect?: LocationsWhereUniqueInput
  }

  export type AcceptedMissionsCreateNestedManyWithoutMissionsInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMissionsInput, AcceptedMissionsUncheckedCreateWithoutMissionsInput> | AcceptedMissionsCreateWithoutMissionsInput[] | AcceptedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMissionsInput | AcceptedMissionsCreateOrConnectWithoutMissionsInput[]
    createMany?: AcceptedMissionsCreateManyMissionsInputEnvelope
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
  }

  export type CompletedMissionsCreateNestedManyWithoutMissionsInput = {
    create?: XOR<CompletedMissionsCreateWithoutMissionsInput, CompletedMissionsUncheckedCreateWithoutMissionsInput> | CompletedMissionsCreateWithoutMissionsInput[] | CompletedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMissionsInput | CompletedMissionsCreateOrConnectWithoutMissionsInput[]
    createMany?: CompletedMissionsCreateManyMissionsInputEnvelope
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
  }

  export type AcceptedMissionsUncheckedCreateNestedManyWithoutMissionsInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMissionsInput, AcceptedMissionsUncheckedCreateWithoutMissionsInput> | AcceptedMissionsCreateWithoutMissionsInput[] | AcceptedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMissionsInput | AcceptedMissionsCreateOrConnectWithoutMissionsInput[]
    createMany?: AcceptedMissionsCreateManyMissionsInputEnvelope
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
  }

  export type CompletedMissionsUncheckedCreateNestedManyWithoutMissionsInput = {
    create?: XOR<CompletedMissionsCreateWithoutMissionsInput, CompletedMissionsUncheckedCreateWithoutMissionsInput> | CompletedMissionsCreateWithoutMissionsInput[] | CompletedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMissionsInput | CompletedMissionsCreateOrConnectWithoutMissionsInput[]
    createMany?: CompletedMissionsCreateManyMissionsInputEnvelope
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutMissionsInput
    upsert?: StoreUpsertWithoutMissionsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutMissionsInput, StoreUpdateWithoutMissionsInput>, StoreUncheckedUpdateWithoutMissionsInput>
  }

  export type LocationsUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<LocationsCreateWithoutMissionsInput, LocationsUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: LocationsCreateOrConnectWithoutMissionsInput
    upsert?: LocationsUpsertWithoutMissionsInput
    connect?: LocationsWhereUniqueInput
    update?: XOR<XOR<LocationsUpdateToOneWithWhereWithoutMissionsInput, LocationsUpdateWithoutMissionsInput>, LocationsUncheckedUpdateWithoutMissionsInput>
  }

  export type AcceptedMissionsUpdateManyWithoutMissionsNestedInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMissionsInput, AcceptedMissionsUncheckedCreateWithoutMissionsInput> | AcceptedMissionsCreateWithoutMissionsInput[] | AcceptedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMissionsInput | AcceptedMissionsCreateOrConnectWithoutMissionsInput[]
    upsert?: AcceptedMissionsUpsertWithWhereUniqueWithoutMissionsInput | AcceptedMissionsUpsertWithWhereUniqueWithoutMissionsInput[]
    createMany?: AcceptedMissionsCreateManyMissionsInputEnvelope
    set?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    disconnect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    delete?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    update?: AcceptedMissionsUpdateWithWhereUniqueWithoutMissionsInput | AcceptedMissionsUpdateWithWhereUniqueWithoutMissionsInput[]
    updateMany?: AcceptedMissionsUpdateManyWithWhereWithoutMissionsInput | AcceptedMissionsUpdateManyWithWhereWithoutMissionsInput[]
    deleteMany?: AcceptedMissionsScalarWhereInput | AcceptedMissionsScalarWhereInput[]
  }

  export type CompletedMissionsUpdateManyWithoutMissionsNestedInput = {
    create?: XOR<CompletedMissionsCreateWithoutMissionsInput, CompletedMissionsUncheckedCreateWithoutMissionsInput> | CompletedMissionsCreateWithoutMissionsInput[] | CompletedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMissionsInput | CompletedMissionsCreateOrConnectWithoutMissionsInput[]
    upsert?: CompletedMissionsUpsertWithWhereUniqueWithoutMissionsInput | CompletedMissionsUpsertWithWhereUniqueWithoutMissionsInput[]
    createMany?: CompletedMissionsCreateManyMissionsInputEnvelope
    set?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    disconnect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    delete?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    update?: CompletedMissionsUpdateWithWhereUniqueWithoutMissionsInput | CompletedMissionsUpdateWithWhereUniqueWithoutMissionsInput[]
    updateMany?: CompletedMissionsUpdateManyWithWhereWithoutMissionsInput | CompletedMissionsUpdateManyWithWhereWithoutMissionsInput[]
    deleteMany?: CompletedMissionsScalarWhereInput | CompletedMissionsScalarWhereInput[]
  }

  export type AcceptedMissionsUncheckedUpdateManyWithoutMissionsNestedInput = {
    create?: XOR<AcceptedMissionsCreateWithoutMissionsInput, AcceptedMissionsUncheckedCreateWithoutMissionsInput> | AcceptedMissionsCreateWithoutMissionsInput[] | AcceptedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: AcceptedMissionsCreateOrConnectWithoutMissionsInput | AcceptedMissionsCreateOrConnectWithoutMissionsInput[]
    upsert?: AcceptedMissionsUpsertWithWhereUniqueWithoutMissionsInput | AcceptedMissionsUpsertWithWhereUniqueWithoutMissionsInput[]
    createMany?: AcceptedMissionsCreateManyMissionsInputEnvelope
    set?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    disconnect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    delete?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    connect?: AcceptedMissionsWhereUniqueInput | AcceptedMissionsWhereUniqueInput[]
    update?: AcceptedMissionsUpdateWithWhereUniqueWithoutMissionsInput | AcceptedMissionsUpdateWithWhereUniqueWithoutMissionsInput[]
    updateMany?: AcceptedMissionsUpdateManyWithWhereWithoutMissionsInput | AcceptedMissionsUpdateManyWithWhereWithoutMissionsInput[]
    deleteMany?: AcceptedMissionsScalarWhereInput | AcceptedMissionsScalarWhereInput[]
  }

  export type CompletedMissionsUncheckedUpdateManyWithoutMissionsNestedInput = {
    create?: XOR<CompletedMissionsCreateWithoutMissionsInput, CompletedMissionsUncheckedCreateWithoutMissionsInput> | CompletedMissionsCreateWithoutMissionsInput[] | CompletedMissionsUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: CompletedMissionsCreateOrConnectWithoutMissionsInput | CompletedMissionsCreateOrConnectWithoutMissionsInput[]
    upsert?: CompletedMissionsUpsertWithWhereUniqueWithoutMissionsInput | CompletedMissionsUpsertWithWhereUniqueWithoutMissionsInput[]
    createMany?: CompletedMissionsCreateManyMissionsInputEnvelope
    set?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    disconnect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    delete?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    connect?: CompletedMissionsWhereUniqueInput | CompletedMissionsWhereUniqueInput[]
    update?: CompletedMissionsUpdateWithWhereUniqueWithoutMissionsInput | CompletedMissionsUpdateWithWhereUniqueWithoutMissionsInput[]
    updateMany?: CompletedMissionsUpdateManyWithWhereWithoutMissionsInput | CompletedMissionsUpdateManyWithWhereWithoutMissionsInput[]
    deleteMany?: CompletedMissionsScalarWhereInput | CompletedMissionsScalarWhereInput[]
  }

  export type MissionsCreateNestedOneWithoutAcceptedMissionsInput = {
    create?: XOR<MissionsCreateWithoutAcceptedMissionsInput, MissionsUncheckedCreateWithoutAcceptedMissionsInput>
    connectOrCreate?: MissionsCreateOrConnectWithoutAcceptedMissionsInput
    connect?: MissionsWhereUniqueInput
  }

  export type MembersCreateNestedOneWithoutAcceptedMissionsInput = {
    create?: XOR<MembersCreateWithoutAcceptedMissionsInput, MembersUncheckedCreateWithoutAcceptedMissionsInput>
    connectOrCreate?: MembersCreateOrConnectWithoutAcceptedMissionsInput
    connect?: MembersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MissionsUpdateOneRequiredWithoutAcceptedMissionsNestedInput = {
    create?: XOR<MissionsCreateWithoutAcceptedMissionsInput, MissionsUncheckedCreateWithoutAcceptedMissionsInput>
    connectOrCreate?: MissionsCreateOrConnectWithoutAcceptedMissionsInput
    upsert?: MissionsUpsertWithoutAcceptedMissionsInput
    connect?: MissionsWhereUniqueInput
    update?: XOR<XOR<MissionsUpdateToOneWithWhereWithoutAcceptedMissionsInput, MissionsUpdateWithoutAcceptedMissionsInput>, MissionsUncheckedUpdateWithoutAcceptedMissionsInput>
  }

  export type MembersUpdateOneRequiredWithoutAcceptedMissionsNestedInput = {
    create?: XOR<MembersCreateWithoutAcceptedMissionsInput, MembersUncheckedCreateWithoutAcceptedMissionsInput>
    connectOrCreate?: MembersCreateOrConnectWithoutAcceptedMissionsInput
    upsert?: MembersUpsertWithoutAcceptedMissionsInput
    connect?: MembersWhereUniqueInput
    update?: XOR<XOR<MembersUpdateToOneWithWhereWithoutAcceptedMissionsInput, MembersUpdateWithoutAcceptedMissionsInput>, MembersUncheckedUpdateWithoutAcceptedMissionsInput>
  }

  export type MissionsCreateNestedOneWithoutCompletedMissionsInput = {
    create?: XOR<MissionsCreateWithoutCompletedMissionsInput, MissionsUncheckedCreateWithoutCompletedMissionsInput>
    connectOrCreate?: MissionsCreateOrConnectWithoutCompletedMissionsInput
    connect?: MissionsWhereUniqueInput
  }

  export type MembersCreateNestedOneWithoutCompletedMissionsInput = {
    create?: XOR<MembersCreateWithoutCompletedMissionsInput, MembersUncheckedCreateWithoutCompletedMissionsInput>
    connectOrCreate?: MembersCreateOrConnectWithoutCompletedMissionsInput
    connect?: MembersWhereUniqueInput
  }

  export type MissionsUpdateOneRequiredWithoutCompletedMissionsNestedInput = {
    create?: XOR<MissionsCreateWithoutCompletedMissionsInput, MissionsUncheckedCreateWithoutCompletedMissionsInput>
    connectOrCreate?: MissionsCreateOrConnectWithoutCompletedMissionsInput
    upsert?: MissionsUpsertWithoutCompletedMissionsInput
    connect?: MissionsWhereUniqueInput
    update?: XOR<XOR<MissionsUpdateToOneWithWhereWithoutCompletedMissionsInput, MissionsUpdateWithoutCompletedMissionsInput>, MissionsUncheckedUpdateWithoutCompletedMissionsInput>
  }

  export type MembersUpdateOneRequiredWithoutCompletedMissionsNestedInput = {
    create?: XOR<MembersCreateWithoutCompletedMissionsInput, MembersUncheckedCreateWithoutCompletedMissionsInput>
    connectOrCreate?: MembersCreateOrConnectWithoutCompletedMissionsInput
    upsert?: MembersUpsertWithoutCompletedMissionsInput
    connect?: MembersWhereUniqueInput
    update?: XOR<XOR<MembersUpdateToOneWithWhereWithoutCompletedMissionsInput, MembersUpdateWithoutCompletedMissionsInput>, MembersUncheckedUpdateWithoutCompletedMissionsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type AcceptedMissionsCreateWithoutMembersInput = {
    verificationCode: string
    completedAt?: Date | string | null
    missions: MissionsCreateNestedOneWithoutAcceptedMissionsInput
  }

  export type AcceptedMissionsUncheckedCreateWithoutMembersInput = {
    id?: number
    missionId: number
    verificationCode: string
    completedAt?: Date | string | null
  }

  export type AcceptedMissionsCreateOrConnectWithoutMembersInput = {
    where: AcceptedMissionsWhereUniqueInput
    create: XOR<AcceptedMissionsCreateWithoutMembersInput, AcceptedMissionsUncheckedCreateWithoutMembersInput>
  }

  export type AcceptedMissionsCreateManyMembersInputEnvelope = {
    data: AcceptedMissionsCreateManyMembersInput | AcceptedMissionsCreateManyMembersInput[]
    skipDuplicates?: boolean
  }

  export type CompletedMissionsCreateWithoutMembersInput = {
    completedAt: Date | string
    missions: MissionsCreateNestedOneWithoutCompletedMissionsInput
  }

  export type CompletedMissionsUncheckedCreateWithoutMembersInput = {
    id?: number
    missionId: number
    completedAt: Date | string
  }

  export type CompletedMissionsCreateOrConnectWithoutMembersInput = {
    where: CompletedMissionsWhereUniqueInput
    create: XOR<CompletedMissionsCreateWithoutMembersInput, CompletedMissionsUncheckedCreateWithoutMembersInput>
  }

  export type CompletedMissionsCreateManyMembersInputEnvelope = {
    data: CompletedMissionsCreateManyMembersInput | CompletedMissionsCreateManyMembersInput[]
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

  export type AcceptedMissionsUpsertWithWhereUniqueWithoutMembersInput = {
    where: AcceptedMissionsWhereUniqueInput
    update: XOR<AcceptedMissionsUpdateWithoutMembersInput, AcceptedMissionsUncheckedUpdateWithoutMembersInput>
    create: XOR<AcceptedMissionsCreateWithoutMembersInput, AcceptedMissionsUncheckedCreateWithoutMembersInput>
  }

  export type AcceptedMissionsUpdateWithWhereUniqueWithoutMembersInput = {
    where: AcceptedMissionsWhereUniqueInput
    data: XOR<AcceptedMissionsUpdateWithoutMembersInput, AcceptedMissionsUncheckedUpdateWithoutMembersInput>
  }

  export type AcceptedMissionsUpdateManyWithWhereWithoutMembersInput = {
    where: AcceptedMissionsScalarWhereInput
    data: XOR<AcceptedMissionsUpdateManyMutationInput, AcceptedMissionsUncheckedUpdateManyWithoutMembersInput>
  }

  export type AcceptedMissionsScalarWhereInput = {
    AND?: AcceptedMissionsScalarWhereInput | AcceptedMissionsScalarWhereInput[]
    OR?: AcceptedMissionsScalarWhereInput[]
    NOT?: AcceptedMissionsScalarWhereInput | AcceptedMissionsScalarWhereInput[]
    id?: IntFilter<"AcceptedMissions"> | number
    missionId?: IntFilter<"AcceptedMissions"> | number
    userId?: IntFilter<"AcceptedMissions"> | number
    verificationCode?: StringFilter<"AcceptedMissions"> | string
    completedAt?: DateTimeNullableFilter<"AcceptedMissions"> | Date | string | null
  }

  export type CompletedMissionsUpsertWithWhereUniqueWithoutMembersInput = {
    where: CompletedMissionsWhereUniqueInput
    update: XOR<CompletedMissionsUpdateWithoutMembersInput, CompletedMissionsUncheckedUpdateWithoutMembersInput>
    create: XOR<CompletedMissionsCreateWithoutMembersInput, CompletedMissionsUncheckedCreateWithoutMembersInput>
  }

  export type CompletedMissionsUpdateWithWhereUniqueWithoutMembersInput = {
    where: CompletedMissionsWhereUniqueInput
    data: XOR<CompletedMissionsUpdateWithoutMembersInput, CompletedMissionsUncheckedUpdateWithoutMembersInput>
  }

  export type CompletedMissionsUpdateManyWithWhereWithoutMembersInput = {
    where: CompletedMissionsScalarWhereInput
    data: XOR<CompletedMissionsUpdateManyMutationInput, CompletedMissionsUncheckedUpdateManyWithoutMembersInput>
  }

  export type CompletedMissionsScalarWhereInput = {
    AND?: CompletedMissionsScalarWhereInput | CompletedMissionsScalarWhereInput[]
    OR?: CompletedMissionsScalarWhereInput[]
    NOT?: CompletedMissionsScalarWhereInput | CompletedMissionsScalarWhereInput[]
    id?: IntFilter<"CompletedMissions"> | number
    missionId?: IntFilter<"CompletedMissions"> | number
    userId?: IntFilter<"CompletedMissions"> | number
    completedAt?: DateTimeFilter<"CompletedMissions"> | Date | string
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
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMembersInput
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
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMembersInput
    review?: ReviewUncheckedCreateNestedManyWithoutMembersInput
  }

  export type MembersCreateOrConnectWithoutMembersFoodTypesInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutMembersFoodTypesInput, MembersUncheckedCreateWithoutMembersFoodTypesInput>
  }

  export type FoodTypeCreateWithoutMembersFoodTypesInput = {
    name: string
    storeTypeName: string
    store?: StoreCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUncheckedCreateWithoutMembersFoodTypesInput = {
    id?: number
    name: string
    storeTypeName: string
    store?: StoreUncheckedCreateNestedManyWithoutFoodTypeInput
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
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMembersNestedInput
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
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMembersNestedInput
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
    store?: StoreUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeUncheckedUpdateWithoutMembersFoodTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
    store?: StoreUncheckedUpdateManyWithoutFoodTypeNestedInput
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

  export type StoreCreateWithoutFoodTypeInput = {
    name: string
    address: string
    openTime: string
    closeTime: string
    review?: ReviewCreateNestedManyWithoutStoreInput
    storeStatus?: StoreStatusCreateNestedManyWithoutStoreInput
    missions?: MissionsCreateNestedManyWithoutStoreInput
    locations: LocationsCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutFoodTypeInput = {
    id?: number
    name: string
    address: string
    openTime: string
    closeTime: string
    locationId: number
    review?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    storeStatus?: StoreStatusUncheckedCreateNestedManyWithoutStoreInput
    missions?: MissionsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutFoodTypeInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
  }

  export type StoreCreateManyFoodTypeInputEnvelope = {
    data: StoreCreateManyFoodTypeInput | StoreCreateManyFoodTypeInput[]
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

  export type StoreUpsertWithWhereUniqueWithoutFoodTypeInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutFoodTypeInput, StoreUncheckedUpdateWithoutFoodTypeInput>
    create: XOR<StoreCreateWithoutFoodTypeInput, StoreUncheckedCreateWithoutFoodTypeInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutFoodTypeInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutFoodTypeInput, StoreUncheckedUpdateWithoutFoodTypeInput>
  }

  export type StoreUpdateManyWithWhereWithoutFoodTypeInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutFoodTypeInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    foodTypeId?: IntFilter<"Store"> | number
    address?: StringFilter<"Store"> | string
    openTime?: StringFilter<"Store"> | string
    closeTime?: StringFilter<"Store"> | string
    locationId?: IntFilter<"Store"> | number
  }

  export type MembersCreateWithoutReviewInput = {
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutMembersInput
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMembersInput
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
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMembersInput
  }

  export type MembersCreateOrConnectWithoutReviewInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutReviewInput, MembersUncheckedCreateWithoutReviewInput>
  }

  export type StoreCreateWithoutReviewInput = {
    name: string
    address: string
    openTime: string
    closeTime: string
    storeStatus?: StoreStatusCreateNestedManyWithoutStoreInput
    missions?: MissionsCreateNestedManyWithoutStoreInput
    foodType: FoodTypeCreateNestedOneWithoutStoreInput
    locations: LocationsCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutReviewInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
    storeStatus?: StoreStatusUncheckedCreateNestedManyWithoutStoreInput
    missions?: MissionsUncheckedCreateNestedManyWithoutStoreInput
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
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMembersNestedInput
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
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMembersNestedInput
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
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    storeStatus?: StoreStatusUpdateManyWithoutStoreNestedInput
    missions?: MissionsUpdateManyWithoutStoreNestedInput
    foodType?: FoodTypeUpdateOneRequiredWithoutStoreNestedInput
    locations?: LocationsUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    storeStatus?: StoreStatusUncheckedUpdateManyWithoutStoreNestedInput
    missions?: MissionsUncheckedUpdateManyWithoutStoreNestedInput
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

  export type StoreStatusCreateWithoutStoreInput = {
    reviewsCount: number
    starTotal: number
  }

  export type StoreStatusUncheckedCreateWithoutStoreInput = {
    id?: number
    reviewsCount: number
    starTotal: number
  }

  export type StoreStatusCreateOrConnectWithoutStoreInput = {
    where: StoreStatusWhereUniqueInput
    create: XOR<StoreStatusCreateWithoutStoreInput, StoreStatusUncheckedCreateWithoutStoreInput>
  }

  export type StoreStatusCreateManyStoreInputEnvelope = {
    data: StoreStatusCreateManyStoreInput | StoreStatusCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type MissionsCreateWithoutStoreInput = {
    goal: number
    rewards: number
    expireDate: Date | string
    locations: LocationsCreateNestedOneWithoutMissionsInput
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMissionsInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMissionsInput
  }

  export type MissionsUncheckedCreateWithoutStoreInput = {
    id?: number
    goal: number
    rewards: number
    expireDate: Date | string
    locationId: number
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMissionsInput
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMissionsInput
  }

  export type MissionsCreateOrConnectWithoutStoreInput = {
    where: MissionsWhereUniqueInput
    create: XOR<MissionsCreateWithoutStoreInput, MissionsUncheckedCreateWithoutStoreInput>
  }

  export type MissionsCreateManyStoreInputEnvelope = {
    data: MissionsCreateManyStoreInput | MissionsCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type FoodTypeCreateWithoutStoreInput = {
    name: string
    storeTypeName: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeUncheckedCreateWithoutStoreInput = {
    id?: number
    name: string
    storeTypeName: string
    membersFoodTypes?: MembersFoodTypeUncheckedCreateNestedManyWithoutFoodTypeInput
  }

  export type FoodTypeCreateOrConnectWithoutStoreInput = {
    where: FoodTypeWhereUniqueInput
    create: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
  }

  export type LocationsCreateWithoutStoreInput = {
    name: string
    missions?: MissionsCreateNestedManyWithoutLocationsInput
  }

  export type LocationsUncheckedCreateWithoutStoreInput = {
    id?: number
    name: string
    missions?: MissionsUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationsCreateOrConnectWithoutStoreInput = {
    where: LocationsWhereUniqueInput
    create: XOR<LocationsCreateWithoutStoreInput, LocationsUncheckedCreateWithoutStoreInput>
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

  export type StoreStatusUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreStatusWhereUniqueInput
    update: XOR<StoreStatusUpdateWithoutStoreInput, StoreStatusUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreStatusCreateWithoutStoreInput, StoreStatusUncheckedCreateWithoutStoreInput>
  }

  export type StoreStatusUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreStatusWhereUniqueInput
    data: XOR<StoreStatusUpdateWithoutStoreInput, StoreStatusUncheckedUpdateWithoutStoreInput>
  }

  export type StoreStatusUpdateManyWithWhereWithoutStoreInput = {
    where: StoreStatusScalarWhereInput
    data: XOR<StoreStatusUpdateManyMutationInput, StoreStatusUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreStatusScalarWhereInput = {
    AND?: StoreStatusScalarWhereInput | StoreStatusScalarWhereInput[]
    OR?: StoreStatusScalarWhereInput[]
    NOT?: StoreStatusScalarWhereInput | StoreStatusScalarWhereInput[]
    id?: IntFilter<"StoreStatus"> | number
    storeId?: IntFilter<"StoreStatus"> | number
    reviewsCount?: IntFilter<"StoreStatus"> | number
    starTotal?: FloatFilter<"StoreStatus"> | number
  }

  export type MissionsUpsertWithWhereUniqueWithoutStoreInput = {
    where: MissionsWhereUniqueInput
    update: XOR<MissionsUpdateWithoutStoreInput, MissionsUncheckedUpdateWithoutStoreInput>
    create: XOR<MissionsCreateWithoutStoreInput, MissionsUncheckedCreateWithoutStoreInput>
  }

  export type MissionsUpdateWithWhereUniqueWithoutStoreInput = {
    where: MissionsWhereUniqueInput
    data: XOR<MissionsUpdateWithoutStoreInput, MissionsUncheckedUpdateWithoutStoreInput>
  }

  export type MissionsUpdateManyWithWhereWithoutStoreInput = {
    where: MissionsScalarWhereInput
    data: XOR<MissionsUpdateManyMutationInput, MissionsUncheckedUpdateManyWithoutStoreInput>
  }

  export type MissionsScalarWhereInput = {
    AND?: MissionsScalarWhereInput | MissionsScalarWhereInput[]
    OR?: MissionsScalarWhereInput[]
    NOT?: MissionsScalarWhereInput | MissionsScalarWhereInput[]
    id?: IntFilter<"Missions"> | number
    storeId?: IntFilter<"Missions"> | number
    goal?: IntFilter<"Missions"> | number
    rewards?: IntFilter<"Missions"> | number
    expireDate?: DateTimeFilter<"Missions"> | Date | string
    locationId?: IntFilter<"Missions"> | number
  }

  export type FoodTypeUpsertWithoutStoreInput = {
    update: XOR<FoodTypeUpdateWithoutStoreInput, FoodTypeUncheckedUpdateWithoutStoreInput>
    create: XOR<FoodTypeCreateWithoutStoreInput, FoodTypeUncheckedCreateWithoutStoreInput>
    where?: FoodTypeWhereInput
  }

  export type FoodTypeUpdateToOneWithWhereWithoutStoreInput = {
    where?: FoodTypeWhereInput
    data: XOR<FoodTypeUpdateWithoutStoreInput, FoodTypeUncheckedUpdateWithoutStoreInput>
  }

  export type FoodTypeUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUpdateManyWithoutFoodTypeNestedInput
  }

  export type FoodTypeUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    storeTypeName?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUncheckedUpdateManyWithoutFoodTypeNestedInput
  }

  export type LocationsUpsertWithoutStoreInput = {
    update: XOR<LocationsUpdateWithoutStoreInput, LocationsUncheckedUpdateWithoutStoreInput>
    create: XOR<LocationsCreateWithoutStoreInput, LocationsUncheckedCreateWithoutStoreInput>
    where?: LocationsWhereInput
  }

  export type LocationsUpdateToOneWithWhereWithoutStoreInput = {
    where?: LocationsWhereInput
    data: XOR<LocationsUpdateWithoutStoreInput, LocationsUncheckedUpdateWithoutStoreInput>
  }

  export type LocationsUpdateWithoutStoreInput = {
    name?: StringFieldUpdateOperationsInput | string
    missions?: MissionsUpdateManyWithoutLocationsNestedInput
  }

  export type LocationsUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    missions?: MissionsUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type StoreCreateWithoutLocationsInput = {
    name: string
    address: string
    openTime: string
    closeTime: string
    review?: ReviewCreateNestedManyWithoutStoreInput
    storeStatus?: StoreStatusCreateNestedManyWithoutStoreInput
    missions?: MissionsCreateNestedManyWithoutStoreInput
    foodType: FoodTypeCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutLocationsInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    review?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    storeStatus?: StoreStatusUncheckedCreateNestedManyWithoutStoreInput
    missions?: MissionsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutLocationsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutLocationsInput, StoreUncheckedCreateWithoutLocationsInput>
  }

  export type StoreCreateManyLocationsInputEnvelope = {
    data: StoreCreateManyLocationsInput | StoreCreateManyLocationsInput[]
    skipDuplicates?: boolean
  }

  export type MissionsCreateWithoutLocationsInput = {
    goal: number
    rewards: number
    expireDate: Date | string
    store: StoreCreateNestedOneWithoutMissionsInput
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMissionsInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMissionsInput
  }

  export type MissionsUncheckedCreateWithoutLocationsInput = {
    id?: number
    storeId: number
    goal: number
    rewards: number
    expireDate: Date | string
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMissionsInput
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMissionsInput
  }

  export type MissionsCreateOrConnectWithoutLocationsInput = {
    where: MissionsWhereUniqueInput
    create: XOR<MissionsCreateWithoutLocationsInput, MissionsUncheckedCreateWithoutLocationsInput>
  }

  export type MissionsCreateManyLocationsInputEnvelope = {
    data: MissionsCreateManyLocationsInput | MissionsCreateManyLocationsInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutLocationsInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutLocationsInput, StoreUncheckedUpdateWithoutLocationsInput>
    create: XOR<StoreCreateWithoutLocationsInput, StoreUncheckedCreateWithoutLocationsInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutLocationsInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutLocationsInput, StoreUncheckedUpdateWithoutLocationsInput>
  }

  export type StoreUpdateManyWithWhereWithoutLocationsInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutLocationsInput>
  }

  export type MissionsUpsertWithWhereUniqueWithoutLocationsInput = {
    where: MissionsWhereUniqueInput
    update: XOR<MissionsUpdateWithoutLocationsInput, MissionsUncheckedUpdateWithoutLocationsInput>
    create: XOR<MissionsCreateWithoutLocationsInput, MissionsUncheckedCreateWithoutLocationsInput>
  }

  export type MissionsUpdateWithWhereUniqueWithoutLocationsInput = {
    where: MissionsWhereUniqueInput
    data: XOR<MissionsUpdateWithoutLocationsInput, MissionsUncheckedUpdateWithoutLocationsInput>
  }

  export type MissionsUpdateManyWithWhereWithoutLocationsInput = {
    where: MissionsScalarWhereInput
    data: XOR<MissionsUpdateManyMutationInput, MissionsUncheckedUpdateManyWithoutLocationsInput>
  }

  export type StoreCreateWithoutStoreStatusInput = {
    name: string
    address: string
    openTime: string
    closeTime: string
    review?: ReviewCreateNestedManyWithoutStoreInput
    missions?: MissionsCreateNestedManyWithoutStoreInput
    foodType: FoodTypeCreateNestedOneWithoutStoreInput
    locations: LocationsCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutStoreStatusInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
    review?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    missions?: MissionsUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutStoreStatusInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutStoreStatusInput, StoreUncheckedCreateWithoutStoreStatusInput>
  }

  export type StoreUpsertWithoutStoreStatusInput = {
    update: XOR<StoreUpdateWithoutStoreStatusInput, StoreUncheckedUpdateWithoutStoreStatusInput>
    create: XOR<StoreCreateWithoutStoreStatusInput, StoreUncheckedCreateWithoutStoreStatusInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutStoreStatusInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutStoreStatusInput, StoreUncheckedUpdateWithoutStoreStatusInput>
  }

  export type StoreUpdateWithoutStoreStatusInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateManyWithoutStoreNestedInput
    missions?: MissionsUpdateManyWithoutStoreNestedInput
    foodType?: FoodTypeUpdateOneRequiredWithoutStoreNestedInput
    locations?: LocationsUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutStoreStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    review?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    missions?: MissionsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateWithoutMissionsInput = {
    name: string
    address: string
    openTime: string
    closeTime: string
    review?: ReviewCreateNestedManyWithoutStoreInput
    storeStatus?: StoreStatusCreateNestedManyWithoutStoreInput
    foodType: FoodTypeCreateNestedOneWithoutStoreInput
    locations: LocationsCreateNestedOneWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutMissionsInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
    locationId: number
    review?: ReviewUncheckedCreateNestedManyWithoutStoreInput
    storeStatus?: StoreStatusUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutMissionsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
  }

  export type LocationsCreateWithoutMissionsInput = {
    name: string
    store?: StoreCreateNestedManyWithoutLocationsInput
  }

  export type LocationsUncheckedCreateWithoutMissionsInput = {
    id?: number
    name: string
    store?: StoreUncheckedCreateNestedManyWithoutLocationsInput
  }

  export type LocationsCreateOrConnectWithoutMissionsInput = {
    where: LocationsWhereUniqueInput
    create: XOR<LocationsCreateWithoutMissionsInput, LocationsUncheckedCreateWithoutMissionsInput>
  }

  export type AcceptedMissionsCreateWithoutMissionsInput = {
    verificationCode: string
    completedAt?: Date | string | null
    members: MembersCreateNestedOneWithoutAcceptedMissionsInput
  }

  export type AcceptedMissionsUncheckedCreateWithoutMissionsInput = {
    id?: number
    userId: number
    verificationCode: string
    completedAt?: Date | string | null
  }

  export type AcceptedMissionsCreateOrConnectWithoutMissionsInput = {
    where: AcceptedMissionsWhereUniqueInput
    create: XOR<AcceptedMissionsCreateWithoutMissionsInput, AcceptedMissionsUncheckedCreateWithoutMissionsInput>
  }

  export type AcceptedMissionsCreateManyMissionsInputEnvelope = {
    data: AcceptedMissionsCreateManyMissionsInput | AcceptedMissionsCreateManyMissionsInput[]
    skipDuplicates?: boolean
  }

  export type CompletedMissionsCreateWithoutMissionsInput = {
    completedAt: Date | string
    members: MembersCreateNestedOneWithoutCompletedMissionsInput
  }

  export type CompletedMissionsUncheckedCreateWithoutMissionsInput = {
    id?: number
    userId: number
    completedAt: Date | string
  }

  export type CompletedMissionsCreateOrConnectWithoutMissionsInput = {
    where: CompletedMissionsWhereUniqueInput
    create: XOR<CompletedMissionsCreateWithoutMissionsInput, CompletedMissionsUncheckedCreateWithoutMissionsInput>
  }

  export type CompletedMissionsCreateManyMissionsInputEnvelope = {
    data: CompletedMissionsCreateManyMissionsInput | CompletedMissionsCreateManyMissionsInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutMissionsInput = {
    update: XOR<StoreUpdateWithoutMissionsInput, StoreUncheckedUpdateWithoutMissionsInput>
    create: XOR<StoreCreateWithoutMissionsInput, StoreUncheckedCreateWithoutMissionsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutMissionsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutMissionsInput, StoreUncheckedUpdateWithoutMissionsInput>
  }

  export type StoreUpdateWithoutMissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateManyWithoutStoreNestedInput
    storeStatus?: StoreStatusUpdateManyWithoutStoreNestedInput
    foodType?: FoodTypeUpdateOneRequiredWithoutStoreNestedInput
    locations?: LocationsUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    review?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    storeStatus?: StoreStatusUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type LocationsUpsertWithoutMissionsInput = {
    update: XOR<LocationsUpdateWithoutMissionsInput, LocationsUncheckedUpdateWithoutMissionsInput>
    create: XOR<LocationsCreateWithoutMissionsInput, LocationsUncheckedCreateWithoutMissionsInput>
    where?: LocationsWhereInput
  }

  export type LocationsUpdateToOneWithWhereWithoutMissionsInput = {
    where?: LocationsWhereInput
    data: XOR<LocationsUpdateWithoutMissionsInput, LocationsUncheckedUpdateWithoutMissionsInput>
  }

  export type LocationsUpdateWithoutMissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateManyWithoutLocationsNestedInput
  }

  export type LocationsUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    store?: StoreUncheckedUpdateManyWithoutLocationsNestedInput
  }

  export type AcceptedMissionsUpsertWithWhereUniqueWithoutMissionsInput = {
    where: AcceptedMissionsWhereUniqueInput
    update: XOR<AcceptedMissionsUpdateWithoutMissionsInput, AcceptedMissionsUncheckedUpdateWithoutMissionsInput>
    create: XOR<AcceptedMissionsCreateWithoutMissionsInput, AcceptedMissionsUncheckedCreateWithoutMissionsInput>
  }

  export type AcceptedMissionsUpdateWithWhereUniqueWithoutMissionsInput = {
    where: AcceptedMissionsWhereUniqueInput
    data: XOR<AcceptedMissionsUpdateWithoutMissionsInput, AcceptedMissionsUncheckedUpdateWithoutMissionsInput>
  }

  export type AcceptedMissionsUpdateManyWithWhereWithoutMissionsInput = {
    where: AcceptedMissionsScalarWhereInput
    data: XOR<AcceptedMissionsUpdateManyMutationInput, AcceptedMissionsUncheckedUpdateManyWithoutMissionsInput>
  }

  export type CompletedMissionsUpsertWithWhereUniqueWithoutMissionsInput = {
    where: CompletedMissionsWhereUniqueInput
    update: XOR<CompletedMissionsUpdateWithoutMissionsInput, CompletedMissionsUncheckedUpdateWithoutMissionsInput>
    create: XOR<CompletedMissionsCreateWithoutMissionsInput, CompletedMissionsUncheckedCreateWithoutMissionsInput>
  }

  export type CompletedMissionsUpdateWithWhereUniqueWithoutMissionsInput = {
    where: CompletedMissionsWhereUniqueInput
    data: XOR<CompletedMissionsUpdateWithoutMissionsInput, CompletedMissionsUncheckedUpdateWithoutMissionsInput>
  }

  export type CompletedMissionsUpdateManyWithWhereWithoutMissionsInput = {
    where: CompletedMissionsScalarWhereInput
    data: XOR<CompletedMissionsUpdateManyMutationInput, CompletedMissionsUncheckedUpdateManyWithoutMissionsInput>
  }

  export type MissionsCreateWithoutAcceptedMissionsInput = {
    goal: number
    rewards: number
    expireDate: Date | string
    store: StoreCreateNestedOneWithoutMissionsInput
    locations: LocationsCreateNestedOneWithoutMissionsInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMissionsInput
  }

  export type MissionsUncheckedCreateWithoutAcceptedMissionsInput = {
    id?: number
    storeId: number
    goal: number
    rewards: number
    expireDate: Date | string
    locationId: number
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMissionsInput
  }

  export type MissionsCreateOrConnectWithoutAcceptedMissionsInput = {
    where: MissionsWhereUniqueInput
    create: XOR<MissionsCreateWithoutAcceptedMissionsInput, MissionsUncheckedCreateWithoutAcceptedMissionsInput>
  }

  export type MembersCreateWithoutAcceptedMissionsInput = {
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsCreateNestedManyWithoutMembersInput
    review?: ReviewCreateNestedManyWithoutMembersInput
  }

  export type MembersUncheckedCreateWithoutAcceptedMissionsInput = {
    id?: number
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeUncheckedCreateNestedManyWithoutMembersInput
    completedMissions?: CompletedMissionsUncheckedCreateNestedManyWithoutMembersInput
    review?: ReviewUncheckedCreateNestedManyWithoutMembersInput
  }

  export type MembersCreateOrConnectWithoutAcceptedMissionsInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutAcceptedMissionsInput, MembersUncheckedCreateWithoutAcceptedMissionsInput>
  }

  export type MissionsUpsertWithoutAcceptedMissionsInput = {
    update: XOR<MissionsUpdateWithoutAcceptedMissionsInput, MissionsUncheckedUpdateWithoutAcceptedMissionsInput>
    create: XOR<MissionsCreateWithoutAcceptedMissionsInput, MissionsUncheckedCreateWithoutAcceptedMissionsInput>
    where?: MissionsWhereInput
  }

  export type MissionsUpdateToOneWithWhereWithoutAcceptedMissionsInput = {
    where?: MissionsWhereInput
    data: XOR<MissionsUpdateWithoutAcceptedMissionsInput, MissionsUncheckedUpdateWithoutAcceptedMissionsInput>
  }

  export type MissionsUpdateWithoutAcceptedMissionsInput = {
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
    locations?: LocationsUpdateOneRequiredWithoutMissionsNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsUncheckedUpdateWithoutAcceptedMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: IntFieldUpdateOperationsInput | number
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
  }

  export type MembersUpsertWithoutAcceptedMissionsInput = {
    update: XOR<MembersUpdateWithoutAcceptedMissionsInput, MembersUncheckedUpdateWithoutAcceptedMissionsInput>
    create: XOR<MembersCreateWithoutAcceptedMissionsInput, MembersUncheckedCreateWithoutAcceptedMissionsInput>
    where?: MembersWhereInput
  }

  export type MembersUpdateToOneWithWhereWithoutAcceptedMissionsInput = {
    where?: MembersWhereInput
    data: XOR<MembersUpdateWithoutAcceptedMissionsInput, MembersUncheckedUpdateWithoutAcceptedMissionsInput>
  }

  export type MembersUpdateWithoutAcceptedMissionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMembersNestedInput
    review?: ReviewUpdateManyWithoutMembersNestedInput
  }

  export type MembersUncheckedUpdateWithoutAcceptedMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUncheckedUpdateManyWithoutMembersNestedInput
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMembersNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type MissionsCreateWithoutCompletedMissionsInput = {
    goal: number
    rewards: number
    expireDate: Date | string
    store: StoreCreateNestedOneWithoutMissionsInput
    locations: LocationsCreateNestedOneWithoutMissionsInput
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMissionsInput
  }

  export type MissionsUncheckedCreateWithoutCompletedMissionsInput = {
    id?: number
    storeId: number
    goal: number
    rewards: number
    expireDate: Date | string
    locationId: number
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMissionsInput
  }

  export type MissionsCreateOrConnectWithoutCompletedMissionsInput = {
    where: MissionsWhereUniqueInput
    create: XOR<MissionsCreateWithoutCompletedMissionsInput, MissionsUncheckedCreateWithoutCompletedMissionsInput>
  }

  export type MembersCreateWithoutCompletedMissionsInput = {
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeCreateNestedManyWithoutMembersInput
    acceptedMissions?: AcceptedMissionsCreateNestedManyWithoutMembersInput
    review?: ReviewCreateNestedManyWithoutMembersInput
  }

  export type MembersUncheckedCreateWithoutCompletedMissionsInput = {
    id?: number
    email: string
    name: string
    gender: $Enums.Gender
    birth: Date | string
    address: string
    phoneNumber: string
    membersFoodTypes?: MembersFoodTypeUncheckedCreateNestedManyWithoutMembersInput
    acceptedMissions?: AcceptedMissionsUncheckedCreateNestedManyWithoutMembersInput
    review?: ReviewUncheckedCreateNestedManyWithoutMembersInput
  }

  export type MembersCreateOrConnectWithoutCompletedMissionsInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutCompletedMissionsInput, MembersUncheckedCreateWithoutCompletedMissionsInput>
  }

  export type MissionsUpsertWithoutCompletedMissionsInput = {
    update: XOR<MissionsUpdateWithoutCompletedMissionsInput, MissionsUncheckedUpdateWithoutCompletedMissionsInput>
    create: XOR<MissionsCreateWithoutCompletedMissionsInput, MissionsUncheckedCreateWithoutCompletedMissionsInput>
    where?: MissionsWhereInput
  }

  export type MissionsUpdateToOneWithWhereWithoutCompletedMissionsInput = {
    where?: MissionsWhereInput
    data: XOR<MissionsUpdateWithoutCompletedMissionsInput, MissionsUncheckedUpdateWithoutCompletedMissionsInput>
  }

  export type MissionsUpdateWithoutCompletedMissionsInput = {
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
    locations?: LocationsUpdateOneRequiredWithoutMissionsNestedInput
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsUncheckedUpdateWithoutCompletedMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: IntFieldUpdateOperationsInput | number
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
  }

  export type MembersUpsertWithoutCompletedMissionsInput = {
    update: XOR<MembersUpdateWithoutCompletedMissionsInput, MembersUncheckedUpdateWithoutCompletedMissionsInput>
    create: XOR<MembersCreateWithoutCompletedMissionsInput, MembersUncheckedCreateWithoutCompletedMissionsInput>
    where?: MembersWhereInput
  }

  export type MembersUpdateToOneWithWhereWithoutCompletedMissionsInput = {
    where?: MembersWhereInput
    data: XOR<MembersUpdateWithoutCompletedMissionsInput, MembersUncheckedUpdateWithoutCompletedMissionsInput>
  }

  export type MembersUpdateWithoutCompletedMissionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUpdateManyWithoutMembersNestedInput
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMembersNestedInput
    review?: ReviewUpdateManyWithoutMembersNestedInput
  }

  export type MembersUncheckedUpdateWithoutCompletedMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    membersFoodTypes?: MembersFoodTypeUncheckedUpdateManyWithoutMembersNestedInput
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMembersNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMembersNestedInput
  }

  export type MembersFoodTypeCreateManyMembersInput = {
    id?: number
    foodTypeId: number
  }

  export type AcceptedMissionsCreateManyMembersInput = {
    id?: number
    missionId: number
    verificationCode: string
    completedAt?: Date | string | null
  }

  export type CompletedMissionsCreateManyMembersInput = {
    id?: number
    missionId: number
    completedAt: Date | string
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

  export type AcceptedMissionsUpdateWithoutMembersInput = {
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missions?: MissionsUpdateOneRequiredWithoutAcceptedMissionsNestedInput
  }

  export type AcceptedMissionsUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcceptedMissionsUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompletedMissionsUpdateWithoutMembersInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: MissionsUpdateOneRequiredWithoutCompletedMissionsNestedInput
  }

  export type CompletedMissionsUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedMissionsUncheckedUpdateManyWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    missionId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StoreCreateManyFoodTypeInput = {
    id?: number
    name: string
    address: string
    openTime: string
    closeTime: string
    locationId: number
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

  export type StoreUpdateWithoutFoodTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateManyWithoutStoreNestedInput
    storeStatus?: StoreStatusUpdateManyWithoutStoreNestedInput
    missions?: MissionsUpdateManyWithoutStoreNestedInput
    locations?: LocationsUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutFoodTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
    review?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    storeStatus?: StoreStatusUncheckedUpdateManyWithoutStoreNestedInput
    missions?: MissionsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutFoodTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyStoreInput = {
    id?: number
    userId: number
    uploadedAt: Date | string
    star: number
    contents: string
  }

  export type StoreStatusCreateManyStoreInput = {
    id?: number
    reviewsCount: number
    starTotal: number
  }

  export type MissionsCreateManyStoreInput = {
    id?: number
    goal: number
    rewards: number
    expireDate: Date | string
    locationId: number
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

  export type StoreStatusUpdateWithoutStoreInput = {
    reviewsCount?: IntFieldUpdateOperationsInput | number
    starTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreStatusUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    starTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StoreStatusUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewsCount?: IntFieldUpdateOperationsInput | number
    starTotal?: FloatFieldUpdateOperationsInput | number
  }

  export type MissionsUpdateWithoutStoreInput = {
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationsUpdateOneRequiredWithoutMissionsNestedInput
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMissionsNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: IntFieldUpdateOperationsInput | number
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateManyLocationsInput = {
    id?: number
    name: string
    foodTypeId: number
    address: string
    openTime: string
    closeTime: string
  }

  export type MissionsCreateManyLocationsInput = {
    id?: number
    storeId: number
    goal: number
    rewards: number
    expireDate: Date | string
  }

  export type StoreUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateManyWithoutStoreNestedInput
    storeStatus?: StoreStatusUpdateManyWithoutStoreNestedInput
    missions?: MissionsUpdateManyWithoutStoreNestedInput
    foodType?: FoodTypeUpdateOneRequiredWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    review?: ReviewUncheckedUpdateManyWithoutStoreNestedInput
    storeStatus?: StoreStatusUncheckedUpdateManyWithoutStoreNestedInput
    missions?: MissionsUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodTypeId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
  }

  export type MissionsUpdateWithoutLocationsInput = {
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutMissionsNestedInput
    acceptedMissions?: AcceptedMissionsUpdateManyWithoutMissionsNestedInput
    completedMissions?: CompletedMissionsUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedMissions?: AcceptedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
    completedMissions?: CompletedMissionsUncheckedUpdateManyWithoutMissionsNestedInput
  }

  export type MissionsUncheckedUpdateManyWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    rewards?: IntFieldUpdateOperationsInput | number
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcceptedMissionsCreateManyMissionsInput = {
    id?: number
    userId: number
    verificationCode: string
    completedAt?: Date | string | null
  }

  export type CompletedMissionsCreateManyMissionsInput = {
    id?: number
    userId: number
    completedAt: Date | string
  }

  export type AcceptedMissionsUpdateWithoutMissionsInput = {
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MembersUpdateOneRequiredWithoutAcceptedMissionsNestedInput
  }

  export type AcceptedMissionsUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AcceptedMissionsUncheckedUpdateManyWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    verificationCode?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompletedMissionsUpdateWithoutMissionsInput = {
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MembersUpdateOneRequiredWithoutCompletedMissionsNestedInput
  }

  export type CompletedMissionsUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedMissionsUncheckedUpdateManyWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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