export function maxArea(height: number[]): number {
  let ans = 0,
    i = 0,
    j = height.length - 1

  while (i < j) {
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
    if (height[i] < height[j]) i++
    else j--
  }

  return ans
}
