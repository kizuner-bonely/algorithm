export function deepestLeavesSum(root: TreeNode | null): number {
  const recordObj = { ans: 0, maxDepth: 0 }
  count(root, 0, recordObj)
  return recordObj.ans
}

function count(
  root: TreeNode | null,
  depth: number,
  recordObj: { ans: number; maxDepth: number },
) {
  if (!root) return
  if (depth === recordObj.maxDepth) recordObj.ans += root.val
  if (depth > recordObj.maxDepth) {
    recordObj.ans = root.val
    recordObj.maxDepth = depth
  }
  count(root.left, depth + 1, recordObj)
  count(root.right, depth + 1, recordObj)
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
