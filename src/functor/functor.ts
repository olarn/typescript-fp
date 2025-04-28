import { match, none, some, Option } from "./libs/option"

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

// Map -----------------------

type MapOption = <A, B>(f: (a: A) => B)
  => (x: Option<A>)
    => Option<B>
const mapOption: MapOption = f => match(
  () => none,
  (value) => some(f(value)) 
)

export { strLength, optStrLength, increment, optIncrement, mapOption }