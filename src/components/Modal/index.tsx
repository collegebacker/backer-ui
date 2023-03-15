import React from 'react'
import { createPortal } from 'react-dom'

import { useClickOutside, useDidMountEffect } from '../../hooks'

import BackButton from '../BackButton'
import CloseButton from '../CloseButton'

import styles from './styles.module.scss'

export interface Props {
  isOpen?: boolean
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  contentClassName?: string
  closeOnClickOutside?: boolean
  showBackButton?: boolean
  showCloseButton?: boolean
  dataAttrs?: Record<string, string>
  isBottomSheet?: boolean
  onBackClick?: () => void
  onCloseClick?: () => void
}

///////////////
// COMPONENT //
///////////////

const Modal = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null)
  const modalRef = React.useRef<HTMLDivElement>(null)
  const gradientsRef = React.useRef<HTMLDivElement>(null)

  const [isMount, setIsMount] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const [modalAnimationClass, setModalAnimationClass] = React.useState('')

  //////////////////////
  // IMPERATIVE HOOKS //
  //////////////////////

  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return modalRef
    },
    open: () => {
      setIsMount(true)
    },
    close: () => {
      setIsOpen(false)
    }
  }))

  //////////////////////
  // HANDLERS & HOOKS //
  //////////////////////

  const handleCloseClick = () => {
    if (isOpen) {
      console.log('close click')
      setIsOpen(false)

      props.onCloseClick()
    }
  }

  useClickOutside(
    modalRef,
    () => {
      props.closeOnClickOutside && handleCloseClick()
    },
    isOpen
  )

  /////////////////
  // USE EFFECTS //
  /////////////////

  React.useEffect(() => {
    if (props.isOpen) {
      setIsMount(true)
    } else {
      setIsOpen(false)
    }
  }, [props.isOpen])

  React.useEffect(() => {
    if (isMount) {
      setIsOpen(true)
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('touch-action')
    }
  }, [isMount])

  useDidMountEffect(() => {
    if (isOpen) {
      console.log('ref', modalWrapRef.current)
      // console.log('isOpen', isOpen)
      // console.log('modal ref', modalRef.current)
      // add class to modalWrapRef
      modalWrapRef.current?.classList.add(styles.modalWrap_show)
      gradientsRef.current?.classList.add(styles.gradients_show)

      setModalAnimationClass(
        !props.isBottomSheet ? styles.popup_show : styles.bottomsheet_show
      )
    } else {
      console.log('ref', modalWrapRef.current)
      // console.log('isOpen', isOpen)
      // console.log('modal ref', modalRef.current)
      // remove class from modalWrapRef
      modalWrapRef.current?.classList.add(styles.modalWrap_hide)
      gradientsRef.current?.classList.add(styles.gradients_hide)

      setModalAnimationClass(
        !props.isBottomSheet ? styles.popup_hide : styles.bottomsheet_hide
      )

      const timer = setTimeout(() => {
        setIsMount(false)
      }, 500)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen])

  useDidMountEffect(() => {
    if (props.isBottomSheet) {
      const myObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (
            window.innerHeight > (entry.target as HTMLDivElement).offsetHeight
          ) {
            modalRef.current?.classList.remove(styles.bottomsheet_stick)
          } else {
            modalRef.current?.classList.add(styles.bottomsheet_stick)
          }
        })
      })
      if (isMount) {
        myObserver.observe(modalRef.current)

        return () => {
          myObserver.disconnect()
        }
      } else {
        myObserver.disconnect()
      }
    }
  }, [isMount])

  ///////////////
  // RENDERING //
  ///////////////

  return createPortal(
    isMount && (
      <aside
        role='dialog'
        aria-modal
        aria-hidden={false}
        ref={modalWrapRef}
        className={`${styles.modalWrap}`}
        {...props.dataAttrs}
      >
        <section
          ref={modalRef}
          className={`${styles.modal} ${
            !props.isBottomSheet ? styles.popup : styles.bottomsheet
          } ${modalAnimationClass} ${props.className}`}
          style={props.style}
        >
          {props.showBackButton && (
            <BackButton
              className={styles.backButton}
              onClick={props.onBackClick}
            />
          )}
          {props.showCloseButton && (
            <CloseButton
              className={styles.closeButton}
              onClick={handleCloseClick}
            />
          )}

          <div
            tabIndex={0}
            className={`${styles.contentWrapper} ${props.contentClassName}`}
          >
            {props.children}
          </div>
        </section>

        <div className={styles.gradients} ref={gradientsRef}>
          <div className={styles.gradient1} />
          <div className={styles.gradient2} />
        </div>
      </aside>
    ),
    document.body
  )
})

Modal.defaultProps = {
  style: {},
  className: '',
  contentClassName: '',
  showCloseButton: true,
  showBackButton: false,
  isBottomSheet: false,
  closeOnClickOutside: true,
  dataAttrs: {},
  isOpen: false,
  onCloseClick: () => {},
  onBackClick: () => {}
} as Partial<Props>

export default Modal
