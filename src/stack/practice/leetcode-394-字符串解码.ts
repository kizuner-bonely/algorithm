const nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

export function decodeString(s: string): string {
  // 0: [  1: 数字  2: 字符串
  const str: string[] = [],
    actions: Array<0 | 1 | 2> = []
  let times = '',
    tempStr = ''

  for (const c of s) {
    if (nums.has(c)) {
      if (tempStr) {
        str.push(tempStr)
        actions.push(2)
        tempStr = ''
      }
      times += c
      continue
    }
    if (c === '[') {
      str.push(times)
      actions.push(1)
      times = ''

      actions.push(0)
      continue
    }
    if (c === ']') {
      while (actions[actions.length - 1] !== 0) {
        actions.pop()
        tempStr = str.pop() + tempStr
      }
      actions.pop() // '['
      const t = +str.pop()!
      actions.pop() // '数字'

      str.push(tempStr.repeat(t))
      actions.push(2)

      tempStr = ''
      continue
    }
    tempStr += c
  }

  if (tempStr) str.push(tempStr)

  return str.join('')
}
