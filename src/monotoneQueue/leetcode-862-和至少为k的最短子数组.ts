export function shortestSubarray(nums: number[], k: number): number {
  const sums = [0]
  const q = [0]
  nums.forEach((n, i) => sums.push(n + sums[i]))
  let ans = -1,
    pos = -1

  for (let i = 1; i < sums.length; i++) {
    // 入队
    while (q.length && sums[i] < sums[q[q.length - 1]]) q.pop()
    q.push(i)
    // 出队
    while (q.length && sums[i] - sums[q[0]] >= k) pos = q.shift()!
    if (pos > -1 && (ans === -1 || i - pos < ans)) ans = i - pos
  }

  return ans
}
