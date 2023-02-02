import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '..'
import React from 'react'
import icons from '../Icon/icons.json'

localStorage.clear()

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' }
    },
    target: {
      options: ['_self', '_blank', '_parent', '_top'],
      control: { type: 'select' }
    },
    icon: {
      options: Object.keys(icons),
      control: { type: 'select' }
    }
  }
  // More on argss: https://storybook.js.org/docs/react/api/argss
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  mode: 'primary',
  label: 'Primary',
  size: 'default',
  tag: 'a',
  disabled: false,
  hasMinWidth: true,
  busy: false,
  busyLabel: ''
}
