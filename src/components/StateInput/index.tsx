import React from 'react'
import Input, { InputProps } from '../Input'
import normalize from 'us-states-normalize'

const StateInput: React.FC<InputProps> = (props) => {
  // RENDER
  return (
    <Input
      {...props}
      onBlur={(e) => {
        const value = normalize(e.target.value)
        e.target.value = value
        props.onBlur && props.onBlur(e)
        props.onChange && props.onChange(e)
      }}
    />
  )
}

StateInput.defaultProps = {
  label: 'State'
} as Partial<InputProps>

export default StateInput
