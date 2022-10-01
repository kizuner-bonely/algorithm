export class LRUCache {
  private data: number[] = []
  private capacity: number
  private m: Record<number, number> = {} // key -> value
  constructor(capacity: number) {
    this.capacity = capacity
  }

  get(key: number): number {
    const ind = this.data.findIndex(n => n === key)
    if (ind === -1) return -1
    this.shiftToTail(ind)
    return this.m[this.data[this.data.length - 1]]
  }

  put(key: number, value: number): void {
    if (this.m[key] !== undefined) {
      this.m[key] = value
      const ind = this.data.findIndex(n => n === key)
      this.shiftToTail(ind)
      return
    }
    if (this.data.length === this.capacity) {
      const k = this.data.shift()!
      Reflect.deleteProperty(this.m, k)
    }
    this.data.push(key)
    this.m[key] = value
  }

  private shiftToTail(i: number) {
    const item = this.data.splice(i, 1)
    this.data.push(...item)
  }
}
