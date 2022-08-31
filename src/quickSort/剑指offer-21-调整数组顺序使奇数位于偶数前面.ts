export function exchange(nums: number[]): number[] {
  partition(nums, 0, nums.length - 1)
  return nums
}

function partition(nums: number[], l: number, r: number) {
  if (l >= r) return
  let x: number, y: number
  ;(x = l), (y = r)
  do {
    while (nums[x] % 2) x++
    while (nums[y] % 2 === 0) y--
    if (x <= y) {
      ;[nums[x], nums[y]] = [nums[y], nums[x]]
      x++, y--
    }
  } while (x <= y)
}
