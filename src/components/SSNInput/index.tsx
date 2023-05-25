import React from 'react'
import Input, { InputIProps } from '../Input'

const SSNInput = React.forwardRef(
  (props: InputIProps, ref: React.ForwardedRef<HTMLInputElement>) => {
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

SSNInput.displayName = 'SSNInput'

SSNInput.defaultProps = {
  name: 'ssn'
} as Partial<InputIProps>

export default SSNInput
