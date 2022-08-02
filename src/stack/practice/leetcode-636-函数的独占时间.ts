export function exclusiveTime(n: number, logs: string[]): number[] {
  const ans: number[] = new Array(n).fill(0)
  const tasks: string[] = []

  for (let i = 0, pre = 0; i < logs.length; i++) {
    const log = logs[i]
    const [taskID, status, time] = log.split(':')

    if (tasks.length) {
      ans[+tasks[tasks.length - 1]] += +time - pre + Number(status === 'end')
    }
    pre = +time + Number(status === 'end')
    if (status === 'start') tasks.push(taskID)
    else tasks.pop()
  }

  return ans
}
