import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface StackIProps extends React.HTMLAttributes<HTMLElement> {
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
    | 'button'
    | 'input'
    | 'textarea'
    | 'select'
    | 'option'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'i'
    | 'blockquote'
    | 'code'
    | 'pre'
  direction?: 'row' | 'column'
  spacing?:
    | 0
    | 5
    | 10
    | 15
    | 20
    | 25
    | 30
    | 40
    | 50
    | 60
    | 70
    | 80
    | 90
    | 100
    | null
  children: React.ReactNode
}

const Stack: React.FC<StackIProps> = ({
  as: Element = 'section',
  direction = 'column',
  spacing = null,
  children,
  className,
  ...rest
}) => {
  const setGap = () => {
    if (spacing !== null) {
      if (direction === 'column') {
        return {
          rowGap: `${spacing}px`
        }
      }
      if (direction === 'row') {
        return {
          columnGap: `${spacing}px`
        }
      }
    }
  }

  return (
    <Element
      {...rest}
      className={joinClasses(styles.wrap, className)}
      style={{
        ...rest.style,
        flexDirection: direction,
        ...setGap()
      }}
    >
      {children}
    </Element>
  )
}

export default Stack
