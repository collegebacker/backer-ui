import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StateInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/StateInput',
  component: StateInput
} as ComponentMeta<typeof StateInput>

const Template: ComponentStory<typeof StateInput> = (args) => {
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  return (
    <div style={{ width: '300px' }}>
      <StateInput {...args} onChange={handleOnChange} value={value} />
      <button
        onClick={() => {
          console.log('updating input')
          setValue('new value')
        }}
      >
        update input
      </button>
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
