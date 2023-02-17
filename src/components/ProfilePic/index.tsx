import React from 'react'
import styles from './styles.module.scss'

import { stringToGradient } from '../../utils'

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface Props {
  className?: string
  style?: React.CSSProperties
  name: string
  imageSrc?: string
  uploadMode?: boolean
  onChange?: (imageFile: File) => void
}

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const ProfilePic: React.FC<Props> = (props) => {
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    setImageSrc(props.imageSrc)
  }, [props.imageSrc])

  //
  return (
    <div
      className={`${styles.pic} ${props.className ? props.className : ''}`}
      style={{
        backgroundImage: `url(${props.imageSrc}), ${stringToGradient(
          props.name
        )}`,
        ...props.style
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
              if (imageSrc) {
                e.currentTarget.value = ''
              }
            }}
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) {
                props.onChange(file)
              }
            }}
          />
          {!imageSrc && (
            <div className={styles.uploadPhotoPlaceholderImage}>
              <svg
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
          )}
        </div>
      )}

      {!props.imageSrc && !props.uploadMode && (
        <svg className={styles.letterPlaceholder} viewBox='0 0 60 60'>
          <text x='50%' y='52%' textAnchor='middle' alignmentBaseline='middle'>
            {Array.from(props.name)[0].toUpperCase()}
          </text>
        </svg>
      )}
    </div>
  )
}

ProfilePic.defaultProps = {
  className: '',
  imageSrc: '',
  uploadMode: false
} as Partial<Props>

export default ProfilePic
