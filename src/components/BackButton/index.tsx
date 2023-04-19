import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  onClick: () => void
}

const BackButton: React.FC<Props> = (props) => {
  return (
    <button
      className={joinClasses([styles.backButton, props.className])}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={styles.backButton__background} />
    </button>
  )
}

BackButton.defaultProps = {
  className: '',
  style: {}
} as Partial<Props>

export default BackButton
