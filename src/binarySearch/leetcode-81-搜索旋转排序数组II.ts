export function search(nums: number[], target: number): boolean {
  if (nums[0] === target || nums[nums.length - 1] === target) return true
  let l = 0,
    r = nums.length - 1,
    mid: number
  while (l + 1 < nums.length && nums[l + 1] === nums[l]) l++
  while (r - 1 >= 0 && nums[r - 1] === nums[r]) r--
  const rightEdge = nums[r],
    leftEdge = nums[l]
  while (l <= r) {
    mid = (l + r) >> 1
    if (nums[mid] === target) return true
    if (nums[mid] < rightEdge) {
      // 右区间
      if (target < rightEdge && nums[mid] < target) l = mid + 1
      else r = mid - 1
    } else {
      // 左区间
      if (target > leftEdge && nums[mid] > target) r = mid - 1
      else l = mid + 1
    }
  }
  return false
}
