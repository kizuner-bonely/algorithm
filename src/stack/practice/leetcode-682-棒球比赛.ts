export function calPoints(ops: string[]): number {
  const s: number[] = []
  ops.forEach(op => {
    if (+op) {
      s.push(+op)
      return
    }

    if (op === 'C') {
      s.pop()
      return
    }

    if (op === 'D') {
      s.push(s[s.length - 1] * 2)
      return
    }

    if (op === '+') {
      s.push(s[s.length - 2] + s[s.length - 1])
    }
  })

  return s.reduce((pre, cur) => pre + cur, 0)
}
