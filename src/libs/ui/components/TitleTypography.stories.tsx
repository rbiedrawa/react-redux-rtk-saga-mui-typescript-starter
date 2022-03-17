import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import TitleTypography from './TitleTypography'

export default {
  title: 'UI/components/TitleTypography',
  component: TitleTypography,
} as ComponentMeta<typeof TitleTypography>

const Template: ComponentStory<typeof TitleTypography> = args => <TitleTypography {...args} />

export const Empty = Template.bind({})
Empty.args = {
  title: '',
}

export const WithTitle = Template.bind({})
WithTitle.args = {
  title: 'Hello World!!!',
}
