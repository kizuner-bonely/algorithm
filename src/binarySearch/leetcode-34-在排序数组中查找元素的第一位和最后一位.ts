export function searchRange(nums: number[], target: number): number[] {
  const first = binarySearch(nums, target)
  if (first === nums.length || nums[first] !== target) return [-1, -1]
  const second = binarySearch(nums, target + 1)
  return [first, second - 1]
}

function binarySearch(nums: number[], target: number) {
  let l = 0,
    r = nums.length - 1,
    mid: number
  while (l < r) {
    mid = (l + r) >> 1
    if (nums[mid] >= target) r = mid
    else l = mid + 1
  }
  return nums[l] >= target ? l : nums.length
}
