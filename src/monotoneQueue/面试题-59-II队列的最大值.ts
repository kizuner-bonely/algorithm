export class MaxQueue {
  private q: number[]
  private mq: number[]
  constructor() {
    this.q = []
    this.mq = []
  }

  max_value(): number {
    if (!this.mq.length) return -1
    return this.mq[0]
  }

  push_back(value: number): void {
    this.q.push(value)
    while (this.mq.length && this.mq[this.mq.length - 1] <= value) this.mq.pop()
    this.mq.push(value)
  }

  pop_front(): number {
    if (!this.q.length) return -1
    const v = this.q.shift()!
    if (v === this.mq[0]) this.mq.shift()
    return v
  }
}
