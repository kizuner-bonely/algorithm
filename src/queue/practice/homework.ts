export function pancakeSort(arr: number[]) {
  const ret: number[] = []
  const ind: number[] = Array.from(new Array(arr.length + 1))
  arr.forEach((n, i) => {
    ind[n] = i
  })

  for (let i = arr.length; i >= 1; i--) {
    // 将当前的最大值放在首位
    if (ind[i] + 1 !== 1) {
      ret.push(ind[i] + 1)
      swap(arr, ind[i] + 1, ind)
    }
    // 将当前的最大值放在末位
    if (i !== 1) {
      ret.push(i)
      swap(arr, i, ind)
    }
  }
  return ret
}

function swap(arr: number[], k: number, ind: number[]) {
  for (let i = 0, j = k - 1; i < j; i++, j--) {
    ;[ind[arr[i]], ind[arr[j]]] = [ind[arr[j]], ind[arr[i]]]
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
