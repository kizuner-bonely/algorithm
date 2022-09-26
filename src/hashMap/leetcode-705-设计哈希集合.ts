export class MyHashSet {
  private s: Set<number>
  constructor() {
    this.s = new Set()
  }

  add(key: number): void {
    this.s.add(key)
  }

  remove(key: number): void {
    this.s.delete(key)
  }

  contains(key: number): boolean {
    return this.s.has(key)
  }
}
