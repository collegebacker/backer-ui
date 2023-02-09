import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ActionMesssage, LabelTag } from '..'

localStorage.clear()

export default {
  title: 'Messages/ActionMesssage',
  component: ActionMesssage,
  argTypes: {
    mode: {
      control: {
        type: 'radio',
        options: ['outline', 'grey', 'velvet', 'peach']
      }
    }
  }
} as ComponentMeta<typeof ActionMesssage>

const Template: ComponentStory<typeof ActionMesssage> = (args) => (
  <ActionMesssage {...args} />
)

export const NotClickable = Template.bind({})
NotClickable.args = {
  className: '',
  mode: 'outline',
  title: "This banner isn't clickable unless you add an onClick prop",
  caption:
    'This is a caption. You can use it to explain more about the message',
  onClick: undefined
}

export const Clickable = Template.bind({})
Clickable.args = {
  className: '',
  mode: 'outline',
  title: 'This banner is clickable. Click it and check the console.',
  caption:
    'This is a caption. You can use it to explain more about the message',
  onClick: () => console.log('clicked')
}

export const UnderTitleContent = Template.bind({})
UnderTitleContent.args = {
  className: '',
  mode: 'outline',
  title: 'This banner is clickable. Click it and check the console.',
  caption:
    'This is a caption. You can use it to explain more about the message',
  onClick: () => console.log('clicked'),
  undertitleContent: (
    <>
      <LabelTag label='label one' small />
      <LabelTag label='label two' small color='danger' />
    </>
  )
}
