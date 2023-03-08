import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ZipInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/ZipInput',
  component: ZipInput
} as ComponentMeta<typeof ZipInput>

const Template: ComponentStory<typeof ZipInput> = (args) => {
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  return (
    <div style={{ width: '300px' }}>
      <ZipInput {...args} onChange={handleOnChange} value={value} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  errorMessage: '',
  style: {}
}
