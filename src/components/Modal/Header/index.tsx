import React from "react";

import Icon from "../../Icon";
import styles from "./styles.module.scss";

interface HeaderProps {
  title?: string;
  largeTitle?: boolean;
  smallTitle?: boolean;
  noMaxWidth?: boolean;
  showBackButton?: boolean;
  disableMarginDesktop?: boolean;
  disableMarginMobile?: boolean;
  onBackClick?: () => void;
  onCloseClick: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  console.log("Header", props);

  return (
    <div
      className={`${styles.header} ${
        (props.title || !props.showBackButton) && !props.disableMarginDesktop
          ? styles.bottomMarginDesktop
          : ""
      }
      ${!props.disableMarginMobile ? styles.bottomMarginMobile : ""}
      ${props.noMaxWidth ? styles.minHeight : ""}
      `}
    >
      {props.showBackButton && (
        <button className={styles.backButton} onClick={props.onBackClick}>
          <div className={styles.backButton__background} />
        </button>
      )}

      <button className={styles.closeButton} onClick={props.onCloseClick}>
        <div className={styles.closeButton__background} />
      </button>

      {(props.title || props.title !== "") && !props.showBackButton ? (
        <div className={`${styles.titleWrap}`}>
          <h2
            className={` ${
              !props.largeTitle ? styles.adaptiveTitle : styles.largeTitle
            } ${!props.noMaxWidth ? styles.header_maxWidth : ""} ${
              styles[props.smallTitle ? "smallTitle" : "title"]
            }`}
          >
            {props.title}
          </h2>
        </div>
      ) : null}
    </div>
  );
};

Header.defaultProps = {
  title: "",
  smallTitle: false,
  noMaxWidth: false,
  showBackButton: false,
  disableMarginDesktop: false,
  disableMarginMobile: false,
  largeTitle: false,
};

export default Header;
