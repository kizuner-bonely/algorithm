export class KthLargest {
  h: SmallHeap
  constructor(private k: number, nums: number[]) {
    this.h = new SmallHeap()
    nums.forEach(n => {
      if (this.h.size() > k) this.h.pop()
      this.h.push(n)
    })
  }

  add(val: number): number {
    this.h.push(val)
    while (this.h.size() > this.k) this.h.pop()
    return this.h.top()
  }
}

class SmallHeap {
  heap: number[] = []

  push(n: number) {
    this.heap.push(n)
    this.updateUpward()
  }

  pop() {
    if (!this.size()) return
    if (this.size() === 1) return this.heap.pop()
    const ret = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.updateDownward()
    return ret
  }

  top() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  private updateUpward() {
    let i = this.size() - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (this.heap[i] < this.heap[parentInd]) {
        this.swap(i, parentInd)
      } else break
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
      l = i * 2 + 1
      r = i * 2 + 2
      if (l < edge && this.heap[l] < this.heap[target]) target = l
      if (r < edge && this.heap[r] < this.heap[target]) target = r
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}
