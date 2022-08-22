export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length
  const s = new DisjointSet(n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) s.merge(i, j)
    }
  }
  return s.count()
}

class DisjointSet {
  private data: number[]
  constructor(n: number) {
    this.data = Array.from(new Array(n), (_, i) => i)
  }

  find(i: number): number {
    return (this.data[i] = this.data[i] === i ? i : this.find(this.data[i]))
  }

  merge(a: number, b: number) {
    this.data[this.find(a)] = this.find(b)
  }

  count() {
    let res = 0
    this.data.forEach((n, i) => {
      if (n === i) res++
    })
    return res
  }
}
