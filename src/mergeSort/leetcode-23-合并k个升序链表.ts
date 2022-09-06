export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const q = new SmallHeap()
  lists.forEach(n => n && q.push(n))
  const ret = new ListNode()
  let p = ret,
    n: ListNode
  while (q.size()) {
    n = q.pop()!
    p.next = n
    if (n.next) q.push(n.next)
    p = p.next
    p.next = null
  }
  return ret.next
}

class SmallHeap {
  data: ListNode[] = []

  size() {
    return this.data.length
  }

  push(n: ListNode) {
    this.data.push(n)
    this.updateUpward()
  }

  pop() {
    if (!this.size()) return null
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
      if (this.data[parentInd].val <= this.data[i].val) break
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
      ;(l = (i << 1) + 1), (r = (i << 1) + 2)
      if (l < edge && this.data[l].val < this.data[target].val) target = l
      if (r < edge && this.data[r].val < this.data[target].val) target = r
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(i: number, j: number) {
    ;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
