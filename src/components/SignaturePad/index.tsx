import React from 'react'
import styles from './styles.module.scss'

import SwitchSelector from '../SwitchSelector'

export interface Props {
  className?: string
}

const SignaturePad: React.FC<Props> = (props) => {
  return (
    <section className={`${styles.wrap} ${props.className}`}>
      <SwitchSelector
        items={[
          {
            label: 'Draw',
            onClick: (value) => console.log(value)
          },
          {
            label: 'Type',
            onClick: (value) => console.log(value)
          }
        ]}
      />
    </section>
  )
}

SignaturePad.defaultProps = {
  className: ''
} as Partial<Props>

export default SignaturePad
