import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface BackButtonIProps {
  className?: string
  style?: React.CSSProperties
  label?: string
  hasBackground?: boolean
  onClick: () => void
}

const BackButton: React.FC<BackButtonIProps> = (props) => {
  return (
    <button
      className={joinClasses(styles.button, props.className)}
      style={{
        ...props.style,
        ...(props.hasBackground
          ? { backgroundColor: 'var(--color-main-0)' }
          : {})
      }}
      onClick={props.onClick}
    >
      <div className={styles.arrow} />
      {props.label && (
        <span className={joinClasses('typo-app-body-caption', styles.label)}>
          {props.label}
        </span>
      )}
      <div className={styles.button__background} />
    </button>
  )
}

BackButton.defaultProps = {
  className: '',
  style: {},
  hasBackground: true
} as Partial<BackButtonIProps>

export default BackButton
