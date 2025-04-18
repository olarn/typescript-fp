import { List, cons, nil, match, showList } from "./list"

describe('Concat with pattern matching', () => {
  it('should add all numbers', () => {
    type AddAll = (xs: List<number>) => number
    const addAll: AddAll = xs => 
      match(
        () => 0,
        (head: number, tail: List<number>) => head + addAll(tail)
      )(xs)
    expect(
      addAll(cons(2, cons(3, cons(4, nil))))
    ).toEqual(9)
  })

  it('should multiply all number', () => {
    type MultiplyAll = (xs: List<number>) => number
    const multiplyAll: MultiplyAll = xs => 
      match(
        () => 1,
        (head: number, tail: List<number>) => head * multiplyAll(tail)
      )(xs)
    expect(
      multiplyAll(cons(2, cons(3, cons(4, nil))))
    ).toEqual(24)
  })

  it('should concat all string', () => {
    type AppendAll = (xs: List<string>) => string
    const appendAll: AppendAll = xs => 
      match(
        () => '',
        (head: string, tail: List<string>) => head + ' ' + appendAll(tail)
      )(xs)
    expect(
      showList(cons('Hello', cons('World', nil)))
    ).toEqual('Hello, World')
  })

})