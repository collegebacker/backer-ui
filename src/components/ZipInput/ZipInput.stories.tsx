import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ZipInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/ZipInput',
  component: ZipInput
} as ComponentMeta<typeof ZipInput>

const Template: ComponentStory<typeof ZipInput> = (args) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  React.useEffect(() => {
    console.log(inputRef)
    if (inputRef.current) {
      console.log(inputRef.current)
    }
  }, [inputRef.current])

  return (
    <div style={{ width: '300px' }}>
      <ZipInput
        {...args}
        onChange={handleOnChange}
        value={value}
        ref={inputRef}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  errorMessage: '',
  style: {}
}
