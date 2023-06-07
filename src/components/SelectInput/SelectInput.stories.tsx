import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SelectInput } from '..'
import React from 'react'

localStorage.clear()

export default {
  title: 'Forms/SelectInput',
  component: SelectInput
} as ComponentMeta<typeof SelectInput>

const Template: ComponentStory<typeof SelectInput> = (args) => {
  const [firstValue, setFirstValue] = React.useState('brather')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <SelectInput
        {...args}
        value={firstValue}
        onSelect={(option) => {
          // console.log('option story', option.value)
          setFirstValue(option.value)
        }}
      />
      <SelectInput {...args} />
      <SelectInput {...args} />
      <button
        onClick={() => {
          console.log('clear')
          setFirstValue(null)
        }}
      >
        clear
      </button>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  className: '',
  errorMessage: '',
  modalTitle: 'Select an option',
  modalDescription: 'How are you related to the child?',
  value: 'mother',
  options: [
    { label: 'Mather', value: 'mother' },
    { label: 'Father', value: 'father' },
    {
      label: 'Fother',
      value: 'foter'
    },
    { label: 'Brother', value: 'brather' }
  ],
  style: {},
  onSelect: (e) => console.log('selected', e)
}
