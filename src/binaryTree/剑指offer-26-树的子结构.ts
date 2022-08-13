export function isSubStructure(
  A: TreeNode | null,
  B: TreeNode | null,
): boolean {
  if (!A || !B) return false
  if (A.val === B.val && isSame(A, B)) return true
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function isSame(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!B) return true
  if (!A) return false
  if (A.val !== B.val) return false
  return isSame(A.left, B.left) && isSame(A.right, B.right)
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
