import React from 'react'
import FocusTrap from 'focus-trap-react'
import { createPortal } from 'react-dom'
import { joinClasses } from '../../utils'

import { useClickOutside, useDidMountEffect } from '../../hooks'

import BackButton from '../BackButton'
import CloseButton from '../CloseButton'

import styles from './styles.module.scss'

export interface ModalIProps {
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

const Modal = React.forwardRef<any, ModalIProps>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null)
  const modalRef = React.useRef<HTMLDivElement>(null)
  const gradientsRef = React.useRef<HTMLDivElement>(null)

  const [_document, setDocument] = React.useState<Document | null>(null)
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

      props.onCloseClick && props.onCloseClick()
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
    setDocument(document)
  }, [])

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
      modalWrapRef.current?.classList.add(styles.modalWrap_show)
      gradientsRef.current?.classList.add(styles.gradients_show)

      setModalAnimationClass(
        !props.isBottomSheet ? styles.popup_show : styles.bottomsheet_show
      )
    } else {
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
      if (isMount) {
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

        myObserver.observe(modalRef.current)

        return () => {
          myObserver.disconnect()
        }
      }
    }
  }, [isMount])

  ///////////////
  // RENDERING //
  ///////////////

  if (!_document) {
    return null
  }

  return createPortal(
    isMount && (
      <FocusTrap>
        <aside
          role='dialog'
          aria-modal
          aria-hidden={false}
          ref={modalWrapRef}
          className={styles.modalWrap}
          {...props.dataAttrs}
        >
          <section
            ref={modalRef}
            className={joinClasses([
              styles.modal,
              !props.isBottomSheet ? styles.popup : styles.bottomsheet,
              modalAnimationClass,
              props.className
            ])}
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
              className={joinClasses([
                styles.contentWrapper,
                props.contentClassName
              ])}
            >
              {props.children}
            </div>
          </section>

          <div className={styles.gradients} ref={gradientsRef}>
            <div className={styles.gradient1} />
            <div className={styles.gradient2} />
          </div>
        </aside>
      </FocusTrap>
    ),
    _document.body
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
  isOpen: false
} as Partial<ModalIProps>

export default Modal
