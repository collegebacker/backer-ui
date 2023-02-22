import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InfoMesssage } from '..'

localStorage.clear()

export default {
  title: 'Messages/InfoMesssage',
  component: InfoMesssage,
  argTypes: {
    orientation: {
      control: { type: 'radio', options: ['left', 'right'] }
    },
    mode: {
      control: {
        type: 'radio',
        options: ['outline', 'grey', 'velvet', 'peach']
      }
    }
  }
} as ComponentMeta<typeof InfoMesssage>

const Template: ComponentStory<typeof InfoMesssage> = (args) => (
  <InfoMesssage {...args} />
)

export const WithIcon = Template.bind({})
WithIcon.args = {
  className: '',
  orientation: 'left',
  mode: 'outline',
  title: "Hi! I'm the info message. I show you things you need to know",
  caption:
    'This is a caption. You can use it to explain more about the message',
  icon: 'mail',
  onClick: undefined
}

export const WithEmoji = Template.bind({})
WithEmoji.args = {
  className: '',
  orientation: 'left',
  mode: 'outline',
  title: "Hi! I'm the info message. I show you things you need to know",
  caption:
    'This is a caption. You can use it to explain more about the message',
  emoji: '🎨',
  onClick: undefined
}

export const WithCustomHTML = Template.bind({})
WithCustomHTML.args = {
  className: '',
  orientation: 'left',
  mode: 'outline',
  title: "Hi! I'm the info message. I show you things you need to know",
  caption: (
    <>
      <span
        style={{
          color: 'var(--color-main-500)'
        }}
      >
        This is a custom span.
      </span>{' '}
      You can use it to explain more about the message
    </>
  ),
  emoji: '🎨',
  undertitleContent: <div>Hello</div>,
  onClick: undefined
}
