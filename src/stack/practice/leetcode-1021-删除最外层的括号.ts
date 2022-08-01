export function removeOuterParentheses(s: string): string {
  let ans = ''
  for (let i = 0, pre = 0, diff = 0; i < s.length; i++) {
    if (s[i] === '(') diff++
    else diff--

    if (!diff) {
      ans += s.slice(pre + 1, i)
      pre = i + 1
    }
  }

  return ans
}
