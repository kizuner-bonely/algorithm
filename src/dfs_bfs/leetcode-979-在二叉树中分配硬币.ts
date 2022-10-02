// m: 以本节点为根节点的树
// [m 需要吸收硬币的数量, m 能给出硬币的数量 ( 正为必须给出，负为必须吸收 )]
type Data = [taken: number, given: number]

export function distributeCoins(root: TreeNode | null): number {
  if (!root) return 0
  return dfs(root)[0]
}

function dfs(root: TreeNode | null): Data {
  if (!root) return [0, 0]
  const l = dfs(root.left),
    r = dfs(root.right)
  const given = l[1] + r[1] + root.val - 1
  return [l[0] + r[0] + Math.abs(given), given]
}
