function findSubsequences(nums: number[]): number[][] {
  const ret: number[][] = []
  const record = new Set()

  const dfs = (i: number, buffer: number[]) => {
    if (buffer.length > 1) {
      const sign = buffer.toString()
      if (!record.has(sign)) {
        ret.push([...buffer])
        record.add(sign)
      }
    }

    for (let j = i; j < nums.length; j++) {
      if (!buffer.length || nums[j] >= buffer[buffer.length - 1]) {
        buffer.push(nums[j])
        dfs(j + 1, buffer)
        buffer.pop()
      }
    }
  }

  dfs(0, [])
  return ret
}
