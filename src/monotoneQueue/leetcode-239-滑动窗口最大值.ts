export function maxSlidingWindow(nums: number[], k: number): number[] {
  const q: number[] = []
  const ret: number[] = []

  nums.forEach((n, i) => {
    // 入队
    while (q.length && nums[q[q.length - 1]] <= n) q.pop()
    q.push(i)
    // 出队
    if (i - q[0] >= k) q.shift()
    if (i >= k - 1) ret.push(nums[q[0]])
  })

  return ret
}
