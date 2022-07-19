import type { ListNode } from './index.type'

export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null

  let p: ListNode | null = head,
    q: ListNode | null = head
  do {
    p = p!.next
    q = q.next?.next ?? null
  } while (p !== q && q?.next)

  if (q === null || q?.next === null) return null

  p = head
  while (p !== q) {
    p = p!.next
    q = q!.next
  }

  return p
}
