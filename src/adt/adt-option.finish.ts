// Option ------------------------- 

type Option<A> = 
  | None
  | Some<A>

type None = Readonly<{
  _tag: 'none'
}>

type Some<A> = Readonly<{
  _tag: 'some'
  value: A
}>

const isNone = <A>(x: Option<A>): x is None => x._tag === 'none'
const some = <A>(x: A): Option<A> => ({ _tag: 'some', value: x })
const none: Option<never> = { _tag: 'none' }

// Pattern Matching ------------------------- 

type Match = <A, B>(onNone: () => B, onSome: (a: A) => B) =>
  (x: Option<A>) => B

const match: Match = (onNone, onSome) => x => 
  isNone(x) ? onNone() : onSome(x.value);

type MatchW = <A, B, C>(onNone: () => B, onSome: (a: A) => C) =>
  (x: Option<A>) => B | C

const matchW: MatchW = (onNone, onSome) => x => 
  isNone(x) ? onNone() : onSome(x.value);

export { Option, some, none, match, matchW }