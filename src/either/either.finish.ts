// helper from previous lab ----------------

type Compose = <A, B>(
  f: (a: B) => B,
  g: (a: A) => B
) => (a: A) => B
const compose: Compose = (f, g) => (x) => f(g(x))
const increment = (x: number): number => x + 1

// ----------------------------------

function divideTwoIfEven(num: number): number {
  if (num === 0) {
    throw 'cannot divide by zero'
  } else if (num % 2 !== 0) {
    throw 'num is not even'
  }
  return 2 / num
}

type Either<E, A> = Left<E> | Right<A>
interface Left<E> {
  _tag: 'left'
  left: E
}
interface Right<A> {
  _tag: 'right'
  right: A
}

const left = <E, A=never>(e: E): Either<E, A> => ({
  _tag: 'left', 
  left: e
})
const right = <A, E=never>(a: A): Either<E, A> => ({
  _tag: 'right',
  right: a
})

function divideTwoIfEvenFn(num: number): Either<string, number> {
  if (num === 0) {
    return left('cannot divide by zero')
  }
  if (num % 2 !== 0) {
    return left('num is not even')
  }
  return right(2 / num)
}
const isLeft = <E, A>(e: Either<E, A>): e is Left<E> => e._tag === 'left' 
const composed = compose(
  (x) => isLeft(x) ? x : right(increment(x.right)),
  divideTwoIfEvenFn
)

export { divideTwoIfEven, left, right, divideTwoIfEvenFn, composed }