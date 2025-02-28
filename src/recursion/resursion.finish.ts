function normal_sum_all(nums: number[]): number {
  let result: number = 0
  for (let i = 0; i < nums.length; i++) {
    result += nums[i]
  }
  return result
}

type SumAll = (xs: number[]) => number
const sumAll: SumAll = xs => {
  if (xs.length === 0) {
    return 0
  }
  const [head, ...rest] = xs
  return head + sumAll(rest)
}

const sumAll2: SumAll = xs =>
  xs.length === 0
    ? 0
    : xs[0] + sumAll2(xs.slice(1)) 

export { normal_sum_all, sumAll, sumAll2 }