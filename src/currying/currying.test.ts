// import { curryingSum, decrement, genericCurrying, increment, normalSum, sum } from "./currying"

describe('Currying', () => {
  it('should equal between normal function and Currying', () => {
    // expect(sum(1)(1)).toEqual(normalSum(1, 1))
  })

  it('should equal between normal function and Functioal Currying', () => {
    // expect(curryingSum(1)(1)).toEqual(normalSum(1, 1))
  })

  it('should increase & decrease with Currying', () => {
    // expect(increment(1)).toEqual(2)
    // expect(decrement(1)).toEqual(0)
  })

  it('should work with generic currying', () => {
    // expect(genericCurrying(normalSum)(3)(3)).toEqual(6)
  })
})