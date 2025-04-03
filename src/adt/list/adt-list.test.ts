import {
  // Cons,
  // cons, match, nil, showList
} from './adt-list'
import { match as matchFp } from 'ts-pattern'

describe('Pattern Matching with Option Type', () => {
  it('should match list to string', () => {
    // expect(
    //   match(
    //     () => '',
    //     (xs) => showList(xs)
    //   )(cons(1, cons(2, cons(3, cons(4, nil)))))
    // ).toEqual('1, 2, 3, 4')
  })

  it('should match null list to empty string', () => {
    // expect(
    //   match(
    //     () => '',
    //     (xs) => showList(xs)
    //   )(nil)
    // ).toEqual('')
  })

  it('should match list to string with ts-pattern', () => {
    // const list = cons(1, cons(2, cons(3, cons(4, nil))))
    // expect(
    //   matchFp(list)
    //     .with({ _tag: 'nil' }, () => '')
    //     .with({ _tag: 'cons' }, (xs) => showList(xs))
    //     .exhaustive() 
    // ).toEqual('1, 2, 3, 4')
  })
})