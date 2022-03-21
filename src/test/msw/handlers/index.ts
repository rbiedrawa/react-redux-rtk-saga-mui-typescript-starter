import { postsHandlers } from 'test/msw/handlers/posts'

export const handlers = [
  // ...db.posts.toHandlers('rest'),
  ...postsHandlers,
]
