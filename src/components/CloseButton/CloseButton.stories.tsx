import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CloseButton } from '..'

localStorage.clear()

export default {
  title: 'Forms/CloseButton',
  component: CloseButton
} as ComponentMeta<typeof CloseButton>

const Template: ComponentStory<typeof CloseButton> = args => (
  <CloseButton {...args} />
)

export const Default = Template.bind({})
Default.args = {}
