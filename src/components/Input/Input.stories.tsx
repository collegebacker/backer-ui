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

  React.useEffect(() => {
    console.log(inputRef.current)
    if (inputRef.current) {
      console.log(inputRef.current)
    }
  }, [inputRef.current])

  return (
    <Input {...args} onChange={handleOnChange} value={value} ref={inputRef} />
  )
}

export const Default = Template.bind({})
