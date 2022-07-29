export function lemonadeChange(bills: number[]): boolean {
  let five = 0,
    ten = 0
  for (const bill of bills) {
    if (bill === 5) {
      five++
      continue
    }

    if (bill === 10) {
      if (!five) return false
      ten++
      five--
      continue
    }

    if (bill === 20) {
      if (!ten) {
        if (five < 3) return false
        five -= 3
        continue
      }

      if (!five) return false
      five--
      ten--
    }
  }
  return true
}
