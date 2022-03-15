import { postsHandlers } from './posts'

export const handlers = [
  // ...db.posts.toHandlers('rest'),
  ...postsHandlers,
]
