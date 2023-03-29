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
  options: [
    {
      label: 'Yes',
      value: 'yes'
    },
    {
      label: 'No',
      icon: 'calendar',
      value: 'no'
    },
    {
      label: 'Apple',
      value: 'apple',
      paymentIcon: 'apple-pay'
    }
  ],
  onChange: (value) => console.log(value)
}
