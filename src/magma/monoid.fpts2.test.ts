import { pipe, getSemigroup } from "fp-ts/lib/function"
import { MonoidSum } from "fp-ts/lib/number"
import { concatAll } from "fp-ts/lib/NonEmptyArray"

const UnaryFuncSemiGroup = getSemigroup(MonoidSum)<number>()

const func = pipe(
  [
    (x: number) => x * 2,
    (x: number) => x * 3,
    (x: number) => x * 4,
  ],
  concatAll(UnaryFuncSemiGroup)
)

describe('Monoid', () => {
  it('should fold array of unary functions', () => {
    expect(func(12)).toBe(108)
  })
})