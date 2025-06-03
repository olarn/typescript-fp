type Increment = (x: number) => number
const increment: Increment = x => x + 1

type ToString = (x: number) => string
const toString: ToString = x => `${x}`

type IncrementThenToString = (x: number) => string
const incrementThenToString: IncrementThenToString = x => toString(increment(x))

type Compose = <N, S>(
  g: (x: N) => S,
  f: (x: N) => N
) => (x: N) => S

const compose: Compose = (g, f) => (x) => g(f(x))

export { increment, toString, incrementThenToString, compose }