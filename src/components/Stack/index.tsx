import React from 'react'
import styles from './styles.module.scss'

export interface Props extends React.HTMLAttributes<HTMLElement> {
  as?:
    | 'section'
    | 'div'
    | 'article'
    | 'main'
    | 'aside'
    | 'header'
    | 'footer'
    | 'nav'
    | 'ul'
    | 'ol'
    | 'form'
    | 'label'
    | 'fieldset'
  direction?: 'row' | 'column'
  spacing?: 5 | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
  children: React.ReactNode
}

const Stack: React.FC<Props> = ({
  as: Element = 'section',
  direction = 'column',
  spacing = 15,
  children,
  className,
  ...rest
}) => {
  return (
    <Element
      {...rest}
      className={`${styles.wrap} ${className}`}
      style={{
        ...rest.style,
        flexDirection: direction,
        gap: `${spacing}px`
      }}
    >
      {children}
    </Element>
  )
}

export default Stack
