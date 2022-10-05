export function combinationSum(
  candidates: number[],
  target: number,
): number[][] {
  const ret: number[][] = []
  candidates = candidates.sort()
  dfs(candidates, 0, [], target, ret)
  return ret
}

function dfs(
  candidates: number[],
  ind: number,
  prev: number[],
  target: number,
  ret: number[][],
) {
  if (ind === candidates.length || target < 0) return
  if (!target) {
    ret.push([...prev])
    return
  }
  // move on
  dfs(candidates, ind + 1, prev, target, ret)
  // check based on a starter
  prev.push(candidates[ind])
  dfs(candidates, ind, prev, target - candidates[ind], ret)
  prev.pop()
}
