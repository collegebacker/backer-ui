import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface ArrowButtonIProps {
  tabIndex?: number
  className?: string
  disabled?: boolean
  direction?: 'left' | 'right'
  style?: React.CSSProperties
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
}

const ArrowButton = React.forwardRef<any, ArrowButtonIProps>((props, ref) => {
  return (
    <button
      tabIndex={props.tabIndex}
      ref={ref}
      className={joinClasses(styles.arrowButton, props.className)}
      style={{
        transform:
          props.direction === 'left' ? 'rotate(0deg)' : 'rotate(180deg)',
        ...props.style
      }}
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseUp={props.onMouseUp}
      onMouseDown={props.onMouseDown}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      type='button'
    >
      <svg
        width='8'
        height='12'
        viewBox='0 0 8 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M7.12901 11.5292L1.59982 6L7.12901 0.47081' />
      </svg>
    </button>
  )
})

ArrowButton.displayName = 'ArrowButton'

ArrowButton.defaultProps = {
  className: '',
  disabled: false,
  direction: 'left',
  style: {}
} as Partial<ArrowButtonIProps>

export default ArrowButton
