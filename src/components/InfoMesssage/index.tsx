import React from 'react'
import styles from './styles.module.scss'

import { LabelTagProps } from '../LabelTag'
import LabelTag from '../LabelTag'
import Icon from '../Icon'

export interface Props {
  className?: string
  orientation?: 'left' | 'right'
  mode?: 'outline' | 'grey' | 'velvet' | 'peach'
  icon?: IconTypes
  emoji?: string
  title?: string
  labelTag?: LabelTagProps
  caption?: string | React.ReactNode
  tabIndex?: number
  undertitleContent?: React.ReactNode
  undertitleContentClassName?: string
  onClick?: () => void
}

const WarnMesssage: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className} ${styles[props.mode]}`}
      style={{
        flexDirection: props.orientation === 'left' ? 'row' : 'row-reverse',
        cursor: props.onClick ? 'pointer' : 'default'
      }}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      {props.emoji && <span className={styles.emoji}>{props.emoji}</span>}

      {props.icon && <Icon name={props.icon} />}

      {props.labelTag && <LabelTag {...props.labelTag} />}

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
    </section>
  )
}

WarnMesssage.defaultProps = {
  className: '',
  orientation: 'left',
  mode: 'outline',
  title: "Hi! I'm the info message. I show you things you need to know.",
  caption:
    'This is a caption. You can use it to explain more about the message.',
  undertitleContentClassName: ''
} as Partial<Props>

export default WarnMesssage
