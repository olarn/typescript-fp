type Compose = <A, B, C>(
  f: (x: A) => B,
  g: (y: B) => C
) => (z: A) => C

const compose: Compose = (f, g) => (x) => g(f(x))

export { compose }