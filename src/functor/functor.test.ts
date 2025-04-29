import { none, some } from "./libs/option"
import { increment, mapOption, optIncrement, optStrLength, strLength } from "./functor"
import { compose } from "./libs/compose"

describe('Functor', () => {
  it('Option - StrLength', () => {
    expect(strLength(`abcd`)).toEqual(4)
    expect(optStrLength(some(`abcd`))).toEqual(some(4))
    expect(optStrLength(none)).toEqual(none)
  })

  it('Option - Increment', () => {
    expect(increment(4)).toEqual(5)
    expect(optIncrement(some(4))).toEqual(some(5))
    expect(optIncrement(none)).toEqual(none)
  })

  it('Map Option - StrLength & Increment', () => {
    expect(
      mapOption(strLength)(some(`abcd`))
    ).toEqual(some(4))

    expect(
      mapOption(increment)(some(4))
    ).toEqual(some(5))

    expect(mapOption(strLength)(none)).toEqual(none)
  })

  it('should get the same result from compose then map and vise versa', () => {
    expect(
      compose(
        mapOption(strLength),
        mapOption(increment)
      )(some(`abcd`))
    ).toEqual(
      mapOption(
        compose(strLength, increment)
      )(some(`abcd`))
    )
  })
})