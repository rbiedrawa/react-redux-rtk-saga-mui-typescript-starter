import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Grid, IconButton, Paper } from "@mui/material";
import React from "react";


import { Post } from "features/posts/types";

const styles = {
  Icon: {
    marginLeft: "auto"
  },
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10
  }
};

export type PostCardViewProps = {
  post: Post
  onDeleteClick: (post: Post) => void
  onUpdateClick: (post: Post) => void
}

export const PostCardView = (props: PostCardViewProps) => {

  const { post, onDeleteClick, onUpdateClick } = props;

  const handleDeleteClick = () => {
    onDeleteClick(post);
  };

  const handleUpdateClick = () => onUpdateClick(post);

  return (
    <>
      <Grid
        xs={12}
        item
        key={post.id}
      >
        <Paper elevation={2} style={styles.Paper}>
          <span><strong>{post.title}</strong> - {post.body}</span>
          <br />
          <IconButton
            color="primary"
            aria-label="Edit"
            style={styles.Icon}
            onClick={handleUpdateClick}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="Delete"
            onClick={handleDeleteClick}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Paper>
      </Grid>
    </>
  );
};
