interface Group<A> {
  concat: (x: A, y: A) => A
  empty: A
  inverse: (x: A) => A
}

// Create saveGroup to detach add and invert 7% logic.

export { }