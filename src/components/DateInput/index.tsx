import React from 'react'
import Input, { InputProps } from '../Input'
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
type DateInputProps = Omit<InputProps, 'onChange'> & {
  onChange: (value: string) => void
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const [value, setValue] = React.useState<string>(props.value || '')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnDayClick = (date: Date) => {
    const dateStr = convertDateToString(date)

    setValue(dateStr)
    setIsModalOpen(false)

    props.onChange && props.onChange(dateStr)
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
        onChange={(e) => setValue(e.target.value)}
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
} as Partial<DateInputProps>

export default DateInput
