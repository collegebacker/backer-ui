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

  return (
    <>
      <SelectModal
        {...args}
        isOpen={isOpen}
        onSelect={(value) => {
          console.log('selected', value)
          setIsOpen(false)
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
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ],
  onSelect: (e) => console.log('selected', e)
}
