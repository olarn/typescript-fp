import { pipe } from 'fp-ts/lib/function'

interface Customer {
  name: string;
  lastName: string;
  age: number;
}

type Api = (c: Customer) => Customer

const api: Api = c => {
  return {
    name: 'John',
    lastName: 'Doe',
    age: 30
  }
}

const cachedApi: Api = (c: Customer) => {
  return {
    name: 'cached(John)',
    lastName: 'cached(Doe)',
    age: 30
  }
}

const encrypted: Api = (c: Customer) => {
  return {
    name: `encrypted(${c.name})`,
    lastName: `encrypted(${c.lastName})`,
    age: c.age
  }
}

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
