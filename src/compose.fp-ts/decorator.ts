interface Customer {
  name: string;
  lastName: string;
  age: number;
}

type Api = (c: Customer) => Customer

const api: Api = c => {
  return {
    name: c.name,
    lastName: c.lastName,
    age: c.age
  }
}

const cachedApi: Api = c => {
  return {
    name: `cached(${c.name})`,
    lastName: `cached(${c.lastName})`,
    age: 30
  }
}

const encrypted: Api = c => {
  return {
    name: `encrypted(${c.name})`,
    lastName: `encrypted(${c.lastName})`,
    age: c.age
  }
}

export { Customer, api, cachedApi, encrypted }