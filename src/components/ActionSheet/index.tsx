import React from 'react'
import ReactDOM from 'react-dom'

import { useDidMountEffect } from '../../hooks'
import gsap from 'gsap'
import styles from './styles.module.scss'

export interface ActionSheetIProps {
  isOpen?: boolean
  zIndex?: number
  delay?: number
  text?: string
  actions: Array<{
    label: string
    disabled?: boolean
    onClick: () => void
  }>
}

const ActionSheet = React.forwardRef<any, ActionSheetIProps>((props, ref) => {
  const pageWrapperRef = React.useRef<HTMLDivElement>(null)
  const actionSheetRef = React.useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = React.useState(props.isOpen)
  const [show, setShow] = React.useState(false)
  const [unmount, setUnmount] = React.useState(true)

  React.useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true)
    },
    close: () => {
      // setIsOpen(false)
      setShow(false)
    }
  }))

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShow(true)
      }, props.delay)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // if prop isOpen was changed, update state
  React.useEffect(() => {
    if (props.isOpen !== isOpen) {
      if (props.isOpen) {
        setIsOpen(true)
      } else {
        // setIsOpen(false)
        setShow(false)
      }
    }
  }, [props.isOpen])

  useDidMountEffect(() => {
    if (show) {
      setUnmount(false)
      document.body.style.overflow = 'hidden'

      if (pageWrapperRef.current && actionSheetRef.current) {
        gsap.to(pageWrapperRef.current, {
          duration: 0.2,
          opacity: 1
        })
        gsap.to(actionSheetRef.current, {
          duration: 0.2,
          y: 0,
          opacity: 1,
          delay: 0.1
        })
      }

      return
    }

    document.body.style.removeProperty('overflow')

    if (pageWrapperRef.current && actionSheetRef.current) {
      gsap.to(pageWrapperRef.current, {
        duration: 0.15,
        opacity: 0
      })
      gsap.to(actionSheetRef.current, {
        duration: 0.15,
        y: 20,
        onComplete: () => {
          setIsOpen(false)
          setUnmount(true)
        }
      })
    }
  }, [show, unmount])

  return ReactDOM.createPortal(
    !unmount && (
      <aside
        role='dialog'
        aria-modal
        aria-hidden={false}
        className={styles.pageWrapper}
        ref={pageWrapperRef}
        style={{
          zIndex: props.zIndex
        }}
      >
        <section ref={actionSheetRef} className={styles.actionSheet}>
          {props.text !== '' ? (
            <span className={styles.text}>{props.text}</span>
          ) : null}

          <div className={styles.actions}>
            {props.actions.map((action, index) => (
              <button
                key={index}
                className={styles.action}
                onClick={() => {
                  action.onClick()
                  setIsOpen(false)
                }}
                disabled={action.disabled}
              >
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        </section>
      </aside>
    ),
    document.body
  )
})

ActionSheet.displayName = 'ActionSheet'

ActionSheet.defaultProps = {
  isOpen: false,
  zIndex: 99999,
  delay: 0,
  text: ''
} as Partial<ActionSheetIProps>

export default ActionSheet
