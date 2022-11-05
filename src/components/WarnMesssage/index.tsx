import React from "react";
import styles from "./styles.module.scss";

import Text from "../Text";

export interface Props {
  className?: string;
  type?: "success" | "error" | "warning";
  outline?: boolean;
  text?: string | React.ReactNode;
  tabIndex?: number;
  onClick?: () => void;
}

const setIcon = (type: "success" | "error" | "warning") => {
  if (type === "success") {
    return (
      <>
        <circle
          cx="12"
          cy="12"
          r="12"
          fill="var(--color-service-success-main)"
        />
        <path
          d="M17.0921 9.06125L10.6764 15.477L7.1995 12.0001"
          stroke="#141414"
        />
      </>
    );
  }

  if (type === "warning") {
    return (
      <>
        <path
          d="M9.33667 3.0985C10.559 1.10051 13.441 1.10051 14.6633 3.0985L23.5294 17.5905C24.8149 19.6919 23.3152 22.4 20.866 22.4H3.13397C0.684768 22.4 -0.814922 19.6919 0.470637 17.5905L9.33667 3.0985Z"
          fill="var(--color-service-warning-main)"
        />
        <path d="M12 14.4V6.39999" stroke="#141414" />
        <path d="M12 18.4L12 16" stroke="#141414" />
      </>
    );
  }

  if (type === "error") {
    return (
      <>
        <path
          d="M16.9706 0L24 7.02944V16.9706L16.9706 24L7.02944 24L2.13457e-07 16.9706L0 7.02944L7.02944 5.36659e-07L16.9706 0Z"
          fill="var(--color-service-error-main)"
        />
        <rect x="6" y="11" width="12" height="2" fill="white" />
      </>
    );
  }
};

const WarnMesssage: React.FC<Props> = (props) => {
  return (
    <section
      className={`${styles.wrap} ${
        styles[`${props.outline ? `${props.type}-outline` : props.type}`]
      } ${props.className}`}
      style={{
        cursor: props.onClick ? "pointer" : "default",
      }}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        {setIcon(props.type)}
      </svg>
      <Text
        tag="span"
        context="app"
        appStyle="body-main"
        className={styles.text}
      >
        {props.text}
      </Text>
    </section>
  );
};

WarnMesssage.defaultProps = {
  className: "",
  type: "success",
  mode: "outline",
  text: "Hi! I'm the tip-off message. I'll notify you about important stuff.",
} as Partial<Props>;

export default WarnMesssage;
