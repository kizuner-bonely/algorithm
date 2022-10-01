export function maxProduct(words: string[]): number {
  const binaryMarks: number[] = []
  words = words.sort((a, b) => b.length - a.length)
  words.forEach(word => binaryMarks.push(getBinaryMark(word)))
  let ret = 0

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (binaryMarks[i] & binaryMarks[j]) continue
      ret = Math.max(words[i].length * words[j].length, ret)
    }
  }

  return ret
}

function getBinaryMark(word: string) {
  const base = 'a'.charCodeAt(0)
  let ret = 0
  for (const c of word) {
    ret |= 1 << (c.charCodeAt(0) - base)
  }
  return ret
}
