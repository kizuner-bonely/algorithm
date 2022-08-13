function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0
  const q: Array<[TreeNode, bigint]> = [[root, 0n]]
  let ans = 0n
  let size = 0
  let l = 0n,
    r = 0n
  let cur: [TreeNode, bigint]

  while (q.length) {
    size = q.length
    l = q[0][1]
    while (size--) {
      cur = q.shift()!
      r = cur[1] - l
      if (cur[0].left) q.push([cur[0].left, 2n * cur[1]])
      if (cur[0].right) q.push([cur[0].right, 2n * cur[1] + 1n])
    }
    if (r + 1n > ans) ans = r + 1n
  }

  return Number(ans)
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
