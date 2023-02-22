import React from 'react'
import styles from './styles.module.scss'

import Icon from '../Icon'

export interface Props {
  className?: string
  orientation?: 'left' | 'right'
  mode?: 'outline' | 'grey' | 'velvet' | 'peach'
  icon?: IconTypes
  emoji?: string
  title?: string
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
      {props.emoji === '' ? (
        <Icon name={props.icon} />
      ) : (
        <span className={styles.emoji}>{props.emoji}</span>
      )}

      <div
        className={styles.content}
        style={{
          marginLeft: props.orientation === 'right' ? '0' : '20px',
          marginRight: props.orientation === 'left' ? '0' : '20px'
        }}
      >
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
  emoji: '',
  icon: 'mail',
  undertitleContentClassName: ''
} as Partial<Props>

export default WarnMesssage
