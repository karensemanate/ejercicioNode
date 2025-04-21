
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
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Gender
 * 
 */
export type Gender = $Result.DefaultSelection<Prisma.$GenderPayload>
/**
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Estado: {
  Adoptado: 'Adoptado',
  porAdoptar: 'porAdoptar'
};

export type Estado = (typeof Estado)[keyof typeof Estado]

}

export type Estado = $Enums.Estado

export const Estado: typeof $Enums.Estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Races
 * const races = await prisma.race.findMany()
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
   * // Fetch zero or more Races
   * const races = await prisma.race.findMany()
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
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gender`: Exposes CRUD operations for the **Gender** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genders
    * const genders = await prisma.gender.findMany()
    * ```
    */
  get gender(): Prisma.GenderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Race: 'Race',
    Category: 'Category',
    Gender: 'Gender',
    Pet: 'Pet',
    User: 'User'
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
      modelProps: "race" | "category" | "gender" | "pet" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Gender: {
        payload: Prisma.$GenderPayload<ExtArgs>
        fields: Prisma.GenderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findFirst: {
            args: Prisma.GenderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          findMany: {
            args: Prisma.GenderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>[]
          }
          create: {
            args: Prisma.GenderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          createMany: {
            args: Prisma.GenderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          update: {
            args: Prisma.GenderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          deleteMany: {
            args: Prisma.GenderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenderPayload>
          }
          aggregate: {
            args: Prisma.GenderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGender>
          }
          groupBy: {
            args: Prisma.GenderGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenderGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenderCountArgs<ExtArgs>
            result: $Utils.Optional<GenderCountAggregateOutputType> | number
          }
        }
      }
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
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
    race?: RaceOmit
    category?: CategoryOmit
    gender?: GenderOmit
    pet?: PetOmit
    user?: UserOmit
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
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    pets: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | RaceCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    pets: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | CategoryCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Count Type GenderCountOutputType
   */

  export type GenderCountOutputType = {
    pets: number
  }

  export type GenderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | GenderCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * GenderCountOutputType without action
   */
  export type GenderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenderCountOutputType
     */
    select?: GenderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenderCountOutputType without action
   */
  export type GenderCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | UserCountOutputTypeCountPetsArgs
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
  export type UserCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    id: number | null
  }

  export type RaceSumAggregateOutputType = {
    id: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    id?: true
  }

  export type RaceSumAggregateInputType = {
    id?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: number
    name: string
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pets?: boolean | Race$petsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>



  export type RaceSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Race$petsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
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
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Race$petsArgs<ExtArgs> = {}>(args?: Subset<T, Race$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'Int'>
    readonly name: FieldRef<"Race", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.pets
   */
  export type Race$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pets?: boolean | Category$petsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Category$petsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Category$petsArgs<ExtArgs> = {}>(args?: Subset<T, Category$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.pets
   */
  export type Category$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Gender
   */

  export type AggregateGender = {
    _count: GenderCountAggregateOutputType | null
    _avg: GenderAvgAggregateOutputType | null
    _sum: GenderSumAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  export type GenderAvgAggregateOutputType = {
    id: number | null
  }

  export type GenderSumAggregateOutputType = {
    id: number | null
  }

  export type GenderMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenderMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenderCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenderAvgAggregateInputType = {
    id?: true
  }

  export type GenderSumAggregateInputType = {
    id?: true
  }

  export type GenderMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenderMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenderCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gender to aggregate.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genders
    **/
    _count?: true | GenderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenderMaxAggregateInputType
  }

  export type GetGenderAggregateType<T extends GenderAggregateArgs> = {
        [P in keyof T & keyof AggregateGender]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGender[P]>
      : GetScalarType<T[P], AggregateGender[P]>
  }




  export type GenderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenderWhereInput
    orderBy?: GenderOrderByWithAggregationInput | GenderOrderByWithAggregationInput[]
    by: GenderScalarFieldEnum[] | GenderScalarFieldEnum
    having?: GenderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenderCountAggregateInputType | true
    _avg?: GenderAvgAggregateInputType
    _sum?: GenderSumAggregateInputType
    _min?: GenderMinAggregateInputType
    _max?: GenderMaxAggregateInputType
  }

  export type GenderGroupByOutputType = {
    id: number
    name: string
    _count: GenderCountAggregateOutputType | null
    _avg: GenderAvgAggregateOutputType | null
    _sum: GenderSumAggregateOutputType | null
    _min: GenderMinAggregateOutputType | null
    _max: GenderMaxAggregateOutputType | null
  }

  type GetGenderGroupByPayload<T extends GenderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenderGroupByOutputType[P]>
            : GetScalarType<T[P], GenderGroupByOutputType[P]>
        }
      >
    >


  export type GenderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pets?: boolean | Gender$petsArgs<ExtArgs>
    _count?: boolean | GenderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gender"]>



  export type GenderSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["gender"]>
  export type GenderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Gender$petsArgs<ExtArgs>
    _count?: boolean | GenderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gender"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["gender"]>
    composites: {}
  }

  type GenderGetPayload<S extends boolean | null | undefined | GenderDefaultArgs> = $Result.GetResult<Prisma.$GenderPayload, S>

  type GenderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenderCountAggregateInputType | true
    }

  export interface GenderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gender'], meta: { name: 'Gender' } }
    /**
     * Find zero or one Gender that matches the filter.
     * @param {GenderFindUniqueArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenderFindUniqueArgs>(args: SelectSubset<T, GenderFindUniqueArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gender that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenderFindUniqueOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenderFindUniqueOrThrowArgs>(args: SelectSubset<T, GenderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenderFindFirstArgs>(args?: SelectSubset<T, GenderFindFirstArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gender that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindFirstOrThrowArgs} args - Arguments to find a Gender
     * @example
     * // Get one Gender
     * const gender = await prisma.gender.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenderFindFirstOrThrowArgs>(args?: SelectSubset<T, GenderFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genders
     * const genders = await prisma.gender.findMany()
     * 
     * // Get first 10 Genders
     * const genders = await prisma.gender.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genderWithIdOnly = await prisma.gender.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenderFindManyArgs>(args?: SelectSubset<T, GenderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gender.
     * @param {GenderCreateArgs} args - Arguments to create a Gender.
     * @example
     * // Create one Gender
     * const Gender = await prisma.gender.create({
     *   data: {
     *     // ... data to create a Gender
     *   }
     * })
     * 
     */
    create<T extends GenderCreateArgs>(args: SelectSubset<T, GenderCreateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genders.
     * @param {GenderCreateManyArgs} args - Arguments to create many Genders.
     * @example
     * // Create many Genders
     * const gender = await prisma.gender.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenderCreateManyArgs>(args?: SelectSubset<T, GenderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gender.
     * @param {GenderDeleteArgs} args - Arguments to delete one Gender.
     * @example
     * // Delete one Gender
     * const Gender = await prisma.gender.delete({
     *   where: {
     *     // ... filter to delete one Gender
     *   }
     * })
     * 
     */
    delete<T extends GenderDeleteArgs>(args: SelectSubset<T, GenderDeleteArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gender.
     * @param {GenderUpdateArgs} args - Arguments to update one Gender.
     * @example
     * // Update one Gender
     * const gender = await prisma.gender.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenderUpdateArgs>(args: SelectSubset<T, GenderUpdateArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genders.
     * @param {GenderDeleteManyArgs} args - Arguments to filter Genders to delete.
     * @example
     * // Delete a few Genders
     * const { count } = await prisma.gender.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenderDeleteManyArgs>(args?: SelectSubset<T, GenderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genders
     * const gender = await prisma.gender.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenderUpdateManyArgs>(args: SelectSubset<T, GenderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gender.
     * @param {GenderUpsertArgs} args - Arguments to update or create a Gender.
     * @example
     * // Update or create a Gender
     * const gender = await prisma.gender.upsert({
     *   create: {
     *     // ... data to create a Gender
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gender we want to update
     *   }
     * })
     */
    upsert<T extends GenderUpsertArgs>(args: SelectSubset<T, GenderUpsertArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderCountArgs} args - Arguments to filter Genders to count.
     * @example
     * // Count the number of Genders
     * const count = await prisma.gender.count({
     *   where: {
     *     // ... the filter for the Genders we want to count
     *   }
     * })
    **/
    count<T extends GenderCountArgs>(
      args?: Subset<T, GenderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenderAggregateArgs>(args: Subset<T, GenderAggregateArgs>): Prisma.PrismaPromise<GetGenderAggregateType<T>>

    /**
     * Group by Gender.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenderGroupByArgs} args - Group by arguments.
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
      T extends GenderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenderGroupByArgs['orderBy'] }
        : { orderBy?: GenderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gender model
   */
  readonly fields: GenderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gender.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Gender$petsArgs<ExtArgs> = {}>(args?: Subset<T, Gender$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gender model
   */
  interface GenderFieldRefs {
    readonly id: FieldRef<"Gender", 'Int'>
    readonly name: FieldRef<"Gender", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gender findUnique
   */
  export type GenderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findUniqueOrThrow
   */
  export type GenderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender findFirst
   */
  export type GenderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findFirstOrThrow
   */
  export type GenderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Gender to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genders.
     */
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender findMany
   */
  export type GenderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter, which Genders to fetch.
     */
    where?: GenderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genders to fetch.
     */
    orderBy?: GenderOrderByWithRelationInput | GenderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genders.
     */
    cursor?: GenderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genders.
     */
    skip?: number
    distinct?: GenderScalarFieldEnum | GenderScalarFieldEnum[]
  }

  /**
   * Gender create
   */
  export type GenderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The data needed to create a Gender.
     */
    data: XOR<GenderCreateInput, GenderUncheckedCreateInput>
  }

  /**
   * Gender createMany
   */
  export type GenderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genders.
     */
    data: GenderCreateManyInput | GenderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gender update
   */
  export type GenderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The data needed to update a Gender.
     */
    data: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
    /**
     * Choose, which Gender to update.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender updateMany
   */
  export type GenderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genders.
     */
    data: XOR<GenderUpdateManyMutationInput, GenderUncheckedUpdateManyInput>
    /**
     * Filter which Genders to update
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to update.
     */
    limit?: number
  }

  /**
   * Gender upsert
   */
  export type GenderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * The filter to search for the Gender to update in case it exists.
     */
    where: GenderWhereUniqueInput
    /**
     * In case the Gender found by the `where` argument doesn't exist, create a new Gender with this data.
     */
    create: XOR<GenderCreateInput, GenderUncheckedCreateInput>
    /**
     * In case the Gender was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenderUpdateInput, GenderUncheckedUpdateInput>
  }

  /**
   * Gender delete
   */
  export type GenderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
    /**
     * Filter which Gender to delete.
     */
    where: GenderWhereUniqueInput
  }

  /**
   * Gender deleteMany
   */
  export type GenderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genders to delete
     */
    where?: GenderWhereInput
    /**
     * Limit how many Genders to delete.
     */
    limit?: number
  }

  /**
   * Gender.pets
   */
  export type Gender$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Gender without action
   */
  export type GenderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gender
     */
    select?: GenderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gender
     */
    omit?: GenderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenderInclude<ExtArgs> | null
  }


  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetAvgAggregateOutputType = {
    id: number | null
    raceId: number | null
    categoryId: number | null
    genderId: number | null
    user_Id: number | null
  }

  export type PetSumAggregateOutputType = {
    id: number | null
    raceId: number | null
    categoryId: number | null
    genderId: number | null
    user_Id: number | null
  }

  export type PetMinAggregateOutputType = {
    id: number | null
    name: string | null
    estado: $Enums.Estado | null
    photo: string | null
    raceId: number | null
    categoryId: number | null
    genderId: number | null
    user_Id: number | null
  }

  export type PetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    estado: $Enums.Estado | null
    photo: string | null
    raceId: number | null
    categoryId: number | null
    genderId: number | null
    user_Id: number | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    estado: number
    photo: number
    raceId: number
    categoryId: number
    genderId: number
    user_Id: number
    _all: number
  }


  export type PetAvgAggregateInputType = {
    id?: true
    raceId?: true
    categoryId?: true
    genderId?: true
    user_Id?: true
  }

  export type PetSumAggregateInputType = {
    id?: true
    raceId?: true
    categoryId?: true
    genderId?: true
    user_Id?: true
  }

  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    estado?: true
    photo?: true
    raceId?: true
    categoryId?: true
    genderId?: true
    user_Id?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    estado?: true
    photo?: true
    raceId?: true
    categoryId?: true
    genderId?: true
    user_Id?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    estado?: true
    photo?: true
    raceId?: true
    categoryId?: true
    genderId?: true
    user_Id?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _avg?: PetAvgAggregateInputType
    _sum?: PetSumAggregateInputType
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    categoryId: number
    genderId: number
    user_Id: number
    _count: PetCountAggregateOutputType | null
    _avg: PetAvgAggregateOutputType | null
    _sum: PetSumAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    estado?: boolean
    photo?: boolean
    raceId?: boolean
    categoryId?: boolean
    genderId?: boolean
    user_Id?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>



  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    estado?: boolean
    photo?: boolean
    raceId?: boolean
    categoryId?: boolean
    genderId?: boolean
    user_Id?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "estado" | "photo" | "raceId" | "categoryId" | "genderId" | "user_Id", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    gender?: boolean | GenderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      gender: Prisma.$GenderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      estado: $Enums.Estado
      photo: string
      raceId: number
      categoryId: number
      genderId: number
      user_Id: number
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gender<T extends GenderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenderDefaultArgs<ExtArgs>>): Prisma__GenderClient<$Result.GetResult<Prisma.$GenderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'Int'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly estado: FieldRef<"Pet", 'Estado'>
    readonly photo: FieldRef<"Pet", 'String'>
    readonly raceId: FieldRef<"Pet", 'Int'>
    readonly categoryId: FieldRef<"Pet", 'Int'>
    readonly genderId: FieldRef<"Pet", 'Int'>
    readonly user_Id: FieldRef<"Pet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullname: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    fullname?: boolean
    email?: boolean
    password?: boolean
    pets?: boolean | User$petsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | User$petsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      password: string
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
    pets<T extends User$petsArgs<ExtArgs> = {}>(args?: Subset<T, User$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.pets
   */
  export type User$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RaceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const GenderScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenderScalarFieldEnum = (typeof GenderScalarFieldEnum)[keyof typeof GenderScalarFieldEnum]


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    estado: 'estado',
    photo: 'photo',
    raceId: 'raceId',
    categoryId: 'categoryId',
    genderId: 'genderId',
    user_Id: 'user_Id'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const RaceOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RaceOrderByRelevanceFieldEnum = (typeof RaceOrderByRelevanceFieldEnum)[keyof typeof RaceOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const GenderOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type GenderOrderByRelevanceFieldEnum = (typeof GenderOrderByRelevanceFieldEnum)[keyof typeof GenderOrderByRelevanceFieldEnum]


  export const PetOrderByRelevanceFieldEnum: {
    name: 'name',
    photo: 'photo'
  };

  export type PetOrderByRelevanceFieldEnum = (typeof PetOrderByRelevanceFieldEnum)[keyof typeof PetOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    fullname: 'fullname',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Estado'
   */
  export type EnumEstadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Estado'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: IntFilter<"Race"> | number
    name?: StringFilter<"Race"> | string
    pets?: PetListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pets?: PetOrderByRelationAggregateInput
    _relevance?: RaceOrderByRelevanceInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    name?: StringFilter<"Race"> | string
    pets?: PetListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Race"> | number
    name?: StringWithAggregatesFilter<"Race"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    pets?: PetListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pets?: PetOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    pets?: PetListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type GenderWhereInput = {
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    id?: IntFilter<"Gender"> | number
    name?: StringFilter<"Gender"> | string
    pets?: PetListRelationFilter
  }

  export type GenderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pets?: PetOrderByRelationAggregateInput
    _relevance?: GenderOrderByRelevanceInput
  }

  export type GenderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenderWhereInput | GenderWhereInput[]
    OR?: GenderWhereInput[]
    NOT?: GenderWhereInput | GenderWhereInput[]
    name?: StringFilter<"Gender"> | string
    pets?: PetListRelationFilter
  }, "id">

  export type GenderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenderCountOrderByAggregateInput
    _avg?: GenderAvgOrderByAggregateInput
    _max?: GenderMaxOrderByAggregateInput
    _min?: GenderMinOrderByAggregateInput
    _sum?: GenderSumOrderByAggregateInput
  }

  export type GenderScalarWhereWithAggregatesInput = {
    AND?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    OR?: GenderScalarWhereWithAggregatesInput[]
    NOT?: GenderScalarWhereWithAggregatesInput | GenderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gender"> | number
    name?: StringWithAggregatesFilter<"Gender"> | string
  }

  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    estado?: EnumEstadoFilter<"Pet"> | $Enums.Estado
    photo?: StringFilter<"Pet"> | string
    raceId?: IntFilter<"Pet"> | number
    categoryId?: IntFilter<"Pet"> | number
    genderId?: IntFilter<"Pet"> | number
    user_Id?: IntFilter<"Pet"> | number
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    gender?: XOR<GenderScalarRelationFilter, GenderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    photo?: SortOrder
    raceId?: SortOrder
    categoryId?: SortOrder
    genderId?: SortOrder
    user_Id?: SortOrder
    race?: RaceOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    gender?: GenderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: PetOrderByRelevanceInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    estado?: EnumEstadoFilter<"Pet"> | $Enums.Estado
    photo?: StringFilter<"Pet"> | string
    raceId?: IntFilter<"Pet"> | number
    categoryId?: IntFilter<"Pet"> | number
    genderId?: IntFilter<"Pet"> | number
    user_Id?: IntFilter<"Pet"> | number
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    gender?: XOR<GenderScalarRelationFilter, GenderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    photo?: SortOrder
    raceId?: SortOrder
    categoryId?: SortOrder
    genderId?: SortOrder
    user_Id?: SortOrder
    _count?: PetCountOrderByAggregateInput
    _avg?: PetAvgOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
    _sum?: PetSumOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pet"> | number
    name?: StringWithAggregatesFilter<"Pet"> | string
    estado?: EnumEstadoWithAggregatesFilter<"Pet"> | $Enums.Estado
    photo?: StringWithAggregatesFilter<"Pet"> | string
    raceId?: IntWithAggregatesFilter<"Pet"> | number
    categoryId?: IntWithAggregatesFilter<"Pet"> | number
    genderId?: IntWithAggregatesFilter<"Pet"> | number
    user_Id?: IntWithAggregatesFilter<"Pet"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pets?: PetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pets?: PetOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pets?: PetListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type RaceCreateInput = {
    name: string
    pets?: PetCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: number
    name: string
    pets?: PetUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: number
    name: string
  }

  export type RaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    name: string
    pets?: PetCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    pets?: PetUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenderCreateInput = {
    name: string
    pets?: PetCreateNestedManyWithoutGenderInput
  }

  export type GenderUncheckedCreateInput = {
    id?: number
    name: string
    pets?: PetUncheckedCreateNestedManyWithoutGenderInput
  }

  export type GenderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetUpdateManyWithoutGenderNestedInput
  }

  export type GenderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pets?: PetUncheckedUpdateManyWithoutGenderNestedInput
  }

  export type GenderCreateManyInput = {
    id?: number
    name: string
  }

  export type GenderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PetCreateInput = {
    name: string
    estado: $Enums.Estado
    photo: string
    race: RaceCreateNestedOneWithoutPetsInput
    category: CategoryCreateNestedOneWithoutPetsInput
    gender: GenderCreateNestedOneWithoutPetsInput
    user: UserCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    categoryId: number
    genderId: number
    user_Id: number
  }

  export type PetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutPetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutPetsNestedInput
    gender?: GenderUpdateOneRequiredWithoutPetsNestedInput
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type PetCreateManyInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    categoryId: number
    genderId: number
    user_Id: number
  }

  export type PetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
  }

  export type PetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    fullname: string
    email: string
    password: string
    pets?: PetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    password: string
    pets?: PetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pets?: PetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pets?: PetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullname: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
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

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceOrderByRelevanceInput = {
    fields: RaceOrderByRelevanceFieldEnum | RaceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
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

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenderOrderByRelevanceInput = {
    fields: GenderOrderByRelevanceFieldEnum | GenderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type GenderScalarRelationFilter = {
    is?: GenderWhereInput
    isNot?: GenderWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PetOrderByRelevanceInput = {
    fields: PetOrderByRelevanceFieldEnum | PetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    photo?: SortOrder
    raceId?: SortOrder
    categoryId?: SortOrder
    genderId?: SortOrder
    user_Id?: SortOrder
  }

  export type PetAvgOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    categoryId?: SortOrder
    genderId?: SortOrder
    user_Id?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    photo?: SortOrder
    raceId?: SortOrder
    categoryId?: SortOrder
    genderId?: SortOrder
    user_Id?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    estado?: SortOrder
    photo?: SortOrder
    raceId?: SortOrder
    categoryId?: SortOrder
    genderId?: SortOrder
    user_Id?: SortOrder
  }

  export type PetSumOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    categoryId?: SortOrder
    genderId?: SortOrder
    user_Id?: SortOrder
  }

  export type EnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PetCreateNestedManyWithoutRaceInput = {
    create?: XOR<PetCreateWithoutRaceInput, PetUncheckedCreateWithoutRaceInput> | PetCreateWithoutRaceInput[] | PetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PetCreateOrConnectWithoutRaceInput | PetCreateOrConnectWithoutRaceInput[]
    createMany?: PetCreateManyRaceInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<PetCreateWithoutRaceInput, PetUncheckedCreateWithoutRaceInput> | PetCreateWithoutRaceInput[] | PetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PetCreateOrConnectWithoutRaceInput | PetCreateOrConnectWithoutRaceInput[]
    createMany?: PetCreateManyRaceInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PetUpdateManyWithoutRaceNestedInput = {
    create?: XOR<PetCreateWithoutRaceInput, PetUncheckedCreateWithoutRaceInput> | PetCreateWithoutRaceInput[] | PetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PetCreateOrConnectWithoutRaceInput | PetCreateOrConnectWithoutRaceInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutRaceInput | PetUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: PetCreateManyRaceInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutRaceInput | PetUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: PetUpdateManyWithWhereWithoutRaceInput | PetUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PetUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<PetCreateWithoutRaceInput, PetUncheckedCreateWithoutRaceInput> | PetCreateWithoutRaceInput[] | PetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PetCreateOrConnectWithoutRaceInput | PetCreateOrConnectWithoutRaceInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutRaceInput | PetUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: PetCreateManyRaceInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutRaceInput | PetUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: PetUpdateManyWithWhereWithoutRaceInput | PetUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PetCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PetCreateWithoutCategoryInput, PetUncheckedCreateWithoutCategoryInput> | PetCreateWithoutCategoryInput[] | PetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCategoryInput | PetCreateOrConnectWithoutCategoryInput[]
    createMany?: PetCreateManyCategoryInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PetCreateWithoutCategoryInput, PetUncheckedCreateWithoutCategoryInput> | PetCreateWithoutCategoryInput[] | PetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCategoryInput | PetCreateOrConnectWithoutCategoryInput[]
    createMany?: PetCreateManyCategoryInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PetCreateWithoutCategoryInput, PetUncheckedCreateWithoutCategoryInput> | PetCreateWithoutCategoryInput[] | PetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCategoryInput | PetCreateOrConnectWithoutCategoryInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutCategoryInput | PetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PetCreateManyCategoryInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutCategoryInput | PetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PetUpdateManyWithWhereWithoutCategoryInput | PetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PetCreateWithoutCategoryInput, PetUncheckedCreateWithoutCategoryInput> | PetCreateWithoutCategoryInput[] | PetUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PetCreateOrConnectWithoutCategoryInput | PetCreateOrConnectWithoutCategoryInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutCategoryInput | PetUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PetCreateManyCategoryInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutCategoryInput | PetUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PetUpdateManyWithWhereWithoutCategoryInput | PetUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PetCreateNestedManyWithoutGenderInput = {
    create?: XOR<PetCreateWithoutGenderInput, PetUncheckedCreateWithoutGenderInput> | PetCreateWithoutGenderInput[] | PetUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetCreateOrConnectWithoutGenderInput | PetCreateOrConnectWithoutGenderInput[]
    createMany?: PetCreateManyGenderInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutGenderInput = {
    create?: XOR<PetCreateWithoutGenderInput, PetUncheckedCreateWithoutGenderInput> | PetCreateWithoutGenderInput[] | PetUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetCreateOrConnectWithoutGenderInput | PetCreateOrConnectWithoutGenderInput[]
    createMany?: PetCreateManyGenderInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUpdateManyWithoutGenderNestedInput = {
    create?: XOR<PetCreateWithoutGenderInput, PetUncheckedCreateWithoutGenderInput> | PetCreateWithoutGenderInput[] | PetUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetCreateOrConnectWithoutGenderInput | PetCreateOrConnectWithoutGenderInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutGenderInput | PetUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: PetCreateManyGenderInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutGenderInput | PetUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: PetUpdateManyWithWhereWithoutGenderInput | PetUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutGenderNestedInput = {
    create?: XOR<PetCreateWithoutGenderInput, PetUncheckedCreateWithoutGenderInput> | PetCreateWithoutGenderInput[] | PetUncheckedCreateWithoutGenderInput[]
    connectOrCreate?: PetCreateOrConnectWithoutGenderInput | PetCreateOrConnectWithoutGenderInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutGenderInput | PetUpsertWithWhereUniqueWithoutGenderInput[]
    createMany?: PetCreateManyGenderInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutGenderInput | PetUpdateWithWhereUniqueWithoutGenderInput[]
    updateMany?: PetUpdateManyWithWhereWithoutGenderInput | PetUpdateManyWithWhereWithoutGenderInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type RaceCreateNestedOneWithoutPetsInput = {
    create?: XOR<RaceCreateWithoutPetsInput, RaceUncheckedCreateWithoutPetsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutPetsInput
    connect?: RaceWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPetsInput = {
    create?: XOR<CategoryCreateWithoutPetsInput, CategoryUncheckedCreateWithoutPetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPetsInput
    connect?: CategoryWhereUniqueInput
  }

  export type GenderCreateNestedOneWithoutPetsInput = {
    create?: XOR<GenderCreateWithoutPetsInput, GenderUncheckedCreateWithoutPetsInput>
    connectOrCreate?: GenderCreateOrConnectWithoutPetsInput
    connect?: GenderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPetsInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEstadoFieldUpdateOperationsInput = {
    set?: $Enums.Estado
  }

  export type RaceUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<RaceCreateWithoutPetsInput, RaceUncheckedCreateWithoutPetsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutPetsInput
    upsert?: RaceUpsertWithoutPetsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutPetsInput, RaceUpdateWithoutPetsInput>, RaceUncheckedUpdateWithoutPetsInput>
  }

  export type CategoryUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<CategoryCreateWithoutPetsInput, CategoryUncheckedCreateWithoutPetsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPetsInput
    upsert?: CategoryUpsertWithoutPetsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPetsInput, CategoryUpdateWithoutPetsInput>, CategoryUncheckedUpdateWithoutPetsInput>
  }

  export type GenderUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<GenderCreateWithoutPetsInput, GenderUncheckedCreateWithoutPetsInput>
    connectOrCreate?: GenderCreateOrConnectWithoutPetsInput
    upsert?: GenderUpsertWithoutPetsInput
    connect?: GenderWhereUniqueInput
    update?: XOR<XOR<GenderUpdateToOneWithWhereWithoutPetsInput, GenderUpdateWithoutPetsInput>, GenderUncheckedUpdateWithoutPetsInput>
  }

  export type UserUpdateOneRequiredWithoutPetsNestedInput = {
    create?: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPetsInput
    upsert?: UserUpsertWithoutPetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPetsInput, UserUpdateWithoutPetsInput>, UserUncheckedUpdateWithoutPetsInput>
  }

  export type PetCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput> | PetCreateWithoutUserInput[] | PetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PetCreateOrConnectWithoutUserInput | PetCreateOrConnectWithoutUserInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutUserInput | PetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PetCreateManyUserInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutUserInput | PetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PetUpdateManyWithWhereWithoutUserInput | PetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
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

  export type NestedEnumEstadoFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoFilter<$PrismaModel> | $Enums.Estado
  }

  export type NestedEnumEstadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Estado | EnumEstadoFieldRefInput<$PrismaModel>
    in?: $Enums.Estado[]
    notIn?: $Enums.Estado[]
    not?: NestedEnumEstadoWithAggregatesFilter<$PrismaModel> | $Enums.Estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoFilter<$PrismaModel>
    _max?: NestedEnumEstadoFilter<$PrismaModel>
  }

  export type PetCreateWithoutRaceInput = {
    name: string
    estado: $Enums.Estado
    photo: string
    category: CategoryCreateNestedOneWithoutPetsInput
    gender: GenderCreateNestedOneWithoutPetsInput
    user: UserCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutRaceInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    categoryId: number
    genderId: number
    user_Id: number
  }

  export type PetCreateOrConnectWithoutRaceInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutRaceInput, PetUncheckedCreateWithoutRaceInput>
  }

  export type PetCreateManyRaceInputEnvelope = {
    data: PetCreateManyRaceInput | PetCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutRaceInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutRaceInput, PetUncheckedUpdateWithoutRaceInput>
    create: XOR<PetCreateWithoutRaceInput, PetUncheckedCreateWithoutRaceInput>
  }

  export type PetUpdateWithWhereUniqueWithoutRaceInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutRaceInput, PetUncheckedUpdateWithoutRaceInput>
  }

  export type PetUpdateManyWithWhereWithoutRaceInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutRaceInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: IntFilter<"Pet"> | number
    name?: StringFilter<"Pet"> | string
    estado?: EnumEstadoFilter<"Pet"> | $Enums.Estado
    photo?: StringFilter<"Pet"> | string
    raceId?: IntFilter<"Pet"> | number
    categoryId?: IntFilter<"Pet"> | number
    genderId?: IntFilter<"Pet"> | number
    user_Id?: IntFilter<"Pet"> | number
  }

  export type PetCreateWithoutCategoryInput = {
    name: string
    estado: $Enums.Estado
    photo: string
    race: RaceCreateNestedOneWithoutPetsInput
    gender: GenderCreateNestedOneWithoutPetsInput
    user: UserCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    genderId: number
    user_Id: number
  }

  export type PetCreateOrConnectWithoutCategoryInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutCategoryInput, PetUncheckedCreateWithoutCategoryInput>
  }

  export type PetCreateManyCategoryInputEnvelope = {
    data: PetCreateManyCategoryInput | PetCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutCategoryInput, PetUncheckedUpdateWithoutCategoryInput>
    create: XOR<PetCreateWithoutCategoryInput, PetUncheckedCreateWithoutCategoryInput>
  }

  export type PetUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutCategoryInput, PetUncheckedUpdateWithoutCategoryInput>
  }

  export type PetUpdateManyWithWhereWithoutCategoryInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PetCreateWithoutGenderInput = {
    name: string
    estado: $Enums.Estado
    photo: string
    race: RaceCreateNestedOneWithoutPetsInput
    category: CategoryCreateNestedOneWithoutPetsInput
    user: UserCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutGenderInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    categoryId: number
    user_Id: number
  }

  export type PetCreateOrConnectWithoutGenderInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutGenderInput, PetUncheckedCreateWithoutGenderInput>
  }

  export type PetCreateManyGenderInputEnvelope = {
    data: PetCreateManyGenderInput | PetCreateManyGenderInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutGenderInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutGenderInput, PetUncheckedUpdateWithoutGenderInput>
    create: XOR<PetCreateWithoutGenderInput, PetUncheckedCreateWithoutGenderInput>
  }

  export type PetUpdateWithWhereUniqueWithoutGenderInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutGenderInput, PetUncheckedUpdateWithoutGenderInput>
  }

  export type PetUpdateManyWithWhereWithoutGenderInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutGenderInput>
  }

  export type RaceCreateWithoutPetsInput = {
    name: string
  }

  export type RaceUncheckedCreateWithoutPetsInput = {
    id?: number
    name: string
  }

  export type RaceCreateOrConnectWithoutPetsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutPetsInput, RaceUncheckedCreateWithoutPetsInput>
  }

  export type CategoryCreateWithoutPetsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutPetsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutPetsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPetsInput, CategoryUncheckedCreateWithoutPetsInput>
  }

  export type GenderCreateWithoutPetsInput = {
    name: string
  }

  export type GenderUncheckedCreateWithoutPetsInput = {
    id?: number
    name: string
  }

  export type GenderCreateOrConnectWithoutPetsInput = {
    where: GenderWhereUniqueInput
    create: XOR<GenderCreateWithoutPetsInput, GenderUncheckedCreateWithoutPetsInput>
  }

  export type UserCreateWithoutPetsInput = {
    fullname: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutPetsInput = {
    id?: number
    fullname: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutPetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
  }

  export type RaceUpsertWithoutPetsInput = {
    update: XOR<RaceUpdateWithoutPetsInput, RaceUncheckedUpdateWithoutPetsInput>
    create: XOR<RaceCreateWithoutPetsInput, RaceUncheckedCreateWithoutPetsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutPetsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutPetsInput, RaceUncheckedUpdateWithoutPetsInput>
  }

  export type RaceUpdateWithoutPetsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RaceUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutPetsInput = {
    update: XOR<CategoryUpdateWithoutPetsInput, CategoryUncheckedUpdateWithoutPetsInput>
    create: XOR<CategoryCreateWithoutPetsInput, CategoryUncheckedCreateWithoutPetsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPetsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPetsInput, CategoryUncheckedUpdateWithoutPetsInput>
  }

  export type CategoryUpdateWithoutPetsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenderUpsertWithoutPetsInput = {
    update: XOR<GenderUpdateWithoutPetsInput, GenderUncheckedUpdateWithoutPetsInput>
    create: XOR<GenderCreateWithoutPetsInput, GenderUncheckedCreateWithoutPetsInput>
    where?: GenderWhereInput
  }

  export type GenderUpdateToOneWithWhereWithoutPetsInput = {
    where?: GenderWhereInput
    data: XOR<GenderUpdateWithoutPetsInput, GenderUncheckedUpdateWithoutPetsInput>
  }

  export type GenderUpdateWithoutPetsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenderUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutPetsInput = {
    update: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
    create: XOR<UserCreateWithoutPetsInput, UserUncheckedCreateWithoutPetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPetsInput, UserUncheckedUpdateWithoutPetsInput>
  }

  export type UserUpdateWithoutPetsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutPetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PetCreateWithoutUserInput = {
    name: string
    estado: $Enums.Estado
    photo: string
    race: RaceCreateNestedOneWithoutPetsInput
    category: CategoryCreateNestedOneWithoutPetsInput
    gender: GenderCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    categoryId: number
    genderId: number
  }

  export type PetCreateOrConnectWithoutUserInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetCreateManyUserInputEnvelope = {
    data: PetCreateManyUserInput | PetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
    create: XOR<PetCreateWithoutUserInput, PetUncheckedCreateWithoutUserInput>
  }

  export type PetUpdateWithWhereUniqueWithoutUserInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutUserInput, PetUncheckedUpdateWithoutUserInput>
  }

  export type PetUpdateManyWithWhereWithoutUserInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutUserInput>
  }

  export type PetCreateManyRaceInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    categoryId: number
    genderId: number
    user_Id: number
  }

  export type PetUpdateWithoutRaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutPetsNestedInput
    gender?: GenderUpdateOneRequiredWithoutPetsNestedInput
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type PetUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type PetCreateManyCategoryInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    genderId: number
    user_Id: number
  }

  export type PetUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutPetsNestedInput
    gender?: GenderUpdateOneRequiredWithoutPetsNestedInput
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type PetUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type PetCreateManyGenderInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    categoryId: number
    user_Id: number
  }

  export type PetUpdateWithoutGenderInput = {
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutPetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutPetsNestedInput
    user?: UserUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutGenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type PetUncheckedUpdateManyWithoutGenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    user_Id?: IntFieldUpdateOperationsInput | number
  }

  export type PetCreateManyUserInput = {
    id?: number
    name: string
    estado: $Enums.Estado
    photo: string
    raceId: number
    categoryId: number
    genderId: number
  }

  export type PetUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    race?: RaceUpdateOneRequiredWithoutPetsNestedInput
    category?: CategoryUpdateOneRequiredWithoutPetsNestedInput
    gender?: GenderUpdateOneRequiredWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
  }

  export type PetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    estado?: EnumEstadoFieldUpdateOperationsInput | $Enums.Estado
    photo?: StringFieldUpdateOperationsInput | string
    raceId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    genderId?: IntFieldUpdateOperationsInput | number
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