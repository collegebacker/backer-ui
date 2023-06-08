import React from 'react'
import { useDidMountEffect } from '../../hooks'
import Input, { InputIProps } from '../Input'
import SelectModal from '../SelectModal'

export interface DropdownIProps extends InputIProps {
  label: string
  modalTitle?: string
  modalDescription?: string
  options: Array<SelectOptionType>
  onSelect: (value: SelectOptionType) => void
}

const SelectInput: React.FC<DropdownIProps> = (props) => {
  const [value, setValue] = React.useState(props.value)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnSelect = (option: SelectOptionType) => {
    setValue(option.value)
    setIsModalOpen(false)
    props.onSelect && props.onSelect(option)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  useDidMountEffect(() => {
    setValue(props.value)
  }, [props.value])

  // RENDER
  return (
    <>
      <SelectModal
        isOpen={isModalOpen}
        onCloseClick={() => setIsModalOpen(false)}
        modalTitle={props.modalTitle}
        modalDescription={props.modalDescription}
        options={props.options}
        value={value}
        onSelect={handleOnSelect}
      />
      <Input
        {...props}
        readOnly
        cursor='pointer'
        onClick={handleOpenModal}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleOpenModal()
          }
        }}
        value={props.options.find((option) => option.value === value)?.label}
        icon={{
          name: 'chevron-down',
          onClick: () => {
            setIsModalOpen(true)
          }
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
