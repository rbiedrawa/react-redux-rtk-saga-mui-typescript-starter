import { Button, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useTranslation } from 'react-i18next'

import logoImage from 'features/posts/assets/imgs/logo192.png'
import { Post } from 'features/posts/types'

export type PostCardViewProps = {
  post: Post
  onDeleteClick: (post: Post) => void
  onUpdateClick: (post: Post) => void
}

export const PostCardView = (props: PostCardViewProps) => {
  const { t } = useTranslation()

  const { post, onDeleteClick, onUpdateClick } = props

  const handleDeleteClick = () => {
    onDeleteClick(post)
  }

  const handleUpdateClick = () => onUpdateClick(post)

  return (
    <>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia component="img" src={logoImage} alt="random" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography>{post.body}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDeleteClick}>
            {t('home.buttons.delete')}
          </Button>
          <Button size="small" onClick={handleUpdateClick}>
            {t('home.buttons.update')}
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
