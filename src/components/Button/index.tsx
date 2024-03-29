import React from 'react'
import Icon from '../Icon'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'
import Spinner from '../Spinner'

export interface ButtonIProps {
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

const ButtonContent = ({ ...props }: ButtonIProps) => {
  return (
    <>
      {props.label ? (
        <span className={styles.text}>
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

const Button = React.forwardRef<any, ButtonIProps>((props, ref) => {
  const classes = joinClasses(
    styles.button,
    styles[props.mode],
    styles[props.size],
    props.disabled ? styles.disabled : '',
    props.label
      ? props.hasMinWidth
        ? styles[`minWidth-${props.size}`]
        : ''
      : styles[`fixedSize-${props.size}`],
    props.className
  )

  const style = {
    ...(props.maxWidth ? { maxWidth: props.maxWidth } : {}),
    ...(props.minWidth ? { minWidth: props.minWidth } : {}),
    ...(props.busy ? { pointerEvents: 'none' } : {}),
    ...(props.style || {})
  } as React.CSSProperties

  return (
    <props.tag
      ref={ref}
      className={classes}
      style={style}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      rel={props.rel}
      href={props.href}
      target={props.target}
      type={props.type}
      disabled={props.disabled}
      form={props.form}
    >
      <ButtonContent
        label={props.label}
        icon={props.icon}
        busy={props.busy}
        busyLabel={props.busyLabel}
      />
    </props.tag>
  )
})

Button.defaultProps = {
  className: '',
  mode: 'primary',
  size: 'default',
  type: 'button',
  tag: 'button',
  label: 'Button',
  hasMinWidth: true
} as Partial<ButtonIProps>

export default Button
