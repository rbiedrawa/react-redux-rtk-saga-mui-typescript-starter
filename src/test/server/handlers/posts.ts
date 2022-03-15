/* eslint-disable @typescript-eslint/no-explicit-any */

import { rest } from 'msw'

import Env from '../../../config/Env'
import { Post } from '../../../features/posts'
import { db, persistDb } from '../db'

const BASE_URL = `${Env.API_BASE_URL}/posts`

export const postsHandlers = [
  rest.get(BASE_URL, (req, res, ctx) => {
    try {
      const result = db.posts.getAll()
      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),

  rest.get(`${BASE_URL}/:postId`, (req, res, ctx) => {
    try {
      const { postId } = req.params
      const result = db.posts.findFirst({
        where: {
          id: {
            equals: postId,
          },
        },
      })
      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),

  rest.post<Post>(BASE_URL, (req, res, ctx) => {
    try {
      const data = req.body
      const result = db.posts.create({
        ...data,
      })
      persistDb('posts')
      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),

  rest.put<Post>(`${BASE_URL}/:postId`, (req, res, ctx) => {
    try {
      const data = req.body
      const { postId } = req.params
      const result = db.posts.update({
        where: {
          id: {
            equals: postId,
          },
        },
        data,
      })
      persistDb('posts')
      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),

  rest.delete<Post>(`${BASE_URL}/:postId`, (req, res, ctx) => {
    try {
      const { postId } = req.params
      const result = db.posts.delete({
        where: {
          id: {
            equals: postId,
          },
        },
      })
      persistDb('posts')
      return res(ctx.json(result))
    } catch (error: any) {
      return res(ctx.status(400), ctx.json({ message: error?.message || 'Server Error' }))
    }
  }),
]
