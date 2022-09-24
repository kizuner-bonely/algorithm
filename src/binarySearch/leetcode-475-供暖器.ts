export function findRadius(houses: number[], heaters: number[]): number {
  let ret = 0,
    radius = 0,
    ind: number
  heaters = heaters.sort((a, b) => a - b)

  houses.forEach(n => {
    ind = binarySearch(heaters, n)
    radius = Math.min(
      Math.abs(n - heaters[ind]),
      ind ? Math.abs(n - heaters[ind - 1]) : Infinity,
    )
    ret = Math.max(ret, radius)
  })

  return ret
}

function binarySearch(nums: number[], target: number) {
  let l = 0,
    r = nums.length - 1,
    mid: number
  while (r - l > 3) {
    mid = (l + r) >> 1
    if (nums[mid] >= target) r = mid
    else l = mid + 1
  }
  for (let i = l; i <= r; i++) {
    if (nums[i] >= target) return i
  }
  return nums.length - 1
}
