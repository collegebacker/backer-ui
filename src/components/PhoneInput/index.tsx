import React from 'react'
import Input, { InputProps } from '../Input'

const PhoneInput = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    // RENDER
    return (
      <Input
        {...props}
        icon={{
          name: 'phone'
        }}
        helperText='xxx-xxx-xxxx'
        cleaveOptions={{
          blocks: [3, 3, 4],
          delimiters: ['-', '-'],
          numericOnly: true
        }}
        pattern='[0-9]*'
        ref={ref}
      />
    )
  }
)

PhoneInput.defaultProps = {
  label: 'Phone number',
  name: 'phone'
} as Partial<InputProps>

export default PhoneInput
