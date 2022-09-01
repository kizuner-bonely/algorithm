/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
  let x = -1,
    i = 0,
    y = nums.length
  while (i < y) {
    if (nums[i] === 1) i++
    else if (nums[i] < 1) {
      x++
      ;[nums[i], nums[x]] = [nums[x], nums[i]]
      i++
    } else if (nums[i] > 1) {
      y--
      ;[nums[i], nums[y]] = [nums[y], nums[i]]
    }
  }
}
