import type { ListNode } from './index.type'

export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false
  let p: ListNode | null = head,
    q: ListNode | null = head.next
  while (q?.next && p !== q) {
    p = p!.next
    q = q.next.next
  }
  if (p === q) return true
  return false
}
