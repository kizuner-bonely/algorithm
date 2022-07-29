export function buddyStrings(s: string, goal: string): boolean {
  if (s === goal) return hasRepeatedChar(s)
  if (s.length !== goal.length) return false
  const ind: number[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) ind.push(i)
  }

  if (ind.length !== 2) return false
  if (s[ind[0]] === goal[ind[1]] && s[ind[1]] === goal[ind[0]]) return true
  return false
}

function hasRepeatedChar(s: string) {
  const counter = new Set<string>()
  for (const c of s) {
    if (counter.has(c)) return true
    counter.add(c)
  }
  return false
}
