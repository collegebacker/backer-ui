import React from 'react'
import Logo from '../Logo'
import Icon from '../Icon'
import BackButton from '../BackButton'
import CloseButton from '../CloseButton'
import styles from './styles.module.scss'

import { joinClasses } from '../../utils'

export interface Props {
  className?: string
  style?: React.CSSProperties
  backButton?: {
    label?: string
    onClick?: () => void
  }
  onCloseClick?: () => void
  buttons?: Array<{
    label?: string
    icon?: IconTypes
    onClick?: () => void
  }>
}

const Navbar: React.FC<Props> = React.memo((props) => {
  return (
    <nav
      className={joinClasses([styles.wrap, props.className])}
      style={props.style}
    >
      <div
        className={joinClasses([
          styles.logo,
          props.backButton?.onClick && styles.hideLogoOnShrink
        ])}
      >
        <Logo type='sign' className={styles.logoSign} />
        <Logo type='text' className={styles.logoText} />
      </div>

      <div className='grid'>
        {props.backButton?.onClick && (
          <div className='grid-desktop-2-4 grid-tablet-1-4'>
            <BackButton
              hasBackground={false}
              className={styles.backButton}
              onClick={props.backButton?.onClick}
              label={props.backButton?.label}
            />
          </div>
        )}
      </div>

      <div className={styles.rightContent}>
        {props.buttons?.map((button, index) => {
          return (
            <button
              key={index}
              className={styles.button}
              onClick={button.onClick}
            >
              {button.label && (
                <span
                  className={joinClasses([
                    'typo-app-body-main',
                    styles.buttonLabel
                  ])}
                >
                  {button.label}
                </span>
              )}
              <Icon name={button.icon} className={styles.buttonIcon} />
              <div className={styles.button__background} />
            </button>
          )
        })}
        <CloseButton
          hasBackground={false}
          className={styles.closeButton}
          onClick={props.onCloseClick}
        />
      </div>
    </nav>
  )
})

Navbar.defaultProps = {
  className: '',
  style: {}
} as Partial<Props>

export default Navbar
