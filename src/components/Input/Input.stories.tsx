import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from '..'
import React from 'react'

export default {
  title: 'Forms/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState(args.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log('value', e.target.value)
  }

  return (
    <>
      <Input
        {...args}
        onChange={handleOnChange}
        disabled
        value='Disabled'
        helperText='Helper text'
      />
      <Input
        {...args}
        onChange={handleOnChange}
        icon={{
          name: 'alert'
        }}
        disabled
        helperText='Helper text'
      />
      <Input
        {...args}
        onChange={handleOnChange}
        value={value}
        ref={inputRef}
        autoFocus
      />
    </>
  )
}

export const Default = Template.bind({})
