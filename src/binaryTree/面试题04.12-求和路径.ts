export function pathSum(root: TreeNode | null, sum: number): number {
  if (!root) return 0
  return count(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

function count(root: TreeNode | null, sum: number): number {
  if (!root) return 0
  return (
    +(root.val === sum) +
    count(root.left, sum - root.val) +
    count(root.right, sum - root.val)
  )
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
