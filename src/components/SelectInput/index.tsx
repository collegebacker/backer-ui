import React from 'react'
import Input, { InputProps } from '../Input'
import Modal from '../Modal'
import Checkmark from '../Checkmark'

import styles from './styles.module.scss'

export interface DropdownProps extends InputProps {
  label: string
  modalTitle?: string
  modalDescription?: string
  options: Array<{
    label: string
    value: string
  }>
  onSelect: (value: string) => void
}

const SelectInput: React.FC<DropdownProps> = (props) => {
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
        className={styles.modal}
        contentClassName={styles.modalContent}
      >
        {props.modalTitle && (
          <h2 className={`typo-app-title-small`}>{props.modalTitle}</h2>
        )}
        {props.modalDescription && (
          <p className={`typo-app-body-main`}>{props.modalDescription}</p>
        )}
        <ul className={styles.listWrap}>
          {props.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOnSelect(option.value)}
              className={styles.listItem}
            >
              <span className='typo-app-body-main'>{option.label}</span>
              {value === option.value && <Checkmark checked />}
            </div>
          ))}
        </ul>
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

SelectInput.defaultProps = {
  className: '',
  label: 'Select…'
}

export default SelectInput
