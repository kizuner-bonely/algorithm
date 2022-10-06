export function solveNQueens(n: number): string[][] {
  const ret: string[][] = []
  const marks = {
    lr: new Set<number>(),
    rl: new Set<number>(),
  }
  dfs(n, [], marks, ret)
  return ret
}

function dfs(
  n: number,
  pos: number[],
  marks: { lr: Set<number>; rl: Set<number> },
  ret: string[][],
) {
  if (pos.length === n) {
    ret.push(generateKeyBoard(n, pos))
    return
  }

  const row = pos.length
  let _lr: number, _rl: number
  for (let i = 0; i < n; i++) {
    ;(_lr = row - i), (_rl = row + i)
    if (pos.includes(i) || marks.lr.has(_lr) || marks.rl.has(_rl)) continue
    marks.lr.add(_lr)
    marks.rl.add(_rl)
    pos.push(i)
    dfs(n, pos, marks, ret)
    pos.pop()
    marks.lr.delete(_lr)
    marks.rl.delete(_rl)
  }
}

function generateKeyBoard(n: number, pos: number[]) {
  const ret: string[] = []
  let temp: string[] = []
  for (const p of pos) {
    temp = new Array(n).fill('.')
    temp[p] = 'Q'
    ret.push(temp.join(''))
  }
  return ret
}
