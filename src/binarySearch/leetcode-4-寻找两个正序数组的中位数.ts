export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  const cnt = nums1.length + nums2.length
  const mid = (cnt + 1) >> 1
  const a = findK(nums1, nums2, 0, 0, mid)
  if (cnt & 1) return a
  const b = findK(nums1, nums2, 0, 0, mid + 1)
  return (a + b) / 2
}

function findK(
  nums1: number[],
  nums2: number[],
  l1: number,
  l2: number,
  k: number,
): number {
  if (l1 >= nums1.length) return nums2[l2 + k - 1]
  if (l2 >= nums2.length) return nums1[l1 + k - 1]
  if (k === 1) return nums1[l1] < nums2[l2] ? nums1[l1] : nums2[l2]
  const cnt1 = Math.min(k >> 1, nums1.length - l1)
  const cnt2 = Math.min(k - cnt1, nums2.length - l2)
  if (nums1[l1 + cnt1 - 1] < nums2[l2 + cnt2 - 1]) {
    return findK(nums1, nums2, l1 + cnt1, l2, k - cnt1)
  }
  return findK(nums1, nums2, l1, l2 + cnt2, k - cnt2)
}
