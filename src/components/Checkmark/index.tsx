import React from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface Props {
  className?: string
  style?: React.CSSProperties
  checked?: boolean
  visibleOutline?: boolean
  onChange?: (checked: boolean) => void
}

const Checkmark: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(props.checked)

  React.useEffect(() => {
    setChecked(props.checked)

    if (props.onChange) {
      props.onChange(props.checked)
    }
  }, [props.checked])

  return (
    <div
      className={`${styles.wrap} ${checked ? styles.checked : ''} ${
        props.className
      }
      ${props.visibleOutline ? styles.visibleOutline : ''}
      `}
      style={props.style}
    >
      <Icon className={styles.tickIcon} name='tickmark' />
    </div>
  )
}

Checkmark.defaultProps = {
  className: '',
  style: {},
  checked: false,
  visibleOutline: true
} as Partial<Props>

export default Checkmark
