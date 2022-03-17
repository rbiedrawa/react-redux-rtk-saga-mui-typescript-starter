import { Container } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { PostCardView } from 'features/posts/components/PostCardView'

export default {
  title: 'features/components/posts/PostCardView',
  component: PostCardView,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    Story => (
      <Container sx={{ py: 4 }} maxWidth="md">
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof PostCardView>

const Template: ComponentStory<typeof PostCardView> = args => <PostCardView {...args} />

export const Primary = Template.bind({})
Primary.args = {
  post: { id: 'lEh', title: 'StoryBook', body: 'Example' },
}
