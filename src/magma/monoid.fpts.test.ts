import { pipe } from "fp-ts/lib/function"
import { MonoidSum, MonoidProduct } from "fp-ts/lib/number"
import { Monoid as MonoidConcat } from "fp-ts/lib/string"
import { concatAll as foldArray } from "fp-ts/lib/NonEmptyArray"
import { getMonoid } from "fp-ts/lib/Array"

describe('Monoid', () => {
  it('should sum number with MonoidSum', () => {
    expect(pipe(
      [1, 2, 3, 4, 5],
      foldArray(MonoidSum),
    )).toBe(15)
  })

  it('should product number with MonoidProduct', () => {
    expect(pipe(
      [1, 2, 3, 4, 5],
      foldArray(MonoidProduct),
    )).toBe(120)
  })

  it('should concat string with MonoidConcat', () => {
    expect(pipe(
      ['Hello', ' ', 'World', '!'],
      foldArray(MonoidConcat),
    )).toBe('Hello World!')
  })
  it('should concat and fold 2 array', () => {
    expect(pipe(
      [[1, 2, 3], [4, 5, 6]],
      foldArray(getMonoid<number>()),
    )).toEqual([1, 2, 3, 4, 5, 6])
  })

})
