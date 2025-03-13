import { pipe } from 'fp-ts/lib/function'
import { api, cachedApi, Customer, encrypted } from './decorator'

describe("Playground", () => {
  it("should work", () => {
    const cus: Customer = { name: 'John', lastName: 'Doe', age: 30 } 
    const c = pipe(
      cus,
      api,
      cachedApi,
      encrypted
    )
    expect(c).toEqual({
      name: 'encrypted(cached(John))',
      lastName: 'encrypted(cached(Doe))',
      age: 30
    })
  })
})
