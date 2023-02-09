import React from 'react'
import styles from './styles.module.scss'
import Icon from '../Icon'

export interface Props {
  className?: string
  rightContentClassName?: string
  middleContentClassName?: string
  leftContentClassName?: string
  style?: React.CSSProperties
  topLabel?: string
  titleLarge?: string
  title?: string
  description?: string
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
      }
      ${props.onClick ? styles.clickable : ''}
      `}
      style={props.style}
      onClick={props.onClick}
      tabIndex={props.onClick ? 0 : -1}
    >
      {props.leftContent && (
        <div className={`${styles.leftContent} ${props.leftContentClassName}`}>
          {props.leftContent}
        </div>
      )}

      <div className={`${styles.middleContent}`}>
        {props.topLabel && (
          <span className={`typo-app-body-caption ${styles.caption}`}>
            {props.topLabel}
          </span>
        )}

        {props.titleLarge && (
          <h4 className={`typo-app-title-small ${styles.title}`}>
            {props.titleLarge}
          </h4>
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

        {props.middleContent && (
          <div
            className={`${styles.middleContent} ${props.middleContentClassName}`}
          >
            {props.middleContent}
          </div>
        )}
      </div>

      <div className={`${styles.rightContent}`}>
        {props.rightContent && (
          <div
            className={`${styles.rightContent} ${props.rightContentClassName}`}
          >
            {props.rightContent}
          </div>
        )}

        {props.onClick && (
          <Icon name='chevron-right' className={styles.chevron} />
        )}
      </div>
    </li>
  )
}

ListItem.defaultProps = {
  className: '',
  rightContentClassName: '',
  middleContentClassName: '',
  leftContentClassName: '',
  style: {},
  topLabel: '',
  titleLarge: '',
  title: 'Title',
  description: '',
  chevron: true,
  divider: true
} as Partial<Props>

export default ListItem
