import {
  normal_sum_all,
//  sumAll,
//  sumAll2
} from "./resursion"

describe('Recusion', () => {
  it('should sum all number correctly.', () => {
    expect(normal_sum_all([1,2,3,4])).toEqual(10)
  })

  it('should sum all number with imperative function correctly.', () => {
    // expect(sumAll([1,2,3,4])).toEqual(10)
  })

  it('should sum all number with functional correctly.', () => {
    // expect(sumAll2([1,2,3,4])).toEqual(10)
  })
})