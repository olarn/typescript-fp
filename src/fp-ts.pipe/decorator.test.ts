import { pipe } from 'fp-ts/lib/function'
import { api, cachedApi, encrypted } from './decorator'

describe("Playground", () => {
  it("should work", () => {
    const c = pipe({ name: '', lastName: '', age: 0 },
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
