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
  const [isValid, setIsValid] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  const handleSubmit = () => {
    console.log('submit')

    if (isValid) {
      setErrorMessage('')
    } else {
      setErrorMessage('invalid input')
    }
  }

  return (
    <div style={{ width: '300px' }}>
      <StateInput
        {...args}
        onChange={handleOnChange}
        value={value}
        errorMessage={errorMessage}
        onValid={(valid) => {
          console.log('valid', valid)
          setIsValid(valid)
        }}
      />
      <button
        onClick={() => {
          console.log('updating input')
          setValue('new value')
        }}
      >
        update input
      </button>
      <button onClick={handleSubmit}>hadle validate</button>
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
