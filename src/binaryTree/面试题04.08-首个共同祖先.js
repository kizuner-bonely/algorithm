/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode | null}
 */
export function lowestCommonAncestor(root, p, q) {
  if (!root) return null
  if (root === p || root === q) return root
  const l = lowestCommonAncestor(root.left, p, q)
  const r = lowestCommonAncestor(root.right, p, q)
  if (l && r) return root
  if (l) return l
  return r
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
