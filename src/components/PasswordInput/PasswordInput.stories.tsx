import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PasswordInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/PasswordInput',
  component: PasswordInput
} as ComponentMeta<typeof PasswordInput>

const Template: ComponentStory<typeof PasswordInput> = (args) => {
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  return (
    <div style={{ width: '300px' }}>
      <PasswordInput {...args} onChange={handleOnChange} value={value} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  helperText: `The password must be at least 8 characters long and contain at least one number`,
  errorMessage: '',
  style: {}
}
