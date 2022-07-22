export function isHappy(n: number): boolean {
  let p = n,
    q = n
  do {
    p = getNext(p)
    q = getNext(getNext(q))
  } while (p !== q)
  return p === 1 || q === 1
}

function getNext(n: number) {
  const s = `${n}`
  let ans = 0
  for (const c of s) {
    ans += (+c) ** 2
  }
  return ans
}
