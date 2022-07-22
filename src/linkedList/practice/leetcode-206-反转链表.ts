import type { ListNode } from './index.type'

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head?.next) return head
  const p = reverseList(head.next)
  const tail = head.next
  head.next = tail!.next
  tail!.next = head
  return p
}
