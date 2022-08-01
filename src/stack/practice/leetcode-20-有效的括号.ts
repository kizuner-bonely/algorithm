const pMap = {
  '(': ')',
  '{': '}',
  '[': ']',
}

export function isValid(s: string): boolean {
  const stack: Array<keyof typeof pMap> = []
  const l = new Set(Object.keys(pMap))
  for (const c of s) {
    if (l.has(c)) {
      stack.push(c as keyof typeof pMap)
    } else {
      if (pMap[stack[stack.length - 1]] === c) stack.pop()
      else return false
    }
  }
  return !stack.length
}
