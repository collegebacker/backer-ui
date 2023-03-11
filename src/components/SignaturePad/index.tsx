import React from 'react'
import styles from './styles.module.scss'

import trimCanvas from 'trim-canvas-blank'
import SignatureCanvas from 'react-signature-canvas'
import Icon from '../Icon'
import SwitchSelector from '../SwitchSelector'
import SelectModal from '../SelectModal'

export interface Props {
  className?: string
  style?: React.CSSProperties
  errorMessage?: string
  onStartInteract?: () => void
}

const Button: React.FC<{
  icon: IconTypes
  label: string
  onClick: () => void
}> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick} type='button'>
      <Icon name={props.icon} />
      <span className='typo-app-body-caption'>{props.label}</span>
    </button>
  )
}

const calculateTextWidth = (text: string, font: string, fontSize: number) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  context.font = `${fontSize}px ${font}`
  return context.measureText(text).width
}

const convertTextToImage = (
  text: string,
  font: string,
  fontSize: number,
  scaleRatio: number
) => {
  const padding = 40

  const retinaFont = fontSize * scaleRatio
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  const textWidth = calculateTextWidth(text, font, retinaFont)
  const textHeight = retinaFont
  canvas.width = textWidth + padding
  canvas.height = textHeight + padding
  context.font = `${retinaFont}px ${font}`
  context.fillStyle = 'black'
  context.fillText(text, padding / 4, textHeight - padding / 2)

  // trim canvas
  const trimmedCanvas = trimCanvas(canvas, {
    padding: 2
  })

  return trimmedCanvas.toDataURL()
}

const SignaturePad = React.forwardRef<any, Props>((props, ref) => {
  const padWrapRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const signatureCanvasRef = React.useRef<SignatureCanvas>(null)

  const [currentTab, setCurrentTab] = React.useState(0)

  const [isError, setIsError] = React.useState(false)
  const [selectedFont, setSelectedFont] = React.useState('bilbo')
  const [textWidth, setTextWidth] = React.useState(0)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [text, setText] = React.useState('')

  const [padWrapFrameSize, setPadWrapFrameSize] = React.useState({
    width: 0,
    height: 0
  })
  const [inputFrameSize, setInputFrameSize] = React.useState({
    width: 0,
    height: 0
  })

  const fonts = [
    {
      label: 'Bilbo',
      value: 'bilbo',
      className: styles.bilbo
    },
    {
      label: 'Qwigley',
      value: 'qwigley',
      className: styles.qwigley
    },
    {
      label: 'Kristi',
      value: 'kristi',
      className: styles.kristi
    }
  ]

  const baseFontSize = 70
  const scaleRatio = 1.5

  const handleResize = () => {
    if (padWrapRef.current) {
      setPadWrapFrameSize({
        width: padWrapRef.current.offsetWidth,
        height: padWrapRef.current.offsetHeight
      })
    }
    if (inputRef.current) {
      setInputFrameSize({
        width: inputRef.current.offsetWidth,
        height: inputRef.current.offsetHeight
      })
    }
  }

  React.useImperativeHandle(
    ref,
    () => {
      return {
        clear: () => {
          if (currentTab === 0) {
            signatureCanvasRef.current.clear()
          } else {
            setText('')
          }
        },
        isEmpty: () => {
          if (currentTab === 0) {
            return signatureCanvasRef.current.isEmpty()
          } else {
            return text === ''
          }
        },
        getImageData: () => {
          if (currentTab === 0) {
            const trimmedCanvas = trimCanvas(
              signatureCanvasRef.current.getCanvas(),
              {
                padding: 2
              }
            )

            return trimmedCanvas.toDataURL()
          } else {
            return convertTextToImage(
              text,
              selectedFont,
              baseFontSize,
              scaleRatio
            )
          }
        }
      }
    },
    [currentTab, text, selectedFont]
  )

  React.useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [padWrapRef.current, inputRef.current])

  React.useEffect(() => {
    if (inputRef.current) {
      setTextWidth(calculateTextWidth(text, selectedFont, baseFontSize))
    }
  }, [text, selectedFont])

  React.useEffect(() => {
    if (inputRef.current) {
      // console.log(textWidth)
      if (textWidth > inputFrameSize.width) {
        const fontSize = Math.floor(
          (inputFrameSize.width / textWidth) * baseFontSize
        )
        inputRef.current.style.fontSize = `${fontSize}px`
      } else {
        inputRef.current.style.fontSize = `${baseFontSize}px`
      }
    }
  }, [textWidth])

  React.useEffect(() => {
    if (props.errorMessage) {
      setIsError(true)
    } else {
      setIsError(false)
    }
  }, [props.errorMessage])

  const helperText = () => {
    if (!isError) {
      if (currentTab === 0) {
        return 'Draw your signature'
      }
      return 'Type your name to generate a signature'
    }
    return props.errorMessage
  }

  return (
    <section
      className={`${styles.wrap} ${props.className}`}
      style={props.style}
    >
      <SelectModal
        modalTitle='Change the font'
        isOpen={isModalOpen}
        options={fonts}
        value={selectedFont}
        onSelect={(item) => {
          setSelectedFont(item.value)
          setIsModalOpen(false)
        }}
        onCloseClick={() => setIsModalOpen(false)}
      />

      <SwitchSelector
        items={[
          {
            label: 'Draw',
            value: 'draw',
            onClick: () => {
              setCurrentTab(0)
              setText('')
              props.onStartInteract && props.onStartInteract()
            }
          },
          {
            label: 'Type',
            value: 'type',
            onClick: () => {
              setCurrentTab(1)
              props.onStartInteract && props.onStartInteract()
            }
          }
        ]}
      />

      <div
        className={`${styles.signaturePadWrap} ${isError ? styles.error : ''}`}
        ref={padWrapRef}
      >
        {currentTab === 0 ? (
          <>
            <SignatureCanvas
              ref={signatureCanvasRef}
              penColor='black'
              canvasProps={{
                width:
                  padWrapFrameSize.width > 450 ? 450 : padWrapFrameSize.width,
                height: padWrapFrameSize.height,
                className: styles.signatureCanvas
              }}
              onBegin={() => {
                props.onStartInteract && props.onStartInteract()
              }}
            />
            <Button
              icon='refresh'
              label='Clear'
              onClick={() => {
                if (signatureCanvasRef.current) {
                  signatureCanvasRef.current.clear()
                }
              }}
            />
          </>
        ) : (
          <>
            <input
              className={`${styles.signatureInput} ${styles[selectedFont]}`}
              ref={inputRef}
              type='text'
              style={{
                fontSize: `${baseFontSize}px`
              }}
              value={text}
              onChange={(e) => {
                setText(e.target.value)
                props.onStartInteract && props.onStartInteract()
              }}
            />
            <Button
              icon='font'
              label='Change the font'
              onClick={() => setIsModalOpen(true)}
            />
          </>
        )}
        <div className={styles.padFrame} />
        <span className={`typo-app-body-caption ${styles.helperText}`}>
          {helperText()}
        </span>
      </div>
    </section>
  )
})

SignaturePad.defaultProps = {
  className: ''
} as Partial<Props>

export default SignaturePad
