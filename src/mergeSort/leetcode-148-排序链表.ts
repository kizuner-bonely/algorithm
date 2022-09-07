export function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let cnt = 0,
    p = head
  while (p) cnt++, (p = p.next!)
  return merge(head, 0, cnt - 1)
}

function merge(head: ListNode | null, l: number, r: number) {
  if (l >= r || !head?.next) return head
  const mid = (l + r) >> 1,
    ret = new ListNode()
  let p = head,
    i = l

  while (i < mid && p.next) (p = p.next), i++
  const q = p.next
  p.next = null
  p = ret

  let lp = merge(head, 0, mid)
  let rp = merge(q, 0, r - mid + 1)
  while (lp || rp) {
    if (!rp || (lp && lp.val < rp.val)) {
      p.next = lp
      lp = lp!.next
      p = p.next!
      p.next = null
    } else {
      p.next = rp
      rp = rp.next
      p = p.next
      p.next = null
    }
  }
  return ret.next
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
