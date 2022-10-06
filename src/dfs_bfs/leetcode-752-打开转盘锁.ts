const offset = [1, -1]

export function openLock(deadEnds: string[], target: string): number {
  if (deadEnds.includes('0000')) return -1
  const m: Map<string, number> = new Map([
    ['0000', 0],
    ...deadEnds.map(e => [e, 0] as [string, number]),
  ])
  return bfs(target, m)
}

function bfs(target: string, m: Map<string, number>) {
  const q = ['0000']

  while (q.length) {
    const cur = q.shift()!
    if (cur === target) return m.get(cur)!
    q.push(...getNext(cur, m))
  }

  return -1
}

function getNext(cur: string, m: Map<string, number>) {
  const ret: string[] = []
  const curArr = cur.split('')
  let temp: string[]
  for (let i = 0; i < curArr.length; i++) {
    for (const d of offset) {
      temp = [...curArr]
      let nextVal = +temp[i] + d
      if (nextVal > 9) nextVal = 0
      else if (nextVal < 0) nextVal = 9

      temp[i] = `${nextVal}`
      const next = temp.join('')
      if (m.has(next)) continue
      m.set(next, m.get(cur)! + 1)
      ret.push(next)
    }
  }

  return ret
}
