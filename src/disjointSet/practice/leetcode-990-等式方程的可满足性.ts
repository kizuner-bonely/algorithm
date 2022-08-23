enum alphabet {
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
}

type Alpha = keyof typeof alphabet

export function equationsPossible(equations: string[]): boolean {
  const s = new DisjointSet()
  equations.forEach(e => {
    if (e[1] === '=') s.merge(alphabet[e[0] as Alpha], alphabet[e[3] as Alpha])
  })
  for (const e of equations) {
    if (e[1] === '=') continue
    if (s.find(alphabet[e[0] as Alpha]) === s.find(alphabet[e[3] as Alpha])) {
      return false
    }
  }
  return true
}

class DisjointSet {
  private data: number[] = Array.from(new Array(26), (_, i) => i)

  find(i: number): number {
    return (this.data[i] = this.data[i] === i ? i : this.find(this.data[i]))
  }

  merge(a: number, b: number) {
    this.data[this.find(a)] = this.find(b)
  }
}
