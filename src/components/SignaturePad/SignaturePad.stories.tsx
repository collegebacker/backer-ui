import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SignaturePad, Button } from '..'

localStorage.clear()

export default {
  title: 'Forms/SignaturePad',
  component: SignaturePad
} as ComponentMeta<typeof SignaturePad>

const Template: ComponentStory<typeof SignaturePad> = (args) => {
  const padRef = React.useRef<any>(null)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        maxWidth: '800px'
      }}
    >
      <SignaturePad {...args} ref={padRef} />
      <Button
        style={{
          maxWidth: '400px'
        }}
        label='Get the signatue'
        onClick={() => {
          if (padRef.current?.isEmpty()) {
            console.log('pad is empty')
            return
          }

          const data = padRef.current?.getImageData()
          console.log('data', data)
        }}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
