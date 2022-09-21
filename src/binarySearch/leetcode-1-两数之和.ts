type Data = [number, number] // [val, index]

export function twoSum(nums: number[], target: number): number[] {
  const data = nums.map((n, i) => [n, i] as Data).sort(([a], [b]) => a - b)
  for (let i = 0; i < data.length; i++) {
    const res = binarySearch(data, i + 1, data.length - 1, target - data[i][0])
    if (res === -1) continue
    return [data[i][1], res]
  }
  return []
}

function binarySearch(nums: Data[], l: number, r: number, target: number) {
  let mid: number
  while (r - l > 3) {
    mid = (l + r) >> 1
    if (nums[mid][0] === target) return nums[mid][1]
    if (nums[mid][0] > target) r = mid - 1
    else l = mid + 1
  }
  for (let i = l; i <= r; i++) {
    if (nums[i][0] === target) return nums[i][1]
  }
  return -1
}
