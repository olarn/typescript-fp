import * as O from 'fp-ts/Option'
import {
  // divideTwo,
  // divideTwoHandler,
  // divideTwoOrElse, 
  // divideTwoOrElseW,
  // divideTwoMatch,
  // divideTwoMatchW,
  // divideTwoNullable
} from './fp-options'

describe('fp-ts Option', () => {
  it('should get some or none from Option', () => {
    // expect(divideTwo(2)).toEqual(O.some(1))
    // expect(divideTwo(0)).toEqual(O.none)
  })

  it('should wrpped Option result with string', () => {
    // expect(divideTwoHandler(2)).toEqual('Result = 1')
    // expect(divideTwoHandler(0)).toEqual('Cannot divide by zero')
  })

  it('should extract value from option type', () => {
    // expect(divideTwoMatch(2)).toEqual(1)
    // expect(divideTwoMatch(0)).toEqual(0)
  })

  it('should extract value from option type', () => {
    // expect(divideTwoOrElse(2)).toEqual(1)
    // expect(divideTwoOrElse(0)).toEqual(0)
  })

  it('should get error as string, value as number', () => {
    // expect(divideTwoOrElseW(2)).toEqual(1)
    // expect(divideTwoOrElseW(0)).toEqual('Cannot divide by zero')
  })

  it('shoild return different type with matchW', () => {
    // expect(divideTwoMatchW(2)).toEqual(1)
    // expect(divideTwoMatchW(0)).toEqual('Cannot divide by zero')
  })

  it('should return 0 if x is null, else return number', () => {
    // expect(divideTwoNullable(2)).toEqual(1)
    // expect(divideTwoNullable(undefined)).toEqual(0)
  })
})