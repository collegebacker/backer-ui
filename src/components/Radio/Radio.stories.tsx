import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Radio } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/Radio',
  component: Radio
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'checkbox',
  name: 'checkbox',
  className: '',
  checked: false,
  disabled: false,
  children: <span className='typo-app-body-caption'>Hit the gym</span>
}

const radiosArr = [
  {
    name: 'checkbox1',
    checked: false,
    disabled: false,
    children: <span className='typo-app-body-caption'>Hit the gym</span>
  },
  {
    name: 'checkbox2',
    checked: false,
    children: <span className='typo-app-body-caption'>Pay bills</span>,
    disabled: false
  },
  {
    name: 'checkbox3',
    checked: false,
    children: <span className='typo-app-body-caption'>Meet George</span>,
    disabled: true
  },
  {
    name: 'checkbox4',
    checked: false,
    children: <span className='typo-app-body-caption'>Buy eggs</span>,
    disabled: false
  }
]

const RadiogroupTemplate: ComponentStory<typeof Radio> = () => {
  return (
    // radio group
    <form>
      {radiosArr.map((radio) => (
        <Radio
          key={radio.name}
          id={radio.name}
          name={'radio-group'}
          disabled={radio.disabled}
          checked={radio.checked}
        >
          {radio.children}
        </Radio>
      ))}
    </form>
  )
}

export const RadioGroup = RadiogroupTemplate.bind({})
Default.args = {
  id: 'checkbox',
  name: 'checkbox',
  className: '',
  checked: false,
  disabled: false
}
