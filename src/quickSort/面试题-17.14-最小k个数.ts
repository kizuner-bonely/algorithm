export function smallestK(arr: number[], k: number): number[] {
  quickSort(arr, 0, arr.length - 1)
  return arr.slice(0, k)
}

const threshold = 16

function quickSort(arr: number[], l: number, r: number) {
  _quickSort(arr, l, r)
  _insertSort(arr, l, r)
}

function _quickSort(arr: number[], l: number, r: number) {
  if (l >= r) return
  let x: number, y: number, base: number
  while (r - l > threshold) {
    ;(x = l), (y = r), (base = getMid(arr[l], arr[r], arr[(l + r) >> 1]))
    do {
      while (arr[x] < base) x++
      while (arr[y] > base) y--
      if (x <= y) {
        ;[arr[x], arr[y]] = [arr[y], arr[x]]
        x++, y--
      }
    } while (x <= y)
    _quickSort(arr, x, r)
    r = y
  }
}

function _insertSort(arr: number[], l: number, r: number) {
  if (l >= r) return
  let ind = l,
    j: number
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[ind]) ind = i
  }
  while (ind > l) {
    ;[arr[ind], arr[ind - 1]] = [arr[ind - 1], arr[ind]]
    ind--
  }

  for (let i = l + 2; i <= r; i++) {
    j = i
    while (arr[j] < arr[j - 1]) {
      ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  }
}

function getMid(a: number, b: number, c: number) {
  if (a > b) [a, b] = [b, a]
  if (a > c) [a, c] = [c, a]
  if (b > c) [b, c] = [c, b]
  return b
}
