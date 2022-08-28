export function minSwapsCouples(row: number[]): number {
  const all = row.length >> 1
  const s = new DisjointSet(all)

  for (let i = 0; i < row.length; i += 2) {
    if (s.find(row[i] >> 1) !== s.find(row[i + 1] >> 1)) {
      s.merge(row[i] >> 1, row[i + 1] >> 1)
    }
  }

  return s.count()
}

class DisjointSet {
  private data: number[]
  private cnt = 0
  constructor(n: number) {
    this.data = Array.from(new Array(n), (_, i) => i)
  }

  find(i: number): number {
    return (this.data[i] = this.data[i] === i ? i : this.find(this.data[i]))
  }

  merge(a: number, b: number) {
    if (this.find(a) === this.find(b)) return
    this.cnt++
    this.data[this.find(a)] = this.find(b)
  }

  count() {
    return this.cnt
  }
}
