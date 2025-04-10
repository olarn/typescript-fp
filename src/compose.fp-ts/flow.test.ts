import { flow } from 'fp-ts/function'

type Increment = (x: number, y: number) => number
const increment: Increment = (x, y) => x + y

type ToString = (x: number) => string
const toString: ToString = x => `${x}`

describe('pipe', () => {
  it('should increment number then to string with Pipe', () => {
    const result = flow(increment, toString)
    expect(result(2, 2)).toBe('4')
  })
})