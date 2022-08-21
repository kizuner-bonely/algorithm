export function nthUglyNumber(n: number): number {
  const h = new SmallHeap()
  h.push(1)
  let ans = 0

  while (n--) {
    ans = h.pop()!
    if (ans % 5 === 0) {
      h.push(5 * ans)
    } else if (ans % 3 === 0) {
      h.push(5 * ans)
      h.push(3 * ans)
    } else {
      h.push(5 * ans)
      h.push(3 * ans)
      h.push(2 * ans)
    }
  }

  return ans
}

class SmallHeap {
  data: number[] = []

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
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}
