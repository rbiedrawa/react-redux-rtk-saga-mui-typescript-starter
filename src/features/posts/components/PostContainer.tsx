import Container from '@mui/material/Container'
import React, { useEffect } from 'react'

import { usePostService } from '../hooks'

import { PostForm } from './PostForm'
import { PostList } from './PostList'

export const PostContainer = () => {
  const { posts, deletePost, updatePost, fetchAllPosts, createPost } = usePostService()

  useEffect(() => {
    fetchAllPosts()
  }, [fetchAllPosts])
  return (
    <>
      <Container maxWidth="xs">
        <PostForm onSubmitClick={createPost} />
      </Container>
      <Container sx={{ py: 4 }} maxWidth="md">
        <PostList posts={posts} onDeletePost={deletePost} onUpdatePost={updatePost} />
      </Container>
    </>
  )
}
