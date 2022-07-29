export function getKthMagicNumber(k: number): number {
  const ans: number[] = [1]
  let p3 = 0,
    p5 = 0,
    p7 = 0
  while (ans.length !== k) {
    const a3 = 3 * ans[p3],
      a5 = 5 * ans[p5],
      a7 = 7 * ans[p7]
    const min = Math.min(a3, a5, a7)
    ans.push(min)
    if (a3 === min) p3++
    if (a5 === min) p5++
    if (a7 === min) p7++
  }
  return ans[k - 1]
}
