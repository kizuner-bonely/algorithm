export function minRemoveToMakeValid(s: string): string {
  let diff = 0,
    temp = ''
  // 删除多余右括号
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') diff++
    else if (s[i] === ')') diff--

    if (diff === -1) {
      diff = 0
      continue
    }
    temp += s[i]
  }

  // 删除多余左括号
  diff = 0
  s = ''
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] === ')') diff++
    else if (temp[i] === '(') diff--

    if (diff === -1) {
      diff = 0
      continue
    }
    s = temp[i] + s
  }

  return s
}
