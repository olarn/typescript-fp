import { IO } from "fp-ts/IO";
import { pipe } from "fp-ts/lib/function";
import * as io from "fp-ts/IO";

const readLine: IO<string> = () => {
  // Mock implementation for testing
  return "OK";
}

const printLine = (message: string): IO<void> => () =>
  console.log(message)

const program = pipe(
  readLine,
  io.map(str => `You entered: ${str}`),
  io.tap(message => printLine(message))
)

describe("io", () => {
  it("should be able to console log", () => {
    const result = program();
    expect(result).toEqual('You entered: OK');
  });
});