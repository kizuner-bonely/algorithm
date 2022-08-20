type UserInfo = {
  tweets: TweetType[] // 自己和关注者发的推文
  followees: Set<number> // 关注的人
}

type TweetType = {
  time: number
  tweetId: number
}
let time = 0

export class Twitter {
  private users: Map<number, UserInfo>
  private tweets: BigHeap
  constructor() {
    this.users = new Map()
    this.tweets = new BigHeap()
  }

  postTweet(userId: number, tweetId: number): void {
    if (!this.users.has(userId)) this.createUser(userId)
    const user = this.users.get(userId)!
    user.tweets.push({ time: time++, tweetId })
  }

  getNewsFeed(userId: number): number[] {
    if (!this.users.has(userId)) this.createUser(userId)
    const ret: number[] = []
    const user = this.users.get(userId)!
    user.followees.forEach(followee => {
      const f = this.users.get(followee)!
      f.tweets.forEach(t => {
        this.tweets.push(t)
      })
    })
    let i = 10
    while (i-- && this.tweets.size()) {
      ret.push(this.tweets.pop()!.tweetId)
    }
    this.tweets.clear()
    return ret
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.users.has(followerId)) this.createUser(followerId)
    if (!this.users.has(followeeId)) this.createUser(followeeId)
    const follower = this.users.get(followerId)!
    follower.followees.add(followeeId)
  }

  unfollow(followerId: number, followeeId: number): void {
    if (!this.users.has(followerId)) this.createUser(followerId)
    if (!this.users.has(followeeId)) this.createUser(followeeId)
    const follower = this.users.get(followerId)!
    follower.followees.delete(followeeId)
  }

  private createUser(userId: number) {
    this.users.set(userId, {
      tweets: [],
      followees: new Set([userId]),
    })
  }
}

class BigHeap {
  private heap: TweetType[] = []

  size() {
    return this.heap.length
  }

  clear() {
    this.heap = []
  }

  push(t: TweetType) {
    this.heap.push(t)
    this.updateUpward()
  }

  pop() {
    if (!this.size()) return
    if (this.size() === 1) return this.heap.pop()
    const ret = this.heap[0]
    this.heap[0] = this.heap.pop()!
    this.updateDownward()
    return ret
  }

  private updateUpward() {
    let i = this.size() - 1,
      parentInd: number
    while (i) {
      parentInd = (i - 1) >> 1
      if (this.heap[parentInd].time >= this.heap[i].time) break
      this.swap(i, parentInd)
      i = parentInd
    }
  }

  private updateDownward() {
    let i = 0,
      l: number,
      r: number,
      target: number
    const edge = this.size()
    while (i < edge) {
      target = i
      l = (i << 1) + 1
      r = (i << 1) + 2
      if (l < edge && this.heap[l].time > this.heap[target].time) target = l
      if (r < edge && this.heap[r].time > this.heap[target].time) target = r
      if (i === target) break
      this.swap(i, target)
      i = target
    }
  }

  private swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}
