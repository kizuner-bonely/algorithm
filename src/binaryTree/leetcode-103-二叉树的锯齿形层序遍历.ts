export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = []
  run(root, 0, ans)
  for (let i = 0; i < ans.length; i++) {
    if (i % 2) ans[i].reverse()
  }
  return ans
}

function run(root: TreeNode | null, t: number, ans: number[][]) {
  if (!root) return
  if (t === ans.length) ans.push([])
  ans[t].push(root.val)
  run(root.left, t + 1, ans)
  run(root.right, t + 1, ans)
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
