import { Account, pay } from "./cart"
import * as E from 'fp-ts/Either'

describe('Payment', () => {
  const account: Account = {
    balance: 70,
    frozen: false
  }

  it('account should have enough balance to pay', () => {
    expect(pay(50)(account)).toEqual(E.right({
      balance: 20, 
      frozen: false
    }))
  })

  it('should return not enough balance', () => {
    expect(pay(90)(account)).toEqual(E.left({
      message: 'Account balance 70 is not enough for 90'
    }))
  })

  it('should return account is frozen', () => {
    const frozenAcc: Account = {
      balance: 70,
      frozen: true
    }
    expect(pay(50)(frozenAcc)).toEqual(E.left({
      message: 'Cannot pay with frozen account!'
    }))
  })
})