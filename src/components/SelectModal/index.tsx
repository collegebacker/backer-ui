import React from 'react'
import Checkmark from '../Checkmark'
import Modal from '../Modal'
import { useDidMountEffect } from '../../hooks'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface SelectModalIProps {
  isOpen?: boolean
  modalTitle?: string
  modalDescription?: string
  value?: string | null
  options: Array<{ label: string; value: string; className?: string }>
  closeOnSelect?: boolean
  onSelect: (value: SelectOptionType) => void
  onCloseClick?: () => void
  customContent?: React.ReactElement
}

const SelectModal: React.FC<SelectModalIProps> = (props) => {
  const [value, setValue] = React.useState(props.value)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const itemRefs = React.useRef([])

  const handleOnSelect = (value: SelectOptionType) => {
    const selectedOption = props.options.find(
      (option) => option.value === value.value
    )
    setValue(selectedOption.value)
    props.closeOnSelect && setIsModalOpen(false)
    props.onSelect && props.onSelect(selectedOption)
  }

  React.useEffect(() => {
    setIsModalOpen(props.isOpen)
  }, [props.isOpen])

  useDidMountEffect(() => {
    // if value is empty or null, set value to null
    if (!props.value) {
      setValue(null)
    }
  }, [props.value])

  React.useEffect(() => {
    // Focus item if key is matched with first letter of item label
    const handleKeyDown = (e: KeyboardEvent) => {
      const firstLetter = e.key.toLowerCase()
      const matchedOption = props.options.find((option) =>
        option.label.toLowerCase().startsWith(firstLetter)
      )
      if (matchedOption) {
        // focus item
        const index = props.options.indexOf(matchedOption)
        itemRefs.current[index]?.focus()
      }

      // Close modal on escape key
      if (e.key === 'Escape') {
        setIsModalOpen(false)
        props.onCloseClick && props.onCloseClick()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [props.options, itemRefs])

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
      <ul className={styles.listWrap}>
        {props.options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOnSelect(option)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleOnSelect(option)
              }
            }}
            className={joinClasses([styles.listItem, option.className || ''])}
            tabIndex={0}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <span className='typo-app-body-main'>{option.label}</span>
            {value === option.value && <Checkmark checked />}
          </li>
        ))}
      </ul>
      {props.customContent}
    </Modal>
  )
}

SelectModal.defaultProps = {
  isOpen: false,
  closeOnSelect: true
} as SelectModalIProps

export default SelectModal
