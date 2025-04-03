import {
  // cons, match, nil, showList
} from './adt-list'

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
})