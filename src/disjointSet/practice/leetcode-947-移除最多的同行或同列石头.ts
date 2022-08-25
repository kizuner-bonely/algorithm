export function removeStones(stones: number[][]): number {
  const s = new DisjointSet(stones.length)
  const ix: Record<number, number> = {}
  const iy: Record<number, number> = {}

  stones.forEach(([x, y], i) => {
    if (ix[x] === undefined) ix[x] = i
    if (iy[y] === undefined) iy[y] = i
    if (ix[x] !== undefined) {
      s.merge(i, ix[x])
    }
    if (iy[y] !== undefined) {
      s.merge(i, iy[y])
    }
  })

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
    this.data[this.find(b)] = this.find(a)
  }

  count() {
    let res = 0
    this.data.forEach((n, i) => n !== i && res++)
    return res
  }
}
