import { describe, expect, test } from 'vitest'
import { getHappyNum } from './self-happyNumSum'

describe('linked list practice', () => {
  test('happy num summed from 0 to 100000', () => {
    expect(getHappyNum(100000)).toBe(692159746)
  })
})
