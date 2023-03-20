import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  direction?: 'row' | 'column'
  spacing?: 5 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
}

const Layout: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.section} ${props.className}`}
      style={{
        ...props.style,
        flexDirection: props.direction,
        gap: `${props.spacing}px`
      }}
    >
      {props.children}
    </section>
  )
}

Layout.defaultProps = {
  className: '',
  styles: {},
  direction: 'column',
  spacing: 15
} as Partial<Props>

export default Layout
