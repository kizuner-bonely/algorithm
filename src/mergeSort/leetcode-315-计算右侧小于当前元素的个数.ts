// [value, index, ans]
type Data = [number, number, number]

let temp: Data[] = []

function countSmaller(nums: number[]): number[] {
  const ret: number[] = Array.from(new Array(nums.length), _ => 0)
  const data: Data[] = Array.from(new Array(nums.length), (_, i) => [
    nums[i],
    i,
    0,
  ])
  temp = [...data]
  mergeSort(data, 0, data.length - 1)
  data.forEach(([, ind, ans]) => (ret[ind] = ans))
  return ret
}

function mergeSort(data: Data[], l: number, r: number) {
  if (l >= r) return
  const mid = (l + r) >> 1
  let lp = l,
    rp = mid + 1,
    i = l
  mergeSort(data, l, mid)
  mergeSort(data, mid + 1, r)

  while (lp <= mid || rp <= r) {
    if (rp > r || (lp <= mid && data[lp][0] > data[rp][0])) {
      data[lp][2] += r - rp + 1
      temp[i++] = data[lp++]
    } else temp[i++] = data[rp++]
  }

  for (let i = l; i <= r; i++) data[i] = temp[i]
}
