import React from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface LabelTagProps {
  className?: string
  style?: React.CSSProperties
  icon?: IconTypes
  size?: 'small' | 'medium' | 'large'
  label?: string
  color?:
    | 'primary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'peach'
    | 'velvet'
    | 'gray'
  outline?: boolean
}

const LabelTag: React.FC<LabelTagProps> = (props) => {
  return (
    <div
      className={`${styles.wrap} ${styles[`${props.size}Size`]}
      ${styles[`${props.color}${props.outline ? `-outline` : ''}`]} ${
        props.className
      }`}
      style={props.style}
    >
      <span
        className={`${
          props.size === 'large'
            ? 'typo-app-body-main'
            : 'typo-app-body-caption'
        } ${styles.label}`}
      >
        {props.label}
      </span>
      {props.icon && <Icon className={styles.icon} name={props.icon} />}
    </div>
  )
}

LabelTag.defaultProps = {
  className: '',
  style: {},
  size: 'medium',
  label: 'label',
  color: 'primary'
} as Partial<LabelTagProps>

export default LabelTag
