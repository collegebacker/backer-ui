import React from "react";
import styles from "./styles.module.scss";

import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap-bonus/InertiaPlugin";

import ArrowButton from "../ArrowButton";
import DotPagination from "../DotPagination";

import { useDidMountEffect } from "../../hooks";

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface Props {
  containterClassName?: string;
  paginationClassName?: string;
  arrowsClassName?: string;
  breakpoints?: Array<{
    breakpoint: number;
    cardsToShow: number;
    sidePaddingOffset?: number;
    hideArrows?: boolean;
    hidePagination?: boolean;
  }>;
  spaceBetween?: number;
  showGuidelines?: boolean;
  paginationAlignment?: "left" | "right" | "center";
  children: React.ReactNode;
  onChange?: (index: number) => void;
}

const defaultProps = {
  containterClassName: "",
  paginationClassName: "",
  arrowsClassName: "",
  paginationAlignment: "center",
  breakpoints: [
    {
      breakpoint: 1024,
      cardsToShow: 3,
      sidePaddingOffset: 40,
      hideArrows: false,
      hidePagination: false,
    },
    {
      breakpoint: 768,
      cardsToShow: 2,
      sidePaddingOffset: 40,
      hideArrows: true,
      hidePagination: false,
    },
    {
      breakpoint: 480,
      cardsToShow: 1,
      sidePaddingOffset: 40,
      hideArrows: true,
      hidePagination: false,
    },
  ],
  spaceBetween: 20,
  showGuidelines: false,
};

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const SliderWrapper: React.FC<Props> = (props) => {
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const sliderRefChildren = React.useRef<Array<HTMLDivElement>>([]);

  const arrowLeftRef = React.useRef<HTMLDivElement>(null);
  const arrowRightRef = React.useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [viewWidth, setViewWidth] = React.useState(0);
  const [triggerPointsState, setTriggerPointsState] = React.useState<{
    left: number;
    right: number;
  }>({ left: 0, right: 0 });
  const [gridWidth, setGridWidth] = React.useState(0);

  const [cardsToShow, setCardsToShow] = React.useState(
    props.breakpoints[0].cardsToShow
  );
  const [paginationAmount, setPaginationAmount] = React.useState(0);
  const [isArrowButtonDisabled, setIsArrowButtonDisabled] =
    React.useState(false);

  const [isSliderFocused, setIsSliderFocused] = React.useState(false);
  const [isSliderWrapFocused, setIsSliderWrapFocused] = React.useState(false);

  const [currentBreakpoint, setCurrentBreakpoint] = React.useState(0);

  const breakpoints = defaultProps.breakpoints.map((item, index) => {
    return {
      breakpoint:
        props.breakpoints[index].breakpoint !== undefined
          ? props.breakpoints[index].breakpoint
          : item.breakpoint,
      cardsToShow:
        props.breakpoints[index].cardsToShow !== undefined
          ? props.breakpoints[index].cardsToShow
          : item.cardsToShow,
      sidePaddingOffset:
        props.breakpoints[index].sidePaddingOffset !== undefined
          ? props.breakpoints[index].sidePaddingOffset
          : item.sidePaddingOffset,
      hideArrows:
        props.breakpoints[index].hideArrows !== undefined
          ? props.breakpoints[index].hideArrows
          : item.hideArrows,
      hidePagination:
        props.breakpoints[index].hidePagination !== undefined
          ? props.breakpoints[index].hidePagination
          : item.hidePagination,
    };
  });

  const handleCardsBreakpoint = () => {
    const viewWidth = sliderContainerRef.current.offsetWidth;
    setViewWidth(viewWidth);

    breakpoints.forEach((breakpoint) => {
      if (window.innerWidth <= breakpoint.breakpoint) {
        setCardsToShow(breakpoint.cardsToShow);
      }

      // if (props.breakpoints[index + 1]) {
      //   console.log(breakpoint.cardsToShow);
      //   if (
      //     viewWidth < breakpoint.breakpoint &&
      //     viewWidth > props.breakpoints[index + 1].breakpoint
      //   ) {
      //     setCardsToShow(breakpoint.cardsToShow);
      //   }
      // } else {
      //   if (viewWidth < breakpoint.breakpoint) {
      //     setCardsToShow(breakpoint.cardsToShow);
      //   }
      // }
    });
  };

  const handleCurrentBreakpoint = () => {
    // console.log(props.breakpoints[currentBreakpoint].hideArrows);
    breakpoints.forEach((item, index) => {
      if (window.innerWidth < item.breakpoint) {
        setCurrentBreakpoint(index);
      }
    });

    //   // console.log(props.breakpoints[currentBreakpoint].hideArrows );
  };

  const updateOnDrag = () => {
    // console.log(sliderRef.current.scrollLeft);
    const activeItemBoundsRatio = gridWidth / 2;

    sliderRefChildren.current.forEach((item: HTMLElement, index) => {
      const itemXLeftEdge =
        item.getBoundingClientRect().left -
        sliderContainerRef.current.getBoundingClientRect().left +
        activeItemBoundsRatio;

      const itemXRightEdge =
        item.getBoundingClientRect().left -
        sliderContainerRef.current.getBoundingClientRect().left +
        gridWidth -
        activeItemBoundsRatio;

      if (
        itemXLeftEdge >= triggerPointsState.left &&
        itemXRightEdge <= triggerPointsState.right
      ) {
        setActiveIndex(index);
      }
    });
  };

  //
  const getSliderPostionByIndex = (index: number) => {
    const currentItem = sliderRefChildren.current[index];
    const clickedItemPosition = currentItem.offsetLeft;

    let newSliderPosition = 0;

    breakpoints.forEach((item) => {
      if (item.breakpoint > window.innerWidth) {
        newSliderPosition =
          clickedItemPosition -
          (item.sidePaddingOffset - props.spaceBetween * 2);
        // console.log(sliderViewWidth);
      }
    });

    return newSliderPosition;
  };

  //
  const scrollToSelectedIndex = (index: number, duration: number) => {
    // console.log(getSliderPostionByIndex(index));
    gsap.to(sliderRef.current, {
      // x: getSliderPostionByIndex(index, shiftRatio),
      duration: duration,
      scrollTo: {
        x: getSliderPostionByIndex(index),
      },
      onComplete: () => {
        setIsArrowButtonDisabled(false);
      },
    });
  };

  //
  const goToNextCard = () => {
    // console.log(activeIndex, sliderRefChildren.current.length);
    if (activeIndex < sliderRefChildren.current.length - cardsToShow) {
      // console.log(activeIndex);
      setIsArrowButtonDisabled(true);
      const newIndex = activeIndex + 1;

      setActiveIndex(newIndex);
      scrollToSelectedIndex(newIndex, 0.3);
    }
  };

  const goPreviousCard = () => {
    if (activeIndex > 0) {
      setIsArrowButtonDisabled(true);
      const newIndex = activeIndex - 1;

      setActiveIndex(newIndex);
      scrollToSelectedIndex(newIndex, 0.3);
      // console.log("prev", newIndex);
    }
  };

  // If active index was changed
  useDidMountEffect(() => {
    if (typeof props.onChange === "function") {
      props.onChange(activeIndex);
    }
  }, [activeIndex]);

  // Resize updates
  React.useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);

    handleCardsBreakpoint();
    handleCurrentBreakpoint();

    const onWindowResize = () => {
      handleCardsBreakpoint();
      handleCurrentBreakpoint();
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [currentBreakpoint]);

  // Prevent scroll
  React.useEffect(() => {
    const preventKeyboardScroll = (e: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        if (isSliderFocused) {
          e.preventDefault();
        }

        if (isSliderWrapFocused) {
          e.stopPropagation();
          if (e.code === "ArrowLeft") {
            // console.log("left");
            goPreviousCard();
          }
          if (e.code === "ArrowRight") {
            // console.log("right");
            goToNextCard();
          }
        }
      }
    };

    window.addEventListener("keydown", preventKeyboardScroll);

    return () => {
      window.removeEventListener("keydown", preventKeyboardScroll);
    };
  }, [isSliderFocused, isSliderWrapFocused, activeIndex]);

  const handlePaginationAlignment = () => {
    switch (props.paginationAlignment) {
      case "left":
        return "flex-start";
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

  //
  React.useEffect(() => {
    // console.log(sliderRefChildren);
    if (sliderContainerRef.current && sliderRef.current) {
      // console.log(snapPoints);
      const paginationAmount =
        sliderRefChildren.current.length - cardsToShow + 1;
      setPaginationAmount(paginationAmount);

      const gridWidth =
        (sliderContainerRef.current.offsetWidth -
          props.spaceBetween * cardsToShow) /
          cardsToShow +
        props.spaceBetween;

      setGridWidth(gridWidth);

      const snapPointsWithoutLastCard = sliderRefChildren.current.map(
        (item, index) => {
          return (
            (item.getBoundingClientRect().width + props.spaceBetween) * index
          );
        }
      );

      const snapPoints = snapPointsWithoutLastCard;

      setTriggerPointsState({
        left: 0,
        right: gridWidth,
      });

      Draggable.create(sliderRef.current, {
        type: "scrollLeft",
        edgeResistance: 0.9,
        inertia: true,
        maxDuration: 0.6,
        throwResistance: 0.2,

        snap: snapPoints,

        onDragStart: () => {
          sliderRef.current.style.scrollSnapType = "none";
        },
        onDrag: updateOnDrag,
        onThrowUpdate: updateOnDrag,
      });
    }
  }, [viewWidth]);

  //
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          
      .${styles.slider} > div:first-child {
        margin-left: ${breakpoints[currentBreakpoint].sidePaddingOffset}px;
      }
     
        .${styles.slider} {
          scroll-padding-left: ${
            breakpoints[currentBreakpoint].sidePaddingOffset
          }px;
          scroll-padding-right: ${
            breakpoints[currentBreakpoint].sidePaddingOffset
          }px;
          margin-left: -${breakpoints[currentBreakpoint].sidePaddingOffset}px;
          margin-right: -${breakpoints[currentBreakpoint].sidePaddingOffset}px;
        }

        .${styles.fadeGradientLeft} {
          width: ${breakpoints[currentBreakpoint].sidePaddingOffset}px;
          left: -${breakpoints[currentBreakpoint].sidePaddingOffset}px;
        }

        .${styles.fadeGradientRight} {
          width: ${breakpoints[currentBreakpoint].sidePaddingOffset}px;
          right: -${breakpoints[currentBreakpoint].sidePaddingOffset}px;
        }

        .${styles.arrowButtonLeft} {
          left: -${breakpoints[currentBreakpoint].sidePaddingOffset * 2}px;
        }

        .${styles.arrowButtonRight} {
          right: -${breakpoints[currentBreakpoint].sidePaddingOffset * 2}px;
        }
      
  `,
        }}
      ></style>
      <div
        className={`${styles.sliderContainer} ${props.containterClassName}`}
        ref={sliderContainerRef}
        tabIndex={1}
        onFocus={() => {
          setIsSliderWrapFocused(true);
        }}
        onBlur={() => {
          setIsSliderWrapFocused(false);
        }}
        onWheel={() => {
          sliderRef.current.style.scrollSnapType = "x mandatory";
          updateOnDrag();
        }}
      >
        {props.showGuidelines ? (
          <>
            <div
              style={{
                position: "absolute",
                width: "1px",
                height: "100%",
                top: 0,
                left: `${triggerPointsState.left}px`,
                background: "red",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "1px",
                height: "100%",
                top: 0,
                left: `${triggerPointsState.right}px`,
                background: "blue",
              }}
            />
          </>
        ) : null}

        <div className={styles.fadeGradientLeft} />
        <div className={styles.fadeGradientRight} />

        {breakpoints[currentBreakpoint].hideArrows ? null : (
          <>
            <ArrowButton
              ref={arrowLeftRef}
              className={`${props.arrowsClassName} ${styles.arrowButtonLeft}`}
              disabled={activeIndex === 0}
              onMouseUp={goPreviousCard}
              style={{
                pointerEvents: isArrowButtonDisabled ? "none" : "auto",
              }}
            />
            <ArrowButton
              ref={arrowRightRef}
              direction="right"
              className={`${props.arrowsClassName} ${styles.arrowButtonRight}`}
              disabled={activeIndex === paginationAmount - 1}
              onMouseUp={goToNextCard}
              style={{
                pointerEvents: isArrowButtonDisabled ? "none" : "auto",
              }}
            />
          </>
        )}

        <div
          className={styles.slider}
          ref={sliderRef}
          onFocus={() => {
            setIsSliderFocused(true);
          }}
          onBlur={() => {
            setIsSliderFocused(false);
          }}
          tabIndex={1}
        >
          <div className={styles.sliderCards}>
            {React.Children.map(props.children, (child, index) => {
              return (
                <div
                  ref={(el) => (sliderRefChildren.current[index] = el)}
                  className={styles.cardWrap}
                  style={{
                    flex: `1 0 ${
                      (viewWidth - props.spaceBetween * (cardsToShow - 1) - 2) /
                      cardsToShow
                    }px`,
                    marginRight: `${props.spaceBetween}px`,
                  }}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>

        {breakpoints[currentBreakpoint].hidePagination ? null : (
          <div
            className={`${styles.paginationWrap} ${props.paginationClassName}`}
            style={{
              justifyContent: handlePaginationAlignment(),
            }}
          >
            <DotPagination
              activeIndex={activeIndex}
              totalAmount={paginationAmount}
              className={styles.pagination}
            />
          </div>
        )}
      </div>
    </>
  );
};

SliderWrapper.defaultProps = defaultProps as Partial<Props>;

export default SliderWrapper;
