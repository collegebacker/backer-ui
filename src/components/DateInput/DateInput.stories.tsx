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
          console.log('focus')
          setErrorMessage('')
        }}
        onBlur={(val: { month: string; day: string; year: string }) => {
          if (`${val.month}/${val.day}/${val.year}`.length < 10) {
            setErrorMessage('The date is incomplete')
          } else {
            const date = new Date(`${val.year}-${val.month}-${val.day}`)

            if (date.toString() === 'Invalid Date') {
              setErrorMessage('Invalid date')
            } else {
              setErrorMessage('')
            }
          }
        }}
        onChange={(val: { month: string; day: string; year: string }) => {
          const date = new Date(`${val.year}-${val.month}-${val.day}`)

          console.log('calendar', val)
          if (date.toString() === 'Invalid Date') {
            setErrorMessage('Invalid date')
          } else {
            setErrorMessage('')
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
  style: {}
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
  defaultValue: {
    month: '01',
    day: '01',
    year: '2021'
  }
}
