import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface RangeInputIProps {
  className?: string
  style?: React.CSSProperties
  min?: number
  max?: number
  step?: number
  value?: number
  autofocus?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RangeInput: React.FC<RangeInputIProps> = (props) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [value, setValue] = React.useState(props.value || 0)

  const updateInputTrack = () => {
    const input = inputRef.current
    if (input) {
      const percentage = ((value - props.min) / (props.max - props.min)) * 100
      input.style.setProperty('--high', `${percentage}%`)
    }
  }

  React.useEffect(() => {
    updateInputTrack()
  }, [value])

  React.useEffect(() => {
    setValue(props.value || 0)
  }, [props.value])

  // handle auto focus
  React.useEffect(() => {
    if (props.autofocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.valueAsNumber
    setValue(value)

    props.onChange && props.onChange(event)
  }

  return (
    <input
      ref={inputRef}
      type='range'
      className={joinClasses([styles.slider, props.className])}
      style={props.style}
      min={props.min}
      max={props.max}
      step={props.step}
      value={value}
      onChange={handleChange}
    />
  )
}

RangeInput.defaultProps = {
  className: '',
  style: {},
  step: 1,
  min: 0,
  max: 100,
  value: 0,
  autofocus: false
} as Partial<RangeInputIProps>

export default RangeInput
