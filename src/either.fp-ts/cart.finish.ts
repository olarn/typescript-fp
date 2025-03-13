import * as E from 'fp-ts/Either'
import { pipe } from "fp-ts/lib/function"

type Account = Readonly<{
  balance: number
  frozen: boolean
}>

type AccountError = Readonly<{
  message: string
}>

const enoughBalance = (amount: number) =>
  (account: Account): E.Either<AccountError, Account> => 
    account.balance < amount 
      ? E.left({ message: `Account balance ${account.balance} is not enough for ${amount}` })
      : E.right(account)

const accountIsNotFrozen = (account: Account): E.Either<AccountError, Account> => 
  account.frozen 
    ? E.left({ message: 'Cannot pay with frozen account!'})
    : E.right(account)

const pay =
  (amount: number) =>
    (account: Account) =>
      pipe(
        account,
        accountIsNotFrozen,
        E.flatMap(enoughBalance(amount)),
        E.map(acc => ({ ...acc, balance: acc.balance - amount }))
      )

export { Account, pay }