import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import { InertiaPlugin } from "gsap-bonus/InertiaPlugin";

import styles from "./styles.module.scss";
import Header from "../Header";

import { useDidMountEffect, useOutsideClick } from "../../../hooks";

interface Props {
  className?: string;
  isOpen: boolean;
  closeOutside: boolean;
  title?: string;
  smallTitle: boolean;
  children: React.ReactNode;
  topShift?: number;
  isMobileBreakpoint: boolean;
  style?: React.CSSProperties;
  onCloseClick?: () => void;
  onCloseDrag?: () => void;
}

///////////////
// COMPONENT //
///////////////

const BottomSheet = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const bottomSheetRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(props.isOpen);
  const [isAppeared, setIsAppeared] = React.useState(false);
  const [resize, setResize] = React.useState(false);

  const applyOpenSheetPosition = () => {
    const bottomSheet = bottomSheetRef.current;

    if (bottomSheet.clientHeight > window.innerHeight) {
      return props.topShift;
    }

    return window.innerHeight - bottomSheet.clientHeight;
  };

  const applyDragBounds = () => {
    Draggable.get(bottomSheetRef.current).vars.bounds = {
      minY: applyOpenSheetPosition(),
      maxY: window.innerHeight - bottomSheetRef.current.clientHeight,
    };
  };

  //////////////
  // IMPERIAL //
  //////////////
  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return bottomSheetRef.current;
    },
  }));

  //////////////
  /// HOOKS ////
  //////////////

  useOutsideClick(bottomSheetRef, () => {
    if (isAppeared && props.closeOutside && props.isMobileBreakpoint) {
      // console.log("clicked outside");
      props.onCloseClick();
    }
  });

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
        allowEventDefault: true,
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

          if (
            sheetTopPosition - props.topShift > props.topShift &&
            dragDifference > 70
          ) {
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
      modalWrapRef.current.focus();
      modalWrapRef.current.style.display = "block";

      gsap.to(modalWrapRef.current, {
        pointerEvents: "all",
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
        onStart: () => {
          setIsAppeared(true);
        },
      });

      setIsOpen(true);
    } else {
      gsap.to(modalWrapRef.current, {
        display: "none",
        pointerEvents: "none",
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
        onStart: () => {
          setIsAppeared(false);
        },
      });

      setIsOpen(false);
    }
  }, [props.isOpen]);

  ///////////////
  // RENDERING //
  ///////////////

  return (
    <aside
      role="dialog"
      tabIndex={-1}
      aria-modal
      aria-hidden={false}
      ref={modalWrapRef}
      className={`${styles.modalWrap}`}
      style={{ ...props.style }}
    >
      <section
        ref={bottomSheetRef}
        className={`${styles.bottomSheetWrap}`}
        style={{
          touchAction: "pan-x",
          background: "red",
        }}
      >
        <Header
          onCloseClick={handleCloseClick}
          title={props.title}
          smallTitle={props.smallTitle}
          noMaxWidth={true}
        />
        <div className={styles.contentWrapper}>{props.children}</div>
      </section>
      <div ref={backgroundRef} className={styles.background}></div>
    </aside>
  );
});

BottomSheet.defaultProps = {
  className: "",
  title: "",
  topShift: 20,
  onCloseClick: () => {},
} as Partial<Props>;

export default BottomSheet;
