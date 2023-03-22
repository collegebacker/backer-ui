import React from 'react'
import Input from '../Input'

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
  value = value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  return `$${value}`
}

const isNumber = (value: any) => {
  return !isNaN(value)
}

export interface MoneyInputProps {
  className?: string
  style?: React.CSSProperties
  decimals?: boolean
  maxAmount?: number
  name?: string
  label?: string
  value?: string | number
  errorMessage?: string
  onChange?: (target: { value: number; name: string }) => void
}

const MoneyInput: React.FC<MoneyInputProps> = (props) => {
  const [value, setValue] = React.useState(
    isNumber(props.value) ? formatCurrency(Number(props.value).toFixed(2)) : ''
  )

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let parsedValue = parseNumString(value, props.decimals)
    if (props.maxAmount && Number(parsedValue) > props.maxAmount)
      parsedValue = props.maxAmount.toString()

    setValue(formatCurrency(parsedValue))
    if (props.onChange) {
      const newEvent = {
        target: {
          value: (Number(parsedValue) * 100) as number,
          name
        }
      }
      props.onChange(newEvent as any)
    }
  }

  const handleOnFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    const num = Number(value.replace(/[^\d.]/g, '')).toFixed(2)
    const formattedNum = formatCurrency(num)

    setValue(formattedNum)

    if (props.onChange) {
      const newEvent = {
        target: {
          value: (Number(num) * 100) as number,
          name
        }
      }
      props.onChange(newEvent as any)
    }
  }

  // RENDER
  return (
    <Input
      className={props.className}
      style={props.style}
      name={props.name}
      label={props.label}
      value={value}
      errorMessage={props.errorMessage}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
    />
  )
}

MoneyInput.defaultProps = {
  label: 'Amount',
  name: 'amount',
  decimals: true
} as Partial<MoneyInputProps>

export default MoneyInput
