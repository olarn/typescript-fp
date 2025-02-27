// Sum example

function normalSum(a: number, b: number): number {
  return a + b
}

function sum(a: number) {
  return function (b: number) {
    return a + b
  }
}

type CurryingSum = (a: number) => (b: number) => number
const curryingSum: CurryingSum = a => b => a + b 

// Increment & Decrement with Currying

type Increment = (x: number) => number
const increment: Increment = sum(1)

type Decrement = (x: number) => number
const decrement: Decrement = sum(-1)

// type GenericCurrying = (f: (a: number, b: number) => number)
//   => (a: number)
//     => (b: number)
//       => number
type GenericCurrying = <A, B, Z>(f: (a: A, b: B) => Z)
  => (a: A)
    => (b: B)
      => Z
const genericCurrying: GenericCurrying = f => a => b => f(a, b)

export { normalSum, sum, curryingSum, increment, decrement, genericCurrying }