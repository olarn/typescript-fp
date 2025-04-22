import { Monoid } from "./monoid"

interface Group<A> extends Monoid<A> {
  inverse: (x: A) => A
}

// start here...