export function findOrder(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  let cnt = 0,
    c = -1
  const ret: number[] = [],
    q: number[] = []
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
    ret.push(c)
    courseNet[c]?.forEach(_c => {
      if (!--indeg[_c]) q.push(_c)
    })
  }

  return cnt === numCourses ? ret : []
}
