import { cons, nil } from "./list"
import {
  // add, multiply, append, concatAll
} from "./semigroup"

describe('Semigroups', () => {
  it('can be pass to concatAll function', () => {
    // expect(
    //   concatAll(add)(0)(cons(2, cons(3, cons(4, nil))))
    // ).toEqual(9)

    // expect(
    //   concatAll(multiply)(1)(cons(2, cons(3, cons(4, nil))))
    // ).toEqual(24)

    // expect(
    //   concatAll(append)('')(cons('hello', cons(' ', cons('world!', nil))))
    // ).toEqual(`hello world!`)
  })
})