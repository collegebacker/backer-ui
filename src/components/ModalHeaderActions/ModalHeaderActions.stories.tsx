import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ModalHeaderActions } from '..'

localStorage.clear()

export default {
  title: 'Misc/ModalHeaderActions',
  component: ModalHeaderActions
} as ComponentMeta<typeof ModalHeaderActions>

const Template: ComponentStory<typeof ModalHeaderActions> = (args) => {
  return <ModalHeaderActions {...args} />
}

export const Default = Template.bind({})
Default.args = {
  cancelButton: {
    onClick: () => {
      console.log('cancel')
    }
    // disabled: true
  },
  saveButton: {
    label: 'Save',
    onClick: () => {
      console.log('save')
    },
    show: true,
    disabled: true
  }
}
