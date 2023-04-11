import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StateInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/StateInput',
  component: StateInput
} as ComponentMeta<typeof StateInput>

const Template: ComponentStory<typeof StateInput> = (args) => {
  const inputRef = React.useRef<any>(null)
  const [value, setValue] = React.useState(args.value || '')
  const [isNextScreen, setIsNextScreen] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const isValid = inputRef.current?.isValid()

    console.log(isValid)

    if (!isValid) {
      console.log('error')
      setErrorMessage('State is invalid')
      return
    }

    console.log('next screen')
    setIsNextScreen(true)
  }

  return !isNextScreen ? (
    <form style={{ width: '300px' }}>
      <StateInput
        {...args}
        ref={inputRef}
        onChange={handleOnChange}
        value={value}
        errorMessage={errorMessage}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  ) : (
    <div>
      <h1>This is the next screen. Which means the input is valid.</h1>
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
