import React from 'react'
import Input, { InputProps } from '../Input'
import SelectModal from '../SelectModal'

type OptionProps = {
  label: string
  value: string
}

export interface DropdownProps extends InputProps {
  label: string
  modalTitle?: string
  modalDescription?: string
  options: Array<OptionProps>
  onSelect: (value: OptionProps) => void
}

const SelectInput: React.FC<DropdownProps> = (props) => {
  const [value, setValue] = React.useState(props.value || '')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnSelect = (value: OptionProps) => {
    setValue(value.label)
    setIsModalOpen(false)
    props.onSelect && props.onSelect(value)
  }

  // RENDER
  return (
    <>
      <SelectModal
        isOpen={isModalOpen}
        onCloseClick={() => setIsModalOpen(false)}
        modalTitle={props.modalTitle}
        modalDescription={props.modalDescription}
        options={props.options}
        onSelect={handleOnSelect}
      />

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

SelectInput.defaultProps = {
  className: '',
  label: 'Select…'
}

export default SelectInput
