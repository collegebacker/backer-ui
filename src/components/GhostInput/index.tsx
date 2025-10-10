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

  const formatWithThousandSeparator = (value: string) => {
    if (value === '') return ''

    const parts = value.split('.')
    const integerPart = parts[0]
    const decimalPart = parts[1]

    // Add thousand separators to integer part
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    // Combine with decimal part if it exists
    return decimalPart !== undefined
      ? `${formattedInteger}.${decimalPart}`
      : formattedInteger
  }

  const calculateNewCursorPosition = (
    oldValue: string,
    newValue: string,
    oldCursorPosition: number
  ) => {
    if (oldValue === newValue) return oldCursorPosition

    // Count commas before cursor position in old value
    const commasBeforeCursor = (
      oldValue.substring(0, oldCursorPosition).match(/,/g) || []
    ).length

    // Count commas in new value
    const totalCommasInNew = (newValue.match(/,/g) || []).length

    // Calculate the difference in commas
    const commaDifference = totalCommasInNew - commasBeforeCursor

    // Adjust cursor position based on comma changes
    let newPosition = oldCursorPosition + commaDifference

    // Ensure cursor doesn't go beyond the end of the new value
    newPosition = Math.min(newPosition, newValue.length)

    // Ensure cursor doesn't go before the start
    newPosition = Math.max(newPosition, 0)

    return newPosition
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.type === 'money') {
      const input = e.target
      const cursorPosition = input.selectionStart
      const oldValue = val || ''

      // Remove all commas first to get clean numeric value
      const cleanedVal = e.target.value.replace(/,/g, '')
      const ex = props.allowCents ? /^[0-9]+\.?[0-9]*$/ : /^[0-9]+$/

      if (cleanedVal.match(ex) || cleanedVal === '') {
        let val = cleanedVal.replace(/[^0-9.]/g, '')
        let roundedVal = parseInt(val, 10)

        if (
          roundedVal <= props.maximumMoney ||
          cleanedVal === '' ||
          !props.maximumMoney
        ) {
          let formattedVal = ''
          if (val.split('.')[1] && val.split('.')[1].length > 2) {
            let trimmmedVal =
              val.split('.')[0] + '.' + val.split('.')[1].slice(0, 2)
            // Format with thousand separators
            formattedVal = formatWithThousandSeparator(trimmmedVal)
          } else {
            // Format with thousand separators
            formattedVal = formatWithThousandSeparator(val)
          }

          setVal(formattedVal)

          // Restore cursor position after formatting
          setTimeout(() => {
            if (input) {
              const newCursorPosition = calculateNewCursorPosition(
                oldValue,
                formattedVal,
                cursorPosition
              )
              input.setSelectionRange(newCursorPosition, newCursorPosition)
            }
          }, 0)
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
      className={joinClasses(
        styles.componentWrap,
        props.className,
        props.errorMessage ? styles.error : '',
        props.type === 'money' ? styles.money : '',
        props.errorMessage ? styles.shake : ''
      )}
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
