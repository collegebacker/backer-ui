import { ComponentMeta, ComponentStory } from '@storybook/react'

import { GhostInput } from '..'
import React from 'react'

export default {
  title: 'Forms/GhostInput',
  component: GhostInput
} as ComponentMeta<typeof GhostInput>

const Template: ComponentStory<typeof GhostInput> = (args) => (
  <GhostInput {...args} />
)

export const Text = Template.bind({})

Text.args = {
  label: 'Label',
  value: '',
  type: 'text',
  placeholder: 'Placeholder',
  onChange: () => {},
  errorMessage: 'Error message',
  helperText: '',
  allowCents: false
}

export const Money = Template.bind({})

Money.args = {
  label: 'Add your amount',
  value: '',
  maximumMoney: 1000,
  placeholder: '0',
  type: 'money',
  onChange: () => {},
  errorMessage: 'Error message',
  helperText: '',
  allowCents: true
}
