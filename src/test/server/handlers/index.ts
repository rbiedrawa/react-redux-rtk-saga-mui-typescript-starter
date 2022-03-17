import { postsHandlers } from 'test/server/handlers/posts'

export const handlers = [
  // ...db.posts.toHandlers('rest'),
  ...postsHandlers,
]
