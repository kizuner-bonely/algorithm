export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  const vh = new ListNode(0, head)
  let p: ListNode | null = vh,
    q: ListNode | null = vh
  while (n--) q = q!.next

  while (q!.next) {
    p = p!.next
    q = q!.next
  }

  p!.next = p!.next!.next

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
