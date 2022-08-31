export function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1)
  return nums
}

const threshold = 16

function quickSort(arr: number[], l: number, r: number) {
  _quickSort(arr, l, r)
  _insertSort(arr, l, r)
}

function _quickSort(arr: number[], l: number, r: number) {
  let x: number, y: number, base: number
  while (r - l > threshold) {
    ;(x = l), (y = r), (base = getMid(arr[l], arr[r], arr[(l + r) >> 1]))
    do {
      while (arr[x] < base) x++
      while (arr[y] > base) y--
      if (x <= y) {
        swap(arr, x, y)
        x++, y--
      }
    } while (x <= y)
    _quickSort(arr, x, r)
    r = y
  }
}

function _insertSort(arr: number[], l: number, r: number) {
  let ind = l
  for (let i = l; i <= r; i++) {
    if (arr[i] < arr[ind]) ind = i
  }
  while (ind > l) {
    swap(arr, ind, ind - 1)
    ind--
  }
  for (let i = l + 2; i <= r; i++) {
    let j = i
    while (arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1)
      j--
    }
  }
}

function getMid(a: number, b: number, c: number) {
  if (a > b) [a, b] = [b, a]
  if (b > c) [b, c] = [c, b]
  if (a > c) [a, c] = [c, a]
  return b
}

function swap(arr: number[], x: number, y: number) {
  ;[arr[x], arr[y]] = [arr[y], arr[x]]
}
