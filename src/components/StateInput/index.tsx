import React from 'react'
import Input, { InputProps } from '../Input'
import normalize from 'us-states-normalize'

const StateInput = (props: InputProps) => {
  const [errorMessage, setErrorMessage] = React.useState('')
  const [value, setValue] = React.useState(props.value || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    setValue(e.target.value)

    if (props.onChange) {
      props.onChange(e)
    }
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const normalizedValue = abbreviateState(e.target.value)
    setValue(normalizedValue)

    props.onChange && props.onChange(e)

    if (!isValid(normalizedValue)) {
      setErrorMessage('Invalid state')
    } else {
      setErrorMessage('')
    }
  }

  // RENDER
  return (
    <Input
      {...props}
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      errorMessage={errorMessage}
    />
  )
}

const abbreviateState = (val: string) => {
  return normalize(val, { region: 'all' }) || val
}

const isValid = (value: string) => {
  return normalize(value, { region: 'all' }) === value
}

StateInput.isValid = isValid

StateInput.defaultProps = {
  label: 'State'
} as Partial<InputProps>

export default StateInput
