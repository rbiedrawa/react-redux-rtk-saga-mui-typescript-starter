import { Grid } from "@mui/material";
import React from "react";

import { PostCardView } from "features/posts/components/PostCardView";

import { Post } from "../types";

export type PostListProps = {
  posts: Post[]
  onDeletePost: (post: Post) => void
  onUpdatePost: (post: Post) => void
}

export const PostList = (props: PostListProps) => {
  const { posts, onDeletePost, onUpdatePost } = props;

  return (
    <>
      <Grid container>
        {posts.map(post => (
          <PostCardView data-test-id={post.title} key={post.id} post={post} onDeleteClick={onDeletePost} onUpdateClick={onUpdatePost} />
        ))}
      </Grid>
    </>
  );
};
