import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Textarea } from '..'

localStorage.clear()

export default {
  title: 'Forms/Textarea',
  component: Textarea
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Message',
  defaultValue:
    'Hi! 👋  I hope this gift helps [their kid’s name] go after their dreams! I know they’re going to do big things someday. ❤️',
  rows: 1,
  helperText: 'This is a helper text',
  isInvalid: false,
  autoFocus: false,
  autoHeight: true,
  onChange: (value) => console.log(value),
  className: '',
  style: {}
}
