export function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  let res = ''
  const set = new DisjointSet(s.length)
  const h = Array.from(new Array(s.length), _ => new SmallHeap())
  pairs.forEach(([a, b]) => set.merge(a, b))
  for (let i = 0; i < s.length; i++) {
    h[set.find(i)].push(s[i])
  }
  for (let i = 0; i < s.length; i++) {
    res += h[set.find(i)].pop()
  }
  return res
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

class SmallHeap {
  private data: string[] = []
  constructor(s?: string) {
    if (!s) return
    for (const c of s) this.push(c)
  }

  push(c: string) {
    this.data.push(c)
    this.updateUpward()
  }

  pop() {
    if (!this.size()) return
    if (this.size() === 1) return this.data.pop()
    const ret = this.data[0]
    this.data[0] = this.data.pop()!
    this.updateDownward()
    return ret
  }

  size() {
    return this.data.length
  }

  private updateUpward() {
    let i = this.size() - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (this.data[parentInd] <= this.data[i]) break
      this.swap(i, parentInd)
      i = parentInd
    }
  }

  private updateDownward() {
    let i = 0,
      l: number,
      r: number,
      target: number
    const edge = this.size()
    while (i < edge) {
      target = i
      l = (i << 1) + 1
      r = (i << 1) + 2
      if (l < edge && this.data[l] < this.data[target]) target = l
      if (r < edge && this.data[r] < this.data[target]) target = r
      if (target === i) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}
