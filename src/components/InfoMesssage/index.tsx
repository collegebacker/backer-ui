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
  caption?: string | React.ReactNode;
  tabIndex?: number;
  onClick?: () => void;
}

const WarnMesssage: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${props.className} ${styles[props.mode]}`}
      style={{
        flexDirection: props.orientation === "left" ? "row" : "row-reverse",
        cursor: props.onClick ? "pointer" : "default",
      }}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      {props.emoji === "" ? (
        <Icon name={props.icon} />
      ) : (
        <span className={styles.emoji}>{props.emoji}</span>
      )}

      <div
        className={styles.content}
        style={{
          marginLeft: props.orientation === "right" ? "0" : "20px",
          marginRight: props.orientation === "left" ? "0" : "20px",
        }}
      >
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
  orientation: "left",
  mode: "outline",
  title: "Hi! I'm the info message. I show you things you need to know.",
  caption:
    "This is a caption. You can use it to explain more about the message.",
  emoji: "",
  icon: "mail",
} as Partial<Props>;

export default WarnMesssage;
