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
  maxSheetHeight?: string;
  onCloseClick?: () => void;
  showBackButton?: boolean;
  onBackClick?: () => void;
}

///////////////
// COMPONENT //
///////////////

const BottomSheet = React.forwardRef<any, Props>((props, ref) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const bottomSheetRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);

  const [isMount, setIsMount] = React.useState(false);
  const [isOpenTriggered, setIsPpenTriggered] = React.useState(false);
  const [stickModal, setStickModal] = React.useState(false);

  //////////////
  // IMPERIAL //
  //////////////
  React.useImperativeHandle(ref, () => ({
    getRef: () => {
      return bottomSheetRef.current;
    },
    open: () => {
      setIsPpenTriggered(true);
    },
    close: () => {
      setIsPpenTriggered(false);
    },
  }));

  //////////////
  // HANDLERS //
  //////////////

  const handleCloseClick = () => {
    if (isOpenTriggered) {
      // console.log("clicked outside");
      props.onCloseClick();
    }
  };

  //////////////
  /// HOOKS ////
  //////////////

  useOutsideClick(
    bottomSheetRef,
    () => {
      handleCloseClick();
    },
    isOpenTriggered
  );

  /////////////////
  // USE EFFECTS //
  /////////////////

  useDidMountEffect(() => {
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
    if (isMount) {
      myObserver.observe(bottomSheetRef.current);

      return () => {
        myObserver.disconnect();
      };
    } else {
      myObserver.disconnect();
    }
  }, [isMount]);

  useDidMountEffect(() => {
    // console.log("isOpenTriggered", props.isOpenTriggered);
    gsap.killTweensOf(modalWrapRef.current);

    if (isMount) {
      if (isOpenTriggered) {
        modalWrapRef.current.focus();

        gsap.to(modalWrapRef.current, {
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
        gsap.to(modalWrapRef.current, {
          pointerEvents: "none",
          opacity: 0,
          duration: 0.1,
          delay: 0.4,
          onComplete: () => {
            modalWrapRef.current.blur();
            setIsMount(false);
          },
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
    }
  }, [isOpenTriggered, isMount]);

  React.useEffect(() => {
    if (isOpenTriggered) {
      setIsMount(true);
    }
  }, [isOpenTriggered]);

  ///////////////
  // FUNCTIONS //
  ///////////////

  const handleCustomPaddings = () => {
    if (props.customPaddingsMobile) {
      console.log("props.customPaddingsMobile", props.customPaddingsMobile);
      return props.customPaddingsMobile;
    }

    return "30px";
  };

  ///////////////
  // RENDERING //
  ///////////////

  return (
    isMount && (
      <aside
        role="dialog"
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
            maxHeight: props.maxSheetHeight ?? "100%",
          }}
        >
          {!props.hideHeader ? (
            <Header
              onCloseClick={handleCloseClick}
              title={props.title}
              smallTitle={props.smallTitle}
              noMaxWidth={true}
              showBackButton={props.showBackButton}
              onBackClick={props.onBackClick}
            />
          ) : null}
          <div className={`${props.popupContentClassName}`}>
            {props.children}
          </div>
        </section>
        <div ref={backgroundRef} className={styles.background} />
      </aside>
    )
  );
});

BottomSheet.defaultProps = {
  popupClassName: "",
  popupContentClassName: "",
} as Partial<Props>;

export default BottomSheet;
