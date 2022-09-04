function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return []
  return dfs(1, n)
}

function dfs(l: number, r: number) {
  const ans: Array<TreeNode | null> = []
  if (l > r) {
    ans.push(null)
    return ans
  }

  for (let i = l; i <= r; i++) {
    const leftNodes = dfs(l, i - 1)
    const rightNodes = dfs(i + 1, r)

    for (const left of leftNodes) {
      for (const right of rightNodes) {
        ans.push(new TreeNode(i, left, right))
      }
    }
  }

  return ans
}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
