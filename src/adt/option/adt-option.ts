// Option ------------------------- 

type Option<A> =
  | None
  | Some<A>

type None = Readonly<{
  _tag: 'None'
}>

type Some<A> = Readonly<{
  _tag: 'Some'
  value: A
}>

const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'
const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x })
const none: Option<never> = { _tag: 'None' }

// Pattern Matching ------------------------- 

// Start Here...

export { Option, some, none }