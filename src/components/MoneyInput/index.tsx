import React from 'react'
import Input, { InputProps } from '../Input'

const parseNumString = (value: string, decimals: boolean | undefined) => {
  if (decimals) {
    // Remove all characters that aren't digits or "."
    value = value.replace(/[^\d.]/g, '')
    // Truncate number to 2 decimal places
    return value ? value.match(/^-?\d+(?:\.\d{0,2})?/)[0] : ''
  } else {
    value = value.replace(/\D/g, '')
    return value
  }
}

const formatCurrency = (value: any) => {
  // Add "$" and ","
  value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  return `$${value}`
}

const currencyOptionalDecimals = (number: number) => {
  return number.toFixed(2)
}

const isNumber = (value: any) => {
  return !isNaN(value)
}

export interface MoneyInputProps extends InputProps {
  decimals?: boolean
}

const MoneyInput: React.FC<MoneyInputProps> = (props) => {
  const [value, setValue] = React.useState(
    isNumber(props.value)
      ? formatCurrency((Number(props.value) / 100).toFixed(2))
      : ''
  )

  const handleOnFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    const parsedValue = parseNumString(value, props.decimals)
    const formattedValue = formatCurrency(parsedValue)

    setValue(formattedValue)

    if (props.onChange) {
      props.onChange(e)
    }
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    const num = Number(value.replace(/[^\d.]/g, ''))
    const formattedValue = currencyOptionalDecimals(num)
    const formatCurrencyValue = formatCurrency(formattedValue)

    setValue(formatCurrencyValue)

    if (props.onChange) {
      props.onChange(e)
    }
  }

  // RENDER
  return (
    <Input
      {...props}
      value={value}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
    />
  )
}

MoneyInput.defaultProps = {
  label: 'Password',
  name: 'password',
  decimals: true
} as Partial<InputProps>

export default MoneyInput
