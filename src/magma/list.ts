type List<A> = Nil | Cons<A>

type Nil = Readonly<{
  _tag: 'nil'
}>

type Cons<A> = Readonly<{
  _tag: 'cons'
  head: A
  tail: List<A>
}>

const nil: List<never> = { _tag: 'nil' }
const cons = <A>(head: A, tail: List<A>): List<A> => ({
  _tag: 'cons',
  head,
  tail
})

const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === 'nil'

const showList = <A>(xs: List<A>): string => 
  isNil(xs)
    ? ''
    : `${xs.head}` + `${isNil(xs.tail) ? "" : ", "}` + `${showList(xs.tail)}`

type Match = <A, B>(
  onNil: () => B,
  onCons: (head: A, tail: List<A>) => B
) => (xs: List<A>) => B

const match: Match = (onNil, onCons) => xs =>
  isNil(xs) ? onNil() : onCons(xs.head, xs.tail)

export { List, cons, nil, showList, match }