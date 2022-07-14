import React from "react";
import styles from "./styles.module.scss";

import Icon from "../Icon";
import Text from "../Text";

export interface Props {
  className?: string;
  orientation?: "left" | "right";
  mode?: "outline" | "grey" | "velvet" | "peach";
  icon?: IconTypes;
  emoji?: string;
  title?: string;
  caption?: string;
}

const WarnMesssage: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className} ${styles[props.mode]}`}
      style={{
        flexDirection: props.orientation === "left" ? "row-reverse" : "row",
      }}
    >
      {props.emoji === "" ? <Icon name={props.icon} /> : null}

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
    </section>
  );
};

WarnMesssage.defaultProps = {
  className: "",
  mode: "outline",
  title: "Hi! I'm the info message. I show you things you need to know.",
  caption:
    "this is a caption. You can use it to explain more about the message.",
  emoji: "",
  icon: "question",
} as Partial<Props>;

export default WarnMesssage;
