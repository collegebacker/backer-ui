import React from 'react'
import Icon from '../Icon'
import PaymentLogo from '../PaymentLogo'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface PillButtonIProps {
  className?: string
  style?: React.CSSProperties
  type?: 'button' | 'submit' | 'reset'
  icon?: IconTypes
  paymentIcon?: PaymentLogoTypes
  href?: string
  target?: TargetTypes
  label?: string
  tag?: 'button' | 'a'
  isActive?: boolean
  allowPointerEvents?: boolean
  onClick?: (event: any) => void
  onSubmit?: (event: any) => void
  onKeyDown?: (event: any) => void
  areaLabel?: string
  areaLabelledBy?: string
}

const ButtonContent = (props: PillButtonIProps) => {
  const iconStyles = props.label
    ? {
        marginLeft: '10px',
        marginRight: '-3px'
      }
    : {}

  return (
    <>
      {props.label ? <span className={styles.text}>{props.label}</span> : null}

      {props.icon && (
        <Icon name={props.icon} className={styles.icon} style={iconStyles} />
      )}

      {props.paymentIcon && (
        <PaymentLogo
          className={styles.paymentLogo}
          style={iconStyles}
          name={props.paymentIcon}
        />
      )}
    </>
  )
}

const PillButton = React.forwardRef<any, PillButtonIProps>((props, ref) => {
  const classes = joinClasses(
    props.className,
    styles.button,
    props.isActive ? styles.active : '',
    !props.allowPointerEvents && props.isActive ? styles.noPointerEvents : ''
  )

  const style = {
    ...(props.style || {})
  } as React.CSSProperties

  const conditionalProps =
    props.tag === 'a'
      ? {
          rel: 'noreferrer',
          href: props.href,
          target: props.target,
          onSubmit: props.onSubmit
        }
      : {
          type: props.type
        }

  return (
    <props.tag
      ref={ref}
      className={classes}
      style={style}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      aria-label={props.areaLabel}
      aria-labelledby={props.areaLabelledBy}
      {...conditionalProps}
    >
      <ButtonContent {...props} />
    </props.tag>
  )
})

PillButton.defaultProps = {
  className: '',
  tag: 'button',
  type: 'button',
  href: '#',
  target: '_self',
  label: 'Pill Button'
} as Partial<PillButtonIProps>

export default PillButton
