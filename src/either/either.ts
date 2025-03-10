// helper from previous lab ----------------

type Compose = <A, B>(
  f: (a: B) => B,
  g: (a: A) => B
) => (a: A) => B
const compose: Compose = (f, g) => (x) => f(g(x))
const increment = (x: number): number => x + 1

// ----------------------------------

// Start here...

export {
  // divideTwoIfEven, left, right, divideTwoIfEvenFn, composed
}