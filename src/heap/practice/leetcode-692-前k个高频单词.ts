export function topKFrequent(words: string[], k: number): string[] {
  const ret: string[] = []
  const h = new BigHeap(words)
  while (k-- && h.size()) {
    ret.push(h.pop()![0])
  }
  return ret
}

type Data = [string, number]

class BigHeap {
  private data: Array<Data> = []

  constructor(data: string[]) {
    const m: Record<string, number> = {}
    data.forEach(d => {
      if (!m[d]) m[d] = 1
      else m[d]++
    })
    for (const k in m) {
      this.push([k, m[k]])
    }
  }

  size() {
    return this.data.length
  }

  push(d: Data) {
    this.data.push(d)
    this.updateUpward()
  }

  pop() {
    if (!this.size()) return
    if (this.size() === 1) return this.data.pop()
    const ret = this.data[0]
    this.data[0] = this.data.pop()!
    this.updateDownward()
    return ret
  }

  private updateUpward() {
    let i = this.data.length - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (this.isBigger(parentInd, i)) break
      this.swap(i, parentInd)
      i = parentInd
    }
  }

  private updateDownward() {
    let i = 0,
      l: number,
      r: number,
      target: number
    const edge = this.size()
    while (i < edge) {
      target = i
      l = (i << 1) + 1
      r = (i << 1) + 2
      if (l < edge && this.isBigger(l, target)) target = l
      if (r < edge && this.isBigger(r, target)) target = r
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  //* 次数 > 首字母 > 长度
  private isBigger(a: number, b: number) {
    const da = this.data[a],
      db = this.data[b]
    if (da[1] > db[1]) return true
    else if (da[1] === db[1] && da[0][0] < db[0][0]) return true
    else if (da[1] === db[1] && da[0][0] === db[0][0] && da[0] < db[0])
      return true
    return false
  }

  private swap(a: number, b: number) {
    ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}
