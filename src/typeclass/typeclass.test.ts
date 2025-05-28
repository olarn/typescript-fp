import { some, none } from "fp-ts/lib/Option"
import { left, right } from "fp-ts/lib/Either"
import {
  // liftIncrement, liftIncrement2
} from "./typeclass"

describe('Type class Functor', () => {

  const increment = (x: number) => x + 1
  
  it('should lift up then increase option number', () => {
    // expect(
    //   liftIncrement(increment)(some(12))
    // ).toEqual(some(13))
  })

  it('should get none object', () => {
    // expect(
    //   liftIncrement(increment)(none)
    // ).toEqual(none)
  })

  it('should lift up increase either number', () => {
    // expect(
    //   liftIncrement2(increment)(right(12))
    // ).toEqual(right(13))
  })

  it('should get left object', () => {
    // expect(
    //   liftIncrement2(increment)(left('error'))
    // ).toEqual(left('error'))
  })
})