export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head?.next) return head
  const vh = new ListNode(0, head)
  let p: ListNode | null = vh,
    q: ListNode | null = head
  while (p.next) {
    if (p.next.next && p.next.val === p.next.next.val) {
      q = p.next.next
      while (q && p.next.val === q.val) q = q.next
      p.next = q
    } else {
      p = p.next
    }
  }

  return vh.next
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
