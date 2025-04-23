import { Group } from 'fp-ts/Group'

// Create saveGroup to detach add and invert 7% logic.
const saveGroup: Group<number> = {
  concat: (x, y) => x + (y + (y * (7 / 100))),
  empty: 0,
  inverse: (x) => x / (1 + (7 / 100))
}

interface Result {
  readonly amount: number
  readonly logs: number[]
}

type Save = (amout: number, transactions: number[]) => Result 
const save: Save = (a, t) => ({
  amount: t.reduce(
    (tx, total) => saveGroup.concat(tx, total),
     a),
  logs: t.map(tx => saveGroup.concat(0, tx))
})

type Rollback = (amount: number, logs: number[]) => Result
const rollback: Rollback = (a, l) => ({
  amount: a - l.reduce((acc, curr) => acc + curr, 0),
  logs: l.map(tx => saveGroup.inverse(tx))
})

export { save, rollback }