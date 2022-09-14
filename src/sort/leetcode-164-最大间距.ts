function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0
  // 计算低 16 位
  const temp = [...nums]
  let counter = Array.from(new Array(65536), _ => 0)
  nums.forEach(n => counter[getLower16(n)]++)
  for (let i = 1; i < 65536; i++) counter[i] += counter[i - 1]
  for (let i = nums.length - 1; i >= 0; i--) {
    temp[--counter[getLower16(nums[i])]] = nums[i]
  }
  // 计算高 16 位
  counter = Array.from(new Array(65536), _ => 0)
  temp.forEach(n => counter[getHigher16(n)]++)
  for (let i = 1; i < 65536; i++) counter[i] += counter[i - 1]
  for (let i = temp.length - 1; i >= 0; i--) {
    nums[--counter[getHigher16(temp[i])]] = temp[i]
  }

  let ret = 0
  for (let i = 1; i < nums.length; i++) {
    ret = Math.max(ret, nums[i] - nums[i - 1])
  }
  return ret
}

function getLower16(n: number) {
  return n & 0xffff
}

function getHigher16(n: number) {
  return (n & 0xffff0000) >> 16
}
