export class MyCircularQueue {
  public queue: number[]
  private start: number
  private end: number
  private size: number
  constructor(k: number) {
    this.queue = new Array(k + 1).fill(-1)
    this.start = 0
    this.end = 0
    this.size = 0
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false
    this.size++
    this.queue[this.end] = value
    this.end = (this.end + 1) % this.queue.length
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false
    this.size--
    this.start = (this.start + 1) % this.queue.length
    return true
  }

  Front(): number {
    if (this.isEmpty()) return -1
    return this.queue[this.start]
  }

  Rear(): number {
    if (this.isEmpty()) return -1
    return this.queue[(this.end - 1 + this.queue.length) % this.queue.length]
  }

  isEmpty(): boolean {
    return this.size === 0
  }

  isFull(): boolean {
    return this.size === this.queue.length - 1
  }
}
