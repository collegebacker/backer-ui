import React from "react";
import styles from "./styles.module.scss";

import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap-bonus/InertiaPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import ArrowButton from "../ArrowButton";
import DotPagination from "../DotPagination";

import { useDidMountEffect } from "../../hooks";

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface BreakpointProps {
  breakpoint: number;
  cardsToShow: number;
  sidePaddingOffset?: number;
  showHiddenCard?: number | boolean;
  disableSideFading?: boolean;
  hideArrows?: boolean;
}

export interface Props {
  containterClassName?: string;
  paginationClassName?: string;
  spaceBetween?: number;
  paginationAlignment?: "left" | "right" | "center";
  children: React.ReactNode;
  onChange?: (index: number) => void;
  desktopBreakpoint?: BreakpointProps;
  tabletBreakpoint?: BreakpointProps;
  mobileBreakpoint?: BreakpointProps;
}

const defaultProps = {
  containterClassName: "",
  paginationClassName: "",
  spaceBetween: 20,
  paginationAlignment: "center",

  desktopBreakpoint: {
    breakpoint: 1024,
    cardsToShow: 3,
    sidePaddingOffset: 40,
    showHiddenCard: false,
    disableSideFading: false,
    hideArrows: false,
  },
  tabletBreakpoint: {
    breakpoint: 768,
    cardsToShow: 2,
    sidePaddingOffset: 40,
    showHiddenCard: false,
    disableSideFading: false,
    hideArrows: false,
  },
  mobileBreakpoint: {
    breakpoint: 480,
    cardsToShow: 1,
    sidePaddingOffset: 40,
    showHiddenCard: false,
    disableSideFading: false,
    hideArrows: true,
  },
} as Props;

/////////////////////////////////
///////// CARDS SLIDER //////////
/////////////////////////////////

const CSSSlider: React.FC<Props> = (props) => {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState(
    props.desktopBreakpoint
  );

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < props.mobileBreakpoint.breakpoint) {
        setCurrentBreakpoint(props.mobileBreakpoint);
      } else if (window.innerWidth < props.tabletBreakpoint.breakpoint) {
        setCurrentBreakpoint(props.tabletBreakpoint);
      } else if (window.innerWidth < props.desktopBreakpoint.breakpoint) {
        setCurrentBreakpoint(props.desktopBreakpoint);
      } else {
        setCurrentBreakpoint(props.desktopBreakpoint);
      }
    };

    handleResize();

    console.log("currentBreakpoint", currentBreakpoint);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.container}>
      <div
        className={styles.slider}
        style={{
          gridTemplateColumns: `repeat(${
            React.Children.toArray(props.children).length
          }, calc(${100 / currentBreakpoint.cardsToShow}% - ${
            props.spaceBetween /
            (currentBreakpoint.cardsToShow /
              (currentBreakpoint.cardsToShow - 1))
          }px))`,
          gridGap: `${props.spaceBetween}px`,
        }}
      >
        {React.Children.toArray(props.children).map((child, index) => {
          return (
            <div
              className={styles.card}
              key={index}
              // style={{
              //   flex: `0 1 calc(100% / ${currentBreakpoint.cardsToShow})`,
              // }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </section>
  );
};

CSSSlider.defaultProps = defaultProps as Partial<Props>;

export default CSSSlider;
