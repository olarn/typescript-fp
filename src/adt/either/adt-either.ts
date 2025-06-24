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

// Start here...

export { Either, left, right, isLeft }
