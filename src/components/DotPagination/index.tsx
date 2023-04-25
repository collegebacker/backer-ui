import React from 'react'
import { joinClasses } from '../../utils'
import styles from './styles.module.scss'

export interface Props {
  className?: string
  style?: React.CSSProperties
  totalAmount: number
  activeIndex: number
  visibleAmount?: number
}

const DotPagination: React.FC<Props> = (props) => {
  const limitDots = (index: number) => {
    if (
      index + 1 > props.activeIndex + props.visibleAmount ||
      index < props.activeIndex
    ) {
      if (
        index < props.totalAmount - props.visibleAmount ||
        index > props.visibleAmount + props.activeIndex - 1
      ) {
        // console.log("limitDots", index);
        return true
      }
    }
  }

  const spaceBetweenDots = 10
  const dotsSize = 8
  const activeDot = 20
  const stepSize = spaceBetweenDots + dotsSize

  const isCornerStep = () => {
    if (
      props.activeIndex === 0 ||
      props.activeIndex + 1 > props.totalAmount - props.visibleAmount
    ) {
      return activeDot
    } else {
      return stepSize + activeDot
    }
  }

  const setShiftPosition = () => {
    if (props.activeIndex < props.totalAmount - props.visibleAmount) {
      return `translateX(-${(props.activeIndex - 1) * stepSize}px)`
    } else {
      return `translateX(-${
        (props.totalAmount - props.visibleAmount - 1) * stepSize
      }px)`
    }
  }

  return (
    <div
      className={joinClasses([styles.container, props.className])}
      style={{
        width:
          props.visibleAmount < props.totalAmount
            ? `${props.visibleAmount * stepSize + isCornerStep()}px`
            : 'fit-content',
        ...props.style
      }}
    >
      <div
        className={styles.wrap}
        style={{
          transform: setShiftPosition()
        }}
      >
        {Array.from(Array(props.totalAmount).keys()).map((_, index) => {
          return (
            <div
              className={joinClasses([
                styles.paginationDot,
                props.activeIndex === index ? styles.activeDot : ''
              ])}
              style={{
                transform: `scale(${limitDots(index) ? 0.5 : 1})`
              }}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

DotPagination.defaultProps = {
  className: '',
  totalAmount: 6,
  activeIndex: 0,
  visibleAmount: 6,
  style: {}
} as Partial<Props>

export default DotPagination
