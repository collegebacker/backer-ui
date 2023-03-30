import React from 'react'
import styles from './styles.module.scss'

import Button from '../../Button'

interface ItemProps {
  message: string | React.ReactNode
  params?: ToastParamsProps
}

const ToastItem: React.FC<ItemProps> = (props) => {
  const [isCloseTrigger, setIsCloseTrigger] = React.useState(false)
  const [isMount, setIsMount] = React.useState(true)

  const addEmoji = () => {
    if (props.params?.emoji) {
      return props.params?.emoji
    }

    switch (props.params?.type) {
      case 'success':
        return '🎉'
      case 'error':
        return '📛'
      case 'warning':
        return '⚠️'
      case 'info':
        return props.params?.emoji
      default:
        return props.params?.emoji
    }
  }

  const handleClose = () => {
    setIsCloseTrigger(true)

    if (props.params?.onClose) {
      props.params?.onClose()
    }
  }

  React.useEffect(() => {
    if (props.params?.timeout) {
      const timer = setTimeout(() => {
        handleClose()
      }, props.params?.timeout)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [])

  const handleCloseOnParentClick = () => {
    if (props.params?.closeOnClick && !props.params?.dismissButton) {
      handleClose()
    }
  }

  return isMount ? (
    <section
      className={`${styles.toastItemWrap} ${
        isCloseTrigger ? styles.toastOut : styles.toastIn
      }`}
      onClick={handleCloseOnParentClick}
      onAnimationEnd={() => {
        if (isCloseTrigger) {
          setIsMount(false)
        }
      }}
    >
      <div className={`${styles.toastItem} ${styles[props.params?.type]}`}>
        {props.params?.emoji !== '' || props.params?.type !== 'info' ? (
          <div className={styles.emoji}>{addEmoji()}</div>
        ) : null}

        <div
          className={styles.toastItem__content}
          style={{
            width: `calc(100% - ${
              props.params?.showCloseIcon ? '84px' : '40px'
            })`
          }}
        >
          <p className={`typo-app-body-main ${styles.toastItem__text}`}>
            {props.message}
          </p>

          {props.params?.dismissButton || props.params?.button.label ? (
            <div className={styles.toastItem__buttons}>
              {props.params?.button.label ? (
                <Button
                  className={styles.toastItem__button}
                  onClick={props.params?.button.onClick}
                  label={props.params?.button.label}
                  size='small'
                  mode='outline'
                  style={{
                    minWidth: 'auto'
                  }}
                />
              ) : null}

              {props.params?.dismissButton ? (
                <Button
                  className={styles.toastItem__button}
                  label='Dismiss'
                  size='small'
                  mode='outline'
                  style={{
                    minWidth: 'auto'
                  }}
                  onClick={handleClose}
                />
              ) : null}
            </div>
          ) : null}
        </div>

        {props.params?.showCloseIcon ? (
          <div className={styles.toastItem__closeIcon} onClick={handleClose} />
        ) : null}
      </div>
    </section>
  ) : null
}

export default ToastItem
