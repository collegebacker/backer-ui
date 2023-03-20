import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Layout } from '..'

localStorage.clear()

export default {
  title: 'Misc/Layout',
  component: Layout
} as ComponentMeta<typeof Layout>

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

const Template: ComponentStory<typeof Layout> = (args) => {
  return (
    <Layout {...args}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Child key={i} />
      ))}
    </Layout>
  )
}

export const Default = Template.bind({})
Default.args = {}
