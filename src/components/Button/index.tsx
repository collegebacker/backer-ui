import React from 'react'
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
  icon?: IconTypes
  href?: string
  disabled?: boolean
  label?: string
  maxWidth?: number
  minWidth?: number
  isMinWidth?: boolean
  form?: string
  busy?: boolean
  busyLabel?: string
  tag?: 'button' | 'a'
  onClick?: (event: any) => void
  onSubmit?: (event: any) => void
  onKeyPress?: (event: any) => void
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
      ? props.isMinWidth
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

  const conditionalProps =
    props.tag === 'a'
      ? {
          rel: 'noreferrer',
          href: props.href,
          target: props.target,
          onSubmit: props.onSubmit
        }
      : {
          type: props.type,
          form: props.form
        }

  return (
    <props.tag
      ref={ref}
      className={classes}
      style={style}
      onClick={props.onClick}
      onKeyDown={props.onKeyPress}
      disabled={props.disabled}
      {...conditionalProps}
    >
      <ButtonContent {...props} />
    </props.tag>
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
  busyLabel: '',
  disabled: false,
  label: 'Button',
  isMinWidth: true
} as Partial<Props>

export default Button
