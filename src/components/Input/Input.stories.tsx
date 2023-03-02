import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input, Button } from '..'
import React from 'react'

export default {
  title: 'Forms/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

const SetValueUseImperativeHandleTemplate: ComponentStory<typeof Input> = (
  args
) => {
  const ref = React.useRef<any>(null)

  return (
    <>
      <Input ref={ref} {...args} />
      <Button
        label='Set Value'
        style={{
          marginTop: '40px'
        }}
        onClick={() => {
          ref.current.setValue('Hello')
        }}
      />
    </>
  )
}

export const useImperativeHandle = SetValueUseImperativeHandleTemplate.bind({})

useImperativeHandle.args = {
  autoFocus: false,
  disabled: false,
  required: false,
  value: '',
  hideSpinButton: true,
  helperText: "Hello! I'm a helper text",
  icon: {
    name: 'question',
    onClick: () => {}
  }
}

const uncontrolledInputTemplate: ComponentStory<typeof Input> = (args) => {
  const [val, setVal] = React.useState<string>('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
    console.log(e.target.value)
  }

  return (
    <Input {...args} isUncontrolled value={val} onChange={handleOnChange} />
  )
}

export const uncontrolledInput = uncontrolledInputTemplate.bind({})

uncontrolledInput.args = {
  value: '',
  isUncontrolled: true,
  autoFocus: false,
  disabled: false,
  required: false,
  hideSpinButton: true,
  helperText: "Hello! I'm a helper text",
  icon: {
    name: 'question',
    onClick: () => {}
  }
}
