import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { WarnMesssage } from '..'

localStorage.clear()

export default {
  title: 'Messages/WarnMesssage',
  component: WarnMesssage
} as ComponentMeta<typeof WarnMesssage>

const Template: ComponentStory<typeof WarnMesssage> = (args) => (
  <WarnMesssage {...args} />
)

export const Default = Template.bind({})
Default.args = {
  type: 'success',
  outline: false,
  onClick: undefined
}
