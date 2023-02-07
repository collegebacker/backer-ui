import React from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface Props {
  className?: string
  style?: React.CSSProperties
  saveLabel?: string
  cancelLabel?: string
  onSaveClick?: () => void
  onCancelClick?: () => void
  showSave?: boolean
  showCancel?: boolean
}

const ModalHeaderActions: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className}`}
      style={{
        justifyContent:
          props.showSave && props.showCancel
            ? 'space-between'
            : props.showCancel
            ? 'flex-start'
            : 'flex-end',
        ...props.style
      }}
    >
      {props.showCancel && (
        <span className='typo-app-body-main' onClick={props.onCancelClick}>
          {props.cancelLabel}
        </span>
      )}
      {props.showSave && (
        <span className='typo-app-body-main' onClick={props.onSaveClick}>
          {props.saveLabel}
        </span>
      )}
    </section>
  )
}

ModalHeaderActions.defaultProps = {
  className: '',
  style: {},
  saveLabel: 'Save',
  cancelLabel: 'Cancel',
  showSave: true,
  showCancel: true
} as Partial<Props>

export default ModalHeaderActions
