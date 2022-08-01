export function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  const ans: number[] = []
  const nodes: TreeNode[] = [root]
  // 0: root; 1: left; 2: right;
  const status: Array<0 | 1 | 2> = [1]
  let ind = 0

  while (nodes.length) {
    switch (status[ind]) {
      case 0:
        ans.push(nodes.pop()!.val)
        status.pop()
        ind--
        break
      case 1:
        status[ind] = 2
        if (nodes[ind].left) {
          nodes.push(nodes[ind].left!)
          status.push(1)
          ind++
        }
        break
      case 2:
        status[ind] = 0
        if (nodes[ind].right) {
          nodes.push(nodes[ind].right!)
          status.push(1)
          ind++
        }
        break
    }
  }

  return ans
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
