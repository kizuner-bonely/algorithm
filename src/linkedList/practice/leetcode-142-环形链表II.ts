import type { ListNode } from './index.type'

export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head?.next) return head
  let p: ListNode | null = head,
    q: ListNode | null = head
  do {
    p = p!.next
    q = q.next?.next ?? null
  } while (q?.next && p !== q)

  if (!q?.next) return null

  p = head
  while (p !== q) {
    p = p!.next
    q = q!.next
  }

  return p
}
