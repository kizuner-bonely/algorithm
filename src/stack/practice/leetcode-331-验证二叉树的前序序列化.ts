export function isValidSerialization(preorder: string): boolean {
  const s = preorder.split(',')
  const t: string[] = []
  let last = 0

  for (let i = 0; i < s.length; i++) {
    t.push(s[i])
    last = t.length - 1
    while (
      t.length >= 3 &&
      t[last] === '#' &&
      t[last - 1] === '#' &&
      t[last - 2] !== '#'
    ) {
      t[last - 2] = '#'
      t.pop()
      t.pop()
      last = t.length - 1
    }
  }

  return t.length === 1 && t[0] === '#'
}
