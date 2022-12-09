import React from "react";
import gsap from "gsap";

import { useOutsideClick, useDidMountEffect } from "../../../hooks";

import styles from "./styles.module.scss";
import Header from "../Header";

interface Props {
  popupClassName?: string;
  popupContentClassName?: string;
  customPaddings?: string;
  customPaddingsMobile?: string;
  children: React.ReactNode;
  isMobileBreakpoint: boolean;
  title?: string;
  minHeight?: string;
  hideHeader?: boolean;
  smallTitle?: boolean;
  customWidth?: number;
  closeOutside?: boolean;
  dataAttrs?: Record<string, string>;
  onCloseClick?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
  disableHeaderBottomMargin?: boolean;
}

///////////////
// COMPONENT //
///////////////

const Popup = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const gradientsRef = React.useRef<HTMLDivElement>(null);

  const [isMount, setIsMount] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isShown, setIsShown] = React.useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = React.useState(true);

  //////////////
  // IMPERIAL //
  //////////////

  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return popupRef.current;
    },
    open: () => {
      if (isAnimationFinished) {
        // console.log("isAnimationFinished", isAnimationFinished);
        setIsOpen(true);
      }
    },
    close: () => {
      // console.log("isAnimationFinished", isAnimationFinished);
      if (isAnimationFinished) {
        setIsOpen(false);
      }
    },
  }));

  //////////////
  // HANDLERS //
  //////////////

  const handleCloseClick = () => {
    // console.log("close click");
    if (isShown && isAnimationFinished) {
      props.onCloseClick();
    }
  };

  ///////////////
  //// HOOKS ////
  ///////////////

  useOutsideClick(
    popupRef,
    () => {
      // console.log(isAppeared, props.closeOutside, props.isMobileBreakpoint);
      // console.log("clicked outside");
      props.closeOutside && handleCloseClick();
    },
    isShown
  );

  /////////////////
  // USE EFFECTS //
  /////////////////

  useDidMountEffect(() => {
    // kill all animations
    gsap.killTweensOf(modalWrapRef.current);

    if (isMount) {
      if (isOpen) {
        // console.log("open");

        gsap.to(modalWrapRef.current, {
          opacity: 1,
          pointerEvents: "all",
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)",
          duration: 0.1,
          onStart: () => {
            setIsAnimationFinished(false);
          },
          onComplete: () => {
            popupRef.current?.classList.add(styles.popup_show);
          },
        });
        gsap.to(gradientsRef.current, {
          opacity: 1,
          scale: 1,
          delay: 0.1,
          duration: 0.5,
          ease: "circ.out",
          onComplete: () => {
            setIsShown(true);
            setIsAnimationFinished(true);
          },
        });
      } else {
        gsap.to(modalWrapRef.current, {
          pointerEvents: "none",
          opacity: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 10%)",
          duration: 0.4,
          onStart: () => {
            popupRef.current?.classList.remove(styles.popup_show);
            setIsShown(false);
            setIsAnimationFinished(false);
          },
        });
        gsap.to(gradientsRef.current, {
          opacity: 0,
          scale: 0.1,
          duration: 0.7,
          ease: "circ.out",
          onComplete: () => {
            modalWrapRef.current.blur();
            setIsMount(false);
            setIsAnimationFinished(true);
          },
        });
      }
    }
  }, [isOpen, isMount]);

  React.useEffect(() => {
    if (isOpen) {
      setIsMount(true);
    }
  }, [isOpen]);

  /////////////////
  /// FUNCTIONS ///
  /////////////////

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
      if (props.customPaddingsMobile) {
        return props.customPaddingsMobile;
      } else {
        return "30px 20px 40px";
      }
    }
  };

  ///////////////
  // RENDERING //
  ///////////////

  return (
    isMount && (
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
                }
              : {}),
            ...{
              padding: handleCustomPaddings(),
              minHeight: props.minHeight ?? "200px",
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
              showBackButton={props.showBackButton}
              onBackClick={props.onBackClick}
              disableMarginDesktop={props.disableHeaderBottomMargin}
            />
          ) : null}
          <div
            tabIndex={0}
            className={`${styles.contentWrapper} ${props.popupContentClassName}`}
          >
            {props.children}
          </div>
        </section>

        <div className={styles.gradients} ref={gradientsRef}>
          <div className={styles.gradient1} />
          <div className={styles.gradient2} />
        </div>
      </aside>
    )
  );
});

Popup.defaultProps = {
  customWidth: 0,
  customPaddings: null,
  popupClassName: "",
  popupContentClassName: "",
} as Partial<Props>;

export default Popup;
