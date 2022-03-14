import { useCallback } from 'react'

import { PostFormInput } from '../components/Posts/PostForm'
import { Post } from '../libs/models/post.model'
import { postsActions, selectPosts } from '../store/features/posts/posts.slice'
import { useAppDispatch, useAppSelector } from '../store/hooks'

type PostServiceOperators = {
  posts: Post[]
  createPost: (data: PostFormInput) => void
  fetchAllPosts: () => void
  deletePost: (post: Post) => void
  updatePost: (post: Post) => void
}

/**
 * PostService custom-hooks
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const usePostService = (): Readonly<PostServiceOperators> => {
  const dispatch = useAppDispatch()

  return {
    posts: useAppSelector(selectPosts),

    createPost: useCallback(
      (post: PostFormInput) => {
        dispatch(postsActions.create({ title: post.title, body: post.body }))
      },
      [dispatch],
    ),
    fetchAllPosts: useCallback(() => {
      dispatch(postsActions.fetchAll())
    }, [dispatch]),
    deletePost: useCallback(
      (post: Post) => {
        dispatch(postsActions.delete(post))
      },
      [dispatch],
    ),
    updatePost: useCallback(
      (post: Post) => {
        dispatch(
          postsActions.update({
            ...post,
            body: `Updated at ${new Date().toISOString()}`,
          }),
        )
      },
      [dispatch],
    ),
  }
}

export default usePostService
