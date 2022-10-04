export function isCousins(
  root: TreeNode | null,
  x: number,
  y: number,
): boolean {
  const [dx, fx] = dfs(root, null, x, 0)
  const [dy, fy] = dfs(root, null, y, 0)
  return dx === dy && fx !== null && fy !== null && fx !== fy
}

function dfs(
  root: TreeNode | null,
  father: TreeNode | null,
  target: number,
  depth: number,
): [number, TreeNode | null] {
  if (!root) return [depth, null]
  if (root.val === target) return [depth, father]
  const l = dfs(root.left, root, target, depth + 1)
  return l[1] ? l : dfs(root.right, root, target, depth + 1)
}
