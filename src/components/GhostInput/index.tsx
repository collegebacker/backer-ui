import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface GhostInputIProps {
  className?: string
  type?: 'text' | 'password' | 'number' | 'email' | 'money'
  allowCents?: boolean
  maximumMoney?: number
  required?: boolean
  name: string
  label?: string
  value?: string
  autoFocus?: boolean
  placeholder?: string
  errorMessage?: string
  helperText?: string
  id?: string
  tabIndex?: number
  currency?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void
  onEnterKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onInvalid?: (event: React.FormEvent<HTMLInputElement>) => void
}

const GhostInput = React.forwardRef<any, GhostInputIProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [val, setVal] = React.useState(props.value)

  const convertTypes = (type: string) => {
    switch (type) {
      case 'text':
        return 'text'
      case 'password':
        return 'password'
      case 'number':
        return 'number'
      case 'email':
        return 'email'
      case 'money':
        return 'text'
      default:
        return 'text'
    }
  }

  React.useEffect(() => {
    if (props.errorMessage && inputRef.current) {
      inputRef.current.focus()
    }
  }, [props.errorMessage])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === 'money') {
      const cleanedVal = e.target.value.replace(/,/g, '.')
      const ex = props.allowCents ? /^[0-9]+\.?[0-9]*$/ : /^[0-9]+$/

      if (cleanedVal.match(ex) || cleanedVal === '') {
        let val = cleanedVal.replace(/[^0-9.]/g, '')
        let roundedVal = parseInt(val, 10)

        if (
          roundedVal <= props.maximumMoney ||
          cleanedVal === '' ||
          !props.maximumMoney
        ) {
          if (val.split('.')[1] && val.split('.')[1].length > 2) {
            let trimmmedVal =
              val.split('.')[0] + '.' + val.split('.')[1].slice(0, 2)
            setVal(trimmmedVal)
          } else {
            setVal(val)
          }
        }
      }
    }

    if (props.type === 'number') {
      const value = e.target.value.replace(/[^0-9]/g, '')
      setVal(value)
    }

    if (props.type === 'text' || props.type === 'password') {
      setVal(e.target.value)
    }

    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div
      ref={ref}
      className={joinClasses([
        styles.componentWrap,
        props.className,
        props.errorMessage ? styles.error : '',
        props.type === 'money' ? styles.money : '',
        props.errorMessage ? styles.shake : ''
      ])}
    >
      <div className={styles.inputWrap}>
        {props.type === 'money' ? (
          <span className={styles.moneySign}>{props.currency}</span>
        ) : null}

        {props.label !== '' ? (
          <label
            className={`typo-app-body-caption ${styles.label}`}
            htmlFor={props.name}
          >
            {props.label}
          </label>
        ) : null}

        <input
          ref={inputRef}
          tabIndex={props.tabIndex}
          autoFocus={props.autoFocus}
          type={convertTypes(props.type)}
          id={props.id ? props.id : props.name}
          name={props.name}
          className={styles.input}
          placeholder={props.placeholder}
          value={val}
          required={props.required}
          onChange={handleOnChange}
          onSubmit={props.onSubmit}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInvalid={props.onInvalid}
        />
      </div>

      {(props.helperText || props.errorMessage) && (
        <span className={`typo-app-body-caption ${styles.helperText}`}>
          {props.errorMessage ? props.errorMessage : props.helperText}
        </span>
      )}
    </div>
  )
})

GhostInput.displayName = 'GhostInput'

GhostInput.defaultProps = {
  className: '',
  label: 'Label',
  type: 'text',
  value: '',
  currency: '$',
  required: false,
  autoFocus: false,
  errorMessage: '',
  placeholder: '',
  hideSpinButton: true,
  allowCents: false,
  maximumMoney: null
} as Partial<GhostInputIProps>

export default GhostInput
