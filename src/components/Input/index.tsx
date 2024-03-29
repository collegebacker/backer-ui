import React from 'react'
import Icon from '../Icon'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

import { CleaveOptions } from 'cleave.js/options'
import Cleave from 'cleave.js/react'

export interface InputIProps {
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

const Input = React.forwardRef(
  (props: InputIProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const inputArgs = {
      className: joinClasses(
        styles.input,
        props.hideSpinButton ? styles.hideSpinButton : '',
        props.readOnly ? '' : styles.mouseStates
      ),
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
        className={joinClasses(
          styles.componentWrap,
          props.className,
          props.errorMessage ? styles.error : '',
          props.errorMessage ? styles.shake : '',
          props.disabled ? styles.disabled : ''
        )}
        data-error={props.errorMessage ? 'true' : 'false'}
        style={props.style}
      >
        <div
          className={styles.inputWrap}
          style={{
            height: props.label !== '' ? '68px' : '40px'
          }}
        >
          {props.cleaveOptions ? (
            <Cleave
              {...inputArgs}
              options={props.cleaveOptions}
              htmlRef={(i) => {
                if (ref && typeof ref !== 'function') {
                  ref.current = i
                }
              }}
            />
          ) : (
            <input {...inputArgs} ref={ref} />
          )}

          {props.label !== '' && (
            <label className={styles.label} htmlFor={props.name}>
              {props.label}
            </label>
          )}

          {props.icon || props.disabled ? (
            <div
              onClick={props.icon?.onClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  props.icon.onClick && props.icon.onClick()
                }
              }}
              className={styles.icon}
              style={{
                pointerEvents:
                  props.icon?.onClick !== undefined ? 'auto' : 'none'
              }}
              tabIndex={0}
            >
              <Icon name={!props.disabled ? props.icon.name : 'lock-closed'} />
            </div>
          ) : null}
        </div>

        {(props.helperText || props.errorMessage) && (
          <span
            className={joinClasses('typo-app-body-caption', styles.helperText)}
          >
            {props.errorMessage ? props.errorMessage : props.helperText}
          </span>
        )}
      </div>
    )
  }
)

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
} as Partial<InputIProps>

export default Input
