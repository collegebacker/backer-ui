import React from 'react'
import ReactDOM from 'react-dom'
import { useDidMountEffect } from '@collegebacker/shared/hooks'

import BottomSheet from './BottomSheet'
import Popup from './Popup'

export interface Props {
  isOpen?: boolean
  popupClassName?: string
  popupContentClassName?: string
  hideHeader?: boolean
  children: React.ReactNode
  customWidth?: number
  customPaddings?: string
  customPaddingsMobile?: string
  isBottomSheet?: boolean
  closeOutside?: boolean
  dataAttrs?: Record<string, string>
  maxSheetHeight?: string
  showBackButton?: boolean
  onBackClick?: () => void
  onCloseClick?: () => void
  animateSize?: (props: ModalAnimationSizeProps) => void
}

const Modal = React.forwardRef<any, Props>((props, ref) => {
  const popupRef = React.useRef<any>(null)
  const bottomSheetRef = React.useRef<any>(null)

  const [isMobileBreakpoint, setIsMobileBreakpoint] = React.useState(false)
  const mobilebreakpoint = 621

  const checkMobileBreakpoint = () => {
    // console.log("window.innerWidth", window.innerWidth < mobilebreakpoint);
    setIsMobileBreakpoint(window.innerWidth < mobilebreakpoint)
  }

  const handleOpen = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    // console.log(bottomSheetRef);

    if (props.isBottomSheet && window.innerWidth < mobilebreakpoint) {
      // console.log("mobile");
      bottomSheetRef.current?.open()
    } else {
      // console.log(bottomSheetRef.current);
      // console.log("desktop");
      popupRef.current?.open()
    }
  }

  const handleClose = () => {
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('touch-action')

    // console.log("close");
    if (props.onCloseClick) {
      props.onCloseClick()
    }

    if (props.isBottomSheet && window.innerWidth < mobilebreakpoint) {
      bottomSheetRef.current?.close()
    } else {
      popupRef.current?.close()
    }
  }

  //////////////
  // IMPERIAL //
  //////////////

  React.useImperativeHandle(ref, () => ({
    open: (callback: () => void) => {
      console.log('open')
      // set timer to make sure that all refs are set
      setTimeout(() => {
        handleOpen()
      }, 10)

      if (callback) {
        callback()
      }
    },
    close: (callback: () => void) => {
      console.log('close')
      handleClose()

      if (callback) {
        callback()
      }
    },
    getPopupRef: () => {
      return popupRef.current.getRef()
    },
    getBottomSheetRef: () => {
      return bottomSheetRef.current.getRef()
    }
  }))

  /////////////////
  // USE EFFECTS //
  /////////////////

  React.useEffect(() => {
    checkMobileBreakpoint()

    window.addEventListener('resize', checkMobileBreakpoint)

    return () => {
      window.removeEventListener('resize', checkMobileBreakpoint)
    }
  }, [])

  React.useEffect(() => {
    if (props.isOpen) {
      // console.log("open foo");
      handleOpen()
    }
  }, [props.isOpen, isMobileBreakpoint])

  useDidMountEffect(() => {
    if (!props.isOpen) {
      // console.log("close foo");
      handleClose()
    }
  }, [props.isOpen])

  const handleOnCloseClick = () => {
    handleClose()
  }

  //////////////
  /// RENDER ///
  //////////////

  return ReactDOM.createPortal(
    <>
      {props.isBottomSheet && isMobileBreakpoint ? (
        <BottomSheet
          {...props}
          isMobileBreakpoint={isMobileBreakpoint}
          onCloseClick={handleOnCloseClick}
          ref={bottomSheetRef}
        />
      ) : (
        <Popup
          {...props}
          isMobileBreakpoint={isMobileBreakpoint}
          onCloseClick={handleOnCloseClick}
          ref={popupRef}
        />
      )}
    </>,
    document.body
  )
})

Modal.displayName = 'Modal'

Modal.defaultProps = {
  isOpen: false,
  title: '',
  popupClassName: '',
  popupContentClassName: '',
  hideHeader: false,
  smallTitle: false,
  isBottomSheet: false,
  closeOutside: true,
  maxSheetHeight: null
} as Partial<Props>

export default Modal
