type Compose = <N, S>(
  f: (x: N) => S,
  g: (x: N) => N
) => (x: N) => S

const compose: Compose = (f, g) => (x) => f(g(x))

export { compose }