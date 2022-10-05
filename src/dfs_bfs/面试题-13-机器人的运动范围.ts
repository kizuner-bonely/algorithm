export function movingCount(m: number, n: number, k: number): number {
  const marks: Set<number> = new Set()
  return dfs(0, 0, m, n, k, marks)
}

function dfs(
  x: number,
  y: number,
  m: number,
  n: number,
  k: number,
  marks: Set<number>,
): number {
  if (x >= n) return 0
  if (y >= m) return 0
  if (marks.has(y * n + x) || checkInRange(x, y, k)) return 0

  marks.add(y * n + x)
  return 1 + dfs(x + 1, y, m, n, k, marks) + dfs(x, y + 1, m, n, k, marks)
}

function checkInRange(x: number, y: number, k: number) {
  const ans: number[] = []
  for (const c of `${x}`) ans.push(+c)
  for (const c of `${y}`) ans.push(+c)
  return ans.reduce((prev, cur) => prev + cur, 0) > k
}
