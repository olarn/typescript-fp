import { doubleList } from "./compose"

describe('Functor Composition', () => {
  it('should double numbers in an array that wrapped in an Option', () => {
    expect(
      doubleList([1, 2, 3])
    ).toEqual(
      [2, 4, 6])
  })
})