export function minOperations(nums: number[], x: number): number {
  const fsum = [0],
    bsum = [0]
  for (let i = 0; i < nums.length; i++) fsum.push(nums[i] + fsum[i])
  for (let i = nums.length - 1, j = 0; i >= 0; i--, j++)
    bsum.push(bsum[j] + nums[i])

  let ans = -1,
    temp: number
  for (let i = 0; i < fsum.length; i++) {
    temp = binarySearch(bsum, x - fsum[i])
    if (temp === -1) continue
    if (temp + i > nums.length) continue
    ans = ans === -1 ? i + temp : Math.min(ans, i + temp)
  }
  return ans
}

function binarySearch(sum: number[], target: number) {
  let l = 0,
    r = sum.length - 1,
    mid: number
  while (r - l > 3) {
    mid = (l + r) >> 1
    if (sum[mid] === target) return mid
    if (sum[mid] > target) r = mid - 1
    else l = mid + 1
  }
  for (let i = l; i <= r; i++) {
    if (sum[i] === target) return i
  }
  return -1
}
