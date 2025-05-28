import { Option, some, none, match as optionMatch } from 'fp-ts/lib/Option'
import { Either, left, right, match as eitherMatch } from 'fp-ts/lib/Either'
import { HKT, Kind, Kind2, URIS, URIS2 } from 'fp-ts/HKT'

interface Functor<F> {
  URI: F
  map: <A,B>(f: (x:A)=>B) => (fa: HKT<F, A>) => HKT<F, B> 
}

interface Functor1<F extends URIS> {
  URI: F
  map: <A,B>(f: (x:A)=>B) => (fa: Kind<F, A>) => Kind<F, B> 
}

interface Functor2<F extends URIS2> {
  URI: F
  map: <E, A, B>(f: (x:A)=>B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}

const optionFunctor: Functor1<'Option'> = {
  URI: 'Option',
  map: f => optionMatch(
    () => none,
    (a) => some(f(a))
  )
}

const eitherFunctor: Functor2<'Either'> = {
  URI: 'Either',
  map: f => eitherMatch(
    (e) => left(e),
    (a) => right(f(a))
  )
}

function lift<F extends URIS2>(F: Functor2<F>): <E,A,B>(f: (x:A)=>B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
function lift<F extends URIS>(F: Functor1<F>): <A,B>(f: (x:A)=>B) => (fa: Kind<F, A>) => Kind<F, B>
function lift<F>(F: Functor<F>): <A,B>(f: (x:A)=>B) => (fa: HKT<F, A>) => HKT<F, B> {
  return f => fa => F.map(f)(fa)
}

export const liftIncrement = lift(optionFunctor)
export const liftIncrement2 = lift(eitherFunctor)