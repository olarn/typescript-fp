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

// Start Here...

export { Option, some, none }