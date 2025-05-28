import { either, option } from 'fp-ts'
import { some, none } from 'fp-ts/lib/Option'
import { right, left } from 'fp-ts/lib/Either'

describe('Functor', () => {
  describe('Option', () => {
    it('should map over Some', () => {
      expect(
        option.Functor.map(some(2), (x: number) => x * 2)
      ).toEqual(some(4))
    })

    it('should map over None', () => {
      expect(
        option.Functor.map(none, (x: number) => x * 2)
      ).toEqual(none)
    })
  })

  describe('Either', () => {
    it('should map over Right', () => {
      expect(
        either.Functor.map(right(2), (x: number) => x * 2)
      ).toEqual(right(4))
    })

    it('should map over Left', () => {
      expect(
        either.Functor.map(left('error'), (x: number) => x * 2)
      ).toEqual(left('error'))
    })
  })
})