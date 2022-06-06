import React from "react";

import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap-bonus/InertiaPlugin";

import styles from "./styles.module.scss";
import Header from "../Header";

import { useDidMountEffect } from "../../../utils";

interface Props {
  className?: string;
  isOpen: boolean;
  title?: string;
  smallTitle: boolean;
  children: React.ReactNode;
  topShift?: number;
  style?: React.CSSProperties;
  onCloseClick?: () => void;
  onCloseDrag?: () => void;
}

///////////////
// COMPONENT //
///////////////

const BottomSheet: React.FC<Props> = (props) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const bottomSheetRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const [resize, setResize] = React.useState(false);

  const applyOpenSheetPosition = () => {
    const bottomSheet = bottomSheetRef.current;

    if (bottomSheet.clientHeight > window.innerHeight + props.topShift) {
      return props.topShift;
    }

    return window.innerHeight - bottomSheet.clientHeight + props.topShift;
  };

  const applyDragBounds = () => {
    Draggable.get(bottomSheetRef.current).vars.bounds = {
      minY: applyOpenSheetPosition(),
      maxY: window.innerHeight - bottomSheetRef.current.clientHeight,
    };
  };

  //////////////
  // HANDLERS //
  //////////////

  const handleCloseClick = () => {
    props.onCloseClick();
  };

  /////////////////
  // USE EFFECTS //
  /////////////////

  React.useEffect(() => {
    modalWrapRef.current.style.pointerEvents = "none";
    // modalWrapRef.current.style.opacity = "0";

    gsap.set(bottomSheetRef.current, {
      y: window.innerHeight,
    });

    const onResize = () => {
      // console.log(resize);
      setResize(!resize);

      if (props.isOpen) {
        gsap.set(bottomSheetRef.current, {
          y: window.innerHeight - bottomSheetRef.current.clientHeight,
        });

        applyDragBounds();
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  React.useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);

    let dragStartPoint = 0;

    if (bottomSheetRef.current) {
      Draggable.create(bottomSheetRef.current, {
        type: "y",
        inertia: true,
        edgeResistance: 0.8,
        maxDuration: 0.3,
        onDragStart: () => {
          dragStartPoint = bottomSheetRef.current.getBoundingClientRect().top;
        },
        onDrag: () => {
          let sheetTopPosition =
            bottomSheetRef.current.getBoundingClientRect().top;
          let dragDifference = sheetTopPosition - dragStartPoint;

          if (sheetTopPosition > props.topShift && dragDifference > 60) {
            // console.log("close");
            Draggable.get(bottomSheetRef.current).disable();
            props.onCloseDrag();
          }
        },
      });
    }
  }, []);

  useDidMountEffect(() => {
    applyDragBounds();
  }, [isOpen]);

  React.useEffect(() => {
    if (props.isOpen) {
      modalWrapRef.current.style.pointerEvents = "all";

      gsap.to(modalWrapRef.current, {
        opacity: 1,
        duration: 0.1,
      });
      gsap.to(bottomSheetRef.current, {
        y: applyOpenSheetPosition(),
        duration: 0.4,
        ease: "expo.out",
        onComplete: () => {
          Draggable.get(bottomSheetRef.current).enable();
        },
      });
      gsap.to(backgroundRef.current, {
        opacity: 1,
        duration: 0.4,
      });
      setIsOpen(true);
    } else {
      modalWrapRef.current.style.pointerEvents = "none";

      gsap.to(modalWrapRef.current, {
        opacity: 0,
        duration: 0.1,
        delay: 0.4,
      });
      gsap.to(bottomSheetRef.current, {
        y: window.innerHeight,
        duration: 0.2,
      });
      gsap.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.4,
      });
      setIsOpen(false);
    }
  }, [props.isOpen]);

  ///////////////
  // RENDERING //
  ///////////////

  return (
    <section
      ref={modalWrapRef}
      className={`${styles.modalWrap}`}
      style={{ ...props.style }}
    >
      <section ref={bottomSheetRef} className={`${styles.bottomSheetWrap}`}>
        <Header
          onCloseClick={handleCloseClick}
          title={props.title}
          smallTitle={props.smallTitle}
          noMaxWidth={true}
        />
        <div className={styles.contentWrapper}>{props.children}</div>
      </section>
      <div ref={backgroundRef} className={styles.background}></div>
    </section>
  );
};

BottomSheet.defaultProps = {
  className: "",
  title: "",
  topShift: 20,
  onCloseClick: () => {},
} as Partial<Props>;

export default BottomSheet;
