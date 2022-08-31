export function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null
  let min = head.val,
    max = head.val
  let p: ListNode | null = head,
    q: ListNode | null
  while (p) {
    min = Math.min(min, p.val)
    max = Math.max(max, p.val)
    p = p.next
  }
  if (min === max) return head // 只有一个节点
  const base = (min + max) >> 1

  let small: ListNode | null = null,
    big: ListNode | null = null
  p = head
  while (p) {
    q = p.next
    if (p.val <= base) {
      p.next = small
      small = p
    } else {
      p.next = big
      big = p
    }
    p = q
  }

  big = sortList(big)
  small = sortList(small)

  p = small
  while (p!.next) p = p!.next
  p!.next = big

  return small
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
