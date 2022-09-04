export function maxSlidingWindow(nums: number[], k: number): number[] {
  const ans: number[] = [],
    ind: number[] = []

  for (let i = 0; i < nums.length; i++) {
    while (ind.length && nums[ind[ind.length - 1]] < nums[i]) ind.pop()
    ind.push(i)
    if (i < k - 1) continue
    if (i - ind[0] === k) ind.shift()
    ans.push(nums[ind[0]])
  }

  return ans
}
