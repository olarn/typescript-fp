import { List, match } from "./list"

interface Magma<A> {
  concat: (x: A, y: A) => A
}

interface Semigroup<A> extends Magma<A> { } 

const add: Semigroup<number> = { concat: (x, y) => x + y }
const multiply: Semigroup<number> = { concat: (x, y) => x * y }
const append: Semigroup<string> = { concat: (x, y) => x.concat(y) }

const concatAll =
  <A>(s: Semigroup<A>) => 
    (startsWith: A) => 
      (xs: List<A>): A =>
        match(
          () => startsWith,
          (head: A, tail: List<A>) => s.concat(head, concatAll(s)(startsWith)(tail)) 
        )(xs)

export { add, multiply, append, concatAll }