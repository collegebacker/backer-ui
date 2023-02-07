import React from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface Props {
  className?: string
  style?: React.CSSProperties
  icon?: IconTypes
  small?: boolean
  label?: string
  color?: 'primary' | 'danger' | 'warning' | 'success' | 'peach' | 'velvet'
}

const LabelTag: React.FC<Props> = (props) => {
  return (
    <div
      className={`${styles.wrap} ${
        props.small ? styles.smallSize : styles.defaultSize
      } ${styles[props.color]} ${props.className}`}
      style={props.style}
    >
      <span className={`typo-app-body-caption ${styles.label}`}>
        {props.label}
      </span>
      {props.icon && <Icon className={styles.icon} name={props.icon} />}
    </div>
  )
}

LabelTag.defaultProps = {
  className: '',
  style: {},
  small: false,
  label: 'label',
  color: 'primary'
} as Partial<Props>

export default LabelTag
