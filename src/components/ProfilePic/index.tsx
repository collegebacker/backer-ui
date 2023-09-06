import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

import { stringToGradient, getFirstLetter } from '../../utils'

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface ProfilePicIProps {
  className?: string
  style?: React.CSSProperties
  name?: string
  imageSrc?: string
  uploadMode?: boolean
  profileIcon?: boolean
  onChange?: (imageFile: File) => void
}

/////////////////////////////////
///////// SVG PICTURES //////////
/////////////////////////////////

const ProfilePicSVG = () => (
  <svg viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <ellipse cx='30.4153' cy='21.7068' rx='5.70682' ry='5.70682' fill='white' />
    <path
      d='M30.2723 30.8376C24.5991 30.8376 20 35.4367 20 41.1099H40.5445C40.5445 35.4367 35.9455 30.8376 30.2723 30.8376Z'
      fill='white'
    />
  </svg>
)

const CameraSVG = () => (
  <svg
    viewBox='0 0 33 27'
    fill='none'
    stroke='var(--color-main-500)'
    xmlns='http://www.w3.org/2000/svg'
    vectorEffect='non-scaling-stroke'
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
)

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const ProfilePic: React.FC<ProfilePicIProps> = (props) => {
  const [imageSrc, setImageSrc] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    setImageSrc(props.imageSrc)
  }, [props.imageSrc])

  //
  return (
    <div
      className={joinClasses(
        styles.pic,
        props.className ? props.className : ''
      )}
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
              styles.cameraImage,
              imageSrc && !props.profileIcon ? styles.imageExist : '',
              props.profileIcon
                ? styles.cameraImageShiftPosition
                : styles.cameraImageNormalPosition
            )}
          >
            <CameraSVG />
          </div>
        </div>
      )}

      {props.profileIcon && !props.imageSrc && (
        <div className={styles.profileIcon}>
          <ProfilePicSVG />
        </div>
      )}

      {!props.imageSrc && !props.uploadMode && !props.profileIcon && (
        <svg className={styles.letterPlaceholder} viewBox='0 0 60 60'>
          <text x='50%' y='52%' textAnchor='middle' alignmentBaseline='middle'>
            {getFirstLetter(props.name)}
          </text>
        </svg>
      )}
    </div>
  )
}

ProfilePic.defaultProps = {
  className: '',
  imageSrc: '',
  uploadMode: false,
  profileIcon: false
} as Partial<ProfilePicIProps>

export default ProfilePic
