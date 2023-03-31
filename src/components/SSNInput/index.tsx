import React from 'react'
import Input, { InputProps } from '../Input'

const SSNInput = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [eyeIconOpen, setEyeIcon] = React.useState(true)

    // RENDER
    return (
      <Input
        {...props}
        type={eyeIconOpen ? 'text' : 'password'}
        icon={{
          name: eyeIconOpen ? 'opened-eye' : 'closed-eye',
          onClick: () => {
            setEyeIcon(!eyeIconOpen)
          }
        }}
        cleaveOptions={{
          blocks: [3, 2, 4],
          delimiters: ['-', '-'],
          numericOnly: true
        }}
        pattern='[0-9]*'
        ref={ref}
      />
    )
  }
)

SSNInput.defaultProps = {
  name: 'ssn'
} as Partial<InputProps>

export default SSNInput
