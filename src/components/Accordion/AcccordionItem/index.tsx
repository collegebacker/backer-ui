import React from 'react'
import { joinClasses } from '../../../utils'
import styles from './styles.module.scss'

export interface AccordionItemIProps {
  className?: string
  mode?: 'default' | 'app'
  title: string
  content: React.ReactElement
}

const AccordionItem: React.FC<AccordionItemIProps> = (props) => {
  const contentEl = React.useRef(null)
  const [isOpen, setIsOpen] = React.useState(false)

  const haandleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleOpenOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsOpen(!isOpen)
    }
  }

  return (
    <li
      className={joinClasses(
        styles.accordion,
        props.mode === 'default' ? styles.defaultStyle : styles.appStyle,
        isOpen ? styles.open : ''
      )}
    >
      <div
        className={styles.header}
        onClick={haandleOpen}
        tabIndex={0}
        onKeyDown={handleOpenOnEnter}
      >
        <h3 className={styles.title}>{props.title}</h3>
        <div className={styles.arrowButton}>
          <svg
            viewBox='0 0 19 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M18.6353 0.763794L10.15 9.24907L1 1.48524' />
          </svg>
        </div>
      </div>
      <div
        className={styles.content}
        ref={contentEl}
        style={{
          height: isOpen ? `${contentEl.current.scrollHeight}px` : '0px'
        }}
      >
        <div className={styles.contentWrap}>{props.content}</div>
      </div>
    </li>
  )
}

AccordionItem.defaultProps = {
  className: ''
} as Partial<AccordionItemIProps>

export default AccordionItem
