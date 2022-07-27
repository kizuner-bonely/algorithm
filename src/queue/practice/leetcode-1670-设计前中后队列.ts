export class FrontMiddleBackQueue {
  private q1: number[] = []
  private q2: number[] = []
  constructor() {}

  pushFront(val: number): void {
    this.q1.unshift(val)
    this.update()
  }

  pushMiddle(val: number): void {
    if (this.q1.length > this.q2.length) {
      this.q2.unshift(this.q1.pop()!)
    }
    this.q1.push(val)
    this.update()
  }

  pushBack(val: number): void {
    this.q2.push(val)
    this.update()
  }

  popFront(): number {
    if (!this.q1.length) return -1
    const ret = this.q1.shift()
    this.update()
    return ret!
  }

  popMiddle(): number {
    if (!this.q1.length) return -1
    const ret = this.q1.pop()!
    this.update()
    return ret
  }

  popBack(): number {
    if (!this.q1.length) return -1
    let ret: number
    if (!this.q2.length) ret = this.q1.pop()!
    else ret = this.q2.pop()!
    this.update()
    return ret
  }

  private update() {
    if (this.q1.length < this.q2.length) this.q1.push(this.q2.shift()!)
    if (this.q1.length === this.q2.length + 2) this.q2.unshift(this.q1.pop()!)
  }
}
