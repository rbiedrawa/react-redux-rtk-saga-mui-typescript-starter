import { Container } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { PostForm } from 'features/posts/components/PostForm'

export default {
  title: 'features/components/posts/PostForm',
  component: PostForm,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <Container sx={{ py: 4 }} maxWidth="md">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof PostForm>

const Template: ComponentStory<typeof PostForm> = args => <PostForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
