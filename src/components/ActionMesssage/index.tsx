import React from 'react'
import styles from './styles.module.scss'

import Icon from '../Icon'

export interface Props {
  className?: string
  undertitleContentClassName?: string
  mode?: 'outline' | 'grey' | 'velvet' | 'peach'
  title?: string
  undertitleContent?: React.ReactNode
  caption?: string
  tabIndex?: number
  onClick?: () => void
}

const ActionMesssage: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className} ${styles[props.mode]} ${
        props.onClick ? styles.clickable : ''
      }`}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      <div className={styles.content}>
        {props.title && (
          <span className={`typo-app-body-main ${styles.title}`}>
            {props.title}
          </span>
        )}

        {props.undertitleContent && (
          <div
            className={`${styles.undertitleContent} ${props.undertitleContentClassName}`}
          >
            {props.undertitleContent}
          </div>
        )}

        {props.caption && (
          <span className={`typo-app-body-caption ${styles.caption}`}>
            {props.caption}
          </span>
        )}
      </div>

      {props.onClick && <Icon name='chevron-right' className={styles.arrow} />}
    </section>
  )
}

ActionMesssage.defaultProps = {
  className: '',
  mode: 'outline',
  title: "Hi! I'm the info message. I show you things you need to know.",
  caption:
    'This is a caption. You can use it to explain more about the message.',
  tabIndex: 0,
  undertitleContentClassName: ''
} as Partial<Props>

export default ActionMesssage
