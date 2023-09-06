import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface LabelTagIProps {
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
  widthLock?: boolean
  outline?: boolean
}

const LabelTag: React.FC<LabelTagIProps> = (props) => {
  return (
    <div
      className={joinClasses(
        styles.wrap,
        styles[`${props.size}Size`],
        styles[`${props.color}${props.outline ? `-outline` : ''}`],
        props.className,
        props.widthLock ? styles[`${props.size}SizeLockWidth`] : ''
      )}
      style={props.style}
    >
      <span
        className={joinClasses(
          props.size === 'large'
            ? 'typo-app-body-main'
            : 'typo-app-body-caption',
          styles.label
        )}
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
} as Partial<LabelTagIProps>

export default LabelTag
