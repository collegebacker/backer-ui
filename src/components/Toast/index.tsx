import React, { forwardRef, Ref, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'

import ToastItem from './ToastItem'

export type ToastProps = {
  message: string
  params?: ToastParamsProps
}

const Toast = forwardRef<ToastRef, {}>((_, ref: Ref<ToastRef>) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  useImperativeHandle(ref as React.RefObject<ToastRef>, () => ({
    showToast: (message: string, params: ToastParamsProps) => {
      const toastProps = {
        message,
        params: {
          closeOnClick: params?.closeOnClick ?? true,
          showCloseIcon: params?.showCloseIcon ?? false,
          dismissButton: params?.dismissButton ?? false,
          button: {
            label: params?.button?.label ?? null,
            onClick: params?.button?.onClick ?? null
          },
          emoji: params?.emoji ?? '',
          type: params?.type ?? 'info',
          timeout: params?.timeout ?? null,
          onClose: params?.onClose ?? null
        }
      }

      setToasts((prevToasts) => [...prevToasts, toastProps])
    }
  }))

  return ReactDOM.createPortal(
    <aside id='backer-toast-container' className={styles.toastContainer}>
      {toasts.map((toast, index) => (
        <ToastItem key={index} message={toast.message} params={toast.params} />
      ))}
    </aside>,
    document.body
  )
})

Toast.displayName = 'Toast'

export default Toast
