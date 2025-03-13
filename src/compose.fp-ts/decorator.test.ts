import { pipe } from 'fp-ts/lib/function'
import { api, cachedApi, encrypted } from './decorator'

describe("Playground", () => {
  it("should pipe api with cache and encrypt", () => {
    const result = pipe(
      'John',
      api
    )
    expect(result).toEqual({
      name: 'John',
      lastName: 'Doe',
      age: 30
    })
  })

  it("should pipe api with cache", () => {
    const result = pipe(
      'John',
      api,
      cachedApi
    )
    expect(result).toEqual({
      name: 'cached(John)',
      lastName: 'cached(Doe)',
      age: 30
    })
  })

  it("should pipe api with encrypt", () => {
    const result = pipe(
      'John',
      api,
      encrypted
    )
    expect(result).toEqual({
      name: 'encrypted(John)',
      lastName: 'encrypted(Doe)',
      age: 30
    })
  })

  it("should pipe api with cache and encrypt", () => {
    const result = pipe(
      'John',
      api,
      cachedApi,
      encrypted
    )
    expect(result).toEqual({
      name: 'encrypted(cached(John))',
      lastName: 'encrypted(cached(Doe))',
      age: 30
    })
  })
})
