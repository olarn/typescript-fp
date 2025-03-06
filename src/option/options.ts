type Compose = <A, B>(
  f: (a: B) => B,
  g: (a: A) => B
) => (a: A) => B

const compose: Compose = (f, g) => (x) => f(g(x))


export {
  // divideTwo, composed, some, none, isNone, divideTwo2, composed2
} 