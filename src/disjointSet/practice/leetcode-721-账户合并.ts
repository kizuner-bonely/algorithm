export function accountsMerge(accounts: string[][]): string[][] {
  const ret: string[][] = []
  const s = new DisjointSet(accounts.length)
  const a = Array.from(new Array(accounts.length), _ => [] as string[])
  const m: Record<string, number> = {}

  accounts.forEach(([_, ...emails], i) => {
    emails.forEach(email => {
      if (m[email] === undefined) m[email] = i
      else s.merge(i, m[email])
    })
  })

  accounts.forEach(([, ...emails], i) => {
    const set = new Set<string>()
    emails.forEach(email => {
      set.add(email)
    })
    set.forEach(email => a[s.find(i)].push(email))
  })

  accounts.forEach(([name], i) => {
    if (s.find(i) !== i) return
    ret.push([name, ...Array.from(new Set(a[s.find(i)].sort()))])
  })

  return ret
}

class DisjointSet {
  private data: number[]
  constructor(n: number) {
    this.data = Array.from(new Array(n), (_, i) => i)
  }

  find(i: number): number {
    return (this.data[i] = this.data[i] === i ? i : this.find(this.data[i]))
  }

  merge(a: number, b: number) {
    this.data[this.find(a)] = this.find(b)
  }
}
