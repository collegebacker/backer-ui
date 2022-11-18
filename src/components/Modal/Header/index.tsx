import React from "react";

import Icon from "../../Icon";
import styles from "./styles.module.scss";

interface HeaderProps {
  title?: string;
  smallTitle?: boolean;
  noMaxWidth?: boolean;
  showBackButton?: boolean;
  onBackClick?: () => void;
  onCloseClick: () => void;
  parentRef?: React.RefObject<HTMLDivElement>;
  contentRef?: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const headerRef = React.useRef<HTMLDivElement>(null);
  const buttonsRef = React.useRef<HTMLDivElement>(null);

  const [parentPaddings, setParentPaddings] = React.useState({
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
  });

  //////////////////
  // SIDE EFFECTS //
  //////////////////

  React.useEffect(() => {
    if (props.parentRef && props.parentRef.current) {
      const parentStyles = window.getComputedStyle(props.parentRef.current);
      const parentPaddings = {
        left: parentStyles.paddingLeft,
        right: parentStyles.paddingRight,
        top: parentStyles.paddingTop,
        bottom: parentStyles.paddingBottom,
      };

      setParentPaddings(parentPaddings);
    }
  }, [props.parentRef]);

  React.useEffect(() => {
    let options = {
      rootMargin: `-${parseInt(parentPaddings.top) + 60}px 0px 0px 0px`,
      threshold: 0,
    };

    const scrollObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio === 0) {
        console.log("header is visible");
        buttonsRef.current?.classList.add(styles.sticky);
      } else {
        console.log("header is not visible");
        buttonsRef.current?.classList.remove(styles.sticky);
      }
    }, options);

    if (headerRef.current) {
      scrollObserver.observe(headerRef.current);
    }

    return () => {
      scrollObserver.disconnect();
    };
  }, [parentPaddings]);

  //////////////
  /// RENDER ///
  //////////////

  return (
    <>
      <div
        className={styles.buttons}
        ref={buttonsRef}
        style={{
          marginTop: `-40px`,
          transform: `translateY(calc(-${parentPaddings.top} + 25px))`,
        }}
      >
        {props.showBackButton && (
          <button className={styles.backButton} onClick={props.onBackClick}>
            <div className={styles.backButton__background} />
          </button>
        )}

        <button className={styles.closeButton} onClick={props.onCloseClick}>
          <div className={styles.closeButton__background} />
        </button>
      </div>

      <div
        ref={headerRef}
        className={`${styles.header} ${
          props.title || !props.showBackButton ? styles.bottomMargin : ""
        }
      `}
      >
        {(props.title || props.title !== "") && !props.showBackButton ? (
          <div className={`${styles.titleWrap}`}>
            <h2
              className={`${styles.title} ${
                !props.noMaxWidth ? styles.header_maxWidth : ""
              } ${styles[props.smallTitle ? "smallTitle" : "title"]}`}
            >
              {props.title}
            </h2>
          </div>
        ) : null}
      </div>
    </>
  );
};

Header.defaultProps = {
  title: "",
  smallTitle: false,
  noMaxWidth: false,
  showBackButton: false,
};

export default Header;
