import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Dropdown } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <Dropdown {...args} />
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
