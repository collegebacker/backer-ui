import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Navbar } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Misc/Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {
  className: '',
  style: {},
  backButton: {
    label: 'Back',
    onClick: () => {
      console.log('Back')
    }
  },
  buttons: [
    {
      label: 'Button',
      icon: 'alert',
      onClick: () => {
        console.log('Button')
      }
    },
    {
      icon: 'analytics',
      onClick: () => {
        console.log('Button')
      }
    }
  ]
}
