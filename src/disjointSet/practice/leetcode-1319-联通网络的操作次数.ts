export function makeConnected(n: number, connections: number[][]): number {
  const len = connections.length
  if (len < n - 1) return -1
  const s = new DisjointSet(n)
  connections.forEach(([a, b]) => {
    s.merge(a, b)
  })
  return s.count() - 1
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
    this.data.forEach((n, i) => n === i && res++)
    return res
  }
}
