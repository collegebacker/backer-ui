import React from 'react'
import styles from './styles.module.scss'
import { joinClasses } from '../../utils'
import gsap from 'gsap'
import { stringToGradient, isMobile, getFirstLetter } from '../../utils'

export interface PolaroidPhotoIProps {
  className?: string
  style?: React.CSSProperties
  name?: string
  uploadMode?: boolean
  imageSrc?: string | undefined
  onChange?: (imageFile: File) => void
  onClick?: () => void
  noHoverEffect?: boolean
}

const PolaroidPhoto: React.FC<PolaroidPhotoIProps> = (props) => {
  const photoRef = React.useRef<HTMLDivElement>(null)
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    setImageSrc(props.imageSrc)
  }, [props.imageSrc])

  return (
    <div
      className={joinClasses(styles.polaroidWrapper, props.className)}
      style={props.style}
      onClick={props.onClick}
    >
      <div
        ref={photoRef}
        className={styles.polaroid}
        onMouseMove={(e) => {
          if (isMobile() || props.noHoverEffect) return

          const elBounds = e.currentTarget.getBoundingClientRect()
          const elWidth = elBounds.width
          const elHeight = elBounds.height

          const xPos = (e.clientX - elBounds.left) / elWidth
          const yPos = (e.clientY - elBounds.top) / elHeight

          const xDeg = xPos * 20 - 10
          const yDeg = yPos * 20 - 10

          gsap.to(photoRef.current, {
            rotateX: yDeg,
            rotateY: xDeg,
            scale: 1.05,
            duration: 0.2
          })
        }}
        onMouseLeave={(e) => {
          if (isMobile()) return

          gsap.to(e.currentTarget, {
            duration: 0.5,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            ease: 'Power3.easeOut'
          })
        }}
      >
        {props.uploadMode && (
          <div className={styles.uploadPhoto}>
            <input
              type='file'
              accept='image/*'
              id='upload-polaroid-input'
              multiple={false}
              title={imageSrc ? 'Change photo' : 'Upload photo'}
              onClick={(e) => {
                e.currentTarget.value = ''
              }}
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  props.onChange(file)
                }
              }}
            />

            <div
              className={joinClasses(
                styles.uploadPhotoPlaceholderImage,
                imageSrc ? styles.imageExist : ''
              )}
            >
              <svg
                width='33'
                height='27'
                viewBox='0 0 33 27'
                fill='none'
                stroke='var(--color-main-500)'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  vectorEffect='non-scaling-stroke'
                  d='M16.3331 20.0692C19.2297 20.0692 21.5778 17.721 21.5778 14.8244C21.5778 11.9279 19.2297 9.57971 16.3331 9.57971C13.4365 9.57971 11.0884 11.9279 11.0884 14.8244C11.0884 17.721 13.4365 20.0692 16.3331 20.0692Z'
                />
                <path
                  vectorEffect='non-scaling-stroke'
                  d='M4.84375 5.24988L4.84375 12.9095'
                />
                <path
                  vectorEffect='non-scaling-stroke'
                  d='M8.67327 9.07959L1.01367 9.07959'
                />
                <path
                  vectorEffect='non-scaling-stroke'
                  d='M1.65186 14.1861L1.65186 25.0372L31.0139 25.0372L31.0139 5.88815L22.0777 5.88815L22.0777 2.05835L10.5882 2.05835L10.5882 6.52645'
                />
              </svg>
            </div>

            <div className={joinClasses(styles.photoHoverFade, styles.photo)} />
          </div>
        )}

        <div
          className={styles.photo}
          style={{
            backgroundImage: `url(${imageSrc}), ${stringToGradient(props.name)}`
          }}
        >
          {!imageSrc && !props.uploadMode && (
            <svg className={styles.letterPlaceholder} viewBox='0 0 60 60'>
              <text
                x='50%'
                y='52%'
                textAnchor='middle'
                alignmentBaseline='middle'
              >
                {getFirstLetter(props.name)}
              </text>
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

PolaroidPhoto.defaultProps = {
  className: '',
  style: {},
  uploadMode: true,
  noHoverEffect: false
} as Partial<PolaroidPhotoIProps>

export default PolaroidPhoto
