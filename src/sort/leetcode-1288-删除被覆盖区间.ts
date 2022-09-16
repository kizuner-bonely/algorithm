let temp: number[][] = []

export function removeCoveredIntervals(intervals: number[][]): number {
  temp = [...intervals]
  mergeSort(intervals, 0, intervals.length - 1)
  let ans = intervals.length,
    preEnd = -1
  intervals.forEach(([, end]) => {
    if (end <= preEnd) ans--
    else preEnd = end
  })
  return ans
}

function mergeSort(intervals: number[][], l: number, r: number) {
  if (l >= r) return
  const mid = l + ((r - l) >> 1)
  mergeSort(intervals, l, mid)
  mergeSort(intervals, mid + 1, r)

  let lp = l,
    rp = mid + 1,
    i = l
  while (lp <= mid || rp <= r) {
    if (rp > r || (lp <= mid && lessThan(intervals[lp], intervals[rp])))
      temp[i++] = intervals[lp++]
    else temp[i++] = intervals[rp++]
  }
  for (let i = l; i <= r; i++) intervals[i] = temp[i]
}

function lessThan(a: number[], b: number[]) {
  if (a[0] < b[0] || (a[0] === b[0] && a[1] > b[1])) return true
  return false
}
