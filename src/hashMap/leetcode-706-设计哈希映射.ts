export class MyHashMap {
  private m: Record<number, number> = {}

  put(key: number, value: number): void {
    this.m[key] = value
  }

  get(key: number): number {
    return this.m[key] ?? -1
  }

  remove(key: number): void {
    Reflect.deleteProperty(this.m, key)
  }
}
