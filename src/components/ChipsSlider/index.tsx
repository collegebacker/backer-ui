import React from 'react'
import ArrowButton from '../ArrowButton'
import { Draggable } from 'gsap/dist/Draggable'
import { InertiaPlugin } from 'gsap-bonus/InertiaPlugin'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import { gsap } from 'gsap'
import { waitForScrollEnd } from '../../utils'
import { useDidMountEffect, usePrevious } from '../../hooks'
import { joinClasses } from '../../utils'

import styles from './styles.module.scss'

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

type ChipsSliderItemType = {
  label: string
  value: any
  caption?: string
}

export interface ChipsSliderIProps {
  containerClassName?: string
  arrowsClassName?: string
  items: Array<ChipsSliderItemType>
  defaultIndex?: number
  showGuidelines?: boolean
  cardWidth?: number
  cardHeight?: number
  activeCardScale?: number
  spaceBetween?: number
  showCaption?: boolean
  showArrows?: boolean
  cardFontSize?: number
  overlayGradientsClassName?: string
  hideOverlayGradients?: boolean
  alwaysShowOverlayGradients?: boolean
  onChange?: (index: number) => void
}

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const ChipsSlider: React.FC<ChipsSliderIProps> = (props) => {
  // Refs
  const sliderContainerRef = React.useRef<HTMLDivElement>(null)
  const sliderViewRef = React.useRef<HTMLDivElement>(null)
  const sliderRef = React.useRef<HTMLDivElement>(null)
  const sliderItemRefs = React.useRef<Array<HTMLDivElement>>([])
  const sliderItemWrapRefs = React.useRef<Array<HTMLDivElement>>([])

  const arrowLeftRef = React.useRef<HTMLDivElement>(null)
  const arrowRightRef = React.useRef<HTMLDivElement>(null)

  const overlayGradientLeftRef = React.useRef<HTMLDivElement>(null)
  const overlayGradientRightRef = React.useRef<HTMLDivElement>(null)

  // States
  const [sliderViewState, setSliderViewWidthState] = React.useState(0)

  const [triggerPointsState, setTriggerPointsState] = React.useState<{
    left: number
    right: number
  }>({ left: 0, right: 0 })

  const [activeIndex, setActiveIndex] = React.useState(props.defaultIndex)
  const prevIndex = usePrevious(activeIndex)

  const [isThrowComplete, setIsThrowComplete] = React.useState(true)
  const [isDragLoaded, setIsDragLoaded] = React.useState(false)
  const [snapPoints, setSnapPoints] = React.useState([])

  const [isScrollSnap, setIsScrollSnap] = React.useState(false)
  const [isArrowButtonDisabled, setIsArrowButtonDisabled] =
    React.useState(false)

  const [isSliderFocused, setIsSliderFocused] = React.useState(false)
  const [isSliderWrapFocused, setIsSliderWrapFocused] = React.useState(false)

  // Animate cards
  const animateItemActiveState = (item: HTMLElement) => {
    gsap.to(item, {
      scale: props.activeCardScale,
      backgroundColor: getComputedStyle(
        document.documentElement
      ).getPropertyValue('--color-accent-500'),
      color: 'white',
      borderColor: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-accent-500'
      ),
      duration: 0.2,
      ease: 'power3.In'
    })
  }

  const animateItemNormalState = (item: HTMLElement) => {
    gsap.to(item, {
      scale: 1,
      backgroundColor: 'transparent',
      color: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-main-200'
      ),
      borderColor: getComputedStyle(document.documentElement).getPropertyValue(
        '--color-main-200'
      ),
      duration: 0.4,
      ease: 'power3.Out'
    })
  }

  //
  const getSliderPostionByIndex = (index: number) => {
    const currentItem = sliderItemWrapRefs.current[index]

    const clickedItemPosition = currentItem.offsetLeft
    const sliderViewWidth = sliderViewRef.current.offsetWidth
    const gridWidth = props.cardWidth + props.spaceBetween

    const newSliderPosition =
      clickedItemPosition - sliderViewWidth / 2 + gridWidth / 2

    // console.log("clickedItemPosition", newSliderPosition);

    return newSliderPosition
  }

  // //
  const scrollToSelectedIndex = (index: number, duration: number) => {
    gsap.to(sliderRef.current, {
      duration: duration,
      scrollTo: {
        x: getSliderPostionByIndex(index)
      },
      onComplete: () => {
        setIsArrowButtonDisabled(false)
      }
    })
  }

  //
  const updateOnResize = () => {
    if (arrowLeftRef.current) {
      setSliderViewWidthState(sliderViewRef.current.offsetWidth)

      const arrowLeftBoundingBox = arrowLeftRef.current.getBoundingClientRect()
      const hidePoint = 40

      if (arrowLeftBoundingBox.x < hidePoint) {
        sliderContainerRef.current.style.overflow = 'hidden'
      } else {
        sliderContainerRef.current.style.overflow = 'visible'
      }
    }

    // console.log("gradientLeft", gradientLeftBox);
    if (!props.alwaysShowOverlayGradients && !props.hideOverlayGradients) {
      const gradientLeftBox =
        overlayGradientLeftRef.current.getBoundingClientRect()

      if (gradientLeftBox.x <= 0) {
        overlayGradientLeftRef.current.style.visibility =
          overlayGradientRightRef.current.style.visibility = 'hidden'
      } else {
        overlayGradientLeftRef.current.style.visibility =
          overlayGradientRightRef.current.style.visibility = 'visible'
      }
    }
  }

  // Prevent scroll
  React.useEffect(() => {
    const preventKeyboardScroll = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
        if (isSliderFocused) {
          e.preventDefault()
        }

        if (isSliderWrapFocused) {
          e.stopPropagation()
          if (e.code === 'ArrowLeft') {
            // console.log("left");
            goPreviousCard()
          }
          if (e.code === 'ArrowRight') {
            // console.log("right");
            goToNextCard()
          }
        }
      }
    }

    window.addEventListener('keydown', preventKeyboardScroll)

    return () => {
      window.removeEventListener('keydown', preventKeyboardScroll)
    }
  }, [isSliderFocused, isSliderWrapFocused, activeIndex])

  // Initial resize and resize updates
  React.useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin, ScrollToPlugin)

    gsap.set(sliderViewRef.current, {
      x: 200
    })

    const snapPoints = sliderItemWrapRefs.current.map((item) => {
      return (
        item.getBoundingClientRect().left -
        sliderViewRef.current.getBoundingClientRect().left
      )
    })

    setSnapPoints(snapPoints)
    updateOnResize()

    window.addEventListener('resize', updateOnResize)

    return () => {
      window.removeEventListener('resize', updateOnResize)
    }
  }, [])

  // Initiate Draggable object on mount; updates on resize only
  React.useEffect(() => {
    const gridWidth = props.cardWidth + props.spaceBetween
    const sliderViewWidth = sliderViewRef.current.offsetWidth

    const updateOnDrag = () => {
      // console.log("updateOnDrag");

      sliderItemWrapRefs.current.forEach((item, index) => {
        const itemXLeftEdge =
          item.getBoundingClientRect().right -
          sliderViewRef.current.getBoundingClientRect().left -
          props.spaceBetween

        const itemXRightEdge =
          item.getBoundingClientRect().left -
          sliderViewRef.current.getBoundingClientRect().left +
          props.spaceBetween

        if (
          itemXLeftEdge < triggerPointsState.right &&
          itemXRightEdge > triggerPointsState.left
        ) {
          // console.log("item", item);
          setActiveIndex(index)
        }
      })
    }

    const triggerPointsState = {
      left: sliderViewWidth / 2 - gridWidth / 2 - props.spaceBetween / 2,
      right: sliderViewWidth / 2 + gridWidth / 2 + props.spaceBetween / 2
    }

    setTriggerPointsState(triggerPointsState)

    Draggable.create(sliderRef.current, {
      type: 'scrollLeft',
      edgeResistance: 0.8,
      inertia: true,
      maxDuration: 0.1,
      throwProps: true,
      throwResistance: 0.4,
      snap: snapPoints,

      onDragStart: () => {
        // console.log("drag start");
        setIsScrollSnap(false)
        setIsThrowComplete(false)
      },
      // onDragEnd: () => {
      //   // console.log("drag end");
      //   // setIsThrowComplete(true);
      // },
      onDrag: updateOnDrag,
      onThrowUpdate: updateOnDrag,
      onThrowComplete: () => {
        // console.log("isThrowComplete");
        setIsThrowComplete(true)
      }
    })

    setIsDragLoaded(true)
  }, [sliderViewState, snapPoints])

  // Change an active item on active index change
  useDidMountEffect(() => {
    animateItemActiveState(sliderItemRefs.current[activeIndex])

    if (prevIndex !== activeIndex) {
      animateItemNormalState(sliderItemRefs.current[prevIndex])

      if (typeof props.onChange === 'function') {
        props.onChange(activeIndex)
      }
    }

    sliderItemRefs.current.forEach((item, index) => {
      if (index !== activeIndex) {
        gsap.set(item, {
          x:
            index > activeIndex
              ? props.spaceBetween / 2
              : -props.spaceBetween / 2
        })
      } else {
        gsap.set(item, {
          x: 0
        })
      }
    })
  }, [activeIndex, prevIndex])

  // if props.defaultIndex was changed
  useDidMountEffect(() => {
    if (props.defaultIndex !== activeIndex) {
      handleCardClick(props.defaultIndex)
    }
  }, [props.defaultIndex])

  // Animate slider to the initial state when drag object and the document are loaded
  React.useEffect(() => {
    const executeAnimation = () => {
      gsap.to(sliderContainerRef.current, {
        opacity: 1,
        duration: 0.3
      })

      gsap.to(sliderViewRef.current, {
        x: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.9)'
      })
    }

    if (document.readyState === 'complete') {
      executeAnimation()
    } else {
      window.addEventListener('load', function () {
        executeAnimation()
      })
    }

    gsap.set(sliderRef.current, {
      scrollTo: {
        x: getSliderPostionByIndex(activeIndex)
      }
    })
  }, [isDragLoaded])

  //
  const handleCardClick = (clickedIndex: number) => {
    if (isThrowComplete) {
      // neutralizing the right margin of the slider
      if (clickedIndex > activeIndex) {
        scrollToSelectedIndex(clickedIndex, 0.3)
      } else {
        scrollToSelectedIndex(clickedIndex, 0.3)
      }

      setActiveIndex(clickedIndex)
    }
  }

  const goToNextCard = () => {
    if (activeIndex < props.items.length - 1) {
      setIsArrowButtonDisabled(true)
      const newIndex = activeIndex + 1

      setActiveIndex(newIndex)
      scrollToSelectedIndex(newIndex, 0.3)
      // console.log("next", newIndex);
    }
  }

  const goPreviousCard = () => {
    if (activeIndex > 0) {
      setIsArrowButtonDisabled(true)
      const newIndex = activeIndex - 1

      setActiveIndex(newIndex)
      scrollToSelectedIndex(newIndex, 0.3)
      // console.log("prev", newIndex);
    }
  }

  //
  return (
    <div
      className={joinClasses(styles.sliderContainer, props.containerClassName)}
      ref={sliderContainerRef}
      tabIndex={0}
      onFocus={() => {
        setIsSliderWrapFocused(true)
      }}
      onBlur={() => {
        setIsSliderWrapFocused(false)
      }}
      onWheel={() => {
        setIsScrollSnap(true)

        // console.log(e.deltaX);

        waitForScrollEnd().then(() => {
          // console.log("foo", e.deltaX);

          sliderItemWrapRefs.current.forEach((item, index) => {
            const itemXLeftEdge =
              item.getBoundingClientRect().right -
              sliderViewRef.current.getBoundingClientRect().left -
              props.spaceBetween

            const itemXRightEdge =
              item.getBoundingClientRect().left -
              sliderViewRef.current.getBoundingClientRect().left +
              props.spaceBetween

            if (
              itemXLeftEdge < triggerPointsState.right &&
              itemXRightEdge > triggerPointsState.left
            ) {
              // console.log("item", item);
              setActiveIndex(index)
            }
          })
        })
      }}
    >
      {props.showArrows && (
        <>
          <ArrowButton
            ref={arrowLeftRef}
            className={joinClasses(
              styles.arrowLeft,
              styles.arrowButton,
              props.arrowsClassName
            )}
            direction='left'
            onMouseUp={goPreviousCard}
            disabled={activeIndex === 0}
            style={{
              pointerEvents: isArrowButtonDisabled ? 'none' : 'auto'
            }}
          />
          <ArrowButton
            ref={arrowRightRef}
            className={joinClasses(
              styles.rightArrow,
              styles.arrowButton,
              props.arrowsClassName
            )}
            direction='right'
            onMouseUp={goToNextCard}
            disabled={activeIndex === props.items.length - 1}
            style={{
              pointerEvents: isArrowButtonDisabled ? 'none' : 'auto'
            }}
          />
        </>
      )}
      <div className={styles.sliderWrap} ref={sliderViewRef}>
        {!props.hideOverlayGradients ? (
          <>
            <div
              className={joinClasses(
                styles.leftGradient,
                props.overlayGradientsClassName
              )}
              ref={overlayGradientLeftRef}
            />
            <div
              className={joinClasses(
                styles.rightGradient,
                props.overlayGradientsClassName
              )}
              ref={overlayGradientRightRef}
            />
          </>
        ) : null}

        {props.showGuidelines ? (
          <>
            <div
              style={{
                position: 'absolute',
                width: '1px',
                height: '100%',
                top: 0,
                left: `${triggerPointsState.left}px`,
                background: 'red'
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '1px',
                height: '100%',
                top: 0,
                left: `${triggerPointsState.right}px`,
                background: 'blue'
              }}
            />
          </>
        ) : null}

        <div
          className={styles.slider}
          ref={sliderRef}
          id='small-cards-slider'
          onFocus={() => {
            setIsSliderFocused(true)
          }}
          onBlur={() => {
            setIsSliderFocused(false)
          }}
          tabIndex={1}
          style={{
            columnGap: props.spaceBetween,
            scrollSnapType: isScrollSnap ? 'x mandatory' : 'none'
          }}
        >
          <div
            className={styles.sliderCards}
            style={{
              paddingLeft: sliderContainerRef.current
                ? `${
                    sliderContainerRef.current.offsetWidth / 2 -
                    props.cardWidth / 2 -
                    props.spaceBetween / 2
                  }px`
                : 0,
              paddingRight: sliderContainerRef.current
                ? `${
                    sliderContainerRef.current.offsetWidth / 2 -
                    props.cardWidth / 2
                  }px`
                : 0
            }}
          >
            {props.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.itemWrap}
                  ref={(el) => (sliderItemWrapRefs.current[index] = el)}
                  style={{
                    height: `${props.cardHeight + props.spaceBetween}px`,
                    width: `${props.cardWidth + props.spaceBetween}px`
                  }}
                >
                  <div
                    data-index={index}
                    className={styles.item}
                    ref={(el) => (sliderItemRefs.current[index] = el)}
                    onClick={() => handleCardClick(index)}
                    style={{
                      height: `${props.cardHeight}px`,
                      width: `${props.cardWidth}px`
                    }}
                  >
                    <span
                      style={{
                        fontSize: `${props.cardFontSize}px`
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {props.showCaption ? (
        <div className={styles.itemCaption}>
          <span>{props.items[activeIndex].caption}</span>
        </div>
      ) : null}
    </div>
  )
}

ChipsSlider.defaultProps = {
  containerClassName: '',
  arrowsClassName: '',
  overlayGradientsClassName: '',
  hideOverlayGradients: false,
  alwaysShowOverlayGradients: false,
  defaultIndex: 0,
  spaceBetween: 20,
  activeCardScale: 1.3,
  cardWidth: 76,
  cardHeight: 76,
  cardFontSize: 20,
  showGuidelines: false,
  showCaption: true,
  showArrows: true
} as Partial<ChipsSliderIProps>

export default ChipsSlider
