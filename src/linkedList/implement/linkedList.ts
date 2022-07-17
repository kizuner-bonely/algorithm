//* 方法1：传统对象链表
type LinkedNode = {
  value: string | number
  next: LinkedNode | null
}

class TraditionalNode {
  public head: LinkedNode | null = null
  public currentInd: LinkedNode | null = null

  constructor(value: LinkedNode['value']) {
    this.currentInd = { value, next: null }
    this.head = this.currentInd
  }

  setNext(value: LinkedNode['value']) {
    this.currentInd!.next = { value, next: null }
    this.currentInd = this.currentInd!.next
    return this
  }

  getLinkedNode() {
    return this.head
  }
}

export function constructLinkedNode(value: LinkedNode['value']) {
  return new TraditionalNode(value)
}

//* 方法2：数组
const values: Array<number | null> = Array.from(new Array(10), _ => null)
const nextNode: number[] = Array.from(new Array(10), _ => -1)
let head: number, cur: number

export function constructLinkedNode2(value: number, next: number) {
  head = cur = next
  setNode(value, next)
  return { values, nextNode, head }
}

export function setNode(value: number, next: number) {
  nextNode[cur] = next
  cur = next
  values[cur] = value
}
