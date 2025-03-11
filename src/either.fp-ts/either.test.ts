import { pipe } from 'fp-ts/function'
import * as E from 'fp-ts/Either'

const increment = (x: number) => x + 1
const divideTwo = (x: number): E.Either<string, number> => 
  x === 0
    ? E.left('cannot divide by zero')
    : x % 2 !== 0
      ? E.left('number must be even')
      : E.right(x)

const composed = (x: number) => pipe(
  x,
  divideTwo,
  E.matchW(
    (e) => e,
    (a) => increment(a)
  )
)

describe("Playground", () => {
  it("should work", () => {
    expect(composed(2)).toEqual(3)
    expect(composed(0)).toEqual('cannot divide by zero')
    expect(composed(3)).toEqual('number must be even')
  })
})
