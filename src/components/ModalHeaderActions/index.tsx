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
  const buttonProps = {
    cancelButton: {
      label: props.cancelButton?.label || 'Cancel',
      onClick: props.cancelButton?.onClick || (() => {}),
      disabled: props.cancelButton?.disabled || false,
      show: props.cancelButton?.show || true
    },
    saveButton: {
      label: props.saveButton?.label || 'Save',
      onClick: props.saveButton?.onClick || (() => {}),
      disabled: props.saveButton?.disabled || false,
      show: props.saveButton?.show || true
    }
  }

  return (
    <section
      className={`${styles.wrap} ${props.className}`}
      style={{
        justifyContent:
          buttonProps.saveButton.show && buttonProps.cancelButton.show
            ? 'space-between'
            : buttonProps.cancelButton.show
            ? 'flex-start'
            : 'flex-end',
        ...props.style
      }}
    >
      {buttonProps.cancelButton.show && (
        <span
          className={`typo-app-body-main ${
            buttonProps.cancelButton.disabled ? styles.disabled : ''
          }`}
          onClick={buttonProps.cancelButton.onClick}
        >
          {buttonProps.cancelButton.label}
        </span>
      )}
      {buttonProps.saveButton.show && (
        <span
          className={`typo-app-body-main ${
            buttonProps.saveButton.disabled ? styles.disabled : ''
          }`}
          onClick={buttonProps.saveButton.onClick}
        >
          {buttonProps.saveButton.label}
        </span>
      )}
    </section>
  )
}

ModalHeaderActions.defaultProps = {
  className: '',
  style: {}
} as Partial<Props>

export default ModalHeaderActions
