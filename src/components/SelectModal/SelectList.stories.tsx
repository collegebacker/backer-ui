import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SelectModal, Button } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Modal/SelectModal',
  component: SelectModal
} as ComponentMeta<typeof SelectModal>

const Template: ComponentStory<typeof SelectModal> = (args) => {
  const modalRef = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <SelectModal
        {...args}
        ref={modalRef}
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
    { label: 'Mather', value: 'mother' },
    { label: 'Father', value: 'father' },
    { label: 'Brother', value: 'brather' }
  ],
  onSelect: (e) => console.log('selected', e)
}
