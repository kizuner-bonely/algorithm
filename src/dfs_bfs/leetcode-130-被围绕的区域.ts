export function solve(board: string[][]): void {
  const row = board.length,
    col = board[0].length

  for (let i = 0; i < row; i++) {
    dfs(i, 0, board)
    dfs(i, col - 1, board)
  }

  for (let j = 1; j < col - 1; j++) dfs(0, j, board)
  for (let j = 1; j < col - 1; j++) dfs(row - 1, j, board)

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = board[i][j] === 'A' ? 'O' : 'X'
    }
  }
}

function dfs(row: number, col: number, board: string[][]) {
  if (row < 0 || row >= board.length) return
  if (col < 0 || col >= board[0].length) return
  if (board[row][col] === 'A') return
  if (board[row][col] === 'O') {
    board[row][col] = 'A'
    dfs(row + 1, col, board)
    dfs(row - 1, col, board)
    dfs(row, col + 1, board)
    dfs(row, col - 1, board)
  }
}
