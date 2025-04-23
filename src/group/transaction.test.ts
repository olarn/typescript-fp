import {
//  save, rollback 
} from './transaction'

describe('Saving Acount with Group', () => {
  const currentBalance = 1000
  const transactions = [100, 200, 300]
  
  const newBalance = 1642
  const logs = [107, 214, 321]

  it('should save to balance', () => {
    // expect(
    //   save(currentBalance, transactions)
    // ).toEqual({
    //   amount: newBalance,
    //   logs: logs
    // })
  })

  it('should rollback to previous balance', () => {
    // expect(
    //   rollback(newBalance, logs)
    // ).toEqual({
    //   amount: currentBalance,
    //   logs: transactions
    // })
  })
})
