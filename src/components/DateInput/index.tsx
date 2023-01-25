import React from 'react'
import Input from '../Input'
import {
  convertStringToDataFormat,
  validateIfStringIsCorrectDate
} from '../../utils'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  name: string
  label?: string
}

const DateInput: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState<string>('')
  const [isInvalid, setIsInvalid] = React.useState<boolean>(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    const formattedValue = value

    if (!validateIfStringIsCorrectDate(formattedValue)) {
      console.error('Invalid date')
      setIsInvalid(true)
    } else {
      console.log('Valid date')
      setIsInvalid(false)
    }

    setValue(formattedValue)
  }

  // FOR IOS
  // const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   // allow only numbers and backspace
  //   if (
  //     e.key !== 'Backspace' &&
  //     e.key !== 'Delete' &&
  //     e.key !== 'ArrowLeft' &&
  //     e.key !== 'ArrowRight' &&
  //     e.key !== 'Tab' &&
  //     e.key !== 'Enter' &&
  //     (e.key < '0' || e.key > '9')
  //   ) {
  //     e.preventDefault()
  //   }

  // }

  return (
    <Input
      className={`${styles.dateInput} ${props.className}`}
      style={props.style}
      name={props.name}
      isUncontrolled
      label={props.label}
      onChange={handleOnChange}
      // onKeyDown={handleOnKeyDown}
      value={value}
      pattern='[0-9]*'
      icon={{
        name: 'calendar',
        onClick: () => {
          console.log('calendar clicked')
        }
      }}
      helperText='Enter date as DD/MM/YYYY'
      isInvalid={isInvalid}
    />
  )
}

DateInput.defaultProps = {
  className: '',
  style: {}
} as Partial<Props>

export default DateInput
