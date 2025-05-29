import { Eq } from "fp-ts/lib/Eq"
import { pipe } from "fp-ts/lib/function"
import { some } from "fp-ts/lib/Array"
import { Eq as EqNumber } from "fp-ts/lib/number"
import { Eq as EqString } from "fp-ts/lib/string"
import { struct } from "fp-ts"

const contains = <T>(eq: Eq<T>) => 
  (elem: T) =>
    (elems: T[]): boolean =>
      pipe(
        elems,
        some((x: T) => eq.equals(x, elem))
      )

const containsNumber = contains(EqNumber)
const containsString = contains(EqString)
const containsPerson = contains(<Eq<{ name: string, age: number }>>{
  equals: (a, b) =>
    EqNumber.equals(a.age, b.age) &&
    EqString.equals(a.name, b.name)
})

describe('Eq', () => {
  it('contains number', () => {
    expect(
      pipe([1, 2, 3], containsNumber(2))
    ).toBeTruthy()
  })

  it('contains string', () => {
    expect(
      pipe(['a', 'b', 'c'], containsString('b'))
    ).toBeTruthy()
  })

  it('contains person', () => {
    expect(
      pipe(
        [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }],
        containsPerson({ name: 'John', age: 30 })
      )
    ).toBeTruthy()
  })
})