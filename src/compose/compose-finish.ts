type Increment = (x: number) => number
const increment: Increment = x => x + 1

type ToString = (x: number) => string
const toString: ToString = x => `${x}`

type IncrementThenToString = (x: number) => string
const incrementThenToString: IncrementThenToString = x => toString(increment(x))

type Compose = <N, S>(
  f: (x: N) => S,
  g: (x: N) => N
) => (x: N) => S

const compose: Compose = (f, g) => (x) => f(g(x))

export { increment, toString, incrementThenToString, compose }