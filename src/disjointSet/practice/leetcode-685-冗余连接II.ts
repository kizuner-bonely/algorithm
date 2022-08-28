export function findRedundantDirectedConnection(edges: number[][]): number[] {
  const s = new DisjointSet(edges.length)
  const parentNodes = Array.from(new Array(edges.length + 1), (_, i) => i)
  let twoParentsEdge = -1,
    circleEdge = -1

  edges.forEach(([p, c], i) => {
    if (parentNodes[c] !== c) {
      // 双重父节点
      twoParentsEdge = i
    } else if (s.find(c) === s.find(p)) {
      // 闭环
      circleEdge = i
    } else {
      parentNodes[c] = p
      s.merge(p, c)
    }
  })

  if (twoParentsEdge === -1) {
    // 没有双重父节点，说明是闭环连接
    return edges[circleEdge]
  } else {
    // 有双重父节点
    if (circleEdge !== -1) {
      // 有双重父节点和闭环
      return [parentNodes[edges[twoParentsEdge][1]], edges[twoParentsEdge][1]]
    }
    // 只有双重父节点
    return edges[twoParentsEdge]
  }
}

class DisjointSet {
  private parent: number[]
  constructor(n: number) {
    this.parent = Array.from(new Array(n), (_, i) => i)
  }

  find(i: number): number {
    return (this.parent[i] =
      this.parent[i] === i ? i : this.find(this.parent[i]))
  }

  merge(a: number, b: number) {
    this.parent[this.find(b)] = this.find(a)
  }
}
