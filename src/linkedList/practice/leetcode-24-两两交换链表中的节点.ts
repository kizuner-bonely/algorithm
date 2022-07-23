export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head?.next) return head
  const vh = new ListNode(0, head)
  let p: ListNode | null = vh

  while (p) {
    const next = reverseN(p.next, 2)
    p.next = next
    for (let i = 0; i < 2; i++) p = p?.next ?? null
  }

  return vh.next
}

function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (n === 1 || !head?.next) return head
  const tail = head.next,
    p = reverseN(head.next, n - 1)

  head.next = tail.next
  tail.next = head

  return p
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
