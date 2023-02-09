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
  titleLarge: "I'm a large title",
  title: 'Title',
  topLabel: 'Top Label',
  description: 'Description',
  leftContent: <Checkmark checked />,
  rightContent: (
    <>
      <LabelTag small />
      <LabelTag small />
    </>
  ),
  middleContent: <p>Hello I'm a custom content</p>,
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

export const SimpleListNotClickable = SimpleTemplate.bind({})
SimpleListNotClickable.args = {
  title: 'Title',
  divider: true,
  onClick: undefined
}

export const SimpleListClickable = SimpleTemplate.bind({})
SimpleListClickable.args = {
  title: 'Title',
  divider: true,
  onClick: () => {
    console.log('clicked')
  }
}
