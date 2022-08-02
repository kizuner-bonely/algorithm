type Operator = '+' | '-' | '*' | '/' | '@'

const operators = new Set(['+', '-', '*', '/', '@'])

export function calculate(s: string): number {
  const nums: number[] = [],
    ops: Operator[] = []
  s += '@'
  for (let i = 0, n = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    if (!operators.has(s[i])) {
      n = n * 10 + +s[i]
      continue
    }

    nums.push(n)
    n = 0
    while (
      ops.length &&
      level(s[i] as Operator) <= level(ops[ops.length - 1])
    ) {
      const b = nums.pop()!
      const a = nums.pop()!
      nums.push(calc(a, b, ops.pop()!))
    }
    ops.push(s[i] as Operator)
  }

  return nums[0]
}

function calc(num1: number, num2: number, op: Operator) {
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return parseInt(`${num1 / num2}`)
  }
  return 0
}

function level(op: Operator | '@') {
  switch (op) {
    case '@':
      return 0
    case '+':
    case '-':
      return 1
    case '*':
    case '/':
      return 2
  }
}
