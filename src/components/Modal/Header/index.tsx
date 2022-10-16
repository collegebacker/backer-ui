import React from "react";

import Text from "../../Text";
import styles from "./styles.module.scss";

interface HeaderProps {
  title?: string;
  smallTitle?: boolean;
  noMaxWidth?: boolean;
  onCloseClick: (e: React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      className={`${styles.header} ${props.title ? styles.bottomMargin : ""}`}
    >
      <button className={styles.closeButton} onClick={props.onCloseClick}>
        <div className={styles.closeButton__background} />
      </button>
      {props.title || props.title !== "" ? (
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
  );
};

Header.defaultProps = {
  title: "",
  smallTitle: false,
  noMaxWidth: false,
};

export default Header;
