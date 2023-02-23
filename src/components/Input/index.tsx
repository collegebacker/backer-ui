import Icon from '../Icon'
import React from 'react'
import styles from './styles.module.scss'

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
  isUncontrolled?: boolean
}

const Input = React.forwardRef<any, InputProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [val, setVal] = React.useState(props.value)

  React.useImperativeHandle(ref, () => ({
    getValue: () => val,
    setValue: (value: string) => setVal(value)
  }))

  React.useEffect(() => {
    if (props.errorMessage && inputRef.current) {
      inputRef.current.focus()
    }
  }, [props.errorMessage])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.isUncontrolled ? null : setVal(e.target.value)

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div
      ref={ref}
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
        {props.icon ? (
          <div
            onClick={props.icon.onClick}
            className={styles.icon}
            style={{
              pointerEvents: props.icon.onClick !== undefined ? 'auto' : 'none'
            }}
          >
            <Icon name={props.icon.name} />
          </div>
        ) : null}
        <input
          ref={inputRef}
          name={props.name}
          id={props.id ? props.id : props.name}
          className={`${styles.input} ${
            props.hideSpinButton ? styles.hideSpinButton : ''
          }`}
          placeholder='&nbsp;'
          value={props.isUncontrolled ? props.value : val}
          onChange={handleOnChange}
          tabIndex={props.tabIndex}
          autoFocus={props.autoFocus}
          type={props.type}
          required={props.required}
          onSubmit={props.onSubmit}
          onKeyDown={props.onKeyDown}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInvalid={props.onInvalid}
          disabled={props.disabled}
          pattern={props.pattern}
        />

        {props.label !== '' ? (
          <label className={styles.label} htmlFor={props.name}>
            {props.label}
          </label>
        ) : null}
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
  type: 'text',
  errorMessage: '',
  hideSpinButton: true,
  style: {},
  value: '',
  isUncontrolled: false,
  errorAnimation: true
} as Partial<InputProps>

export default Input
