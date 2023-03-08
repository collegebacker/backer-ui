import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SignaturePad } from '..'

localStorage.clear()

export default {
  title: 'Forms/SignaturePad',
  component: SignaturePad
} as ComponentMeta<typeof SignaturePad>

const Template: ComponentStory<typeof SignaturePad> = (args) => {
  return <SignaturePad {...args} />
}

export const Default = Template.bind({})
Default.args = {}
