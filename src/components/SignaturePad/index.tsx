import React from 'react'
import styles from './styles.module.scss'

import SignatureCanvas from 'react-signature-canvas'
import Icon from '../Icon'
import SwitchSelector from '../SwitchSelector'
import Modal from '../Modal'

export interface Props {
  className?: string
}

const PadFrame: React.FC<{ caption: string }> = ({ caption }) => {
  return (
    <>
      <div className={styles.padFrame}></div>
      <span className='typo-app-body-caption'>{caption}</span>
    </>
  )
}

const Button: React.FC<{
  icon: IconTypes
  label: string
  onClick: () => void
}> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <Icon name={props.icon} />
      <span className='typo-app-body-caption'>{props.label}</span>
    </button>
  )
}

const SignaturePad: React.FC<Props> = (props) => {
  const padWrapRef = React.useRef<HTMLDivElement>(null)
  const signatureCanvasRef = React.useRef<SignatureCanvas>(null)
  const [selected, setSelected] = React.useState(0)
  const [signatureSize, setSignatureSize] = React.useState({
    width: 0,
    height: 0
  })

  const handleResize = () => {
    if (padWrapRef.current) {
      setSignatureSize({
        width: padWrapRef.current.offsetWidth,
        height: padWrapRef.current.offsetHeight
      })
    }
  }

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className={`${styles.wrap} ${props.className}`}>
      <SwitchSelector
        items={[
          {
            label: 'Draw',
            value: 'draw',
            onClick: () => setSelected(0)
          },
          {
            label: 'Type',
            value: 'type',
            onClick: () => setSelected(1)
          }
        ]}
      />

      <div className={styles.signaturePadWrap} ref={padWrapRef}>
        {selected === 0 ? (
          <>
            <SignatureCanvas
              ref={signatureCanvasRef}
              penColor='black'
              canvasProps={{
                width: signatureSize.width > 450 ? 450 : signatureSize.width,
                height: signatureSize.height,
                className: styles.signatureCanvas
              }}
            />
            <Button
              icon='refresh'
              label='Clear'
              onClick={() => {
                if (signatureCanvasRef.current) {
                  console.log(signatureCanvasRef)
                  signatureCanvasRef.current.clear()
                }
              }}
            />
            <PadFrame caption='Please draw your signature' />
          </>
        ) : (
          <>
            <input className={styles.signatureInput} type='text' />
            <Button icon='font' label='Change the font' onClick={() => {}} />
            <PadFrame caption='Please draw your signature' />
          </>
        )}
      </div>
    </section>
  )
}

SignaturePad.defaultProps = {
  className: ''
} as Partial<Props>

export default SignaturePad
