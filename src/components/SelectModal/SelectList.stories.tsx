import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SelectModal, Button } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Modal/SelectModal',
  component: SelectModal
} as ComponentMeta<typeof SelectModal>

const Template: ComponentStory<typeof SelectModal> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [value, setValue] = React.useState('brather')

  return (
    <>
      <SelectModal
        {...args}
        isOpen={isOpen}
        value={value}
        onSelect={(option) => {
          console.log('option story', option.value)
          setIsOpen(false)
          setValue(option.value)
        }}
        onCloseClick={() => {
          console.log('close')
          setIsOpen(false)
        }}
      />
      <Button
        label='Open Modal'
        onClick={() => {
          console.log('open')
          setIsOpen(true)
        }}
      />
      <Button
        label='Clear'
        onClick={() => {
          console.log('clear')
          setValue(null)
        }}
      />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  options: [
    { label: 'Marty Mc.Fly', value: 'Marty Mc.Fly' },
    { label: 'Father', value: 'father' },
    { label: 'Brother', value: 'brather' }
  ],
  onSelect: (e) => console.log('selected', e)
}
