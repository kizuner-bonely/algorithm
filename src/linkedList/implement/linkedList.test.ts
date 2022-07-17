import { describe, expect, test } from 'vitest'
import {
  constructLinkedNode,
  constructLinkedNode2,
  setNode,
} from './linkedList'

describe('linkedList', () => {
  test('traditional linked list', () => {
    const l = constructLinkedNode(1).setNext(2).setNext(3).setNext(4).setNext(5)
    let head = l.getLinkedNode()

    let i = 1
    while (head?.value) {
      expect(head.value).toBe(i++)
      head = head.next
    }
  })

  test('array based linked list', () => {
    const { values, nextNode, head } = constructLinkedNode2(1, 1)
    setNode(2, 3)
    setNode(3, 2)
    setNode(4, 6)
    setNode(5, 5)

    let cur = head,
      i = 1
    while (values[cur]) {
      expect(values[cur]).toBe(i++)
      cur = nextNode[cur]
    }
  })
})
