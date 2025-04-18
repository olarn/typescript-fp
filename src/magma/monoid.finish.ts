import { List, match } from "./list"

interface Magma<A> {
  concat: (x: A, y: A) => A
}

interface Semigroup<A> extends Magma<A> { } 

interface Monoid<A> extends Semigroup<A> {
  readonly empty: A
}

const add: Monoid<number> = {
  empty: 0,
  concat: (x, y) => x + y
}

const multiply: Monoid<number> = {
  empty: 1,
  concat: (x, y) => x * y
}

const append: Monoid<string> = {
  empty: '',
  concat: (x, y) => x.concat(y)
}

const concatAll =
  <A>(m: Monoid<A>) =>
      (xs: List<A>): A =>
        match(
          () => m.empty,
          (head: A, tail: List<A>) => m.concat(head, concatAll(m)(tail))
        )(xs)

export { Monoid, add, multiply, append, concatAll }