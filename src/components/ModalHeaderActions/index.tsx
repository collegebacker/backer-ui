import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  cancelButton?: {
    label?: string
    onClick?: () => void
    disabled?: boolean
    show?: boolean
  }
  saveButton?: {
    label?: string
    onClick?: () => void
    disabled?: boolean
    show?: boolean
  }
}

const ModalHeaderActions: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className}`}
      style={{
        justifyContent:
          props.saveButton.show && props.cancelButton.show
            ? 'space-between'
            : props.cancelButton.show
            ? 'flex-start'
            : 'flex-end',
        ...props.style
      }}
    >
      {props.cancelButton.show && (
        <span
          className={`typo-app-body-main ${
            props.cancelButton.disabled ? styles.disabled : ''
          }`}
          onClick={props.cancelButton.onClick}
        >
          {props.cancelButton.label}
        </span>
      )}
      {props.saveButton.show && (
        <span
          className={`typo-app-body-main ${
            props.saveButton.disabled ? styles.disabled : ''
          }`}
          onClick={props.saveButton.onClick}
        >
          {props.saveButton.label}
        </span>
      )}
    </section>
  )
}

ModalHeaderActions.defaultProps = {
  className: '',
  style: {},
  cancelButton: {
    label: 'Cancel',
    onClick: () => {},
    disabled: false,
    show: true
  },
  saveButton: {
    label: 'Save',
    onClick: () => {},
    disabled: false,
    show: true
  }
} as Partial<Props>

export default ModalHeaderActions
