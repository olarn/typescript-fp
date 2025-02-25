import { pipe } from 'fp-ts/lib/function'

type Increment = (x: number) => number
const increment: Increment = x => x + 1

type ToString = (x: number) => string
const toString: ToString = x => `${x}`

describe('pipe', () => {
  it('should increment number then to string with Pipe', () => {
    const result = pipe(0, increment, toString)
    expect(result).toBe('1')
  })
})