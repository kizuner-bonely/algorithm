export class MyCircularDeque {
  public queue: number[]
  private size: number
  private front: number
  private rear: number
  constructor(k: number) {
    this.queue = new Array(k + 1).fill(0)
    this.front = this.rear = this.size = 0
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false
    this.size++
    this.front = (this.front - 1 + this.queue.length) % this.queue.length
    this.queue[this.front] = value
    return true
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false
    this.size++
    this.queue[this.rear] = value
    this.rear = (this.rear + 1) % this.queue.length
    return true
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false
    this.size--
    this.front = (this.front + 1) % this.queue.length
    return true
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false
    this.size--
    this.rear = (this.rear - 1 + this.queue.length) % this.queue.length
    return true
  }

  getFront(): number {
    if (this.isEmpty()) return -1
    return this.queue[this.front]
  }

  getRear(): number {
    if (this.isEmpty()) return -1
    return this.queue[(this.rear - 1 + this.queue.length) % this.queue.length]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  isFull(): boolean {
    return this.size === this.queue.length - 1
  }
}
