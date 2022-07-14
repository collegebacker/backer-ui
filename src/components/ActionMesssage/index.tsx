import React from "react";
import styles from "./styles.module.scss";

import Icon from "../Icon";
import Text from "../Text";

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
        <Text
          tag="span"
          context="app"
          appStyle="body-main"
          className={styles.title}
        >
          {props.title}
        </Text>
        <Text
          tag="span"
          context="app"
          appStyle="body-caption"
          className={styles.caption}
        >
          {props.caption}
        </Text>
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
