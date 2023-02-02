import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  label?: string
  defaultValue?: string
  rows?: number
  helperText?: string
  isInvalid?: boolean
  autoFocus?: boolean
  autoHeight?: boolean
  onChange?: (value: string) => void
}

const Textarea: React.FC<Props> = (props) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const labelRef = React.useRef<HTMLLabelElement>(null)
  const [value, setValue] = React.useState(props.defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)

    if (props.onChange) {
      props.onChange(e.target.value)
    }
  }

  const handleAutoHeight = () => {
    if (props.autoHeight && textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  React.useEffect(() => {
    handleAutoHeight()
  }, [value, textareaRef.current])

  // auto height on resize
  React.useEffect(() => {
    if (props.autoHeight && textareaRef.current) {
      handleAutoHeight()

      window.addEventListener('resize', handleAutoHeight)

      return () => {
        window.removeEventListener('resize', handleAutoHeight)
      }
    }
  }, [])

  // handdle auto focus
  React.useEffect(() => {
    if (props.autoFocus && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [textareaRef.current])

  // hide label when textarea is scrolled
  React.useEffect(() => {
    if (textareaRef.current && labelRef.current) {
      const handleScroll = () => {
        if (textareaRef.current.scrollTop > 12) {
          labelRef.current.classList.add(styles.hiddenLabel)
        } else {
          labelRef.current.classList.remove(styles.hiddenLabel)
        }
      }

      textareaRef.current.addEventListener('scroll', handleScroll)

      return () => {
        textareaRef.current?.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div
      className={`${styles.wrap} ${props.className} ${
        props.isInvalid ? styles.error : ''
      }`}
      style={{ ...props.style }}
    >
      <label className={`typo-app-body-caption ${styles.label}`} ref={labelRef}>
        {props.label}:
      </label>
      <textarea
        ref={textareaRef}
        className={`typo-app-body-paragraph ${styles.textarea}`}
        style={props.style}
        onChange={handleChange}
        value={value}
        rows={props.rows}
      />
      {props.helperText && (
        <span className={`typo-app-body-caption ${styles.helperText}`}>
          {props.helperText}
        </span>
      )}
    </div>
  )
}

Textarea.defaultProps = {
  className: '',
  style: {},
  label: 'Message',
  defaultValue: '',
  rows: 3,
  helperText: '',
  isInvalid: false,
  autoFocus: false,
  autoHeight: false
} as Partial<Props>

export default Textarea
