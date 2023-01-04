import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  onClick: () => void
}

const BackButton: React.FC<Props> = props => {
  return (
    <button className={styles.backButton} onClick={props.onClick}>
      <div className={styles.backButton__background} />
    </button>
  )
}

BackButton.defaultProps = {
  className: '',
  style: {}
} as Partial<Props>

export default BackButton
