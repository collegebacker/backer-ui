import React from 'react'
import ReactDOM from 'react-dom'
import { useDidMountEffect } from '@collegebacker/shared/hooks'

import Popup from './Popup'

export interface Props {
  isOpen?: boolean
  className?: string
  contentClassName?: string
  children: React.ReactNode
  isBottomSheet?: boolean
  closeOnClickOutside?: boolean
  showCloseButton?: boolean
  showBackButton?: boolean
  dataAttrs?: Record<string, string>
  onBackClick?: () => void
  onCloseClick?: () => void
}

const Modal = React.forwardRef<any, Props>((props, ref) => {
  const popupRef = React.useRef<any>(null)
  const bottomSheetRef = React.useRef<any>(null)

  const handleOpen = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.touchAction = 'none'

    popupRef.current?.open()
  }

  const handleClose = () => {
    document.body.style.removeProperty('overflow')
    document.body.style.removeProperty('touch-action')

    if (props.onCloseClick) {
      props.onCloseClick()
    }
    popupRef.current?.close()
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
    if (props.isOpen) {
      // console.log("open foo");
      handleOpen()
    }
  }, [props.isOpen])

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
    <Popup {...props} onCloseClick={handleOnCloseClick} ref={popupRef} />,
    document.body
  )
})

Modal.displayName = 'Modal'

Modal.defaultProps = {
  className: '',
  contentClassName: '',
  showCloseButton: true,
  showBackButton: false,
  isBottomSheet: false
} as Partial<Props>

export default Modal
