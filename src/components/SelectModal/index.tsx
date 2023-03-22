import React from 'react'
import Checkmark from '../Checkmark'
import Modal from '../Modal'

import styles from './styles.module.scss'

export interface Props {
  isOpen?: boolean
  modalTitle?: string
  modalDescription?: string
  value?: string
  options: Array<{ label: string; value: string; className?: string }>
  closeOnSelect?: boolean
  onSelect: (value: SelectOptionType) => void
  onCloseClick?: () => void
}

const SelectModal: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState({} as SelectOptionType)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnSelect = (value: SelectOptionType) => {
    setValue(value)
    props.closeOnSelect && setIsModalOpen(false)
    props.onSelect && props.onSelect(value)
  }

  React.useEffect(() => {
    setIsModalOpen(props.isOpen)
  }, [props.isOpen])

  React.useEffect(() => {
    if (props.value) {
      const newValue = props.options.find(
        (option) => option.value === props.value
      )
      setValue(newValue)
    }
  }, [props.value])

  return (
    <Modal
      isOpen={isModalOpen}
      onCloseClick={() => {
        setIsModalOpen(false)
        props.onCloseClick && props.onCloseClick()
      }}
      isBottomSheet
      className={styles.modal}
      contentClassName={styles.modalContent}
    >
      {props.modalTitle && (
        <h2 className={`typo-app-title-small ${styles.title}`}>
          {props.modalTitle}
        </h2>
      )}
      {props.modalDescription && (
        <p className={`typo-app-body-main ${styles.description}`}>
          {props.modalDescription}
        </p>
      )}
      <ul className={`${styles.listWrap}`}>
        {props.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOnSelect(option)}
            className={`${styles.listItem} ${option.className || ''}`}
          >
            <span className='typo-app-body-main'>{option.label}</span>
            {value.value === option.value && <Checkmark checked />}
          </div>
        ))}
      </ul>
    </Modal>
  )
}

SelectModal.defaultProps = {
  isOpen: false,
  closeOnSelect: true
}

export default SelectModal
