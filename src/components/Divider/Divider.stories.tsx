import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Divider } from '..'

localStorage.clear()

export default {
  title: 'Misc/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = args => {
  return <Divider {...args} />
}

export const Default = Template.bind({})
Default.args = {}
