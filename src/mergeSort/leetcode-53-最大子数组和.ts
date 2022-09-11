export function maxSubArray(nums: number[]): number {
  const sums = [0]
  nums.forEach((n, i) => sums.push(n + sums[i]))
  let ans = sums[1],
    pre = sums[0]

  for (let i = 1; i < sums.length; i++) {
    ans = Math.max(ans, sums[i] - pre)
    pre = Math.min(pre, sums[i])
  }

  return ans
}
