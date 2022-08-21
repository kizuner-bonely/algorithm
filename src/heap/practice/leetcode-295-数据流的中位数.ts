export class MedianFinder {
  private b: Heap
  private s: Heap
  constructor() {
    this.b = new Heap('big')
    this.s = new Heap('small')
  }

  addNum(num: number): void {
    if (this.b.size() < this.s.size() + 1) this.b.push(num)
    else this.s.push(num)

    if (this.b.top() > this.s.top()) {
      const m = this.b.pop()!
      const n = this.s.pop()!
      this.b.push(n)
      this.s.push(m)
    }
  }

  findMedian(): number {
    if ((this.b.size() + this.s.size()) % 2) return this.b.top()
    return (this.b.top() + this.s.top()) / 2
  }
}

class Heap {
  private data: number[] = []
  constructor(private type: 'big' | 'small') {}

  top() {
    return this.data[0]
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
      if (this.type === 'big') {
        if (this.data[parentInd] >= this.data[i]) break
      } else {
        if (this.data[parentInd] <= this.data[i]) break
      }
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
      if (this.type === 'big') {
        if (l < edge && this.data[l] > this.data[target]) target = l
        if (r < edge && this.data[r] > this.data[target]) target = r
      } else {
        if (l < edge && this.data[l] < this.data[target]) target = l
        if (r < edge && this.data[r] < this.data[target]) target = r
      }
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}
