import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface DividerIProps {
  className?: string
}

const Divider: React.FC<DividerIProps> = (props) => {
  return <div className={joinClasses(styles.divider, props.className)} />
}

Divider.defaultProps = {
  className: ''
} as Partial<DividerIProps>

export default Divider
