import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SSNInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/SSNInput',
  component: SSNInput
} as ComponentMeta<typeof SSNInput>

const Template: ComponentStory<typeof SSNInput> = (args) => {
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  return (
    <div style={{ width: '300px' }}>
      <SSNInput {...args} onChange={handleOnChange} value={value} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  errorMessage: '',
  style: {}
}
