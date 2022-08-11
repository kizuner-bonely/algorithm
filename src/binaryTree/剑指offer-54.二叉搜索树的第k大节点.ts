export function kthLargest(root: TreeNode | null, k: number): number {
  const sortedArr: number[] = []
  midorder(root, sortedArr)
  return sortedArr[sortedArr.length - k]
}

function midorder(root: TreeNode | null, sortedArr: number[]) {
  if (!root) return
  midorder(root.left, sortedArr)
  sortedArr.push(root.val)
  midorder(root.right, sortedArr)
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
