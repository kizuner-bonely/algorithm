export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  if (!head?.next) return head
  const vh = new ListNode(0, head),
    diff = right - left + 1
  let p: ListNode | null = vh

  while (--left) p = p!.next
  p!.next = reverseN(p!.next, diff)

  return vh.next
}

function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (n === 1) return head
  const tail: ListNode | null = head!.next
  const p = reverseN(head!.next, n - 1)

  head!.next = tail!.next
  tail!.next = head

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
