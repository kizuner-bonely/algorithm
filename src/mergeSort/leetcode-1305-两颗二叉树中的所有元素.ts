export function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null,
): number[] {
  const ret: number[] = []
  const num1: number[] = [],
    num2: number[] = []
  mid(root1, num1)
  mid(root2, num2)
  let i = 0,
    j = 0
  while (i < num1.length || j < num2.length) {
    if (j >= num2.length || (i < num1.length && num1[i] < num2[j]))
      ret.push(num1[i++])
    else ret.push(num2[j++])
  }
  return ret
}

function mid(root: TreeNode | null, arr: number[]) {
  if (!root) return
  mid(root.left, arr)
  arr.push(root.val)
  mid(root.right, arr)
}
