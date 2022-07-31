export class MyQueue {
  private s1: number[]
  private s2: number[]
  constructor() {
    this.s1 = []
    this.s2 = []
  }

  push(x: number): void {
    this.s1.push(x)
  }

  pop(): number {
    if (!this.s2.length) this.update()
    return this.s2.pop()!
  }

  peek(): number {
    if (!this.s2.length) this.update()
    return this.s2[this.s2.length - 1]
  }

  empty(): boolean {
    return !this.s1.length && !this.s2.length
  }

  private update() {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
  }
}
