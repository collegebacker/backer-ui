import React from 'react'
import styles from './styles.module.scss'

import { joinClasses } from '../../utils'

export interface Props {
  className?: string
  style?: React.CSSProperties
}

const Navbar: React.FC<Props> = React.memo((props) => {
  return (
    <nav
      className={joinClasses([styles.wrap, props.className])}
      style={props.style}
    />
  )
})

Navbar.defaultProps = {
  className: '',
  style: {}
} as Partial<Props>

export default Navbar
