export function getLeastNumbers(arr: number[], k: number): number[] {
  const ret: number[] = []
  const h = new SmallHeap()
  arr.forEach(n => h.push(n))
  for (let i = 0; i < k; i++) ret.push(h.pop()!)
  return ret
}

class SmallHeap {
  private heap: number[] = []

  push(n: number) {
    this.heap.push(n)
    this.updateUpward()
  }

  pop() {
    if (!this.size()) return
    const ret = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.updateDownward()
    return ret
  }

  size() {
    return this.heap.length
  }

  private updateUpward() {
    let ind = this.heap.length - 1,
      parentInd: number
    while (ind) {
      parentInd = (ind - 1) >> 1
      if (this.heap[parentInd] > this.heap[ind]) {
        this.swap(ind, parentInd)
        ind = parentInd
      } else break
    }
  }

  private updateDownward() {
    let ind = 0,
      l: number,
      r: number,
      target: number
    const edge = this.heap.length
    while (ind < edge) {
      target = ind
      l = ind * 2 + 1
      r = ind * 2 + 2
      if (l < edge && this.heap[l] < this.heap[target]) target = l
      if (r < edge && this.heap[r] < this.heap[target]) target = r
      if (ind === target) break
      this.swap(ind, target)
      ind = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}
