import { cons, nil } from "./list"
import {
  // add, append, concatAll, multiply
} from "./monoid"

describe('Monoids', () => {
  it('can be pass to concalAll function', () => {
    // expect(
    //   concatAll(add)(cons(2, cons(3, cons(4, nil))))
    // ).toEqual(9)

    // expect(
    //   concatAll(multiply)(cons(2, cons(3, cons(4, nil))))
    // ).toEqual(24)

    // expect(
    //   concatAll(append)(cons('hello', cons(' ', cons('world!', nil))))
    // ).toEqual('hello world!')
  })
})