import React from 'react'
import Checkmark from '../Checkmark'
import Modal from '../Modal'

import styles from './styles.module.scss'

export interface Props {
  className?: string
  isOpen?: boolean
  modalTitle?: string
  modalDescription?: string
  options: Array<{ label: string; value: string }>
  closeOnSelect?: boolean
  onSelect: (value: { label: string; value: string }) => void
  onCloseClick?: () => void
}

const SelectModal: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState('')
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleOnSelect = (value: { label: string; value: string }) => {
    setValue(value.label)
    props.closeOnSelect && setIsModalOpen(false)
    props.onSelect && props.onSelect(value)
  }

  React.useEffect(() => {
    setIsModalOpen(props.isOpen)
  }, [props.isOpen])

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
      <ul className={`${styles.listWrap} ${props.className}`}>
        {props.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOnSelect(option)}
            className={styles.listItem}
          >
            <span className='typo-app-body-main'>{option.label}</span>
            {value === option.label && <Checkmark checked />}
          </div>
        ))}
      </ul>
    </Modal>
  )
}

SelectModal.defaultProps = {
  className: '',
  isOpen: false,
  closeOnSelect: true
}

export default SelectModal
