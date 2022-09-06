export function reversePairs(nums: number[]): number {
  return mergeSort(nums, 0, nums.length - 1)
}

function mergeSort(nums: number[], l: number, r: number): number {
  if (l >= r) return 0
  const mid = (l + r) >> 1
  let cnt = 0
  const lNum = mergeSort(nums, l, mid)
  const rNum = mergeSort(nums, mid + 1, r)

  const temp = []
  let lp = l,
    rp = mid + 1
  while (lp <= mid || rp <= r) {
    if (rp > r || (lp <= mid && nums[lp] <= nums[rp])) {
      temp.push(nums[lp++])
    } else {
      temp.push(nums[rp++])
      cnt += mid - lp + 1
    }
  }
  for (let i = l; i <= r; i++) nums[i] = temp[i - l]

  return cnt + lNum + rNum
}
