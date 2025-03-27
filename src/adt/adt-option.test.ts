import { match, matchW, none, Option, some } from "./adt-option"

describe('Pattern Matching with Option Type', () => {
  it('should match Option type to string', () => {
    const mayBeNum: Option<number> = some(10) 
    const matched = match(
      () => `number doesn't exist`,
      (x) => `${x}`
    )(mayBeNum)
    expect(matched).toEqual('10')
  })

  it('should match widen Option type to number when it is some type', () => {
    const mayBeNum: Option<number> = some(10)
    const matched = matchW(
      () => `number doesn't exist`,
      (x) => x
    )(mayBeNum)
    expect(matched).toEqual(10)
  })

  it('should match widen Option type to string when it is none type', () => {
    const mayBeNum: Option<number> = none
    const matched = matchW(
      () => `number doesn't exist`,
      (x) => x
    )(mayBeNum)
    expect(matched).toEqual(`number doesn't exist`)
  })
})