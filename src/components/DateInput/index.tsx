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
  errorAnimation?: boolean
  disabled?: boolean
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DateInput = React.forwardRef<any, Props>((props, ref) => {
  const dayInputRef = React.useRef<HTMLInputElement>(null)
  const monthInputRef = React.useRef<HTMLInputElement>(null)
  const yearInputRef = React.useRef<HTMLInputElement>(null)

  const [dateValue, setDateValue] = React.useState(
    props.defaultValue as DateInputValue
  )
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

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
    const value = replaceWithNumbers(e.target.value).slice(0, 2)

    if (value.length === 2) {
      monthInputRef.current?.focus()
    }

    setDateValue({
      ...dateValue,
      day: value
    })
  }

  const handleOnChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 2)

    if (value.length === 2) {
      yearInputRef.current?.focus()
    }

    setDateValue({
      ...dateValue,
      month: value
    })
  }

  const handleOnChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 4)

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

  // validate date
  React.useEffect(() => {
    const { day, month, year } = dateValue

    if (`${day}${month}${year}`.length >= 8) {
      const date = new Date(`${year}-${month}-${day}`)
      const isValidDate =
        date instanceof Date &&
        !isNaN(date.getTime()) &&
        day.length === 2 &&
        month.length === 2 &&
        year.length === 4

      console.log(isValidDate)
      setIsInvalid(!isValidDate)
    } else {
      setIsInvalid(false)
    }
  }, [dateValue])

  const showPlaceholderCondition =
    isFocused || `${dateValue.day}${dateValue.month}${dateValue.year}` !== ''

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        isBottomSheet
        onCloseClick={() => setIsModalOpen(false)}
      >
        <Calendar
          defaultValue={new Date()}
          onClickDay={() => setIsModalOpen(false)}
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
              isInvalid ? `${inputStyles.shake} ${dateinputStyles.error}` : ''
            }`}
          >
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
              onClick={() => setIsModalOpen(true)}
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
              isInvalid ? dateinputStyles.errorHelperText : ''
            }`}
          >
            {isInvalid ? props.errorMessage : props.helperText}
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
  helperText: 'Enter date as DD/MM/YYYY',
  errorMessage: 'Enter date as DD/MM/YYYY',
  defaultValue: {
    day: '',
    month: '',
    year: ''
  }
} as Partial<Props>

export default DateInput
