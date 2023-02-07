import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListItem } from '..'

localStorage.clear()

export default {
  title: 'Forms/ListItem',
  component: ListItem
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => {
  return <ListItem {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  small: false,
  color: 'primary'
  // icon: 'tickmark'
}
