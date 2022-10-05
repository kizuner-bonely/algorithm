export function findTargetSumWays(nums: number[], target: number): number {
  return dfs(nums, 0, target)
}

function dfs(nums: number[], i: number, target: number): number {
  if (i === nums.length - 1) {
    let ret = 0
    if (nums[i] === target) ret++
    if (-nums[i] === target) ret++
    return ret
  }
  const p = dfs(nums, i + 1, target + nums[i])
  const n = dfs(nums, i + 1, target - nums[i])
  return p + n
}
