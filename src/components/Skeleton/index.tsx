import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

//////////////////////////
// TYPES AND INTERFACES //
//////////////////////////

export interface SkeletonBodyIProps {
  className?: string
  style?: React.CSSProperties
  showBackground?: boolean
  children?: React.ReactNode
}

export interface SkeletonBoneIProps {
  className?: string
  style?: React.CSSProperties
}

export interface SkeletonTextProps extends SkeletonBoneIProps {
  fontSize:
    | 'title-xlarge'
    | 'title-large'
    | 'title-medium'
    | 'title-medium-adaptive'
    | 'title-small'
    | 'body-large'
    | 'body-large-adaptive'
    | 'body-main'
    | 'body-caption'
  lines: number
}

export interface SkeletonButtonProps extends SkeletonBoneIProps {
  size?: 'default' | 'small' | 'pill'
}

////////////////
// COMPONENTS //
////////////////

const SkeletonBody: React.FC<SkeletonBodyIProps> = (props) => {
  return (
    <div
      className={joinClasses(
        props.showBackground ? styles.body : '',
        props.className
      )}
      style={{ ...props.style }}
    >
      {props.children}
    </div>
  )
}

const SkeletonBone: React.FC<SkeletonBoneIProps> = (props) => {
  return (
    <div
      className={joinClasses(styles.bone, props.className)}
      style={{ ...props.style }}
    />
  )
}

const TextLine: React.FC<SkeletonTextProps> = (props) => {
  return (
    <div
      className={joinClasses(
        styles.bone,
        styles[props.fontSize],
        props.className
      )}
      style={{ ...props.style }}
    />
  )
}

const SkeletonText: React.FC<SkeletonTextProps> = (props) => {
  return props.lines > 1 ? (
    <div
      className={joinClasses(styles.textWrap, props.className)}
      style={{ ...props.style }}
    >
      {[...Array(props.lines)].map((_, i) => (
        <TextLine
          key={i}
          fontSize={props.fontSize}
          lines={props.lines}
          style={{
            width: i === props.lines - 1 ? '80%' : '100%',
            marginBottom: i === props.lines - 1 ? 'initial' : '14px'
          }}
        />
      ))}
    </div>
  ) : (
    <TextLine
      className={props.className}
      fontSize={props.fontSize}
      lines={props.lines}
      style={{ ...props.style }}
    />
  )
}

const SkeletonButton: React.FC<SkeletonButtonProps> = (props) => {
  return (
    <div
      className={joinClasses(
        styles.bone,
        styles.button,
        styles[`button__${props.size}`],
        props.className
      )}
      style={{ ...props.style }}
    />
  )
}

const SkeletonProfilePic: React.FC<SkeletonBoneIProps> = (props) => {
  return (
    <div
      className={joinClasses(styles.bone, styles.profilePic, props.className)}
      style={{ ...props.style }}
    />
  )
}

///////////////////
// DEFAULT PROPS //
///////////////////

const commonProps = {
  className: '',
  style: {}
}

SkeletonBody.defaultProps = {
  ...commonProps,
  showBackground: true
}

SkeletonBone.defaultProps = {
  ...commonProps
}

SkeletonText.defaultProps = {
  ...commonProps,
  fontSize: 'body-main',
  lines: 2
}

SkeletonButton.defaultProps = {
  ...commonProps,
  size: 'default'
}

SkeletonProfilePic.defaultProps = {
  ...commonProps
}

///////////////////////
// EXPORT COMPONENTS //
///////////////////////

export {
  SkeletonBody,
  SkeletonBone,
  SkeletonText,
  SkeletonButton,
  SkeletonProfilePic
}
