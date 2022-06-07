import React from "react";
import styles from "./styles.module.scss";

import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap-bonus/InertiaPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Icon, ArrowButton, DotPagination } from "..";

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
  }>;
  spaceBetween?: number;
  showGuidelines?: boolean;
  hideArrows?: boolean;
  children: React.ReactNode;
  lastCard?: {
    label: string;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  };
  onChange?: (index: number) => void;
}

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const SliderWrapper: React.FC<Props> = (props) => {
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const sliderRefChildren = React.useRef<Array<HTMLDivElement>>([]);
  const lastCardRef = React.useRef<HTMLDivElement>(null);

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

  const lastCardWidth = 200;
  const isLastCard = () => props.lastCard && props.lastCard.label !== "";

  const setBreakpoint = () => {
    const viewWidth = sliderContainerRef.current.offsetWidth;
    setViewWidth(viewWidth);

    props.breakpoints.forEach((breakpoint, index) => {
      if (props.breakpoints[index + 1]) {
        if (
          viewWidth < breakpoint.breakpoint &&
          viewWidth > props.breakpoints[index + 1].breakpoint
        ) {
          setCardsToShow(breakpoint.cardsToShow);
        }
      } else {
        if (viewWidth < breakpoint.breakpoint) {
          setCardsToShow(breakpoint.cardsToShow);
        }
      }
    });
  };

  const hideArrowsOnBreakpoint = () => {
    const arrowLeftBoundingBox = arrowLeftRef.current.getBoundingClientRect();
    const arrowRightBoundingBox = arrowRightRef.current.getBoundingClientRect();
    const rightArrowXOffset =
      window.innerWidth - arrowRightBoundingBox.x - arrowRightBoundingBox.width;
    const hidePoint = arrowsOffsetRatio / 2;

    if (arrowLeftBoundingBox.x < hidePoint) {
      arrowLeftRef.current.style.opacity = "0";
      arrowLeftRef.current.style.pointerEvents = "none";
    } else {
      arrowLeftRef.current.style.opacity = "1";
      arrowLeftRef.current.style.pointerEvents = "all";
    }

    if (rightArrowXOffset < hidePoint) {
      arrowRightRef.current.style.opacity = "0";
      arrowRightRef.current.style.pointerEvents = "none";
    } else {
      arrowRightRef.current.style.opacity = "1";
      arrowRightRef.current.style.pointerEvents = "all";
    }
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

  const arrowsOffsetRatio = 80;

  //
  const getSliderPostionByIndex = (index: number) => {
    const currentItem = sliderRefChildren.current[index];
    const clickedItemPosition = currentItem.offsetLeft;

    const newSliderPosition =
      clickedItemPosition - (arrowsOffsetRatio / 2 - props.spaceBetween * 2);
    // console.log(sliderViewWidth);

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
    if (activeIndex < sliderRefChildren.current.length - 1) {
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
    gsap.registerPlugin(Draggable, ScrollToPlugin, InertiaPlugin);

    setBreakpoint();

    const onWindowResize = () => {
      setBreakpoint();
      hideArrowsOnBreakpoint();
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  //
  React.useEffect(() => {
    if (sliderContainerRef.current && sliderRef.current) {
      // console.log(snapPoints);
      const paginationAmount =
        sliderRefChildren.current.length - cardsToShow + (isLastCard() ? 2 : 1);
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

      const snapPoints = isLastCard()
        ? [
            ...snapPointsWithoutLastCard.slice(0, paginationAmount - 1),
            snapPointsWithoutLastCard[paginationAmount - 2] +
              (lastCardWidth + props.spaceBetween),
          ]
        : snapPointsWithoutLastCard;

      // console.log(paginationAmount);

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
    <div
      className={`${styles.sliderContainer} ${props.containterClassName}`}
      ref={sliderContainerRef}
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

      {!props.hideArrows ? (
        <>
          <ArrowButton
            ref={arrowLeftRef}
            className={`${styles.arrowButton} ${props.arrowsClassName}`}
            disabled={activeIndex === 0}
            onMouseUp={goPreviousCard}
            style={{
              left: `${-arrowsOffsetRatio}px`,
              pointerEvents: isArrowButtonDisabled ? "none" : "auto",
            }}
          />
          <ArrowButton
            ref={arrowRightRef}
            direction="right"
            className={`${styles.arrowButton} ${props.arrowsClassName}`}
            disabled={activeIndex === paginationAmount - 1}
            onMouseUp={goToNextCard}
            style={{
              right: `${-arrowsOffsetRatio}px`,
              pointerEvents: isArrowButtonDisabled ? "none" : "auto",
            }}
          />
        </>
      ) : null}

      <div className={styles.slider} ref={sliderRef}>
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
          {isLastCard() ? (
            <div
              className={styles.lastCard}
              onClick={(e) => props.lastCard.onClick(e)}
              style={{
                flex: `1 0 ${lastCardWidth}px`,
              }}
              ref={lastCardRef}
            >
              <div className={styles.lastCard__content}>
                <span className={styles.lastCard__text}>
                  {props.lastCard.label}
                </span>
                <Icon
                  className={styles.lastCard__icon}
                  name="chevron-in-circle-right"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className={`${styles.paginationWrap} ${props.paginationClassName}`}>
        <DotPagination
          activeIndex={activeIndex}
          totalAmount={paginationAmount}
        />
      </div>
    </div>
  );
};

SliderWrapper.defaultProps = {
  containterClassName: "",
  paginationClassName: "",
  arrowsClassName: "",
  breakpoints: [
    {
      breakpoint: 1024,
      cardsToShow: 3,
    },
    {
      breakpoint: 768,
      cardsToShow: 2,
    },
    {
      breakpoint: 480,
      cardsToShow: 1,
    },
  ],
  spaceBetween: 20,
  showGuidelines: false,
  hideArrows: false,
} as Partial<Props>;

export default SliderWrapper;
