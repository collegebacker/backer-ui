import React from 'react'
import Input from '../Input'
import { replaceWithNumbers } from '../../utils'
import inputStyles from '../Input/styles.module.scss'
import dateinputStyles from './styles.module.scss'
import Icon from '../Icon'

import { InputProps } from '../Input'

export interface Props extends InputProps {
  className?: string
  style?: React.CSSProperties
  name: string
  label?: string
}

const DateInput = React.forwardRef<any, Props>((props, ref) => {
  const dayInputRef = React.useRef<HTMLInputElement>(null)
  const monthInputRef = React.useRef<HTMLInputElement>(null)
  const yearInputRef = React.useRef<HTMLInputElement>(null)

  const [dateValue, setDateValue] = React.useState({
    day: '',
    month: '',
    year: ''
  })

  const [isFocused, setIsFocused] = React.useState(false)

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

  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    if (props.onFocus) {
      props.onFocus(e)
    }
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  const handleOnChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value)

    if (value.length === 2) {
      monthInputRef.current?.focus()
    }

    setDateValue({
      ...dateValue,
      day: value
    })
  }

  const handleOnChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value)

    if (value.length === 2) {
      yearInputRef.current?.focus()
    }

    setDateValue({
      ...dateValue,
      month: value
    })
  }

  const handleOnChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value)

    setDateValue({
      ...dateValue,
      year: value
    })

    if (value.length === 4) {
      yearInputRef.current?.blur()
    }
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (e.currentTarget.value === '') {
        if (e.currentTarget.name === 'day') {
          dayInputRef.current?.blur()
        } else if (e.currentTarget.name === 'month') {
          dayInputRef.current?.focus()
        } else if (e.currentTarget.name === 'year') {
          monthInputRef.current?.focus()
        }
      }
    }
  }

  const showPlaceholderCondition =
    isFocused || `${dateValue.day}${dateValue.month}${dateValue.year}` !== ''

  return (
    <div
      ref={ref}
      className={`${inputStyles.componentWrap} ${props.className} ${
        props.isInvalid ? inputStyles.error : ''
      } ${props.isInvalid && props.errorAnimation ? inputStyles.shake : ''}
        ${props.disabled ? inputStyles.disabled : ''}
      `}
      style={props.style}
    >
      <div
        className={`${inputStyles.inputWrap}`}
        style={{
          height: props.label !== '' ? '68px' : '40px'
        }}
      >
        <section
          className={`${dateinputStyles.inputs} ${
            isFocused ? dateinputStyles.inputsFocused : ''
          }`}
        >
          <input
            ref={dayInputRef}
            type='text'
            name='day'
            className={`${dateinputStyles.input} ${dateinputStyles.dayMonthInput}`}
            placeholder={showPlaceholderCondition ? 'DD' : ''}
            value={dateValue.day}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChangeDay}
            onKeyDown={handleOnKeyDown}
            pattern='[0-9]*'
          />
          <span
            className={`${dateinputStyles.slash} ${
              showPlaceholderCondition ? '' : dateinputStyles.hide
            }`}
          >
            /
          </span>
          <input
            ref={monthInputRef}
            type='text'
            name='month'
            className={`${dateinputStyles.input} ${dateinputStyles.dayMonthInput}`}
            placeholder={showPlaceholderCondition ? 'MM' : ''}
            value={dateValue.month}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChangeMonth}
            onKeyDown={handleOnKeyDown}
            pattern='[0-9]*'
          />
          <span
            className={`${dateinputStyles.slash} ${
              showPlaceholderCondition ? '' : dateinputStyles.hide
            }`}
          >
            /
          </span>
          <input
            ref={yearInputRef}
            type='text'
            name='year'
            className={`${dateinputStyles.input} ${dateinputStyles.yearInput}`}
            placeholder={showPlaceholderCondition ? 'YYYY' : ''}
            value={dateValue.year}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChange={handleOnChangeYear}
            onKeyDown={handleOnKeyDown}
            pattern='[0-9]*'
          />
          <div className={dateinputStyles.icon}>
            <Icon name={'calendar'} />
          </div>
        </section>

        {props.label !== '' ? (
          <label
            className={`${dateinputStyles.label} ${
              showPlaceholderCondition
                ? dateinputStyles.labelIfInputFocused
                : ''
            }`}
            htmlFor={props.name}
          >
            {props.label}
          </label>
        ) : null}
      </div>
      {(props.helperText && !props.isInvalid) || props.errorMessage === '' ? (
        <span className={`typo-app-body-caption ${inputStyles.helperText}`}>
          {props.helperText}
        </span>
      ) : null}
      {props.isInvalid ? (
        <span className={`typo-app-body-caption ${inputStyles.helperText}`}>
          {props.errorMessage}
        </span>
      ) : null}
    </div>
  )
})

DateInput.defaultProps = {
  className: '',
  style: {},
  label: 'Label',
  type: 'text',
  name: 'date-input',
  helperText: 'Enter date as DD/MM/YYYY'
} as Partial<Props>

export default DateInput
