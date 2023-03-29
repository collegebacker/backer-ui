declare global {
  type IconTypes =
    | 'menu'
    | 'arrow-left'
    | 'cross'
    | 'chevron-left'
    | 'chevron-in-circle-left'
    | 'close-circle'
    | 'tickmark-in-circle'
    | 'tickmark'
    | 'plus'
    | 'question'
    | 'alert'
    | 'credit-card'
    | 'mail'
    | 'photo'
    | 'image'
    | 'trashcan'
    | 'settings'
    | 'profile'
    | 'person'
    | 'pointing-hand'
    | 'analytics'
    | 'gift'
    | 'new-tab'
    | 'calendar'
    | 'shield'
    | 'opened-eye'
    | 'closed-eye'
    | 'arrow-right'
    | 'chevron-right'
    | 'chevron-down'
    | 'chevron-top'
    | 'chevron-in-circle-right'
    | 'plus-in-circle'
    | 'download'
    | 'minus-in-circle'
    | 'kebab'
    | 'phone'
    | 'like'
    | 'full-screen'
    | 'emoji'
    | 'share'
    | 'resize-photo'
    | 'refresh'
    | 'chevron-in-circle-down'
    | 'chevron-in-circle-up'
    | 'send'
    | 'share-arrow'
    | 'edit'
    | 'arrow-up'
    | 'star'
    | 'file'
    | 'protection'
    | 'font'
    | 'balance'

  type TargetTypes = '_blank' | '_self' | '_parent' | '_top'

  type PaymentLogoTypes =
    | 'visa'
    | 'paypal'
    | 'apple-pay'
    | 'apple-pay-framed'
    | 'g-pay'
    | 'g-pay-framed'
    | 'mastercard'
    | 'mastercard-nocaption'
    | 'discover'

  type AppTypographyTypes =
    | 'title-xlarge'
    | 'title-large'
    | 'title-medium'
    | 'title-medium-adaptive'
    | 'title-small'
    | 'body-large'
    | 'body-large-adaptive'
    | 'body-large-paragraph'
    | 'body-large-paragraph-adaptive'
    | 'body-main'
    | 'body-paragraph'
    | 'body-caption'

  type MarketingTypographyTypes =
    | 'xlarge'
    | 'large'
    | 'lead'
    | 'lead-bold'
    | 'lead-small'
    | 'lead-small-bold'
    | 'accent-paragraph'
    | 'accent-paragraph-bold'
    | 'paragraph'
    | 'paragraph-bold'
    | 'caption'
    | 'caption-bold'

  type ToastItemProps = {
    closeOnClick?: boolean
    showCloseIcon?: boolean
    dismissButton?: boolean
    button?: {
      label: string | null
      onClick: () => void | null
    }
    emoji?: string
    type?: 'success' | 'error' | 'warning' | 'info'
    timeout?: number
    onClose?: () => void
  }

  type ModalAnimationSizeProps = {
    size: {
      width: number
      height: number
    }
    delay: number
    onAnimationStart: () => void
    onAnimationEnd: () => void
  }

  type SelectOptionType = {
    label: string
    value: string
  }

  type SwitchSelectorItem = {
    index: number
    label: string
    value?: string
  }
}

export {}
