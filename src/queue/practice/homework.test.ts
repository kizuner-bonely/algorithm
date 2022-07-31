import { describe, expect, test } from 'vitest'
import { pancakeSort } from './homework'

describe('queue homework', () => {
  test('pancake', () => {
    const input = [9, 8, 4, 1, 3, 2, 6, 5, 7]
    expect(pancakeSort(input).join('')).toBe('9887565442322')
  })
})
