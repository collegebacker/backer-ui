import React from 'react'
import Input, { InputProps } from '../Input'

const PhoneInput: React.FC<InputProps> = (props) => {
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
    />
  )
}

PhoneInput.defaultProps = {
  label: 'Password'
} as Partial<InputProps>

export default PhoneInput
