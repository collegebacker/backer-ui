import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SelectInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/SelectInput',
  component: SelectInput
} as ComponentMeta<typeof SelectInput>

const Template: ComponentStory<typeof SelectInput> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <SelectInput {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  errorMessage: '',
  modalTitle: 'Select an option',
  modalDescription: 'How are you related to the child?',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ],
  style: {},
  onSelect: (e) => console.log('selected', e)
}
