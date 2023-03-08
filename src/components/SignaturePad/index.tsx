import React from 'react'
import styles from './styles.module.scss'

import SwitchSelector from '../SwitchSelector'

export interface Props {
  className?: string
}

const PadFrame: React.FC = (children: React.ReactNode) => {
  return (
    <section className={styles.padFrame}>
      <div className={styles.padFrameInner}>{children}</div>
    </section>
  )
}

const SignaturePad: React.FC<Props> = (props) => {
  const [selected, setSelected] = React.useState(0)

  return (
    <section className={`${styles.wrap} ${props.className}`}>
      <SwitchSelector
        items={[
          {
            label: 'Draw',
            value: 'draw',
            onClick: (value) => console.log(value)
          },
          {
            label: 'Type',
            value: 'type',
            onClick: (value) => console.log(value)
          }
        ]}
      />

      <div className={styles.signaturePadWrap}></div>
    </section>
  )
}

SignaturePad.defaultProps = {
  className: ''
} as Partial<Props>

export default SignaturePad
