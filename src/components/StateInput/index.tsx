import React from 'react'
import Input, { InputProps } from '../Input'
import normalize from 'us-states-normalize'

const abbreviateState = (val: string) => {
  return normalize(val, { region: 'all' }) || val
}

const isValid = (value: string) => {
  return normalize(value, { region: 'all' }) === value
}

const StateInput = React.forwardRef((props: InputProps, ref: any) => {
  const [errorMessage, setErrorMessage] = React.useState(
    props.errorMessage || ''
  )
  const [value, setValue] = React.useState(props.value || '')

  const normalizeValue = (value: string) => {
    const normalizedValue = abbreviateState(value)

    if (!isValid(normalizedValue)) {
      setErrorMessage('State is invalid')
    } else {
      setErrorMessage('')
      return normalizedValue
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)

    props.onChange && props.onChange(e)
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = normalizeValue(e.target.value) || ''

    props.onChange && props.onChange(e)
  }

  React.useEffect(() => {
    if (
      props.value !== undefined &&
      props.value !== value &&
      props.value !== null
    ) {
      setValue(props.value)
    }
  }, [props.value])

  React.useEffect(() => {
    if (props.errorMessage) {
      setErrorMessage(props.errorMessage)
    }
  }, [props.errorMessage])

  // RENDER
  return (
    <Input
      {...props}
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      errorMessage={errorMessage}
      ref={ref}
    />
  )
})

StateInput.displayName = 'StateInput'

StateInput.defaultProps = {
  label: 'State',
  name: 'state'
} as Partial<InputProps>

export default StateInput
