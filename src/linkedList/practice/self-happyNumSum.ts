export function getHappyNum(range: number) {
  let ans = 0
  for (let i = 0; i <= range; i++) {
    if (isHappyNum(i)) ans += i
  }
  return ans
}

function isHappyNum(n: number) {
  let p = n,
    q = n
  do {
    p = getNext(p)
    q = getNext(getNext(q))
  } while (p !== q)
  return p === 1 || q === 1
}

function getNext(n: number) {
  let ans = 0
  const s = `${n}`
  for (const num of s) ans += (+num) ** 2
  return ans
}
