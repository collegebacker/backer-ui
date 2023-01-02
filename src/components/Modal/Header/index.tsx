import React from 'react'

import Icon from '../../Icon'
import styles from './styles.module.scss'

interface HeaderProps {
  noMaxWidth?: boolean
  showBackButton?: boolean
  disableMarginDesktop?: boolean
  disableMarginMobile?: boolean
  onBackClick?: () => void
  onCloseClick: () => void
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <div
      className={`${styles.header} ${
        !props.showBackButton && !props.disableMarginDesktop
          ? styles.bottomMarginDesktop
          : ''
      }
      ${!props.disableMarginMobile ? styles.bottomMarginMobile : ''}
      ${props.noMaxWidth ? styles.minHeight : ''}
      `}
    >
      {props.showBackButton && (
        <button className={styles.backButton} onClick={props.onBackClick}>
          <div className={styles.backButton__background} />
        </button>
      )}

      <button className={styles.closeButton} onClick={props.onCloseClick}>
        <div className={styles.closeButton__background} />
      </button>
    </div>
  )
}

Header.defaultProps = {
  noMaxWidth: false,
  showBackButton: false,
  disableMarginDesktop: false,
  disableMarginMobile: false
}

export default Header
