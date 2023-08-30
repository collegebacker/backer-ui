import React from 'react'
import Logo from '../Logo'
import Icon from '../Icon'
import BackButton from '../BackButton'
import CloseButton from '../CloseButton'
import styles from './styles.module.scss'

import { joinClasses } from '../../utils'

export interface NavbarIProps {
  className?: string
  style?: React.CSSProperties
  backButtonClick?: () => void
  backButtonLabel?: string
  backButtonStartColumn?: number
  backButtonClassName?: string
  onCloseClick?: () => void
  logoLink?: string | null
  hideLogo?: boolean
  hideLogoOnTablet?: boolean
  hideLogoOnMobile?: boolean
  buttons?: Array<{
    label?: string
    icon?: IconTypes
    onClick?: () => void
  }>
}

const Navbar: React.FC<NavbarIProps> = React.memo((props) => {
  const LogoTag = props.logoLink ? 'a' : 'div'
  const linkProps = {
    href: props.logoLink,
    target: '_self'
  }

  return (
    <nav
      className={joinClasses([styles.wrap, props.className])}
      style={props.style}
    >
      {!props.hideLogo && (
        <LogoTag
          className={joinClasses([
            styles.logo,
            props.backButtonClick && styles.hideLogoOnShrink,
            props.hideLogoOnTablet && styles.hideLogoOnTablet,
            props.hideLogoOnMobile && styles.hideLogoOnMobile
          ])}
          {...(props.logoLink && linkProps)}
        >
          <Logo type='sign' className={styles.logoSign} />
          <Logo type='text' className={styles.logoText} />
        </LogoTag>
      )}

      <div className='grid'>
        {props.backButtonClick && (
          <div
            className={joinClasses([
              `grid-desktop-${props.backButtonStartColumn}-${
                12 - props.backButtonStartColumn
              } grid-tablet-1-4`,
              props.backButtonClassName
            ])}
          >
            <BackButton
              hasBackground={false}
              className={styles.backButton}
              onClick={props.backButtonClick}
              label={props.backButtonLabel}
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
        {props.onCloseClick && (
          <CloseButton
            hasBackground={false}
            className={styles.closeButton}
            onClick={props.onCloseClick}
          />
        )}
      </div>
    </nav>
  )
})

Navbar.defaultProps = {
  className: '',
  style: {},
  backButtonStartColumn: 3,
  hideLogo: false,
  hideLogoOnMobile: false,
  hideLogoOnTablet: false,
  logoLink: '/dashboard'
} as Partial<NavbarIProps>

export default Navbar
