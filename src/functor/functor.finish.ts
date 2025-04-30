import { match, none, some, Option } from "./libs/option"
import { Either, left, right, match as matchEither } from "./libs/either"

// Option - StrLength -----------------------

type StrLength = (x: string) => number
const strLength: StrLength = (x) => x.length

type OptStrLength = (x: Option<string>) => Option<number>
const optStrLength: OptStrLength = x => match(
  () => none,
  (value: string) => some(strLength(value))
)(x)

// Option - Increment -----------------------

type Increment = (x: number) => number
const increment: Increment = x => x + 1

type OptIncrement = (x: Option<number>) => Option<number>
const optIncrement: OptIncrement = x => match(
  () => none,
  (value: number) => some(increment(value))
)(x)

// Map Option -----------------------

type MapOption = <A, B>(f: (a: A) => B)
  => (x: Option<A>)
    => Option<B>
const mapOption: MapOption = f => match(
  () => none,
  (value) => some(f(value)) 
)

// Map Either

type MapEither = <A, B, E>(f: (a: A) => B)
  => (x: Either<E, A>) => Either<E, B> 
const mapEither: MapEither = f => matchEither(
  (e) => left(e),
  (a) => right(f(a))
)

export {
  strLength, optStrLength, increment, optIncrement, mapOption, mapEither
}