import { IOEither } from "fp-ts/IOEither"
import { right, left } from "fp-ts/Either"
import { IO } from "fp-ts/IO"
import { pipe } from "fp-ts/function"
import * as ioEither from "fp-ts/IOEither"

const rightReadLine: IOEither<string, string> = () =>
  right('OK')

const leftReadLine: IOEither<string, string> = () =>
  left('Error')

const printLine = (message: string): IO<void> => () =>
  console.log(message)

const printHello: IO<void> = () =>
  printLine('Hello')

const program = pipe(
  ioEither.fromIO(printHello),
  ioEither.flatMap(() => rightReadLine),
  ioEither.map(str => `You entered: ${str}`),
  ioEither.tap(message => ioEither.fromIO(printLine(message))),
  ioEither.match(
    () => 'Error',
    (message) => message
  )
)

const program2 = pipe(
  ioEither.fromIO(printHello),
  ioEither.flatMap(() => leftReadLine),
  ioEither.map(str => `You entered: ${str}`),
  ioEither.tap(message => ioEither.fromIO(printLine(message))),
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
