import React from 'react'
import styles from './styles.module.scss'
import { joinClasses } from '../../utils'
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
  chevron?: boolean
  disabled?: boolean
  onClick?: () => void
}

const ListItem: React.FC<Props> = (props) => {
  return (
    <li
      className={joinClasses([
        styles.wrap,
        props.className,
        props.divider && styles.divider,
        props.disabled && styles.disabled,
        props.onClick && styles.clickable
      ])}
      style={props.style}
      onClick={props.onClick}
      tabIndex={props.onClick ? 0 : -1}
    >
      {props.leftContent && (
        <div
          className={joinClasses([
            styles.leftContent,
            props.leftContentClassName
          ])}
        >
          {props.leftContent}
        </div>
      )}

      <div className={styles.middleContent}>
        {props.topLabel && (
          <span
            className={joinClasses(['typo-app-body-caption', styles.caption])}
          >
            {props.topLabel}
          </span>
        )}

        {props.titleLarge && (
          <h4 className={joinClasses(['typo-app-title-small', styles.title])}>
            {props.titleLarge}
          </h4>
        )}

        {props.title && (
          <h4 className={joinClasses(['typo-app-body-main', styles.title])}>
            {props.title}
          </h4>
        )}

        {props.description && (
          <p className={joinClasses(['typo-app-body-caption', styles.caption])}>
            {props.description}
          </p>
        )}

        {props.middleContent && (
          <div
            className={joinClasses([
              styles.middleContent,
              props.middleContentClassName
            ])}
          >
            {props.middleContent}
          </div>
        )}
      </div>

      {props.rightContent || (props.onClick && props.chevron) ? (
        <div className={styles.rightContent}>
          {props.rightContent && (
            <div
              className={joinClasses([
                styles.rightContent,
                props.rightContentClassName
              ])}
            >
              {props.rightContent}
            </div>
          )}

          {props.onClick && props.chevron ? (
            <Icon name='chevron-right' className={styles.chevron} />
          ) : null}
        </div>
      ) : null}
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
  title: '',
  description: '',
  chevron: true,
  divider: true,
  disabled: false
} as Partial<Props>

export default ListItem
