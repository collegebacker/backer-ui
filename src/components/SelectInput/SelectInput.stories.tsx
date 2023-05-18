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
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <SelectInput {...args} />
      <SelectInput {...args} />
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
  value: 'mother',
  options: [
    { label: 'Mather', value: 'mother' },
    { label: 'Father', value: 'father' },
    {
      label: 'Fother',
      value: 'foter'
    },
    { label: 'Brother', value: 'brather' }
  ],
  style: {},
  onSelect: (e) => console.log('selected', e)
}
