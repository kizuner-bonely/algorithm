export function findRepeatedDnaSequences(s: string): string[] {
  const m: Map<string, number> = new Map()
  let temp: string
  for (let start = 0, end = s.length - 10; start <= end; start++) {
    temp = s.substring(start, start + 10)
    m.set(temp, m.get(temp) ? m.get(temp)! + 1 : 1)
  }

  const ret: string[] = []
  m.forEach((times, s) => times > 1 && ret.push(s))
  return ret
}
