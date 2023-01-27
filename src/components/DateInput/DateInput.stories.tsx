import { ComponentMeta, ComponentStory } from '@storybook/react'

import { DateInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/DateInput',
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component: `
There are two ways to use this component:

1. Use \`defaultValue\` prop to set the default value of the input. The value will be a \`Date\` object.
2. Use \`onChange\` prop to get the value of the input. The value will be a \`Date\` object. Avoid to use it until the user has entered a valid date, because the value will be \`Invalid Date\` until then.
3. Using \`ref\` to get the value of the input, like this: \`ref.current.getValue()\`. The value will be a \`Date\` object. Avoid to use it until the user has entered a valid date, because the value will be \`null\` until then.
`
      }
    }
  }
} as ComponentMeta<typeof DateInput>

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  className: '',
  helperText: 'Enter date as MM/DD/YYYY',
  style: {},
  onChange: (value) => console.log('date', value),
  defaultValue: null
}

const TemplatePreset: ComponentStory<typeof DateInput> = (args) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    console.log('ref', ref.current.getValue())
  }, [])

  return (
    <div style={{ width: '300px' }}>
      <DateInput {...args} ref={ref} />
    </div>
  )
}

export const DefaultValue = TemplatePreset.bind({})
DefaultValue.args = {
  className: '',
  helperText: 'Enter date as MM/DD/YYYY',
  style: {},
  onChange: (value) => console.log('date', value),
  defaultValue: new Date('1986-11-17')
}
