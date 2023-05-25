import React from 'react'
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
  const [value, setValue] = React.useState({} as SelectOptionType)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnSelect = (value: SelectOptionType) => {
    setValue(value)
    setIsModalOpen(false)
    props.onSelect && props.onSelect(value)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  React.useEffect(() => {
    if (props.value) {
      const newValue = props.options.find(
        (option) => option.value === props.value
      )
      setValue(newValue)
    }
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
        value={value.value}
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
        value={value.label}
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
