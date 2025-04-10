import { flow } from 'fp-ts/function'

type Increment = (x: number) => number
const increment: Increment = x => x + 1

type ToString = (x: number) => string
const toString: ToString = x => `${x}`

describe('pipe', () => {
  it('should increment number then to string with Pipe', () => {
    const result = flow(increment, toString)
    expect(result(0)).toBe('1')
  })
})