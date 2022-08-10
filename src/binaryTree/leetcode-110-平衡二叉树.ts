export function isBalanced(root: TreeNode | null): boolean {
  return count(root) >= 0
}

// 判定一棵树是否为平衡二叉树，非负数为平衡，负数为不平衡
function count(root: TreeNode | null): number {
  if (!root) return 0
  const l = count(root.left)
  const r = count(root.right)
  // 左子树或右子树不平衡，返回负数
  if (l < 0 || r < 0) return -2
  // 左右子树高度相差超过1，返回负数
  if (Math.abs(l - r) > 1) return -2
  return Math.max(l, r) + 1
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
