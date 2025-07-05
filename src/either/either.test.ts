import {
  //  divideTwoIfEven, divideTwoIfEvenFn, left, right, composed
} from "./either"

describe('Either', () => {
  it('should result if even number', () => {
    // expect(divideTwoIfEven(2)).toEqual(1)
  })

  it('should throw error if input is zero or not even', () => {
    // expect(() => divideTwoIfEven(0)).toThrow('cannot divide by zero')
    // expect(() => divideTwoIfEven(3)).toThrow('num is not even')
  })

  it('should return Either left, right', () => {
    // expect(divideTwoIfEvenFn(2)).toEqual(right(1))
    // expect(divideTwoIfEvenFn(0)).toEqual(left('cannot divide by zero'))
    // expect(divideTwoIfEvenFn(3)).toEqual(left('num is not even'))
  })

  it('should be able to compose 2 functions', () => {
    // expect(composed(2)).toEqual(right(2))
    // expect(composed(3)).toEqual(left('num is not even'))
    // expect(composed(0)).toEqual(left('cannot divide by zero'))
  })
})