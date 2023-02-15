import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DateInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/DateInput',
  component: DateInput
} as ComponentMeta<typeof DateInput>

const Template: ComponentStory<typeof DateInput> = (args) => {
  const [errorMessage, setErrorMessage] = React.useState<string>('')

  return (
    <div style={{ width: '300px' }}>
      <DateInput
        {...args}
        onFocus={() => {
          setErrorMessage('')
        }}
        onChange={(val) => {
          console.log('date', val)
          const date = new Date(val)

          if (isNaN(date.getTime())) {
            setErrorMessage('Invalid date')
          } else {
            setErrorMessage('')
          }

          // setErrorMessage('')
        }}
        onBlur={(val) => {
          // if val length is less than 10, it means that the user has not entered a valid date
          if (val.length < 10) {
            setErrorMessage('date cannot be empty')
          }
        }}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  helperText: 'Enter date as MM/DD/YYYY',
  style: {},
  onChange: (value) => console.log('date', value),
  defaultValue: null
}

//

const TemplatePreset: ComponentStory<typeof DateInput> = (args) => {
  return (
    <div style={{ width: '300px' }}>
      <DateInput {...args} />
    </div>
  )
}

export const DefaultValue = TemplatePreset.bind({})
DefaultValue.args = {
  className: '',
  style: {},
  onChange: (value) => console.log('date', value),
  defaultValue: new Date('1986-11-17')
}
