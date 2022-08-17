export function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number,
): number[][] {
  const h = new SmallHeap(nums1, nums2)
  const ret: number[][] = []
  while (k-- && h.size()) {
    const item = h.pop()!
    ret.push([item[0], item[1][0]])

    const next = item[1][1] + 1
    if (next < nums2.length) {
      h.push([item[0], [nums2[next], next]])
    }
  }
  return ret
}

// [num1, [num2, index]]
type Item = [number, [number, number]]

class SmallHeap {
  heap: Item[] = []
  constructor(arr1: number[], arr2: number[]) {
    arr1.forEach(n => {
      this.push([n, [arr2[0], 0]])
    })
  }

  push(n: Item) {
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

  size() {
    return this.heap.length
  }

  private updateUpward() {
    let i = this.size() - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (
        this.heap[i][0] + this.heap[i][1][0] <
        this.heap[parentInd][0] + this.heap[parentInd][1][0]
      )
        this.swap(i, parentInd)
      else break
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
      if (
        l < edge &&
        this.heap[l][0] + this.heap[l][1][0] <
          this.heap[target][0] + this.heap[target][1][0]
      )
        target = l
      if (
        r < edge &&
        this.heap[r][0] + this.heap[r][1][0] <
          this.heap[target][0] + this.heap[target][1][0]
      )
        target = r
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}
