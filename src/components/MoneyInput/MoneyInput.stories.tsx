import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MoneyInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/MoneyInput',
  component: MoneyInput
} as ComponentMeta<typeof MoneyInput>

const Template: ComponentStory<typeof MoneyInput> = (args) => {
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (value: number) => {
    setValue(value)
    console.log('value', value)
  }

  return (
    <div style={{ width: '300px' }}>
      <MoneyInput {...args} onChange={handleOnChange} value={value} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Amount',
  className: '',
  errorMessage: '',
  style: {}
}
