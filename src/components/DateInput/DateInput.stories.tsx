import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DateInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/DateInput',
  component: DateInput
} as ComponentMeta<typeof DateInput>

const Template: ComponentStory<typeof DateInput> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <DateInput {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  helperText: 'Enter date as MM/DD/YYYY',
  onChange: (e) => console.log('date', e),
  errorMessage: '',
  style: {}
}

export const DefaultValue = Template.bind({})
DefaultValue.args = {
  className: '',
  style: {},
  onChange: (e) => console.log('date', e),
  value: '01/01/2021',
  helperText: 'Enter date as MM/DD/YYYY',
  errorMessage: ''
}
