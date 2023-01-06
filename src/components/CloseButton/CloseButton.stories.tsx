import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CloseButton } from '..'
import { Props } from '.'

localStorage.clear()

export default {
  title: 'Forms/CloseButton',
  component: CloseButton
} as ComponentMeta<typeof CloseButton>

const Template: ComponentStory<typeof CloseButton> = (
  args: JSX.IntrinsicAttributes & Props
) => <CloseButton {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
  style: {}
}
