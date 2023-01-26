import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DateInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/DateInput',
  component: DateInput
} as ComponentMeta<typeof DateInput>

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  className: '',
  helperText: 'Enter date as DD/MM/YYYY',
  style: {}
}
