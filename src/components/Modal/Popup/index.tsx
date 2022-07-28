import React from "react";
import gsap from "gsap";
import FocusTrap from "focus-trap-react";

import { useOutsideClick } from "../../../hooks";

import styles from "./styles.module.scss";
import Header from "../Header";

interface Props {
  popupClassName: string;
  popupContentClassName: string;
  isOpen: boolean;
  title?: string;
  smallTitle: boolean;
  children: React.ReactNode;
  customWidth?: number;
  style?: React.CSSProperties;
  closeOutside: boolean;
  isMobileBreakpoint: boolean;
  onCloseClick?: () => void;
}

///////////////
// COMPONENT //
///////////////

const Popup = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const gradients = React.useRef<HTMLDivElement>(null);

  const [isAppeared, setIsAppeared] = React.useState(false);

  //////////////
  // IMPERIAL //
  //////////////
  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return popupRef.current;
    },
  }));

  ///////////////
  //// HOOKS ////
  ///////////////

  useOutsideClick(popupRef, () => {
    // console.log(isAppeared, props.closeOutside, props.isMobileBreakpoint);
    if (isAppeared && props.closeOutside && !props.isMobileBreakpoint) {
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
    if (props.isOpen) {
      modalWrapRef.current?.focus();
      // modalWrapRef.current.style.display = "block";

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
        onStart: () => {
          setIsAppeared(true);
        },
        delay: 0.1,
        duration: 1,
        ease: "circ.out",
      });
    } else {
      // modalWrapRef.current.style.display = "none";

      gsap.to(modalWrapRef.current, {
        display: "none",
        pointerEvents: "none",
        opacity: 0,
        backgroundImage:
          "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 10%)",
        duration: 0.4,
        onStart: () => {
          popupRef.current?.classList.remove(styles.popup_show);
        },
      });
      gsap.to(gradients.current, {
        opacity: 0,
        scale: 0.1,
        onStart: () => {
          setIsAppeared(false);
        },
        duration: 0.7,
        ease: "circ.out",
      });
    }
  }, [props.isOpen]);

  ///////////////
  // RENDERING //
  ///////////////

  return (
    <>
      <FocusTrap
        containerElements={[popupRef.current]}
        focusTrapOptions={{
          allowOutsideClick: true,
          clickOutsideDeactivates: true,
          // @ts-ignore
          checkCanFocusTrap: (trapContainers) => {
            const results = trapContainers.map((trapContainer) => {
              return new Promise<void>((resolve) => {
                const interval = setInterval(() => {
                  // console.log(trapContainer.contains(document.activeElement));
                  if (getComputedStyle(trapContainer).display !== "none") {
                    console.log(getComputedStyle(trapContainer).display);
                    resolve();
                    clearInterval(interval);
                  }
                }, 500);
              });
            });
            // Return a promise that resolves when all the trap containers are able to receive focus
            return Promise.all(results);
          },
        }}
      />
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
          ref={popupRef}
          className={`${styles.popup} ${
            !props.customWidth && props.customWidth === 0
              ? styles.popup_maxLayout
              : ""
          } ${props.popupClassName}`}
          style={{
            ...props.style,
            ...(props.customWidth && props.customWidth > 0
              ? {
                  maxWidth: !props.isMobileBreakpoint
                    ? props.customWidth
                    : "100%",
                  width: "100%",
                }
              : {}),
          }}
        >
          <Header
            onCloseClick={handleCloseClick}
            title={props.title}
            smallTitle={props.smallTitle}
            noMaxWidth={
              props.customWidth && props.customWidth > 0 ? true : false
            }
          />
          <div
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
  title: "",
  customWidth: 0,
  onCloseClick: () => {},
} as Partial<Props>;

export default Popup;
