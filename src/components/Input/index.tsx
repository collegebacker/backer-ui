import Icon from '../Icon'
import React from 'react'
import styles from './styles.module.scss'

import { CleaveOptions } from 'cleave.js/options'
import Cleave from 'cleave.js/react'

export interface InputProps {
  // input props
  cursor?: string
  name: string
  label?: string
  value?: string
  className?: string
  style?: React.CSSProperties
  disabled?: boolean
  pattern?: string
  type?: string
  autoComplete?: string
  autoFocus?: boolean
  required?: boolean
  tabIndex?: number
  readOnly?: boolean
  // input events
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  // custom props
  errorMessage?: string
  helperText?: string
  hideSpinButton?: boolean
  icon?: {
    name: IconTypes
    onClick?: () => void
  }
  cleaveOptions?: CleaveOptions
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // const [value, setValue] = React.useState(props.value || '')

  const inputArgs = {
    className: `${styles.input} ${
      props.hideSpinButton ? styles.hideSpinButton : ''
    }
    ${props.readOnly ? '' : styles.focusState}
    `,
    style: {
      cursor: props.cursor
    },
    name: props.name,
    value: props.value,
    placeholder: '&nbsp;',
    type: props.type,
    autoComplete: props.autoComplete,
    autoFocus: props.autoFocus,
    required: props.required,
    tabIndex: props.tabIndex,
    readOnly: props.readOnly,
    disabled: props.disabled,
    onClick: props.onClick,
    onChange: props.onChange,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onKeyPress: props.onKeyPress
  }

  return (
    <div
      className={`${styles.componentWrap} ${props.className} ${
        props.errorMessage ? styles.error : ''
      } ${props.errorMessage ? styles.shake : ''} ${
        props.disabled ? styles.disabled : ''
      }`}
      style={props.style}
    >
      <div
        className={`${styles.inputWrap}`}
        style={{
          height: props.label !== '' ? '68px' : '40px'
        }}
      >
        {props.icon && (
          <div
            onClick={props.icon.onClick}
            className={styles.icon}
            style={{
              pointerEvents: props.icon.onClick !== undefined ? 'auto' : 'none'
            }}
          >
            <Icon name={props.icon.name} />
          </div>
        )}

        {props.cleaveOptions ? (
          <Cleave {...inputArgs} options={props.cleaveOptions} />
        ) : (
          <input {...inputArgs} ref={ref} />
        )}

        {props.label !== '' && (
          <label className={styles.label} htmlFor={props.name}>
            {props.label}
          </label>
        )}
      </div>

      {(props.helperText || props.errorMessage) && (
        <span className={`typo-app-body-caption ${styles.helperText}`}>
          {props.errorMessage ? props.errorMessage : props.helperText}
        </span>
      )}
    </div>
  )
})

Input.displayName = 'Input'

Input.defaultProps = {
  className: '',
  label: 'Label',
  errorMessage: '',
  hideSpinButton: true,
  style: {},
  value: '',
  cursor: 'caret',
  errorAnimation: true
} as Partial<InputProps>

export default Input
