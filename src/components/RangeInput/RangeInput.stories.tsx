import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RangeInput } from '..'

localStorage.clear()

export default {
  title: 'Forms/RangeInput',
  component: RangeInput
} as ComponentMeta<typeof RangeInput>

const Template: ComponentStory<typeof RangeInput> = (args) => (
  <RangeInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  onChange: (event) => {
    console.log(event.target.valueAsNumber)
  },
  className: '',
  style: {
    width: '200px'
  }
}
