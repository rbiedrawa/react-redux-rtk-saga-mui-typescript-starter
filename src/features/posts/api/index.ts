/* eslint-disable @typescript-eslint/no-explicit-any */
import { Env } from '../../../config/Env'
import { Post } from '../types'

const POSTS_BASE_URL = `${Env.API_BASE_URL}/posts`

export const getPosts = async (): Promise<Post[]> => fetch(POSTS_BASE_URL).then(res => res.json())

export const createPost = async (post: Post): Promise<Post> =>
  fetch(POSTS_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).then(res => res.json())

export const updatePost = async (post: Post): Promise<Post> =>
  fetch(`${POSTS_BASE_URL}/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).then(res => res.json())

export const deletePost = async (post: Post): Promise<Post> =>
  fetch(`${POSTS_BASE_URL}/${post.id}`, {
    method: 'DELETE',
  }).then(() => post)
