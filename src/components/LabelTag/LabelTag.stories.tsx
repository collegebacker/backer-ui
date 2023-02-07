import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { LabelTag } from '..'

localStorage.clear()

export default {
  title: 'Misc/LabelTag',
  component: LabelTag,
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    icon: {
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof LabelTag>

const Template: ComponentStory<typeof LabelTag> = (args) => {
  return <LabelTag {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  small: false,
  color: 'primary'
  // icon: 'tickmark'
}
