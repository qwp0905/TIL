import { FilterQuery, RegexOptions, UpdateQuery } from 'mongoose'

export interface MongoQueryBuiler<T = any> {
  add: (key: keyof T, value: any) => MongoQueryBuiler<T>
  not: (key: keyof T, value: any) => MongoQueryBuiler<T>
  gt: (key: keyof T, value: any) => MongoQueryBuiler<T>
  gte: (key: keyof T, value: any) => MongoQueryBuiler<T>
  lt: (key: keyof T, value: any) => MongoQueryBuiler<T>
  lte: (key: keyof T, value: any) => MongoQueryBuiler<T>
  exists: (key: keyof T, value: boolean | undefined) => MongoQueryBuiler<T>
  regex: (
    key: keyof T,
    pattern: RegExp | undefined,
    options?: RegexOptions | undefined
  ) => MongoQueryBuiler<T>
  in: (key: keyof T, value: Array<any> | undefined) => MongoQueryBuiler<T>
  ne: (key: keyof T, value: Array<any> | undefined) => MongoQueryBuiler<T>
  nin: (key: keyof T, value: Array<any> | undefined) => MongoQueryBuiler<T>
  or: (conditions: Array<FilterQuery<T>> | undefined) => MongoQueryBuiler<T>
  and: (conditions: Array<FilterQuery<T>> | undefined) => MongoQueryBuiler<T>
  nor: (conditions: Array<FilterQuery<T>> | undefined) => MongoQueryBuiler<T>
  build: () => FilterQuery<T>
}

export interface MongoUpdateQueryBuilder<T> {
  set: (key: keyof T, value: any) => MongoUpdateQueryBuilder<T>
  unset: (key: keyof T, value: any) => MongoUpdateQueryBuilder<T>
  build: () => UpdateQuery<T>
}

// export class MongoQueryBuider<T = any> {
//   private q: FilterQuery<T> = {}

//   public add(key: keyof T, value: any) {
//     if (!key || !value) return this
//     this.q[key] = value
//     return this
//   }

//   public in(key: keyof T, value: Array<any>) {
//     if (!key || !value || !value.length) return this
//     this.q = { ...this.q, [key]: { $in: value } }
//     return this
//   }

//   public or(conditions: Array<FilterQuery<T>>) {
//     this.q.$or = conditions
//     return this
//   }

//   public build() {
//     return this.q
//   }
// }

export const QueryBuilder = <T = any>(): MongoQueryBuiler<T> => {
  let filter_query: FilterQuery<T> = {}
  return {
    add(key: keyof T, value: any) {
      if (value === undefined || !value.length) return this
      filter_query[key] = value
      return this
    },
    not(key: keyof T, value: any) {
      if (value === undefined) return this
      filter_query = { ...filter_query, [key]: { $not: value } }
      return this
    },
    gt(key: keyof T, value: any) {
      if (value === undefined) return this
      filter_query = { ...filter_query, [key]: { $gt: value } }
      return this
    },
    gte(key: keyof T, value: any) {
      if (value === undefined) return this
      filter_query = { ...filter_query, [key]: { $gte: value } }
      return this
    },
    lt(key: keyof T, value: any) {
      if (value === undefined) return this
      filter_query = { ...filter_query, [key]: { $lt: value } }
      return this
    },
    lte(key: keyof T, value: any) {
      if (value === undefined) return this
      filter_query = { ...filter_query, [key]: { $lte: value } }
      return this
    },
    exists(key: keyof T, value: boolean | undefined) {
      if (value === undefined) return this
      filter_query = { ...filter_query, [key]: { $exists: value } }
      return this
    },
    regex(
      key: keyof T,
      pattern: RegExp | undefined,
      options?: RegexOptions | undefined
    ) {
      if (!pattern) return this
      filter_query = {
        ...filter_query,
        [key]: { $regex: pattern, $options: options }
      }
      return this
    },
    in(key: keyof T, value: Array<any> | undefined) {
      if (value === undefined || !value.length) return this
      filter_query = { ...filter_query, [key]: { $in: value } }
      return this
    },
    ne(key: keyof T, value: Array<any> | undefined) {
      if (value === undefined || !value.length) return this
      filter_query = { ...filter_query, [key]: { $ne: value } }
      return this
    },
    nin(key: keyof T, value: Array<any> | undefined) {
      if (value === undefined || !value.length) return this
      filter_query = { ...filter_query, [key]: { $nin: value } }
      return this
    },
    or(conditions: Array<FilterQuery<T>> | undefined) {
      if (conditions === undefined || !conditions.length) return this
      filter_query.$or = conditions
      return this
    },
    and(conditions: Array<FilterQuery<T>> | undefined) {
      if (conditions === undefined || !conditions.length) return this
      filter_query.$and = conditions
      return this
    },
    nor(conditions: Array<FilterQuery<T>> | undefined) {
      if (conditions === undefined || !conditions.length) return this
      filter_query.$nor = conditions
      return this
    },
    build() {
      return filter_query
    }
  }
}

export const UpdateQueryBuilder = <T = any>(): MongoUpdateQueryBuilder<T> => {
  const update_query: UpdateQuery<T> = {}
  return {
    set(key: keyof T, value: any) {
      if (value === undefined || !value.length) return this
      if (!update_query.$set) update_query.$set = {}
      update_query.$set[key] = value
      return this
    },
    unset(key: keyof T) {
      if (!update_query.$unset) update_query.$unset = {}
      update_query.$unset = { ...update_query.$unset, [key]: 1 }
      return this
    },
    build() {
      return update_query
    }
  }
}
