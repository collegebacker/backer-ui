import Icon from '../Icon'
import React from 'react'
import styles from './styles.module.scss'

import { CleaveOptions } from 'cleave.js/options'
import Cleave from 'cleave.js/react'

export interface InputProps {
  // input props
  cursor?: string
  name: string
  id?: string
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
  maxLength?: number
  // input events
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  // custom props
  errorMessage?: string
  helperText?: string
  hideSpinButton?: boolean
  noAutocomplete?: boolean
  icon?: {
    name: IconTypes
    onClick?: () => void
  }
  cleaveOptions?: CleaveOptions
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const inputArgs = {
    className: `${styles.input} ${
      props.hideSpinButton ? styles.hideSpinButton : ''
    }
    ${props.readOnly ? '' : styles.mouseStates}
    `,
    style: {
      cursor: props.cursor
    },
    name: props.name,
    value: props.value,
    placeholder: '&nbsp;',
    type: props.type,
    autoComplete:
      props.autoComplete && !props.noAutocomplete
        ? props.autoComplete
        : props.noAutocomplete
        ? 'new-password'
        : undefined,
    autoFocus: props.autoFocus,
    required: props.required,
    tabIndex: props.tabIndex,
    readOnly: props.readOnly,
    disabled: props.disabled,
    pattern: props.pattern,
    maxLength: props.maxLength,
    id: props.id,
    onClick: props.onClick,
    onChange: props.onChange,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onKeyDown: props.onKeyDown
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

        {props.icon && (
          <button
            onClick={props.icon.onClick}
            className={styles.icon}
            style={{
              pointerEvents: props.icon.onClick !== undefined ? 'auto' : 'none'
            }}
            tabIndex={0}
          >
            <Icon name={props.icon.name} />
          </button>
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
  errorAnimation: true,
  noAutocomplete: false
} as Partial<InputProps>

export default Input
