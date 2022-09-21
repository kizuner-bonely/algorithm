export function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1
  let mid: number
  while (l < r) {
    mid = (l + r) >> 1
    if (nums[mid] >= target) r = mid
    else l = mid + 1
  }
  return nums[l] < target ? nums.length : l
}
