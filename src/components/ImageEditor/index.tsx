import React from 'react'
import styles from './styles.module.scss'

import Modal from '../Modal'
import Slider from '../Slider'
import Button from '../Button'
import AvatarEditor from 'react-avatar-editor'

export interface Props {
  className?: string
  imageFile: string | File | undefined
  isOpen?: boolean
  onSubmit?: (imageData: string) => void
  onClose?: () => void
}

const ImageIcon = (props: { size: number }) => {
  const ratio = 42 / 28

  const width = props.size
  const height = Math.round(props.size / ratio)

  return (
    <i
      className={styles.imageIcon}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <svg
        width={'100%'}
        height={'100%'}
        viewBox={`0 0 42 28`}
        fill='none'
        stroke='var(--color-main-500)'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M33.499 11.037C33.499 13.2096 31.714 14.9814 29.499 14.9814C27.284 14.9814 25.499 13.2096 25.499 11.037C25.499 8.86436 27.284 7.09253 29.499 7.09253C31.714 7.09253 33.499 8.86436 33.499 11.037Z'
          vectorEffect={'non-scaling-stroke'}
        />
        <path
          d='M1 21L13.02 9.5556L31 27M1 1H41V27H1V1Z'
          vectorEffect={'non-scaling-stroke'}
        />
      </svg>
    </i>
  )
}

const ImageEditor: React.FC<Props> = props => {
  const editorWrapRef = React.useRef<any>(null)
  const editorRef = React.useRef<any>(null)

  const [isOpen, setIsOpen] = React.useState(props.isOpen)
  const [isBusy, setIsBusy] = React.useState(false)
  const [imageFile, setImageFile] = React.useState(props.imageFile)
  const [scale, setScale] = React.useState(2)
  const [modalWidth, setModalWidth] = React.useState(450)

  const editorWindowSize = 200
  const maxValue = 5

  React.useEffect(() => {
    setImageFile(props.imageFile)
  }, [props.imageFile])

  React.useEffect(() => {
    const handleResize = () => {
      if (editorWrapRef.current) {
        const width = editorWrapRef.current.offsetWidth
        setModalWidth(width)
      }
    }

    setTimeout(() => {
      handleResize()
    }, 20)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [editorWrapRef.current])

  React.useEffect(() => {
    setIsOpen(props.isOpen)

    if (!props.isOpen) {
      setIsBusy(false)
      setScale(2)
    }
  }, [props.isOpen])

  const handleReuploadImage = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = event => {
      const file = (event.target as any).files[0]
      setImageFile(file)
    }
    input.click()
  }

  const getImageUrl = async () => {
    const imageCanvas = editorRef.current.getImage()

    // resize image to 400x400
    const resizedImageCanvas = document.createElement('canvas')
    resizedImageCanvas.width = 400
    resizedImageCanvas.height = 400
    const resizedImageCanvasContext = resizedImageCanvas.getContext('2d')
    resizedImageCanvasContext.drawImage(imageCanvas, 0, 0, 400, 400)

    const resizedImage = resizedImageCanvas.toDataURL('image/jpeg', 0.8)

    return resizedImage
  }

  const handleSubmit = async () => {
    if (props.onSubmit) {
      setIsBusy(true)
      props.onSubmit(await getImageUrl())
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      isBottomSheet
      closeOnClickOutside={false}
      onCloseClick={props.onClose}
      className={styles.modal}
    >
      <div ref={editorWrapRef} className={styles.editorViewWrapper}>
        <AvatarEditor
          ref={editorRef}
          className={styles.editorView}
          image={imageFile}
          width={editorWindowSize}
          height={editorWindowSize}
          border={[modalWidth / 2 - editorWindowSize / 2, 80]}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={scale}
          rotate={0}
        />
      </div>

      <div className={styles.controls}>
        <span className={`typo-app-body-caption ${styles.caption}`}>
          Resize image
        </span>

        <div className={styles.sliderWrap}>
          <ImageIcon size={20} />
          <Slider
            className={styles.slider}
            min={1}
            max={maxValue}
            step={1 / (maxValue * 4)}
            value={scale}
            onChange={event => {
              setScale(event.target.valueAsNumber)
            }}
          />
          <ImageIcon size={40} />
        </div>

        <div className={styles.buttons}>
          <Button
            className={styles.button}
            label='Save image'
            busy={isBusy}
            disabled={!imageFile}
            onClick={handleSubmit}
          />
          <Button
            className={styles.button}
            label='Upload another one'
            mode='ghost'
            onClick={handleReuploadImage}
          />
        </div>
      </div>
    </Modal>
  )
}

ImageEditor.defaultProps = {
  className: '',
  isOpen: false,
  imageFile: '',
  isLoaded: false
} as Partial<Props>

export default ImageEditor
