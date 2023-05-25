import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

import logosURLs from './logosURLs.json'

export interface PaymentLogoIProps {
  className?: string
  style?: React.CSSProperties
  mode?: 'light' | 'dark'
  name: PaymentLogoTypes
}

const PaymentLogo: React.FC<PaymentLogoIProps> = (props) => {
  return (
    <img
      src={logosURLs[props.name][props.mode]}
      alt={props.name}
      className={joinClasses([styles.icon, props.className])}
      style={props.style}
    />
  )
}

PaymentLogo.defaultProps = {
  className: '',
  mode: 'light',
  name: 'apple-pay',
  style: {}
} as Partial<PaymentLogoIProps>

export default PaymentLogo
