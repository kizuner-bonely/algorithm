export function shipWithinDays(weights: number[], days: number): number {
  let loads = weights.reduce((prev, cur) => prev + cur, 0)
  let min = Math.max(...weights),
    mid: number

  while (min < loads) {
    mid = (min + loads) >> 1
    if (check(weights, mid, days)) loads = mid
    else min = mid + 1
  }

  return min
}

function check(weights: number[], loads: number, days: number) {
  let cnt = 1,
    temp = 0
  weights.forEach(w => {
    if (temp + w > loads) {
      cnt++
      temp = 0
    }
    temp += w
  })

  return cnt <= days
}
