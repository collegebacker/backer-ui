import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  direction?: 'row' | 'column'
  spacing?: 5 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
  as?:
    | 'div'
    | 'section'
    | 'article'
    | 'main'
    | 'aside'
    | 'header'
    | 'footer'
    | 'nav'
    | 'p'
    | 'ul'
    | 'ol'
    | 'li'
    | 'button'
    | 'thead'
    | 'tbody'
    | 'tfoot'
    | 'col'
    | 'colgroup'
    | 'form'
    | 'label'
    | 'input'
    | 'textarea'
}

const Stack: React.FC<Props> = (props) => {
  return (
    <props.as
      className={`${styles.wrap} ${props.className}`}
      style={{
        ...props.style,
        flexDirection: props.direction,
        gap: `${props.spacing}px`
      }}
    >
      {props.children}
    </props.as>
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
