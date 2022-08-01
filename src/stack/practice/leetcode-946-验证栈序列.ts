export function validateStackSequences(
  pushed: number[],
  popped: number[],
): boolean {
  const s: number[] = []
  for (const num of popped) {
    while (pushed.length && s[s.length - 1] !== num) s.push(pushed.shift()!)
    if (s[s.length - 1] !== num) return false
    else s.pop()
  }

  return !s.length
}
