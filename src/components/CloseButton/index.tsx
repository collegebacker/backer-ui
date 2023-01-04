import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  onClick: () => void
}

const BackButton: React.FC<Props> = props => {
  return (
    <button className={styles.closeButton} onClick={props.onClick}>
      <div className={styles.closeButton__background} />
    </button>
  )
}

BackButton.defaultProps = {
  className: '',
  style: {}
} as Partial<Props>

export default BackButton
