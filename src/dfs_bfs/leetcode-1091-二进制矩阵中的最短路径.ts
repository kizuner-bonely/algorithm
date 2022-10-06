type Data = { visited: boolean; val: number; cnt: number; x: number; y: number }

const offset = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
]

export function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0]) return -1
  const dGrid: Data[][] = grid.map((row, y) => {
    return row.map((val, x) => ({ val, visited: !!val, cnt: 1, x, y }))
  })
  const processQueue = [dGrid[0][0]]

  while (processQueue.length) {
    const { x, y, cnt } = processQueue.shift()!
    if (x === dGrid[0].length - 1 && y === dGrid.length - 1) return cnt

    offset.forEach(([dx, dy]) => {
      const tx = x + dx,
        ty = y + dy
      if (tx < 0 || tx === dGrid[0].length || ty < 0 || ty === dGrid.length)
        return
      if (dGrid[ty][tx].visited) return
      dGrid[ty][tx].visited = true
      dGrid[ty][tx].cnt = cnt + 1
      processQueue.push(dGrid[ty][tx])
    })
  }

  return -1
}
