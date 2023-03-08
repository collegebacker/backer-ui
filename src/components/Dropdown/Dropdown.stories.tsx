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
  options: ['Option 1', 'Option 2', 'Option 3'],
  style: {},
  onSelect: (e) => console.log('selected', e)
}