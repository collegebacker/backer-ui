import React from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface Props {
  className?: string
  style?: React.CSSProperties
  topLabel?: string
  title?: string
  description?: string
  chevron?: boolean
  divider?: boolean
  rightContent?: React.ReactNode
  middleContent?: React.ReactNode
  leftContent?: React.ReactNode
  onClick?: () => void
}

const ListItem: React.FC<Props> = (props) => {
  return (
    <li
      className={`${styles.wrap} ${props.className} ${
        props.divider ? styles.divider : ''
      }`}
      style={{
        // userSelect: props.onClick ? 'none' : 'auto',
        cursor: props.onClick ? 'pointer' : 'auto',
        ...props.style
      }}
      onClick={props.onClick}
    >
      {props.leftContent && (
        <div className={`${styles.leftContent}`}>{props.leftContent}</div>
      )}

      <div className={`${styles.middleContent}`}>
        {props.topLabel && (
          <span className={`typo-app-body-caption ${styles.caption}`}>
            {props.topLabel}
          </span>
        )}

        {props.title && (
          <h4 className={`typo-app-body-main ${styles.title}`}>
            {props.title}
          </h4>
        )}

        {props.description && (
          <p className={`typo-app-body-caption ${styles.caption}`}>
            {props.description}
          </p>
        )}
        {props.middleContent}
      </div>

      {(props.rightContent || props.chevron) && (
        <div className={`${styles.rightContent}`}>
          {props.rightContent} {props.chevron && <Icon name='chevron-right' />}
        </div>
      )}
    </li>
  )
}

ListItem.defaultProps = {
  className: '',
  style: {},
  topLabel: '',
  title: 'Title',
  description: '',
  chevron: true,
  divider: true
} as Partial<Props>

export default ListItem
