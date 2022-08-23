export function numIslands(grid: string[][]): number {
  const h = grid.length
  const w = grid[0]?.length ?? 0
  if (!w) return 0
  const s = new DisjointSet(w * h)
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === '1') {
        if (i - 1 >= 0 && grid[i - 1][j] === '1') {
          s.merge(i * w + j, (i - 1) * w + j)
        }
        if (j - 1 >= 0 && grid[i][j - 1] === '1') {
          s.merge(i * w + j, i * w + j - 1)
        }
      }
    }
  }
  let res = 0
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === '1' && s.find(i * w + j) === i * w + j) res++
    }
  }
  return res
}

class DisjointSet {
  data: number[]
  constructor(n: number) {
    this.data = Array.from(new Array(n), (_, i) => i)
  }

  find(i: number): number {
    return (this.data[i] = this.data[i] === i ? i : this.find(this.data[i]))
  }

  merge(a: number, b: number) {
    this.data[this.find(a)] = this.find(b)
  }
}
