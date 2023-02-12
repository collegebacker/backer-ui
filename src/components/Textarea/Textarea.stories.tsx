import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Textarea } from '..'

localStorage.clear()

export default {
  title: 'Forms/Textarea',
  component: Textarea
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [value, setValue] = React.useState(args.value)

  const handleChange = (value: string) => {
    setValue(value)
  }

  return <Textarea {...args} onChange={handleChange} value={value} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Message',
  rows: 1,
  helperText: 'This is a helper text',
  errorMessage: '',
  autoFocus: false,
  autoHeight: true,
  className: '',
  style: {}
}
