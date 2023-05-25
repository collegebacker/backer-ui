import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

import icons from './icons.json'

export interface IconIProps {
  className?: string
  style?: React.CSSProperties
  name: IconTypes
  color?: string
  onClick?: () => void
}

const Icon: React.FC<IconIProps> = (props) => {
  return (
    <i
      className={joinClasses([styles.icon, props.className])}
      style={{ ...props.style }}
      onClick={props.onClick}
    >
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 24 24'
        fillRule='evenodd'
        style={props.color ? { fill: props.color } : {}}
      >
        <path d={(icons as any)[props.name]} />
      </svg>
    </i>
  )
}

Icon.defaultProps = {
  className: '',
  name: 'cross',
  style: {},
  color: ''
} as Partial<IconIProps>

export default Icon

// TODO: Remove "protection" icon. It's a duplicate of "shield"
