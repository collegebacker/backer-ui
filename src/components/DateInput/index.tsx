import React from 'react'
import Input, { InputIProps } from '../Input'
import Calendar from '../Calendar'
import Modal from '../Modal'

const convertDateToString = (date: Date) => {
  // add 0 to month and day if they are single digit
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}

// rewrite onChange in InputProps to another type
interface DateInputIProps extends Omit<InputIProps, 'onChange'> {
  onChange(value: string): void
}

const DateInput: React.FC<DateInputIProps> = (props) => {
  const [value, setValue] = React.useState<string>(props.value || '')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnDayClick = (date: Date) => {
    const dateStr = convertDateToString(date)

    setValue(dateStr)
    setIsModalOpen(false)

    props.onChange && props.onChange(dateStr)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    props.onChange && props.onChange(e.target.value)
  }

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

      <Input
        label={props.label}
        name={props.name}
        disabled={props.disabled}
        errorMessage={props.errorMessage}
        autoFocus={props.autoFocus}
        value={value}
        icon={{
          name: 'calendar',
          onClick: () => {
            setIsModalOpen(true)
          }
        }}
        cleaveOptions={{
          date: true,
          datePattern: ['m', 'd', 'Y']
        }}
        pattern='[0-9]*'
        helperText={props.helperText}
        onChange={handleOnChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      />
    </>
  )
}

DateInput.defaultProps = {
  className: '',
  style: {},
  label: 'Label',
  type: 'text',
  helperText: 'MM/DD/YYYY',
  errorMessage: '',
  value: ''
} as Partial<DateInputIProps>

export default DateInput
