let temp: number[] = []

export function countRangeSum(
  nums: number[],
  lower: number,
  upper: number,
): number {
  const sums = [0]
  nums.forEach((n, i) => sums.push(n + sums[i]))
  temp = [...sums]
  return mergeSort(sums, 0, sums.length - 1, lower, upper)
}

function mergeSort(
  sums: number[],
  l: number,
  r: number,
  lower: number,
  upper: number,
): number {
  if (l >= r) return 0
  const mid = (l + r) >> 1
  const lNum = mergeSort(sums, l, mid, lower, upper)
  const rNum = mergeSort(sums, mid + 1, r, lower, upper)
  const cnt = count(sums, l, mid, mid + 1, r, lower, upper)

  let lp = l,
    rp = mid + 1,
    i = l
  while (lp <= mid || rp <= r) {
    if (rp > r || (lp <= mid && sums[lp] < sums[rp])) temp[i++] = sums[lp++]
    else temp[i++] = sums[rp++]
  }
  for (let i = l; i <= r; i++) sums[i] = temp[i]

  return lNum + rNum + cnt
}

function count(
  sums: number[],
  l1: number,
  r1: number,
  l2: number,
  r2: number,
  lower: number,
  upper: number,
): number {
  let cnt = 0
  for (let a = l1, b = l1; l2 <= r2; l2++) {
    while (a <= r1 && sums[l2] - sums[a] > upper) a++
    while (b <= r1 && sums[l2] - sums[b] >= lower) b++
    cnt += b - a
  }
  return cnt
}
