export function canFinish(
  numCourses: number,
  prerequisites: number[][],
): boolean {
  let cnt = 0,
    c = -1
  const q: number[] = []
  const indeg: number[] = Array.from(new Array(numCourses), _ => 0)
  const courseNet: Record<number, number[]> = {}

  prerequisites.forEach(([a, b]) => {
    indeg[a]++
    courseNet[b] === undefined ? (courseNet[b] = [a]) : courseNet[b].push(a)
  })
  indeg.forEach((n, i) => !n && q.push(i))

  while (q.length) {
    cnt++
    c = q.shift()!
    courseNet[c]?.forEach(n => !--indeg[n] && q.push(+n))
  }

  return cnt === numCourses
}
