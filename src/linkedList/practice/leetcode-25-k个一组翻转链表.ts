export function reverseKGroup(
  head: ListNode | null,
  k: number,
): ListNode | null {
  if (!head?.next) return head
  const vh = new ListNode(0, head)
  let p: ListNode | null = vh,
    len = 0,
    cur = 1

  while (p) {
    p = p.next
    len++
  }

  p = vh
  while (p && len - cur >= k) {
    console.log(len, cur, k)
    p.next = reverseN(p.next, k)
    for (let i = 0; i < k && p; i++) p = p.next
    cur += k
  }

  return vh.next
}

function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (n === 1 || !head?.next) return head
  const tail: ListNode | null = head.next,
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
