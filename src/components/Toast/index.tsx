import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'

import ToastItem from './ToastItem'

export type ToastProps = {
  message: string
  params?: ToastParamsProps
}

const Toast = React.forwardRef<ToastRef, {}>((_, ref: React.Ref<ToastRef>) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  React.useImperativeHandle(ref, () => ({
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
