export function maximumScore(a: number, b: number, c: number): number {
  let ans = 0
  if (a > b) [a, b] = [b, a]
  if (a > c) [a, c] = [c, a]
  if (b > c) [b, c] = [c, b]

  const cnt1 = Math.min(c - b, a)
  a -= cnt1
  c -= cnt1
  ans += cnt1

  if (a !== 0) {
    if (a % 2 !== 0) a -= 1
    b -= a / 2
    c -= a / 2
    ans += a
  }
  ans += b

  return ans
}
