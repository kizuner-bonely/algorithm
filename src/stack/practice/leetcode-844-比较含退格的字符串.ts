export function backspaceCompare(s: string, t: string): boolean {
  const s1: string[] = [],
    s2: string[] = []
  for (const c of s) {
    if (c === '#') s1.pop()
    else s1.push(c)
  }

  for (const c of t) {
    if (c === '#') s2.pop()
    else s2.push(c)
  }

  return s1.join('') === s2.join('')
}
