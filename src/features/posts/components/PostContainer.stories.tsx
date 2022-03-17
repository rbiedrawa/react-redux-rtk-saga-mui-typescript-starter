import { Container } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { PostContainer } from 'features/posts/components/PostContainer'

export default {
  title: 'features/components/posts/PostContainer',
  component: PostContainer,
  decorators: [
    Story => (
      <Container sx={{ py: 4 }} maxWidth="md">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof PostContainer>

const Template: ComponentStory<typeof PostContainer> = () => <PostContainer />

export const Primary = Template.bind({})
