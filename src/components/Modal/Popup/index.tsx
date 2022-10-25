import React from "react";
import gsap from "gsap";
import FocusTrap from "focus-trap-react";

import { useOutsideClick, useDidMountEffect } from "../../../hooks";

import styles from "./styles.module.scss";
import Header from "../Header";

interface Props {
  popupClassName?: string;
  popupContentClassName?: string;
  customPaddings?: string;
  children: React.ReactNode;
  isMobileBreakpoint: boolean;
  title?: string;
  hideHeader?: boolean;
  smallTitle?: boolean;
  customWidth?: number;
  closeOutside?: boolean;
  dataAttrs?: Record<string, string>;
  onCloseClick?: () => void;
}

///////////////
// COMPONENT //
///////////////

const Popup = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const gradients = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isShown, setIsShown] = React.useState(false);

  //////////////
  // IMPERIAL //
  //////////////

  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return popupRef.current;
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
    if (isShown) {
      props.onCloseClick();
    }
  };

  ///////////////
  //// HOOKS ////
  ///////////////

  useOutsideClick(popupRef, () => {
    // console.log(isAppeared, props.closeOutside, props.isMobileBreakpoint);
    // console.log("clicked outside");
    props.closeOutside && handleCloseClick();
  });

  /////////////////
  // USE EFFECTS //
  /////////////////

  useDidMountEffect(() => {
    // kill all animations
    gsap.killTweensOf(modalWrapRef.current);

    if (isOpen) {
      // console.log("open");

      gsap.to(modalWrapRef.current, {
        opacity: 1,
        display: "block",
        pointerEvents: "all",
        backgroundImage:
          "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)",
        duration: 0.1,
        onComplete: () => {
          popupRef.current?.classList.add(styles.popup_show);
        },
      });
      gsap.to(gradients.current, {
        opacity: 1,
        scale: 1,
        delay: 0.1,
        duration: 0.5,
        ease: "circ.out",
        onComplete: () => {
          setIsShown(true);
        },
      });
    } else {
      // console.log("close");

      gsap.to(modalWrapRef.current, {
        display: "none",
        pointerEvents: "none",
        opacity: 0,
        backgroundImage:
          "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 10%)",
        duration: 0.4,
        onStart: () => {
          popupRef.current?.classList.remove(styles.popup_show);
          setIsShown(false);
        },
      });
      gsap.to(gradients.current, {
        opacity: 0,
        scale: 0.1,
        duration: 0.7,
        ease: "circ.out",
      });
    }
  }, [isOpen]);

  const handleCustomPaddings = () => {
    if (!props.isMobileBreakpoint) {
      if (props.customPaddings) {
        return props.customPaddings;
      }

      if (props.customWidth) {
        return "30px";
      }

      return "90px 30px 90px";
    } else {
      return "30px 30px 80px";
    }
  };

  ///////////////
  // RENDERING //
  ///////////////

  return (
    <>
      <aside
        role="dialog"
        aria-modal
        aria-hidden={false}
        ref={modalWrapRef}
        className={`${styles.modalWrap}`}
        {...props.dataAttrs}
      >
        <section
          ref={popupRef}
          className={`${styles.popup} ${
            !props.customWidth && props.customWidth === 0
              ? styles.popup_maxLayout
              : ""
          } ${props.popupClassName}`}
          style={{
            ...(props.customWidth && props.customWidth > 0
              ? {
                  maxWidth: !props.isMobileBreakpoint
                    ? props.customWidth
                    : "100%",
                  width: "100%",
                }
              : {}),
            ...{
              padding: handleCustomPaddings(),
            },
          }}
        >
          {!props.hideHeader ? (
            <Header
              onCloseClick={handleCloseClick}
              title={props.title}
              smallTitle={props.smallTitle}
              noMaxWidth={
                props.customWidth && props.customWidth > 0 ? true : false
              }
            />
          ) : null}
          <div
            tabIndex={0}
            className={`${styles.contentWrapper} ${styles.popupContentClassName}`}
          >
            {props.children}
          </div>
        </section>

        <div className={styles.gradients} ref={gradients}>
          <div className={styles.gradient1} />
          <div className={styles.gradient2} />
        </div>
      </aside>
    </>
  );
});

Popup.defaultProps = {
  customWidth: 0,
  customPaddings: null,
  onCloseClick: () => {},
  popupClassName: "",
  popupContentClassName: "",
} as Partial<Props>;

export default Popup;
