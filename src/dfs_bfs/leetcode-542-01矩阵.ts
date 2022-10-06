type Data = {
  x: number
  y: number
  val: 0 | 1
  visited: boolean
  distance: number
}

const offset = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

export function updateMatrix(mat: number[][]): number[][] {
  const dMat: Data[][] = []
  for (let i = 0; i < mat.length; i++) {
    dMat.push(
      mat[i].map((val, j) => {
        return {
          val,
          x: j,
          y: i,
          distance: 0,
          visited: !val,
        }
      }) as Data[],
    )
  }

  dfs(dMat)

  return dMat.map(d => {
    return d.map(({ distance }) => distance)
  })
}

function dfs(dMat: Data[][]) {
  let cur: Data, dx: number, dy: number
  const processQueue: Data[] = []

  dMat.forEach(row => {
    row.forEach(item => item.visited && processQueue.push(item))
  })

  while (processQueue.length) {
    cur = processQueue.shift()!

    offset.forEach(([x, y]) => {
      dx = cur.x + x
      dy = cur.y + y

      if (dx < 0 || dx === dMat[0].length || dy < 0 || dy === dMat.length)
        return
      if (dMat[dy][dx].visited) return

      dMat[dy][dx].visited = true
      dMat[dy][dx].distance = cur.distance + 1
      processQueue.push(dMat[dy][dx])
    })
  }
}
