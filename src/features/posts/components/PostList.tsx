import { Grid } from '@mui/material'
import React from 'react'

import { Post } from '../types'

import { PostCardView } from './PostCardView'

export type PostListProps = {
  posts: Post[]
  onDeletePost: (post: Post) => void
  onUpdatePost: (post: Post) => void
}

export const PostList = (props: PostListProps) => {
  const { posts, onDeletePost, onUpdatePost } = props

  return (
    <>
      <Grid container spacing={4}>
        {posts.map(post => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <PostCardView post={post} onDeleteClick={onDeletePost} onUpdateClick={onUpdatePost} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
