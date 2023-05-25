import React from 'react'
import Input, { InputIProps } from '../Input'

const PasswordInput = React.forwardRef(
  (props: InputIProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [eyeIconOpen, setEyeIcon] = React.useState(false)

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
        ref={ref}
      />
    )
  }
)

PasswordInput.displayName = 'PasswordInput'

PasswordInput.defaultProps = {
  label: 'Password',
  name: 'password'
} as Partial<InputIProps>

export default PasswordInput
