// [price, amount]
type Data = [number, number]

export function getNumberOfBacklogOrders(orders: number[][]): number {
  const sell = new Heap('small')
  const buy = new Heap('big')

  orders.forEach(([price, amount, orderType]) => {
    if (orderType) {
      // 销售订单 sell
      while (amount && buy.size() && buy.top()[0] >= price) {
        const b = buy.top()
        const min = Math.min(amount, b[1])
        b[1] -= min
        amount -= min
        if (b[1] === 0) buy.pop()
      }
      if (amount) sell.push([price, amount])
    } else {
      // 采购订单 buy
      while (amount && sell.size() && sell.top()[0] <= price) {
        const s = sell.top()
        const min = Math.min(amount, s[1])
        s[1] -= min
        amount -= min
        if (s[1] === 0) sell.pop()
      }
      if (amount) buy.push([price, amount])
    }
  })

  let res = 0
  const mod = 1e9 + 7

  buy.data.forEach(([_, amount]) => (res = (res + amount) % mod))
  sell.data.forEach(([_, amount]) => (res = (res + amount) % mod))

  return res
}

class Heap {
  public data: Data[] = []
  constructor(private type: 'big' | 'small') {}

  size() {
    return this.data.length
  }

  top() {
    return this.data[0]
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
    let i = this.size() - 1,
      target: number
    while (i) {
      target = (i - 1) >> 1
      if (this.type === 'big') {
        if (this.data[target][0] >= this.data[i][0]) break
      } else {
        if (this.data[target][0] <= this.data[i][0]) break
      }
      this.swap(i, target)
      i = target
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
      if (this.type === 'big') {
        if (l < edge && this.data[l][0] > this.data[target][0]) target = l
        if (r < edge && this.data[r][0] > this.data[target][0]) target = r
      } else {
        if (l < edge && this.data[l][0] < this.data[target][0]) target = l
        if (r < edge && this.data[r][0] < this.data[target][0]) target = r
      }
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
}
