import React from 'react'

import { useClickOutside, useDidMountEffect } from '@collegebacker/shared/hooks'

import commonStyles from './common.module.scss'
import buttonsStyles from './buttons.module.scss'

interface Props {
  isOpen?: boolean
  children: React.ReactNode
  className?: string
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
  // const [isAnimationEnded, setIsAnmationEnded] = React.useState(false)

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
      console.log('isOpen', isOpen)
      // add class to modalWrapRef
      modalWrapRef.current?.classList.add(commonStyles.modalWrap_show)
      modalRef.current?.classList.add(commonStyles.popup_show)
      gradientsRef.current?.classList.add(commonStyles.gradients_show)
    } else {
      console.log('isOpen', isOpen)
      // remove class from modalWrapRef
      modalWrapRef.current?.classList.add(commonStyles.modalWrap_hide)
      modalRef.current?.classList.add(commonStyles.popup_hide)
      gradientsRef.current?.classList.add(commonStyles.gradients_hide)

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
      const myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          if (
            window.innerHeight > (entry.target as HTMLDivElement).offsetHeight
          ) {
            modalRef.current?.classList.remove(commonStyles.bottomsheet_stick)
          } else {
            modalRef.current?.classList.add(commonStyles.bottomsheet_stick)
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

  return (
    isMount && (
      <aside
        role='dialog'
        aria-modal
        aria-hidden={false}
        ref={modalWrapRef}
        className={`${commonStyles.modalWrap}`}
        {...props.dataAttrs}
        // onAnimationStart={() => {
        //   console.log('animation start')
        // }}
      >
        <section
          ref={modalRef}
          className={`${commonStyles.modal} ${
            !props.isBottomSheet ? commonStyles.popup : commonStyles.bottomsheet
          } ${props.className}`}
        >
          {props.showBackButton && (
            <button
              className={buttonsStyles.backButton}
              onClick={props.onBackClick}
            >
              <div className={buttonsStyles.backButton__background} />
            </button>
          )}
          <button
            className={buttonsStyles.closeButton}
            onClick={handleCloseClick}
          >
            <div className={buttonsStyles.closeButton__background} />
          </button>

          <div
            tabIndex={0}
            className={`${commonStyles.contentWrapper} ${props.contentClassName}`}
          >
            {props.children}
          </div>
        </section>

        <div
          className={commonStyles.gradients}
          ref={gradientsRef}
          // onAnimationEnd={() => {
          //   console.log('animation end')
          // }}
        >
          <div className={commonStyles.gradient1} />
          <div className={commonStyles.gradient2} />
        </div>
      </aside>
    )
  )
})

Modal.defaultProps = {
  className: '',
  contentClassName: '',
  showCloseButton: true,
  showBackButton: false,
  isBottomSheet: false,
  isOpen: false
} as Partial<Props>

export default Modal
