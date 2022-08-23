export function findRedundantConnection(edges: number[][]): number[] {
  const n = edges.length
  const s = new DisjointSet(n)
  for (const [a, b] of edges) {
    if (s.find(a) === s.find(b)) return [a, b]
    s.merge(a, b)
  }
  return []
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
}
