import React from 'react'
import Input, { InputProps } from '../Input'

const PasswordInput: React.FC<InputProps> = (props) => {
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
    />
  )
}

PasswordInput.defaultProps = {
  label: 'Password',
  name: 'password'
} as Partial<InputProps>

export default PasswordInput
