import * as O from 'fp-ts/Option'
import { identity, pipe } from 'fp-ts/function'

const divideTwo = (x: number): O.Option<number> =>
  x === 0 ? O.none : O.some(2 / x)

const divideTwoHandler = (x: number) => 
  pipe(x, divideTwo, O.match(
      () => `Cannot divide by zero`,
      (result) => `Result = ${result}`
    )
  )  

const divideTwoMatch = (x: number) => 
  pipe(x, divideTwo,
    O.match(
      () => 0,
      identity
    )
  )

const divideTwoOrElse = (x: number) => 
  pipe(
    x,
    divideTwo,
    O.getOrElse(() => 0)
  )

const divideTwoOrElseW = (x: number) => 
  pipe(
    x,
    divideTwo,
    O.getOrElseW(() => 'Cannot divide by zero')
  )

const divideTwoMatchW = (x: number) => 
  pipe(
    x,
    divideTwo,
    O.matchW(
      () => `Cannot divide by zero`,
      identity
    )
  )

const divideTwoNullable = (x: number | undefined) => pipe(
  x,
  O.fromNullable,
  O.match(
    () => 0,
    (num) => num === 0 ? O.none : 2 / num
  )
)

export {
  divideTwo,
  divideTwoHandler,
  divideTwoMatch,
  divideTwoMatchW,
  divideTwoOrElse,
  divideTwoOrElseW,
  divideTwoNullable
}