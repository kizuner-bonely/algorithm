type Data = [val: number, sign: 1 | -1]

export function merge(intervals: number[][]): number[][] {
  const data: Data[] = []
  intervals.forEach(([start, end]) => {
    data.push([start, 1], [end, -1])
  })
  mergeSort(data, 0, data.length - 1)

  let s = 0,
    diff = 0
  const ans: number[][] = []
  data.forEach(([val, sign]) => {
    if (diff === 0) s = val
    if (diff + sign === 0) ans.push([s, val])
    diff += sign
  })
  return ans
}

function mergeSort(data: Data[], l: number, r: number) {
  if (l >= r) return
  const mid = l + ((r - l) >> 1)
  const temp: Data[] = []
  mergeSort(data, l, mid)
  mergeSort(data, mid + 1, r)

  let lp = l,
    rp = mid + 1
  while (lp <= mid || rp <= r) {
    if (rp > r || (lp <= mid && lessThan(data[lp], data[rp])))
      temp.push(data[lp++])
    else temp.push(data[rp++])
  }

  temp.forEach((n, i) => (data[l + i] = n))
}

function lessThan(a: Data, b: Data) {
  if (a[0] < b[0]) return true
  return a[0] === b[0] && a[1] > b[1]
}
