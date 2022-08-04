import React from "react";
import gsap from "gsap";

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
  const contentWrapperRef = React.useRef<HTMLDivElement>(null);

  const [stickModal, setStickModal] = React.useState(false);

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
    if (props.isOpen && props.closeOutside && props.isMobileBreakpoint) {
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

  useDidMountEffect(() => {
    // applyDragBounds();
    if (!props.isOpen) {
      // console.log("isOpen", props.isOpen);
      gsap.to(modalWrapRef.current, {
        display: "none",
        pointerEvents: "none",
        opacity: 0,
        duration: 0.1,
        delay: 0.4,
      });
      gsap.to(bottomSheetRef.current, {
        bottom: "-100%",
        duration: 0.2,
      });
      gsap.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.4,
      });
    }
  }, [props.isOpen]);

  React.useEffect(() => {
    if (stickModal) {
      gsap.to(bottomSheetRef.current, {
        maxHeight: "100%",
        borderRadius: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(bottomSheetRef.current, {
        maxHeight: "96%",
        borderRadius: "15px 15px 0 0",
        duration: 0.2,
      });
    }
  }, [stickModal]);

  React.useEffect(() => {
    // console.log("isOpen", props.isOpen);
    if (props.isOpen) {
      modalWrapRef.current.focus();

      gsap.to(modalWrapRef.current, {
        display: "block",
        pointerEvents: "all",
        opacity: 1,
        duration: 0.1,
      });
      gsap.to(bottomSheetRef.current, {
        bottom: "0%",
        duration: 0.4,
        ease: "expo.out",
      });
      gsap.to(backgroundRef.current, {
        opacity: 1,
        duration: 0.4,
      });
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
        onScroll={() => {
          const contentPosition =
            contentWrapperRef.current.getBoundingClientRect().top -
            contentWrapperRef.current.offsetTop;

          if (contentPosition < 0) {
            setStickModal(true);
          } else {
            setStickModal(false);
          }
        }}
      >
        <Header
          onCloseClick={handleCloseClick}
          title={props.title}
          smallTitle={props.smallTitle}
          noMaxWidth={true}
        />
        <div className={styles.contentWrapper} ref={contentWrapperRef}>
          {props.children}
        </div>
      </section>
      <div ref={backgroundRef} className={styles.background}></div>
    </aside>
  );
});

BottomSheet.defaultProps = {
  className: "",
  title: "",
  onCloseClick: () => {},
} as Partial<Props>;

export default BottomSheet;
