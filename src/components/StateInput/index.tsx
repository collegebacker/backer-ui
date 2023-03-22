import React from 'react'
import Input, { InputProps } from '../Input'
import normalize from 'us-states-normalize'

const StateInput = (props: InputProps) => {
  const [errorMessage, setErrorMessage] = React.useState('')
  const [value, setValue] = React.useState(props.value || '')

  const normalizeValue = (value: string) => {
    const normalizedValue = abbreviateState(value)

    if (!isValid(normalizedValue)) {
      setErrorMessage('Invalid state')
    } else {
      setErrorMessage('')
      return normalizedValue
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    setValue(e.target.value)

    if (props.onChange) {
      props.onChange(e)
    }
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    normalizeValue(e.target.value)

    props.onChange && props.onChange(e)
  }

  React.useEffect(() => {
    if (props.value) {
      setValue(props.value)
    }
  }, [props.value])

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
  label: 'State',
  name: 'state'
} as Partial<InputProps>

export default StateInput