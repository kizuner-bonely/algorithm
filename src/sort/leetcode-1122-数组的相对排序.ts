export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const counter = Array.from(new Array(1005), _ => 0)
  let k = 0

  arr1.forEach(n => counter[n]++)

  arr2.forEach(n => {
    while (counter[n]-- > 0) arr1[k++] = n
  })

  counter.forEach((n, i) => {
    if (n <= 0) return
    while (counter[i]--) arr1[k++] = i
  })

  return arr1
}
