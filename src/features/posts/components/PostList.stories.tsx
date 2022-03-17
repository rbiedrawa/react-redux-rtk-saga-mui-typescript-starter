import { Container } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { PostList } from '../index'

export default {
  title: 'features/components/posts/PostList',
  component: PostList,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <Container sx={{ py: 4 }} maxWidth="md">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof PostList>

const Template: ComponentStory<typeof PostList> = args => <PostList {...args} />

export const OneItem = Template.bind({})
OneItem.args = {
  posts: [
    { id: '62219db8-1d5b-4544-bfd0-e12239c2a37e', title: 'StoryBook 1', body: 'Description 1' },
  ],
}

export const MultipleItems = Template.bind({})
MultipleItems.args = {
  posts: [
    { id: '62219db8-1d5b-4544-bfd0-e12239c2a37e', title: 'StoryBook 1', body: 'Description 1' },
    { id: '3c46f121-445d-41aa-a290-25b5fe03f461', title: 'StoryBook 2', body: 'Description 2' },
    { id: '3c46f121-445d-41aa-a290-25b5fe03f461', title: 'StoryBook 3', body: 'Description 3' },
    { id: '3c46f121-445d-41aa-a290-25b5fe03f461', title: 'StoryBook 4', body: 'Description 4' },
    { id: '3c46f121-445d-41aa-a290-25b5fe03f461', title: 'StoryBook 5', body: 'Description 5' },
    { id: '3c46f121-445d-41aa-a290-25b5fe03f461', title: 'StoryBook 6', body: 'Description 6' },
  ],
}
