import React from 'react'
import Input from '../Input'
import Calendar from '../Calendar'
import Modal from '../Modal'

import styles from './styles.module.scss'
import Icon from '../Icon'

export interface Props {
  className?: string
  style?: React.CSSProperties
  name: string
  label?: string
  defaultValue?: string
  helperText?: string
  errorMessage?: string
  disabled?: boolean
}

const convertDateToString = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}

const DateInput: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState<string>(props.defaultValue || '')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnDayClick = (date: Date) => {
    const dateStr = convertDateToString(date)

    console.log('dateStr', dateStr)

    setValue(dateStr)
    setIsModalOpen(false)
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
      />
    </>
  )
}

DateInput.defaultProps = {
  className: '',
  style: {},
  label: 'Label',
  type: 'text',
  name: 'date-input',
  helperText: "Use 'MM/DD/YYYY' format",
  errorMessage: '',
  defaultValue: ''
} as Partial<Props>

export default DateInput
