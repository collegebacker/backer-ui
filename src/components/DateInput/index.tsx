import React from 'react'
import Calendar from '../Calendar'
import Modal from '../Modal'
import { replaceWithNumbers } from '../../utils'
import inputStyles from '../Input/styles.module.scss'
import dateinputStyles from './styles.module.scss'
import Icon from '../Icon'

type DateInputValue = {
  day: string
  month: string
  year: string
}

export interface Props {
  className?: string
  style?: React.CSSProperties
  name: string
  label?: string
  defaultValue?: DateInputValue
  helperText?: string
  errorMessage?: string
  disabled?: boolean
  onFocus?: (val: DateInputValue) => void
  onBlur?: (val: DateInputValue) => void
  onChange?: (val: DateInputValue) => void
}

const setInputWidth = (
  input: HTMLInputElement,
  length: number,
  name: 'month' | 'day' | null
) => {
  if (input) {
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
  const [dateValue, setDateValue] = React.useState(props.defaultValue)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // HANDLERS
  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)

    if (props.onFocus) {
      props.onFocus(dateValue)
    }
  }

  // BLUR HANDLE
  const handleOnBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    type: 'month' | 'day' | 'year'
  ) => {
    setIsFocused(false)

    const maxLength = type === 'year' ? 4 : 2
    const value = replaceWithNumbers(e.target.value).slice(0, maxLength)
    const fixedValue =
      value.length === 0 ? '' : `${value}`.padStart(maxLength, '0')

    // console.log(fixedValue)

    const newDateState = {
      ...dateValue,
      [type]: fixedValue
    }

    const inputRef =
      type === 'year'
        ? null
        : type === 'month'
        ? monthInputRef.current
        : dayInputRef.current
    if (type !== 'year') {
      setInputWidth(inputRef, fixedValue.length, type)
    }
    setDateValue(newDateState)

    if (props.onBlur) {
      props.onBlur(newDateState)
    }
  }

  // CHANGE HANDLE
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'day' | 'year'
  ) => {
    const value =
      type !== 'year'
        ? replaceWithNumbers(e.target.value).slice(0, 2)
        : replaceWithNumbers(e.target.value).slice(0, 4)

    const newDateState = {
      ...dateValue,
      [type]: value
    }

    const inputRef =
      type === 'year'
        ? null
        : type === 'month'
        ? monthInputRef.current
        : dayInputRef.current
    if (type !== 'year') {
      setInputWidth(inputRef, value.length, type)
    }

    setDateValue(newDateState)

    // change focus to next input
    if (type === 'month' && value.length === 2) {
      dayInputRef.current?.focus()
    } else if (type === 'day' && value.length === 2) {
      yearInputRef.current?.focus()
    } else if (type === 'year' && value.length === 4) {
      yearInputRef.current?.blur()
    }

    if (props.onChange) {
      props.onChange(newDateState)
    }
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

    setDateValue({
      month: (date.getMonth() + 1).toString(),
      day: date.getDate().toString(),
      year: date.getFullYear().toString()
    })
  }

  // handle width
  React.useEffect(() => {
    setInputWidth(monthInputRef.current, dateValue.month.length, 'month')
    setInputWidth(dayInputRef.current, dateValue.day.length, 'day')
  }, [])

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
              onBlur={(e) => handleOnBlur(e, 'month')}
              onChange={(e) => handleOnChange(e, 'month')}
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
              onBlur={(e) => handleOnBlur(e, 'day')}
              onChange={(e) => handleOnChange(e, 'day')}
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
              onBlur={(e) => handleOnBlur(e, 'year')}
              onChange={(e) => handleOnChange(e, 'year')}
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
  defaultValue: {
    day: '',
    month: '',
    year: ''
  }
} as Partial<Props>

export default DateInput
