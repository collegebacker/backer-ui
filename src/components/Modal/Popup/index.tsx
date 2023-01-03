import React from 'react'
import gsap from 'gsap'

import { useClickOutside, useDidMountEffect } from '@collegebacker/shared/hooks'

import commonStyles from './common.module.scss'
import buttonsStyles from './buttons.module.scss'
import Header from '../Header'

interface Props {
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

const Popup = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null)
  const popupRef = React.useRef<HTMLDivElement>(null)
  const gradientsRef = React.useRef<HTMLDivElement>(null)

  const [isMount, setIsMount] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isShown, setIsShown] = React.useState(false)
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(true)

  //////////////
  // IMPERIAL //
  //////////////

  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return popupRef.current
    },
    open: () => {
      if (isAnimationFinished) {
        // console.log("isAnimationFinished", isAnimationFinished);
        setIsOpen(true)
      }
    },
    close: () => {
      // console.log("isAnimationFinished", isAnimationFinished);
      if (isAnimationFinished) {
        setIsOpen(false)
      }
    }
  }))

  //////////////
  // HANDLERS //
  //////////////

  const handleCloseClick = () => {
    // console.log("close click");
    if (isShown && isAnimationFinished) {
      props.onCloseClick()
    }
  }

  ///////////////
  //// HOOKS ////
  ///////////////

  useClickOutside(
    popupRef,
    () => {
      // console.log(isAppeared, props.closeOutside, props.isMobileBreakpoint);
      // console.log("clicked outside");
      props.closeOnClickOutside && handleCloseClick()
    },
    isShown
  )

  /////////////////
  // USE EFFECTS //
  /////////////////

  useDidMountEffect(() => {
    // kill all animations
    gsap.killTweensOf(modalWrapRef.current)

    if (isMount) {
      if (isOpen) {
        gsap.to(modalWrapRef.current, {
          opacity: 1,
          pointerEvents: 'all',
          backgroundImage:
            'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)',
          duration: 0.1,
          onStart: () => {
            setIsAnimationFinished(false)
          },
          onComplete: () => {
            popupRef.current?.classList.add(commonStyles.popup_show)
          }
        })
        gsap.to(gradientsRef.current, {
          opacity: 1,
          scale: 1,
          delay: 0.1,
          duration: 0.5,
          ease: 'circ.out',
          onComplete: () => {
            setIsShown(true)
            setIsAnimationFinished(true)
          }
        })
      } else {
        gsap.to(modalWrapRef.current, {
          pointerEvents: 'none',
          opacity: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 10%)',
          duration: 0.4,
          onStart: () => {
            popupRef.current?.classList.remove(commonStyles.popup_show)
            setIsShown(false)
            setIsAnimationFinished(false)
          }
        })
        gsap.to(gradientsRef.current, {
          opacity: 0,
          scale: 0.1,
          duration: 0.7,
          ease: 'circ.out',
          onComplete: () => {
            modalWrapRef.current.blur()
            setIsMount(false)
            setIsAnimationFinished(true)
          }
        })
      }
    }
  }, [isOpen, isMount])

  React.useEffect(() => {
    if (isOpen) {
      setIsMount(true)
    }
  }, [isOpen])

  /////////////////
  /// FUNCTIONS ///
  /////////////////

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
      >
        <section
          ref={popupRef}
          className={`${commonStyles.popup} ${props.className}`}
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
            onClick={props.onCloseClick}
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

        <div className={commonStyles.gradients} ref={gradientsRef}>
          <div className={commonStyles.gradient1} />
          <div className={commonStyles.gradient2} />
        </div>
      </aside>
    )
  )
})

Popup.defaultProps = {
  className: '',
  contentClassName: '',
  showCloseButton: true,
  showBackButton: false,
  isBottomSheet: false
} as Partial<Props>

export default Popup
