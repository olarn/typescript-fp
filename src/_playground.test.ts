import { pipe } from "fp-ts/lib/function"

describe('Playground', () => {
  it('should work', () => {
    expect(
      pipe(
        'John',
        (name) => `Hello, ${name}!`,
        (greeting) => `${greeting} How are you?`,
        (message) => `${message} I'm fine, thank you!`
      )
    ).toEqual('Hello, John! How are you? I\'m fine, thank you!')
  })
})