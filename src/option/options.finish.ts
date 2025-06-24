type Compose = <A, B>(
  f: (a: B) => B,
  g: (a: A) => B
) => (a: A) => B

const compose: Compose = (f, g) => (x) => f(g(x))

const divideTwo = (x: number) => 2 / x
const increment = (x: number) => x + 1

const composed = compose(increment, divideTwo)

type Option<A> = Some<A> | None
interface Some<A> {
  _tag: 'Some',   // to distinguish between some and none 
  value: A
}
interface None {
  _tag: 'None'
}

const some = <A>(x: A): Option<A> => ({ _tag: 'Some', value: x })
const none: Option<never> = { _tag: 'None' }

const isNone = <A>(x: Option<A>): x is None => x._tag === 'None';

type DivideTwo2 = (x: number) => Option<number>
const divideTwo2: DivideTwo2 = (x) => x === 0 ? none : some(2 / x)

const composed2 = compose(
  (x: Option<number>) => isNone(x) ? none : some(increment(x.value)),
  divideTwo2)

export { divideTwo, composed, some, none, isNone, divideTwo2, composed2 } 