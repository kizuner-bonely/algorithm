export function longestConsecutive(nums: number[]): number {
  const s = new DisjointSet(nums.length)
  const m: Record<number, number> = {}
  nums.forEach((n, i) => {
    if (m[n] !== undefined) return
    m[n] = i
    if (typeof m[n - 1] === 'number') s.merge(m[n], m[n - 1])
    if (typeof m[n + 1] === 'number') s.merge(m[n], m[n + 1])
  })
  return s.getMax()
}

class DisjointSet {
  private data: number[]
  private size: number[]
  constructor(n: number) {
    this.data = Array.from(new Array(n), (_, i) => i)
    this.size = Array.from(new Array(n), _ => 1)
  }

  find(i: number): number {
    return (this.data[i] = this.data[i] === i ? i : this.find(this.data[i]))
  }

  merge(a: number, b: number) {
    this.size[this.find(b)] += this.size[this.find(a)]
    this.data[this.find(a)] = this.find(b)
  }

  getMax() {
    let max = 0
    this.data.forEach((n, i) => {
      if (n === i) max = Math.max(max, this.size[i])
    })
    return max
  }
}
