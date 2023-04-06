import React from 'react'
import Input, { InputProps } from '../Input'
import normalize from 'us-states-normalize'

const abbreviateState = (val: string) => {
  return normalize(val, { region: 'all' }) || val
}

const isValid = (value: string) => {
  return normalize(value, { region: 'all' }) === value
}

// extend the InputProps interface
export interface StateInputProps extends InputProps {
  // add a prop that will returen a boolean for valid or invalid
  onValid?: (valid: boolean) => void
}

const StateInput = React.forwardRef(
  (props: StateInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
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

      props.onChange && props.onChange(e)
      props.onValid && props.onValid(isValid(e.target.value))
    }

    const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = normalizeValue(e.target.value) || ''

      props.onChange && props.onChange(e)
      props.onValid && props.onValid(isValid(e.target.value))
    }

    React.useEffect(() => {
      if (props.value) {
        setValue(props.value)
      }

      props.onValid && props.onValid(isValid(props.value || ''))
    }, [props.value])

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
  }
)

StateInput.displayName = 'StateInput'

StateInput.defaultProps = {
  label: 'State',
  name: 'state'
} as Partial<StateInputProps>

export default StateInput
