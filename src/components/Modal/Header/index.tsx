import React from "react";

import { Text } from "../..";
import styles from "./styles.module.scss";

interface HeaderProps {
  title?: string;
  smallTitle?: boolean;
  noMaxWidth?: boolean;
  onCloseClick: (e: React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div className={styles.header}>
      <button className={styles.closeButton} onClick={props.onCloseClick}>
        <div className={styles.closeButton__background} />
      </button>
      {props.title ? (
        <div className={`${styles.titleWrap}`}>
          <Text
            className={`${styles.title} ${
              !props.noMaxWidth ? styles.header_maxWidth : ""
            }`}
            tag="h2"
            context="app"
            appStyle={props.smallTitle ? "title-small" : "title-large"}
          >
            {props.title}
          </Text>
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
