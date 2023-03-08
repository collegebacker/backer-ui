import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PhoneInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/PhoneInput',
  component: PhoneInput
} as ComponentMeta<typeof PhoneInput>

const Template: ComponentStory<typeof PhoneInput> = (args) => {
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  return (
    <div style={{ width: '300px' }}>
      <PhoneInput {...args} onChange={handleOnChange} value={value} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  errorMessage: '',
  style: {}
}
