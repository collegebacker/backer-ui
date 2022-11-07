import React from "react";
import styles from "./styles.module.scss";

import Icon from "../Icon";

export interface Props {
  className?: string;
  mode?: "outline" | "grey" | "velvet" | "peach";
  title?: string;
  caption?: string;
  tabIndex?: number;
  onClick?: () => void;
}

const ActionMesssage: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className} ${styles[props.mode]}`}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      <div className={styles.content}>
        <span className={`typo-app-body-main ${styles.title}`}>
          {props.title}
        </span>
        <span className={`typo-app-body-caption ${styles.caption}`}>
          {props.caption}
        </span>
      </div>

      <Icon name="chevron-right" className={styles.arrow} />
    </section>
  );
};

ActionMesssage.defaultProps = {
  className: "",
  mode: "outline",
  title: "Hi! I'm the info message. I show you things you need to know.",
  caption:
    "This is a caption. You can use it to explain more about the message.",
  tabIndex: 0,
} as Partial<Props>;

export default ActionMesssage;
