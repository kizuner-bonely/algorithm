export class RecentCounter {
  private counter: number[] = []
  constructor() {}

  ping(t: number): number {
    while (this.counter.length && t - this.counter[0] > 3000) {
      this.counter.shift()
    }
    this.counter.push(t)
    return this.counter.length
  }
}
