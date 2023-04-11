import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'

import styles from './styles.module.scss'
import Spinner from '../Spinner'

export interface Props {
  className?: string
  style?: React.CSSProperties
  mode?: 'primary' | 'outline' | 'ghost' | 'outline-inverse'
  size?: 'default' | 'small'
  type?: 'button' | 'submit' | 'reset'
  target?: TargetTypes
  rel?: string
  icon?: IconTypes
  href?: string
  form?: string
  disabled?: boolean
  label?: string
  maxWidth?: number
  minWidth?: number
  hasMinWidth?: boolean
  busy?: boolean
  busyLabel?: string
  tag?: 'button' | 'a'
  onClick?: (event: any) => void
  onSubmit?: (event: any) => void
  onKeyDown?: (event: any) => void
}

const ButtonContent = ({ ...props }: Props) => {
  return (
    <>
      {props.label ? (
        <span className={`${styles.text}`}>
          {!props.busy ? props.label : props.busyLabel}
        </span>
      ) : null}
      {props.icon && !props.busy ? (
        <Icon
          name={props.icon}
          className={styles.icon}
          style={
            props.label
              ? {
                  marginLeft: '10px'
                }
              : {}
          }
        />
      ) : null}

      {props.busy ? (
        <Spinner
          className={styles.spinner}
          size='medium-small'
          style={
            props.busyLabel && props.label
              ? {
                  marginLeft: '10px'
                }
              : {}
          }
        />
      ) : null}
    </>
  )
}

const Button = React.forwardRef<any, Props>((props, ref) => {
  const classes = `${props.className} ${styles.button} ${styles[props.mode]} ${
    styles[props.size]
  } ${props.disabled ? styles.disabled : ''} ${
    props.label
      ? props.hasMinWidth
        ? styles[`minWidth-${props.size}`]
        : ''
      : styles[`fixedSize-${props.size}`]
  }`

  const style = {
    ...(props.maxWidth ? { maxWidth: props.maxWidth } : {}),
    ...(props.minWidth ? { minWidth: props.minWidth } : {}),
    ...(props.busy ? { pointerEvents: 'none' } : {}),
    ...(props.style || {})
  } as React.CSSProperties

  const returnShell = (buttonContent: React.ReactNode) => {
    if (props.tag === 'a') {
      return (
        <a
          ref={ref}
          className={classes}
          style={style}
          onClick={props.onClick}
          onKeyDown={props.onKeyDown}
          rel={props.rel}
          href={props.href}
          target={props.target}
        >
          {buttonContent}
        </a>
      )
    } else if (props.tag === 'button') {
      return (
        <button
          ref={ref}
          className={classes}
          style={style}
          onClick={props.onClick}
          onKeyDown={props.onKeyDown}
          type={props.type}
          disabled={props.disabled}
          form={props.form}
        >
          {buttonContent}
        </button>
      )
    }
  }

  return returnShell(
    <ButtonContent
      busy={props.busy}
      busyLabel={props.busyLabel}
      icon={props.icon}
      label={props.label}
    />
  )
})

Button.defaultProps = {
  className: '',
  mode: 'primary',
  size: 'default',
  tag: 'button',
  busy: false,
  type: 'button',
  href: '#',
  target: '_self',
  rel: '',
  busyLabel: '',
  disabled: false,
  label: 'Button',
  hasMinWidth: true
} as Partial<Props>

export default Button
