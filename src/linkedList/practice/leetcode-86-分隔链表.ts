export function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head?.next) return head
  const vb = new ListNode(0, null),
    vs = new ListNode(0, null)
  let vbp = vb,
    vsp = vs
  let p: ListNode | null = head,
    q: ListNode | null = head.next

  while (p) {
    q = p.next
    p.next = null
    if (p.val < x) {
      vsp.next = p
      vsp = p
    } else {
      vbp.next = p
      vbp = p
    }
    p = q
  }

  vsp.next = vb.next

  return vs.next
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
