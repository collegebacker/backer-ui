import Icon from '../Icon'
import React from 'react'
import styles from './styles.module.scss'

import { CleaveOptions } from 'cleave.js/options'
import Cleave from 'cleave.js/react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  errorMessage?: string
  helperText?: string
  errorAnimation?: boolean
  hideSpinButton?: boolean
  icon?: {
    name: IconTypes
    onClick?: () => void
  }
  cleaveOptions?: CleaveOptions
}

const Input: React.FC<InputProps> = (props) => {
  const inputRef = React.useRef<any>(null)

  const [val, setVal] = React.useState(props.value)

  React.useEffect(() => {
    setVal(props.value)
  }, [props.value])

  React.useEffect(() => {
    if (props.errorMessage && inputRef.current) {
      inputRef.current.focus()
    }
  }, [props.errorMessage])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setVal(value)

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div
      className={`${styles.componentWrap} ${props.className} ${
        props.errorMessage ? styles.error : ''
      } ${props.errorMessage && props.errorAnimation ? styles.shake : ''}
        ${props.disabled ? styles.disabled : ''}
      `}
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
          <Cleave
            className={`${styles.input} ${
              props.hideSpinButton ? styles.hideSpinButton : ''
            }`}
            options={props.cleaveOptions}
            value={val}
            onChange={handleOnChange}
            name={props.name}
            disabled={props.disabled}
            ref={inputRef}
          />
        ) : (
          <input
            className={`${styles.input} ${
              props.hideSpinButton ? styles.hideSpinButton : ''
            }`}
            value={val}
            onChange={handleOnChange}
            name={props.name}
            disabled={props.disabled}
            ref={inputRef}
          />
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
}

Input.displayName = 'Input'

Input.defaultProps = {
  className: '',
  label: 'Label',
  errorMessage: '',
  hideSpinButton: true,
  style: {},
  value: '',
  errorAnimation: true
} as Partial<InputProps>

export default Input
