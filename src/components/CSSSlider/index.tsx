import React from 'react'
import styles from './styles.module.scss'

import DotPagination from '../DotPagination'

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface BreakpointProps {
  breakpoint?: number
  cardsToShow?: number
  sidePaddingOffset?: number
  shiftHiddenCard?: number
  disableSideFading?: boolean
  hideArrows?: boolean
}

export interface Props {
  containterClassName?: string
  paginationClassName?: string
  spaceBetween?: number
  arrowsOffset?: number
  paginationAlignment?: 'center' | 'left' | 'right'
  children: React.ReactNode
  onChange?: (index: number) => void
  desktopBreakpoint?: BreakpointProps
  tabletBreakpoint?: BreakpointProps
  mobileBreakpoint?: BreakpointProps
}

const arrowSVG = (
  <svg
    width='10'
    height='16'
    viewBox='0 0 10 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.31384 7.99993L0.960289 7.64638L0.606736 7.99993L0.960289 8.35349L1.31384 7.99993ZM9.03964 15.0186L1.6674 7.64638L0.960289 8.35349L8.33254 15.7257L9.03964 15.0186ZM1.6674 8.35349L9.03965 0.981239L8.33254 0.274132L0.960289 7.64638L1.6674 8.35349Z'
      fill='var(--color-main-500)'
    />
  </svg>
)

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const CSSSlider: React.FC<Props> = (props) => {
  const desktopBreakpoint = {
    breakpoint: props.desktopBreakpoint?.breakpoint ?? 1024,
    cardsToShow: props.desktopBreakpoint?.cardsToShow ?? 3,
    sidePaddingOffset: props.desktopBreakpoint?.sidePaddingOffset ?? 40,
    shiftHiddenCard: props.desktopBreakpoint?.shiftHiddenCard ?? 0,
    disableSideFading: props.desktopBreakpoint?.disableSideFading ?? true,
    hideArrows: props.desktopBreakpoint?.hideArrows ?? false
  } as BreakpointProps

  const tabletBreakpoint = {
    breakpoint: props.tabletBreakpoint?.breakpoint ?? 768,
    cardsToShow: props.tabletBreakpoint?.cardsToShow ?? 2,
    sidePaddingOffset: props.tabletBreakpoint?.sidePaddingOffset ?? 40,
    shiftHiddenCard: props.tabletBreakpoint?.shiftHiddenCard ?? 0,
    disableSideFading: props.tabletBreakpoint?.disableSideFading ?? true,
    hideArrows: props.tabletBreakpoint?.hideArrows ?? false
  } as BreakpointProps

  const mobileBreakpoint = {
    breakpoint: props.mobileBreakpoint?.breakpoint ?? 480,
    cardsToShow: props.mobileBreakpoint?.cardsToShow ?? 1,
    sidePaddingOffset: props.mobileBreakpoint?.sidePaddingOffset ?? 20,
    shiftHiddenCard: props.mobileBreakpoint?.shiftHiddenCard ?? 0,
    disableSideFading: props.mobileBreakpoint?.disableSideFading ?? true,
    hideArrows: props.mobileBreakpoint?.hideArrows ?? true
  } as BreakpointProps

  const childrenRefs = React.useRef<HTMLDivElement[]>([])

  const [currentBreakpoint, setCurrentBreakpoint] =
    React.useState(desktopBreakpoint)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [paginationAmount, setPaginationAmount] = React.useState(0)

  const childrenArray = React.Children.toArray(props.children)

  const setPaginationAlignment = () => {
    // console.log(props);
    switch (props.paginationAlignment) {
      case 'left':
        return 'flex-start'
      case 'right':
        return 'flex-end'
      case 'center':
        return 'center'
      default:
        return 'center'
    }
  }

  const handlePrevious = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1
      // console.log(activeIndex);

      childrenRefs.current[newIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
    }
  }

  const handleNext = () => {
    if (activeIndex < childrenRefs.current.length - 1) {
      const newIndex = activeIndex + 1
      // setActiveIndex(newIndex);

      // console.log(newIndex);
      // console.log(childrenRefs.current[newIndex]);

      childrenRefs.current[newIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      })
    }
  }

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    childrenRefs.current.forEach((ref, index) => {
      const rect = ref.getBoundingClientRect()
      const relativeLeft =
        rect.left - e.currentTarget.getBoundingClientRect().left

      if (relativeLeft >= 0 && relativeLeft <= rect.width) {
        // console.log(index);
        setActiveIndex(index)
      }
    })
  }

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < mobileBreakpoint.breakpoint) {
        setCurrentBreakpoint(mobileBreakpoint)
      } else if (window.innerWidth < tabletBreakpoint.breakpoint) {
        setCurrentBreakpoint(tabletBreakpoint)
      } else if (window.innerWidth < desktopBreakpoint.breakpoint) {
        setCurrentBreakpoint(desktopBreakpoint)
      } else {
        setCurrentBreakpoint(desktopBreakpoint)
      }

      setPaginationAmount(
        childrenArray.length - currentBreakpoint.cardsToShow + 1
      )
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [currentBreakpoint.cardsToShow])

  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(activeIndex)
    }

    console.log(currentBreakpoint.cardsToShow, paginationAmount)
  }, [activeIndex])

  return (
    <section className={`${styles.container} ${props.containterClassName}`}>
      {!currentBreakpoint.disableSideFading ? (
        <div className={styles.sideFading} />
      ) : null}

      {currentBreakpoint.hideArrows ? null : (
        <div className={styles.arrows}>
          <button
            className={`${styles.arrow} ${
              activeIndex === 0 ? styles.arrow_disabled : styles.arrow_active
            }`}
            title='previous'
            style={{
              left: `${
                currentBreakpoint.sidePaddingOffset + props.arrowsOffset
              }px`
            }}
            onClick={handlePrevious}
          >
            {arrowSVG}
          </button>
          <button
            className={`${styles.arrow} ${
              activeIndex === paginationAmount - 1
                ? styles.arrow_disabled
                : styles.arrow_active
            }`}
            title='next'
            style={{
              right: `${
                currentBreakpoint.sidePaddingOffset + props.arrowsOffset
              }px`
            }}
            onClick={handleNext}
          >
            {arrowSVG}
          </button>
        </div>
      )}

      <div className={styles.sliderWrap} onScroll={handleScroll}>
        <div
          className={styles.slider}
          style={{
            paddingLeft: `${currentBreakpoint.sidePaddingOffset}px`,
            width: `calc(100% - ${
              currentBreakpoint.sidePaddingOffset -
              props.spaceBetween +
              currentBreakpoint.shiftHiddenCard
            }px)`
          }}
        >
          {React.Children.toArray(props.children).map((child, index) => {
            return (
              <div
                className={styles.card}
                key={index}
                style={{
                  flex: `0 0 calc(100% / ${currentBreakpoint.cardsToShow} - ${props.spaceBetween}px)`,
                  marginRight:
                    index !== React.Children.count(props.children) - 1
                      ? `${props.spaceBetween}px`
                      : '0',
                  scrollMarginLeft: `${currentBreakpoint.sidePaddingOffset}px`
                }}
                ref={(el) => (childrenRefs.current[index] = el)}
              >
                {child}
              </div>
            )
          })}
          <div
            style={{
              flex: `0 0 ${currentBreakpoint.sidePaddingOffset}px`,
              scrollMarginLeft: `${currentBreakpoint.sidePaddingOffset}px`
            }}
          />
        </div>
      </div>

      {paginationAmount > 1 ? (
        <div
          className={`${styles.pagination} ${props.paginationClassName}`}
          style={{
            justifyContent: setPaginationAlignment(),
            marginLeft: `${currentBreakpoint.sidePaddingOffset}px`,
            marginRight: `${currentBreakpoint.sidePaddingOffset}px`
          }}
        >
          <DotPagination
            totalAmount={paginationAmount}
            activeIndex={activeIndex}
          />
        </div>
      ) : null}
    </section>
  )
}

CSSSlider.defaultProps = {
  containterClassName: '',
  spaceBetween: 20,
  arrowsOffset: 20,
  paginationAlignment: 'left'
} as Partial<Props>

export default CSSSlider
