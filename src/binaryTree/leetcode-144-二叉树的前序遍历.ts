export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  preorder(root, ans)
  return ans
}

function preorder(root: TreeNode | null, ans: number[]) {
  if (!root) return
  ans.push(root.val)
  preorder(root.left, ans)
  preorder(root.right, ans)
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
