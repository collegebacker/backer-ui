import AccordionItem from './AcccordionItem'
import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface AccordionIProps {
  className?: string
  mode?: 'default' | 'app'
  items: Array<{
    title: string
    content: React.ReactElement
  }>
}

const Accordion: React.FC<AccordionIProps> = (props) => {
  return (
    <ul className={joinClasses(styles.wrap, props.className)}>
      {props.items.map((item, index) => {
        return (
          <AccordionItem
            mode={props.mode}
            key={index}
            title={item.title}
            content={item.content}
          />
        )
      })}
    </ul>
  )
}

Accordion.defaultProps = {
  className: '',
  mode: 'default'
} as Partial<AccordionIProps>

export default Accordion
