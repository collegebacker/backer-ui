import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface CheckmarkIProps {
  className?: string
  style?: React.CSSProperties
  checked?: boolean
  visibleOutline?: boolean
  onChange?: (checked: boolean) => void
}

const Checkmark: React.FC<CheckmarkIProps> = (props) => {
  const [checked, setChecked] = React.useState(props.checked)

  React.useEffect(() => {
    setChecked(props.checked)

    if (props.onChange) {
      props.onChange(props.checked)
    }
  }, [props.checked])

  return (
    <div
      className={joinClasses(
        styles.wrap,
        checked ? styles.checked : '',
        props.className,
        props.visibleOutline ? styles.visibleOutline : ''
      )}
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
} as Partial<CheckmarkIProps>

export default Checkmark
