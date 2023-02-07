import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkmark } from '..'

localStorage.clear()

export default {
  title: 'Misc/Checkmark',
  component: Checkmark
} as ComponentMeta<typeof Checkmark>

const Template: ComponentStory<typeof Checkmark> = (args) => {
  return <Checkmark {...args} />
}

export const Default = Template.bind({})
Default.args = {
  checked: false
}
