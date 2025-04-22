interface Magma<A> {
  concat: (x: A, y: A) => A
}

interface Semigroup<A> extends Magma<A> { 
} 

interface Monoid<A> extends Semigroup<A> {
  readonly empty: A
}

export { Monoid }