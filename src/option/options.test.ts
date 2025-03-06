import {
  // composed, composed2, divideTwo, divideTwo2, isNone, none, some
} from "./options"

describe('Options', () => {
  it('should divide 2 with number that not zero', () => {
    // expect(divideTwo(2)).toEqual(1)  
  })

  it('should not be able divide 2 with zero', () => {
    // expect(divideTwo(0)).toEqual(Infinity)
  })

  it('should compose divideTwo with increment', () => {
    // expect(composed(2)).toEqual(2)
    // expect(composed(0)).toEqual(Infinity)
  })

  it('should convert any type of A to Some of type A', () => {
    // expect(some(1)).toEqual({_tag: "some", value: 1})
  })

  it('should get Option of never from none function', () => {
    // expect(none).toEqual({ _tag: 'none' })
  })

  it('should tell that option is some or none', () => {
    // expect(isNone(some(1))).toBe(false)
    // expect(isNone(none)).toBe(true)
  })

  it('DivideTwo should return Some or None', () => {
    // expect(divideTwo2(2)).toEqual(some(1))
    // expect(divideTwo2(0)).toEqual(none)
  })

  it('should be able to compose with Option type', () => {
    // expect(composed2(2)).toEqual(some(2))
    // expect(composed2(0)).toEqual(none)
  })
})