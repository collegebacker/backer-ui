import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Checkbox } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
)

export const Default = Template.bind({})
Default.args = {
  id: 'checkbox',
  name: 'checkbox',
  className: '',
  checked: false,
  disabled: false
}

const checkboxesArr = [
  {
    name: 'checkbox1',
    checked: false,
    children: <span className='typo-app-body-caption'>Hit the gym</span>,
    disabled: false
  }
]

const LabelTemplate: ComponentStory<typeof Checkbox> = () => {
  return (
    <div>
      {checkboxesArr.map((checkbox) => (
        <Checkbox
          key={checkbox.name}
          name={checkbox.name}
          id={checkbox.name}
          checked={checkbox.checked}
          disabled={checkbox.disabled}
        >
          {checkbox.children}
        </Checkbox>
      ))}
    </div>
  )
}

export const MultipleAndLabel = LabelTemplate.bind({})
Default.args = {}
