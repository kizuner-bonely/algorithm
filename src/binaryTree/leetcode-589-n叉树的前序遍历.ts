export function preorder(root: Node | null): number[] {
  const ans: number[] = []
  run(root, ans)
  return ans
}

function run(root: Node | null, ans: number[]) {
  if (!root) return
  ans.push(root.val)
  root.children.forEach(node => run(node, ans))
}

class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}
