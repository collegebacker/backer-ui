import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ListItem, Checkmark, LabelTag } from '..'

localStorage.clear()

export default {
  title: 'Forms/ListItem',
  component: ListItem
} as ComponentMeta<typeof ListItem>

const listArray = [
  {
    topLabel: 'Bret',
    title: 'Leanne Graham',
    description: 'a mother of 3, a wife, and a business owner'
  },
  {
    topLabel: 'John',
    title: 'Sophia Smith',
    description: 'a software engineer and an avid traveler'
  },
  {
    topLabel: 'Alex',
    title: 'Michael Johnson',
    description: 'a seasoned chef and a food blogger'
  },
  {
    topLabel: 'Katie',
    title: 'David Anderson',
    description: 'a fitness enthusiast and a personal trainer'
  },
  {
    topLabel: 'Emily',
    title: 'Emily Davis',
    description: 'a freelance graphic designer and an art lover'
  },
  {
    topLabel: 'Jacob',
    title: 'William Wilson',
    description: 'a musician and a music teacher'
  }
]

const DefaaultTemplate: ComponentStory<typeof ListItem> = (args) => {
  return (
    <ul>
      <ListItem {...args} />
    </ul>
  )
}

export const Default = DefaaultTemplate.bind({})
Default.args = {
  title: 'Title',
  topLabel: 'Top Label',
  description: 'Description',
  leftContent: <Checkmark checked />,
  rightContent: <LabelTag small />,
  chevron: true,
  divider: true,
  onClick: () => {
    console.log('clicked')
  }
}

const ComplexTemplate: ComponentStory<typeof ListItem> = (args) => {
  return (
    <ul>
      {listArray.map((item, index) => (
        <ListItem
          key={index}
          {...args}
          topLabel={item.topLabel}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  )
}

export const ComplexList = ComplexTemplate.bind({})
ComplexList.args = {
  leftContent: <Checkmark checked />,
  rightContent: <LabelTag small />,
  chevron: true,
  divider: true,
  onClick: () => {
    console.log('clicked')
  }
}

const SimpleTemplate: ComponentStory<typeof ListItem> = (args) => {
  return (
    <ul>
      {listArray.map((item, index) => (
        <ListItem key={index} {...args} title={item.title} />
      ))}
    </ul>
  )
}

export const SimpleList = SimpleTemplate.bind({})
SimpleList.args = {
  title: 'Title',
  chevron: true,
  divider: true,
  onClick: undefined
}
