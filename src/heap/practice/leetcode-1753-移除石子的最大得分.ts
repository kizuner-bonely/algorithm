export function maximumScore(a: number, b: number, c: number): number {
  const h = new BigHeap([a, b, c])
  let ans = 0

  while (h.size() > 1) {
    let m = h.pop()!
    let n = h.pop()!
    m--
    n--
    ans++
    if (m) h.push(m)
    if (n) h.push(n)
  }

  return ans
}

class BigHeap {
  private data: number[] = []
  constructor(data: number[]) {
    data.forEach(n => this.push(n))
  }

  size() {
    return this.data.length
  }

  push(n: number) {
    this.data.push(n)
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

  private updateUpward() {
    let i = this.size() - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (this.data[parentInd] >= this.data[i]) break
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
      if (l < edge && this.data[l] > this.data[target]) target = l
      if (r < edge && this.data[r] > this.data[target]) target = r
      if (target === i) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}
