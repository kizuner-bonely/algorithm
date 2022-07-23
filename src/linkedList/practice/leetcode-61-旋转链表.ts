import type { ListNode } from './index.type'

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head?.next) return head
  let len = 1,
    p: ListNode | null = head
  while (p.next) {
    p = p.next
    len++
  }

  let steps = len - (k % len)
  p.next = head

  while (steps--) {
    p = p!.next
  }

  const res = p!.next
  p!.next = null

  return res
}
