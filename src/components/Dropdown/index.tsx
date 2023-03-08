import React from 'react'
import Input, { InputProps } from '../Input'
import Modal from '../Modal'
import ListItem from '../ListItem'
import Checkmark from '../Checkmark'

export interface DropdownProps extends InputProps {
  options: string[]
  onSelect: (value: string) => void
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [value, setValue] = React.useState(props.value || '')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnSelect = (value: string) => {
    setValue(value)
    setIsModalOpen(false)
    props.onSelect && props.onSelect(value)
  }

  // RENDER
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onCloseClick={() => setIsModalOpen(false)}
        isBottomSheet
      >
        {props.options.map((option, index) => (
          <ListItem
            key={index}
            onClick={() => handleOnSelect(option)}
            title={option}
            chevron={false}
            rightContent={value === option && <Checkmark checked />}
            divider={index !== props.options.length - 1}
          />
        ))}
      </Modal>

      <Input
        {...props}
        readOnly
        cursor='pointer'
        onClick={() => {
          setIsModalOpen(true)
        }}
        value={value}
        icon={{
          name: 'chevron-down'
        }}
      />
    </>
  )
}

export default Dropdown
