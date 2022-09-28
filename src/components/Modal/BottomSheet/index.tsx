import React from "react";
import gsap from "gsap";

import styles from "./styles.module.scss";
import Header from "../Header";

import { useOutsideClick, useDidMountEffect } from "../../../hooks";

interface Props {
  popupClassName?: string;
  popupContentClassName?: string;
  children: React.ReactNode;
  isMobileBreakpoint: boolean;
  customPaddingsMobile?: string;
  closeOutside?: boolean;
  title?: string;
  hideHeader?: boolean;
  smallTitle?: boolean;
  dataAttrs?: Record<string, string>;
  onCloseClick?: () => void;
}

///////////////
// COMPONENT //
///////////////

const BottomSheet = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const bottomSheetRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [stickModal, setStickModal] = React.useState(false);

  //////////////
  // IMPERIAL //
  //////////////
  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return bottomSheetRef.current;
    },
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  //////////////
  // HANDLERS //
  //////////////

  const handleCloseClick = () => {
    if (isOpen && props.closeOutside && props.isMobileBreakpoint) {
      // console.log("clicked outside");
      props.onCloseClick();
    }
  };

  //////////////
  /// HOOKS ////
  //////////////

  useOutsideClick(bottomSheetRef, () => {
    handleCloseClick();
  });

  /////////////////
  // USE EFFECTS //
  /////////////////

  React.useEffect(() => {
    const myObserver = new ResizeObserver((entries) => {
      // this will get called whenever div dimension changes
      entries.forEach((entry) => {
        // console.log("entry", entry);
        if (
          window.innerHeight > (entry.target as HTMLDivElement).offsetHeight
        ) {
          setStickModal(true);
        } else {
          setStickModal(false);
        }
      });
    });

    myObserver.observe(bottomSheetRef.current);

    return () => {
      myObserver.disconnect();
    };
  }, []);

  useDidMountEffect(() => {
    // console.log("isOpen", props.isOpen);
    gsap.killTweensOf(modalWrapRef.current);

    if (isOpen) {
      modalWrapRef.current.focus();

      // console.log("open");

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
    } else {
      // console.log("close");

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
  }, [isOpen]);

  const handleCustomPaddings = () => {
    if (props.customPaddingsMobile) {
      return props.customPaddingsMobile;
    }

    return "30px";
  };

  ///////////////
  // RENDERING //
  ///////////////

  return (
    <aside
      role="dialog"
      tabIndex={-1}
      aria-modal
      aria-hidden="false"
      ref={modalWrapRef}
      className={`${styles.modalWrap}`}
      {...props.dataAttrs}
    >
      <section
        area-aria-disabled="false"
        ref={bottomSheetRef}
        className={`${styles.bottomSheetWrap} ${
          stickModal ? "" : styles.overScrolled
        } ${props.popupClassName}`}
        style={{
          padding: handleCustomPaddings(),
        }}
      >
        {!props.hideHeader ? (
          <Header
            onCloseClick={handleCloseClick}
            title={props.title}
            smallTitle={props.smallTitle}
            noMaxWidth={true}
          />
        ) : null}
        <div
          className={`${styles.contentWrapper} ${styles.popupContentClassName}`}
        >
          {props.children}
        </div>
      </section>
      <div ref={backgroundRef} className={styles.background}></div>
    </aside>
  );
});

BottomSheet.defaultProps = {
  onCloseClick: () => {},
  popupClassName: "",
  popupContentClassName: "",
} as Partial<Props>;

export default BottomSheet;
