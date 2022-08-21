//* 数学归纳法证明的指针平移法
export function nthSuperUglyNumber(n: number, primes: number[]): number {
  let ans = 1
  const p = Array.from(new Array(primes.length), _ => 0)
  const data: number[] = [1]

  while (data.length !== n) {
    ans = primes[0] * data[p[0]]
    for (let i = 1; i < primes.length; i++) {
      ans = Math.min(ans, primes[i] * data[p[i]])
    }
    for (let i = 0; i < primes.length; i++) {
      if (primes[i] * data[p[i]] === ans) p[i]++
    }
    data.push(ans)
  }

  return ans
}
