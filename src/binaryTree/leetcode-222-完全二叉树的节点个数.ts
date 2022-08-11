export function countNodes(root: TreeNode | null): number {
  return count(root, 0)
}

function count(root: TreeNode | null, num: number): number {
  if (!root) return num
  const lNum = count(root.left, 0)
  const rNum = count(root.right, 0)
  return lNum + rNum + 1
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
