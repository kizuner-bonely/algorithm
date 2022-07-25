export function copyRandomList(head: Node | null): Node | null {
  if (!head) return head
  let p: Node | null = head,
    q: Node | null
  // 复制链表
  while (p) {
    const newNode = new Node(p.val) as Node
    newNode.random = p.random
    newNode.next = p.next
    p.next = newNode
    p = newNode.next
  }

  // 修改复制节点赋值
  p = head.next
  while (p) {
    if (p.random) p.random = p.random.next
    p = p.next?.next ?? null
  }

  const ret = head.next
  p = head

  while (p) {
    q = p.next!
    p.next = q.next
    q.next = p.next?.next ?? null
    p = p.next
  }

  return ret
}

class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}
