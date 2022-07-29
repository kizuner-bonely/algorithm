export function pancakeSort(arr: number[]): number[] {
  const ret: number[] = []
  const ind: number[] = new Array(arr.length + 1)
  for (let i = 0; i < arr.length; i++) ind[arr[i]] = i
  for (let i = arr.length; i >= 1; i--) {
    // 把最大值翻转到最前面
    if (ind[i] + 1 !== 1) {
      ret.push(ind[i] + 1)
      reverseArr(arr, ind[i] + 1, ind)
    }
    // 把最大值翻转到最后面
    if (i !== 1) {
      ret.push(i)
      reverseArr(arr, i, ind)
    }
  }
  return ret
}

function reverseArr(arr: number[], n: number, ind: number[]) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    ind[arr[i]] = j
    ind[arr[j]] = i
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
