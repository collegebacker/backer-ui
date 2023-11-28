import React from 'react'
import styles from './styles.module.scss'
import { joinClasses } from '../../utils'
import Icon from '../Icon'

export interface ListItemIProps {
  className?: string
  rightContentClassName?: string
  middleContentClassName?: string
  leftContentClassName?: string
  style?: React.CSSProperties
  topLabel?: React.ReactNode
  titleLarge?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  divider?: boolean
  rightContent?: React.ReactNode
  middleContent?: React.ReactNode
  leftContent?: React.ReactNode
  chevron?: boolean
  disabled?: boolean
  onClick?: (e?: React.MouseEvent) => void
  middleContentPaddingRight?: number
}

const ListItem: React.FC<ListItemIProps> = (props) => {
  const isClickable = !!props.onClick // Check if onClick prop is provided

  const handleClick = (e: React.MouseEvent) => {
    if (isClickable && props.onClick) {
      props.onClick(e)
    }
  }

  const listItemElement = isClickable ? 'button' : 'li' // Determine the element type
  const isRightContentExist =
    props.rightContent || (isClickable && props.chevron)

  return React.createElement(
    listItemElement,
    {
      className: joinClasses(
        styles.wrap,
        props.className,
        props.divider && styles.divider,
        props.disabled && styles.disabled,
        isClickable && styles.clickable
      ),
      style: props.style,
      onClick: handleClick,
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && isClickable && props.onClick) {
          e.preventDefault()
          props.onClick()
        }
      }
    },
    <>
      {props.leftContent && (
        <div
          className={joinClasses(
            styles.leftContent,
            props.leftContentClassName
          )}
        >
          {props.leftContent}
        </div>
      )}

      <div
        className={styles.middleContent}
        style={{
          paddingRight: isRightContentExist
            ? `${props.middleContentPaddingRight || 30}px`
            : 0
        }}
      >
        {props.topLabel && (
          <span
            className={joinClasses('typo-app-body-caption', styles.caption)}
          >
            {props.topLabel}
          </span>
        )}

        {props.titleLarge && (
          <h4 className={joinClasses('typo-app-title-small', styles.title)}>
            {props.titleLarge}
          </h4>
        )}

        {props.title && (
          <h4 className={joinClasses('typo-app-body-main', styles.title)}>
            {props.title}
          </h4>
        )}

        {props.description && (
          <p className={joinClasses('typo-app-body-caption', styles.caption)}>
            {props.description}
          </p>
        )}

        {props.middleContent && (
          <div
            className={joinClasses(
              styles.middleContent,
              props.middleContentClassName
            )}
          >
            {props.middleContent}
          </div>
        )}
      </div>

      {isRightContentExist ? (
        <div className={styles.rightContentWrap}>
          {props.rightContent && (
            <div
              className={joinClasses(
                styles.rightContent,
                props.rightContentClassName
              )}
            >
              {props.rightContent}
            </div>
          )}

          {isClickable && props.chevron ? (
            <Icon name='chevron-right' className={styles.chevron} />
          ) : null}
        </div>
      ) : null}
    </>
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
} as Partial<ListItemIProps>

export default ListItem
