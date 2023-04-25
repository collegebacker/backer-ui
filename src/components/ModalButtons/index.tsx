import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

import Icon from '../Icon'

export interface Props {
  className?: string
  textClassName?: string
  style?: React.CSSProperties
  items: Array<{
    label: string
    icon?: IconTypes
    onClick: (event: any) => void
  }>
}

const ModalButtons: React.FC<Props> = (props) => {
  return (
    <div
      className={joinClasses([styles.wrap, props.className])}
      style={props.style}
    >
      {props.items.map((item, index) => {
        return (
          <button className={styles.button} key={index} onClick={item.onClick}>
            <div className={styles.content}>
              {item.icon ? (
                <Icon className={styles.icon} name={item.icon} />
              ) : null}
              <span className={`typo-app-body-caption ${props.textClassName}`}>
                {item.label}
              </span>
            </div>
          </button>
        )
      })}
    </div>
  )
}

ModalButtons.defaultProps = {
  className: '',
  textClassName: '',
  style: {}
} as Partial<Props>

export default ModalButtons
