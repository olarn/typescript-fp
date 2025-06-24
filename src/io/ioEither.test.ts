import { IOEither } from "fp-ts/IOEither"
import { right, left, isRight } from "fp-ts/Either"
import { IO } from "fp-ts/lib/IO"
import { pipe } from "fp-ts/lib/function"
import * as ioEither from "fp-ts/IOEither"

const rightReadLine: IOEither<string, string> = () =>
  right('OK')

const leftReadLine: IOEither<string, string> = () =>
  left('Error')

const printHello: IO<void> = () => console.log('Hello')

const printLine = (message: string): IO<string> => () => {
  console.log(message)
  return message
}

const program = pipe(
  ioEither.fromIO(printHello),
  ioEither.flatMap(() => rightReadLine),
  ioEither.map(str => `You entered: ${str}`),
  ioEither.flatMap(message => ioEither.fromIO(printLine(message))),
  ioEither.match(
    () => 'Error',
    (message) => message
  )
)

const program2 = pipe(
  ioEither.fromIO(printHello),
  ioEither.flatMap(() => leftReadLine),
  ioEither.map(str => `You entered: ${str}`),
  ioEither.flatMap(message => ioEither.fromIO(printLine(message))),
  ioEither.match(
    () => 'Error',
    (message) => message
  )
)

describe("ioEither", () => {
  it("should be able to read string from console and print it", () => {
    expect(program()).toEqual('You entered: OK')
  })

  it("should be able to read string from console", () => {
    expect(program2()).toEqual('Error')
  })
})
