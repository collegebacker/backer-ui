import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Stack } from '..'

localStorage.clear()

export default {
  title: 'Misc/Stack',
  component: Stack
} as ComponentMeta<typeof Stack>

const Child = () => {
  return (
    <div
      style={{
        height: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
    />
  )
}

const Template: ComponentStory<typeof Stack> = (args) => {
  return (
    <Stack {...args}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Child key={i} />
      ))}
    </Stack>
  )
}

export const Default = Template.bind({})
Default.args = {}
