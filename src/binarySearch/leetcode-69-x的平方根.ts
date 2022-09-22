export function mySqrt(x: number): number {
  let l = 0,
    r = x,
    mid: number,
    temp: number
  while (l < r) {
    mid = (l + r) >> 1
    temp = mid * mid
    if (temp >= x) r = mid
    else l = mid + 1
  }
  return l * l === x ? l : l - 1
}
