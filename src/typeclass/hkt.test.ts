type Kind<T> = Array<T>

interface Functor {
  map: <A, B>(f: (a: A) => B) => (fa: Kind<A>) => Kind<B>
}

const functor: Functor = {
  map: (f) => (fa) => fa.map(f)
}

describe('Functor', () => {
  it('should be able to map number[] to string[]', () => {
    expect(
      functor.map(x => `${x}`)([1, 2, 3])
    ).toEqual(
      ['1', '2', '3']
    )
  })
})
