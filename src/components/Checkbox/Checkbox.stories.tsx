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
    label: 'Hit the gym',
    disabled: false
  },
  {
    name: 'checkbox2',
    checked: false,
    label: 'Pay bills',
    disabled: false
  },
  {
    name: 'checkbox3',
    checked: false,
    label: 'Meet George',
    disabled: false
  },
  {
    name: 'checkbox4',
    checked: true,
    label: 'Buy eggs',
    disabled: true
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
          value={checkbox.label}
          disabled={checkbox.disabled}
          label={checkbox.label}
          labelClassName='typo-app-body-main'
        />
      ))}
    </div>
  )
}

export const MultipleAndLabel = LabelTemplate.bind({})
Default.args = {}
