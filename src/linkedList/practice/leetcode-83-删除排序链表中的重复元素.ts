export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null
  let p: ListNode | null = head,
    q: ListNode | null = head
  while (q?.next) {
    while (p!.val === q?.val) q = q?.next ?? null
    p!.next = q
    p = q
  }
  return head
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
