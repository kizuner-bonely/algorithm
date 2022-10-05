export function makesquare(matchsticks: number[]): boolean {
  matchsticks = matchsticks.sort()
  const sum = matchsticks.reduce((prev, cur) => prev + cur, 0)
  if (sum % 4) return false
  const lines = Array.from(new Array(4), _ => sum / 4)
  return dfs(matchsticks.length - 1, matchsticks, lines)
}

function dfs(ind: number, matchsticks: number[], lines: number[]) {
  if (ind === -1) return true
  for (let i = 0; i < 4; i++) {
    if (matchsticks[ind] > lines[i]) continue
    if (matchsticks[ind] === lines[i] || matchsticks[ind] < lines[i]) {
      lines[i] -= matchsticks[ind]
      if (dfs(ind - 1, matchsticks, lines)) return true
      lines[i] += matchsticks[ind]
    }
  }
  return false
}
