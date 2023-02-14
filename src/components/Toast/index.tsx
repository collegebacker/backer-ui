import React, { useId } from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'

import ToastItem from './ToastItem'

export interface ItemProps {
  message: string
  params?: ToastItemProps
}

const Toast = React.forwardRef((_, ref) => {
  const [toasts, setToasts] = React.useState<Array<ItemProps>>([])

  React.useImperativeHandle(ref, () => ({
    showToast: (message: string, params: ToastItemProps) => {
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

      setToasts([...toasts, toastProps])
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
