import React from 'react'
import Calendar from '../Calendar'
import Modal from '../Modal'
import { replaceWithNumbers } from '../../utils'
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
  errorAnimation?: boolean
  disabled?: boolean
  onInvalid?: (e: Date) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: Date) => void
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

const convertObjToDate = (obj: DateInputValue) => {
  return new Date(`${obj.year}-${obj.month}-${obj.day}`)
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
  const [isInvalidState, setIsInvalidState] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // IMPERATIVE HANDLERS
  React.useImperativeHandle(ref, () => ({
    getValue: () => {
      if (isInvalidState) {
        return null
      }
      return convertObjToDate(dateValue)
    }
  }))

  // FUNCTIONS
  const isInvalidDate = (date: DateInputValue) => {
    const { day, month, year } = date

    let isInvalidDate = false

    // console.log('length', `${day}${month}${year}`.length)

    if (`${day}${month}${year}`.length >= 8) {
      const date = new Date(`${year}-${month}-${day}`)

      if (date.toString() === 'Invalid Date') {
        isInvalidDate = true
      }
    } else {
      isInvalidDate = true
    }

    return isInvalidDate
  }

  const onChangeProps = (data: DateInputValue) => {
    if (props.onChange) {
      if (!isInvalidDate(data)) {
        props.onChange(convertObjToDate(data))
      } else {
        props.onChange(null)
      }
    }
  }

  // HANDLERS
  const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsInvalidState(false)
    setIsFocused(true)
    if (props.onFocus) {
      props.onFocus(e)
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
    setIsInvalidState(isInvalidDate(value))
    onChangeProps(value)

    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  const handleOnChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 2)

    if (value.length === 2) {
      dayInputRef.current?.focus()
    }

    setDateValue({
      ...dateValue,
      month: value
    })

    onChangeProps(dateValue)
  }

  const handleOnChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 2)

    if (value.length === 2) {
      yearInputRef.current?.focus()
    }

    setDateValue({
      ...dateValue,
      day: value
    })

    onChangeProps(dateValue)
  }

  const handleOnChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceWithNumbers(e.target.value).slice(0, 4)

    if (value.length === 4) {
      yearInputRef.current?.blur()
    }

    setDateValue({
      ...dateValue,
      year: value
    })

    onChangeProps(dateValue)
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (e.currentTarget.value === '') {
        if (e.currentTarget.name === 'month') {
          dayInputRef.current?.focus()
        } else if (e.currentTarget.name === 'day') {
          dayInputRef.current?.blur()
        } else if (e.currentTarget.name === 'year') {
          monthInputRef.current?.focus()
        }
      }
    }
  }

  const handleOnCalendarClick = () => {
    setIsModalOpen(true)
  }

  const handleOnDayClick = (date: Date) => {
    setIsModalOpen(false)
    setIsInvalidState(isInvalidDate(convertDateToObj(date)))
    setDateValue(convertDateToObj(date))
  }

  // EFFECTS
  // handle invalid
  React.useEffect(() => {
    if (isInvalidState && props.onInvalid) {
      props.onInvalid(convertObjToDate(dateValue))
    }
  }, [isInvalidState])

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
              isInvalidState
                ? `${inputStyles.shake} ${dateinputStyles.error}`
                : ''
            }`}
          >
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
              isInvalidState ? dateinputStyles.errorHelperText : ''
            }`}
          >
            {isInvalidState ? props.errorMessage : props.helperText}
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
  helperText: 'Enter date as MM/DD/YYYY',
  errorMessage: 'Enter date as MM/DD/YYYY',
  defaultValue: null
} as Partial<Props>

export default DateInput
