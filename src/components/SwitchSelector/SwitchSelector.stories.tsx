import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SwitchSelector } from '..'

localStorage.clear()

export default {
  title: 'Forms/SwitchSelector',
  component: SwitchSelector
} as ComponentMeta<typeof SwitchSelector>

const Template: ComponentStory<typeof SwitchSelector> = (args) => {
  return <SwitchSelector {...args} />
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  activeIndex: 1,
  items: [
    {
      label: 'Yes',
      onClick: (value) => console.log(value)
    },
    {
      label: 'No',
      onClick: (value) => console.log(value),
      icon: 'calendar'
    }
  ]
}
