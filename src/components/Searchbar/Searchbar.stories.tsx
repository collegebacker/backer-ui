import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Searchbar } from '..'

localStorage.clear()

export default {
  title: 'Forms/Searchbar',
  component: Searchbar
} as ComponentMeta<typeof Searchbar>

const Template: ComponentStory<typeof Searchbar> = (args) => {
  return <Searchbar {...args} />
}

export const Default = Template.bind({})
Default.args = {}
