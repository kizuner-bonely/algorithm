/* eslint-disable no-constant-condition */

export function rand10(): number {
  let num = 0
  while (true) {
    num = (rand7() - 1) * 7 + rand7() // rand49(7 * 7) [1-40] [41-49]
    if (num <= 40) return (num % 10) + 1
    // 此时 num - 40 代表 rand9() 的结果
    num = (num - 40 - 1) * 7 + rand7() // rand63(9 * 7) [1-60] [61-63]
    if (num <= 60) return (num % 10) + 1
    // 此时 num - 60 代表 rand3() 的结果
    num = (num - 60 - 1) * 7 + rand7() // rand21(3 * 7) [1-20] [21-23]
    if (num <= 20) return (num % 10) + 1
  }
}

declare function rand7(): number
