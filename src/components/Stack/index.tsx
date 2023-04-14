import React from 'react'
import styles from './styles.module.scss'

export interface Props extends React.HTMLAttributes<HTMLElement> {
  direction?: 'row' | 'column'
  spacing?: 5 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
  children: React.ReactNode
}

const Stack: React.FC<Props> = (props) => {
  const { direction, spacing, children, className, ...rest } = props

  return (
    <div
      {...rest}
      className={`${styles.wrap} ${className}`}
      style={{
        ...props.style,
        flexDirection: direction,
        gap: `${spacing}px`
      }}
    >
      {children}
    </div>
  )
}

Stack.defaultProps = {
  className: '',
  styles: {},
  direction: 'column',
  spacing: 15,
  as: 'section'
} as Partial<Props>

export default Stack
