import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface CountBadgeIProps {
  className?: string
  count?: number
  limit?: number
}

const CountBadge: React.FC<CountBadgeIProps> = (props) => {
  const handleLimit = () => {
    if (props.count > props.limit) {
      return `+${props.limit}`
    } else {
      return props.count
    }
  }

  return (
    <div className={joinClasses([styles.wrap, props.className])}>
      <span>{handleLimit()}</span>
    </div>
  )
}

CountBadge.defaultProps = {
  className: '',
  count: 0,
  limit: 99
} as Partial<CountBadgeIProps>

export default CountBadge
