export function hIndex(citations: number[]): number {
  let h = 1
  citations
    .sort((a, b) => b - a)
    .every(n => {
      if (n >= h) {
        h++
        return true
      }
      return false
    })
  return h - 1
}

// function _hIndex(citations: number[]): number {
//   sort(citations)
//   let h = 1
//   for (let i = citations.length - 1; i >= 0; i--) {
//     if (citations[i] >= h) h++
//     else break
//   }
//   return h - 1
// }

// function sort(nums: number[]) {
//   const temp = [...nums]
//   let counter = Array.from(new Array(65536), _ => 0)
//   nums.forEach(n => counter[getLower16(n)]++)
//   for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1]
//   for (let i = nums.length - 1; i >= 0; i--)
//     temp[--counter[getLower16(nums[i])]] = nums[i]

//   counter = Array.from(new Array(65536), _ => 0)
//   temp.forEach(n => counter[getHigher16(n)]++)
//   for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1]
//   for (let i = temp.length - 1; i >= 0; i--)
//     nums[--counter[getHigher16(temp[i])]] = temp[i]
// }

// function getLower16(n: number) {
//   return n & 0xffff
// }

// function getHigher16(n: number) {
//   return (n & 0xffff0000) >> 16
// }
