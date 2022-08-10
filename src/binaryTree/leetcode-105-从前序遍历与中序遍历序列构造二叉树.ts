export function buildTree(
  preorder: number[],
  inorder: number[],
): TreeNode | null {
  if (!preorder.length) return null
  const rootVal = preorder[0]
  const root = new TreeNode(rootVal)
  const rootInd = inorder.findIndex(val => val === rootVal)

  const il = inorder.slice(0, rootInd)
  const ir = inorder.slice(rootInd + 1)
  const pl: number[] = [],
    pr: number[] = []

  for (let i = 1; i < preorder.length; i++) {
    if (i <= il.length) pl.push(preorder[i])
    else pr.push(preorder[i])
  }

  root.left = buildTree(pl, il)
  root.right = buildTree(pr, ir)
  return root
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
