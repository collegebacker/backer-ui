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
  onLogoClick?: () => void
  hideLogo?: boolean
  hideLogoOnTablet?: boolean
  hideLogoOnMobile?: boolean
  buttons?: Array<{
    label?: string
    icon?: IconTypes
    onClick?: () => void
  }>
}

export interface LogoWrapperIProps {
  logoLink?: string | null
  onLogoClick?: () => void
  hideLogo?: boolean
  hideLogoOnTablet?: boolean
  hideLogoOnMobile?: boolean
  children: React.ReactNode
}

const LogoWrapper = (props: LogoWrapperIProps) => {
  const linkProps = {
    href: props.logoLink,
    target: '_self'
  }

  const classes = joinClasses(
    styles.logo,
    props.hideLogoOnTablet && styles.hideLogoOnTablet,
    props.hideLogoOnMobile && styles.hideLogoOnMobile
  )

  if (props.onLogoClick) {
    return (
      <button
        className={joinClasses(classes, styles.logoBtn)}
        onClick={props.onLogoClick}
      >
        {props.children}
      </button>
    )
  }

  if (props.logoLink) {
    return (
      <a className={classes} {...linkProps}>
        {props.children}
      </a>
    )
  }

  return <div className={classes}>{props.children}</div>
}

const Navbar: React.FC<NavbarIProps> = React.memo((props) => {
  return (
    <nav
      className={joinClasses(styles.wrap, props.className)}
      style={props.style}
    >
      {!props.hideLogo && (
        <LogoWrapper
          logoLink={props.logoLink}
          onLogoClick={props.onLogoClick}
          hideLogoOnTablet={
            props.hideLogoOnTablet || props.backButtonClick !== undefined
          }
          hideLogoOnMobile={
            props.hideLogoOnMobile || props.backButtonClick !== undefined
          }
        >
          <Logo type='sign' className={styles.logoSign} />
          <Logo type='text' className={styles.logoText} />
        </LogoWrapper>
      )}

      <div className='grid'>
        {props.backButtonClick && (
          <div
            className={joinClasses(
              `grid-desktop-${props.backButtonStartColumn}-${
                12 - props.backButtonStartColumn
              } grid-tablet-1-4`,
              props.backButtonClassName
            )}
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
                  className={joinClasses(
                    'typo-app-body-main',
                    styles.buttonLabel
                  )}
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
