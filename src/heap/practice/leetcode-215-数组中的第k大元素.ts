export function findKthLargest(nums: number[], k: number): number {
  const h = new SmallHeap(nums, k)
  return h.top()
}

class SmallHeap {
  private heap: number[] = []
  constructor(nums: number[], k: number) {
    nums.forEach(n => {
      this.push(n)
      if (this.size() > k) this.pop()
    })
  }

  top() {
    return this.heap[0]
  }

  size() {
    return this.heap.length
  }

  push(n: number) {
    this.heap.push(n)
    this.updateUpward()
  }

  pop() {
    if (!this.heap.length) return
    if (this.heap.length === 1) return this.heap.pop()
    const ret = this.top()
    this.heap[0] = this.heap.pop()!
    this.updateDownward()
    return ret
  }

  private updateUpward() {
    let i = this.heap.length - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (this.heap[i] >= this.heap[parentInd]) break
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
      l = (i << 1) + 1
      r = (i << 1) + 2
      target = i
      if (l < edge && this.heap[l] < this.heap[target]) target = l
      if (r < edge && this.heap[r] < this.heap[target]) target = r
      if (target === i) return
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}
