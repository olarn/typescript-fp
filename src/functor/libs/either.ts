// Option ------------------------- 

type Either<E, A> = Left<E> | Right<A>

type Left<E> = Readonly<{
  _tag: 'Left'
  left: E
}>

type Right<A> = Readonly<{
  _tag: 'Right'
  right: A
}>

const left = <E, A = never>(e: E): Either<E, A> => ({
  _tag: 'Left', left: e
})

const right = <A, E = never>(a: A): Either<E, A> => ({
  _tag: 'Right', right: a
})

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> =>
  x._tag === 'Left'


// Pattern Matching ------------------------- 

type Match = <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) =>
  (x: Either<E, A>) => B
const match: Match = (onLeft, onRight) => x =>
  isLeft(x) ? onLeft(x.left) : onRight(x.right)

export { Either, left, right, isLeft, match }