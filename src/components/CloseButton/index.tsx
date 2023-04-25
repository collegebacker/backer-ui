import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  onClick: () => void
  hasBackground?: boolean
}

const BackButton: React.FC<Props> = (props) => {
  return (
    <button
      className={joinClasses([styles.button, props.className])}
      onClick={props.onClick}
      style={{
        ...props.style,
        ...(props.hasBackground
          ? { backgroundColor: 'var(--color-main-0)' }
          : {})
      }}
    >
      <div className={styles.button__background} />
    </button>
  )
}

BackButton.defaultProps = {
  className: '',
  style: {},
  hasBackground: true
} as Partial<Props>

export default BackButton
