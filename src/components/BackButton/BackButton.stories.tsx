import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BackButton } from '..'

localStorage.clear()

export default {
  title: 'Forms/BackButton',
  component: BackButton
} as ComponentMeta<typeof BackButton>

const Template: ComponentStory<typeof BackButton> = args => (
  <BackButton {...args} />
)

export const Default = Template.bind({})
Default.args = {}
