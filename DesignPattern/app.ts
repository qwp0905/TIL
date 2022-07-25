import {
  MongoQueryBuiler,
  QueryBuilder,
  UpdateQueryBuilder
} from './patterns/mongoose'

interface ABC {
  a: string
  b: string
  c: number
}
const d = [1, 2, 3]

// const query = new MongoQueryBuider<Sibal>()
//   .add('a', '123123')
//   .in('c', [123123])
//   .add('b', '')
//   .or(
//     d.map((e) => {
//       return new MongoQueryBuider<Sibal>().add('a', e).build()
//     })
//   )
//   .build()
// console.log(query)

const query = QueryBuilder<ABC>().in('a', [123123123123123, 1231231]).build()
