import type { ListNode } from './index.type'

export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false
  let p: ListNode | null = head,
    q: ListNode | null = head
  do {
    p = p!.next
    q = q.next?.next ?? null
  } while (q?.next && p !== q)
  return p === q
}
