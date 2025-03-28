// Option ------------------------- 

type Either<E, A> = Left<E> | Right<A>

type Left<E> = Readonly<{
  _tag: 'left'
  left: E
}>

type Right<A> = Readonly<{
  _tag: 'right'
  right: A
}>

const left = <E, A = never>(e: E): Either<E, A> => ({
  _tag: 'left', left: e
})

const right = <A, E = never > (a: A): Either<E, A> => ({
  _tag: 'right', right: a  
})

const isLeft = <E, A>(x: Either<E, A>): x is Left<E> =>
  x._tag === 'left' 

export { left, right, isLeft }

// Pattern Matching ------------------------- 