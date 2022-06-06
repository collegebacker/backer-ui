import React from "react";
import gsap from "gsap";

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
  onCloseClick?: () => void;
}

///////////////
// COMPONENT //
///////////////

const Popup: React.FC<Props> = (props) => {
  const modalWrapRef = React.useRef<HTMLDivElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const gradients = React.useRef<HTMLDivElement>(null);

  const [isMobileBreakpoint, setIsMobileBreakpoint] = React.useState(false);

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
      modalWrapRef.current.style.pointerEvents = "all";

      gsap.to(modalWrapRef.current, {
        opacity: 1,
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
        duration: 1,
        ease: "circ.out",
      });
    } else {
      modalWrapRef.current.style.pointerEvents = "none";

      gsap.to(modalWrapRef.current, {
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
        duration: 0.7,
        ease: "circ.out",
      });
    }
  }, [props.isOpen]);

  React.useEffect(() => {
    const MobileBreakpoint = 620;
    const detectMobileBreakpoint = () => {
      if (window.innerWidth < MobileBreakpoint) {
        setIsMobileBreakpoint(true);
      } else {
        setIsMobileBreakpoint(false);
      }
    };

    detectMobileBreakpoint();

    window.addEventListener("resize", detectMobileBreakpoint);

    return () => {
      window.removeEventListener("resize", detectMobileBreakpoint);
    };
  }, []);

  ///////////////
  // RENDERING //
  ///////////////

  return (
    <section
      ref={modalWrapRef}
      className={`${styles.modalWrap}`}
      style={{ ...props.style }}
    >
      <section
        className={`${styles.popup} ${
          !props.customWidth && props.customWidth === 0
            ? styles.popup_maxLayout
            : ""
        } ${props.popupClassName}`}
        ref={popupRef}
        style={{
          ...props.style,
          ...(props.customWidth && props.customWidth > 0
            ? {
                maxWidth: !isMobileBreakpoint ? props.customWidth : "100%",
                width: "100%",
              }
            : {}),
        }}
      >
        <Header
          onCloseClick={handleCloseClick}
          title={props.title}
          smallTitle={props.smallTitle}
          noMaxWidth={props.customWidth && props.customWidth > 0 ? true : false}
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
    </section>
  );
};

Popup.defaultProps = {
  title: "",
  onCloseClick: () => {},
} as Partial<Props>;

export default Popup;
