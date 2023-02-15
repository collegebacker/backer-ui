import React from 'react'
import Calendar from '../Calendar'
import Modal from '../Modal'
import { replaceWithNumbers } from '../../utils'
import { useDidMountEffect } from '../../hooks'
import inputStyles from '../Input/styles.module.scss'
import dateinputStyles from './styles.module.scss'
import Icon from '../Icon'

type DateInputValue = {
  month: string
  day: string
  year: string
}

export interface Props {
  className?: string
  style?: React.CSSProperties
  name: string
  label?: string
  defaultValue?: Date
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  onFocus?: (val: string) => void
  onBlur?: (val: string) => void
  onChange?: (val: string) => void
}

const convertDateToObj = (date: Date) => {
  if (!date) {
    return {
      month: '',
      day: '',
      year: ''
    }
  }

  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()
  const year = date.getFullYear().toString()

  return {
    month: month.length === 1 ? `0${month}` : month,
    day: day.length === 1 ? `0${day}` : day,
    year
  }
}

const setInputWidth = (
  input: HTMLInputElement,
  length: number,
  name: 'month' | 'day' | null
) => {
  if (input) {
    const value = input.value

    if (length === 0) {
      if (name === 'month') {
        input.style.width = '45px'
      } else if (name === 'day') {
        input.style.width = '38px'
      }
    } else {
      input.style.width = `${length * 16}px`
    }
  }
}

const DateInput = React.forwardRef<any, Props>((props, ref) => {
  // REFS
  const dayInputRef = React.useRef<HTMLInputElement>(null)
  const monthInputRef = React.useRef<HTMLInputElement>(null)
  const yearInputRef = React.useRef<HTMLInputElement>(null)

  // STATES
  const [dateValue, setDateValue] = React.useState(
    convertDateToObj(props.defaultValue)
  )
  const [isFocused, setIsFocused] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // const handleOnChange = (dateValue: DateInputValue) => {
  //   if (props.onChange) {
  //     props.onChange(dateValue)
  //   }
  // }

  // HANDLERS
  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    if (props.onFocus) {
      props.onFocus(`${dateValue.month}/${dateValue.day}/${dateValue.year}`)
    }
  }

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)

    const value = {
      month:
        dateValue.month.length === 0
          ? ''
          : `${dateValue.month}`.padStart(2, '0'),
      day:
        dateValue.day.length === 0 ? '' : `${dateValue.day}`.padStart(2, '0'),
      year:
        dateValue.year.length === 0 ? '' : `${dateValue.year}`.padStart(4, '0')
    }

    setDateValue(value)
    setInputWidth(monthInputRef.current, value.month.length, 'month')
    setInputWidth(dayInputRef.current, value.day.length, 'day')

    if (props.onBlur) {
      props.onBlur(`${value.month}/${value.day}/${value.year}`)
    }
  }

  const handleOnChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 2)

    setInputWidth(e.target, value.length, 'month')

    if (value.length === 2) {
      dayInputRef.current?.focus()
    }

    const newDateState = {
      ...dateValue,
      month: value
    }

    setDateValue(newDateState)
    // handleOnChange(newDateState)
  }

  const handleOnChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 2)

    setInputWidth(e.target, value.length, 'day')

    if (value.length === 2) {
      yearInputRef.current?.focus()
    }

    const newDateState = {
      ...dateValue,
      day: value
    }

    setDateValue(newDateState)
    // handleOnChange(newDateState)
  }

  const handleOnChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 4)

    // blur if value is 4 digits
    if (value.length === 4) {
      e.target.blur()
    }

    const newDateState = {
      ...dateValue,
      year: value
    }

    setDateValue(newDateState)
    // handleOnChange(newDateState)
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (e.currentTarget.value === '') {
        if (e.currentTarget.name === 'day') {
          monthInputRef.current?.focus()
        } else if (e.currentTarget.name === 'year') {
          dayInputRef.current?.focus()
        }
      }
    }

    if (e.key === 'ArrowLeft') {
      if (e.currentTarget.value === '') {
        if (e.currentTarget.name === 'month') {
          dayInputRef.current?.focus()
        } else if (e.currentTarget.name === 'day') {
          monthInputRef.current?.focus()
        } else if (e.currentTarget.name === 'year') {
          dayInputRef.current?.focus()
        }
      }
    }

    if (e.key === 'ArrowRight') {
      if (e.currentTarget.value === '') {
        if (e.currentTarget.name === 'month') {
          dayInputRef.current?.focus()
        } else if (e.currentTarget.name === 'day') {
          yearInputRef.current?.focus()
        } else if (e.currentTarget.name === 'year') {
          monthInputRef.current?.focus()
        }
      }
    }
  }

  const handleFocusHelperClick = () => {
    monthInputRef.current?.focus()
  }

  const handleOnCalendarClick = () => {
    setIsModalOpen(true)
  }

  const handleOnDayClick = (date: Date) => {
    setIsModalOpen(false)
    setDateValue(convertDateToObj(date))
  }

  // handle width
  React.useEffect(() => {
    setInputWidth(monthInputRef.current, dateValue.month.length, 'month')
    setInputWidth(dayInputRef.current, dateValue.day.length, 'day')
  }, [])

  // handle on change
  useDidMountEffect(() => {
    if (props.onChange) {
      props.onChange(`${dateValue.month}/${dateValue.day}/${dateValue.year}`)
    }
  }, [dateValue])

  const showPlaceholderCondition =
    isFocused || `${dateValue.day}${dateValue.month}${dateValue.year}` !== ''

  // RENDER
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        isBottomSheet
        onCloseClick={() => setIsModalOpen(false)}
      >
        <Calendar
          defaultValue={new Date()}
          onClickDay={handleOnDayClick}
          minDetail={'century'}
          hideYearArrows={false}
        />
      </Modal>
      <div
        ref={ref}
        className={`${inputStyles.componentWrap} ${props.className} ${
          props.disabled ? inputStyles.disabled : ''
        }
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
            } ${
              props.errorMessage !== ''
                ? `${inputStyles.shake} ${dateinputStyles.error}`
                : ''
            }`}
          >
            <div
              className={dateinputStyles.focusHelper}
              onClick={handleFocusHelperClick}
              style={{
                display:
                  dateValue.year.length > 0 ||
                  dateValue.month.length > 0 ||
                  dateValue.day.length > 0
                    ? 'none'
                    : 'block'
              }}
            />

            <input
              ref={monthInputRef}
              type='number'
              name='month'
              className={`${dateinputStyles.input} ${dateinputStyles.monthInput}`}
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
              ref={dayInputRef}
              type='number'
              name='day'
              className={`${dateinputStyles.input} ${dateinputStyles.dayInput}`}
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
              ref={yearInputRef}
              type='number'
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
            <div
              className={dateinputStyles.icon}
              onClick={handleOnCalendarClick}
            >
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
        {props.helperText ? (
          <span
            className={`typo-app-body-caption ${inputStyles.helperText} ${
              props.errorMessage !== '' ? dateinputStyles.errorHelperText : ''
            }`}
          >
            {props.errorMessage !== '' ? props.errorMessage : props.helperText}
          </span>
        ) : null}
      </div>
    </>
  )
})

DateInput.defaultProps = {
  className: '',
  style: {},
  label: 'Label',
  type: 'text',
  name: 'date-input',
  helperText: "Use 'MM/DD/YYYY' format",
  errorMessage: '',
  defaultValue: null
} as Partial<Props>

export default DateInput
