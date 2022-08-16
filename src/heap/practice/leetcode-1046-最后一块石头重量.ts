export function lastStoneWeight(stones: number[]): number {
  const h = new Heap()

  stones.forEach(stone => h.push(stone))

  let a: number, b: number
  while (h.size() > 1) {
    a = h.pop()!
    b = h.pop()!
    if (a === b) continue
    h.push(a - b)
  }

  return h.size() ? h.top() : 0
}

class Heap {
  private heap: number[] = []

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
    if (this.size() === 1) return this.heap.pop()
    const ret = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.updateDownward()
    return ret
  }

  private updateDownward() {
    let i = 0,
      l: number,
      r: number,
      target: number
    const edge = this.heap.length
    while (i < edge) {
      target = i
      l = i * 2 + 1
      r = i * 2 + 2
      if (l < edge && this.heap[l] > this.heap[target]) target = l
      if (r < edge && this.heap[r] > this.heap[target]) target = r
      if (target === i) break
      this.swap(i, target)
      i = target
    }
  }

  private updateUpward() {
    let i = this.heap.length - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (this.heap[i] <= this.heap[parentInd]) break
      this.swap(i, parentInd)
      i = parentInd
    }
  }

  private swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}
