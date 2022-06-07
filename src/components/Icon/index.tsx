import React from "react";
import styles from "./styles.module.scss";

import icons from "./icons.json";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  name: IconTypes;
  color?: string;
}

const Icon: React.FC<Props> = (props) => {
  return (
    <i
      className={`${styles.icon} ${props.className}`}
      style={{ ...props.style }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fillRule="evenodd"
        style={props.color ? { fill: props.color } : {}}
      >
        <path d={(icons as any)[props.name]} />
      </svg>
    </i>
  );
};

Icon.defaultProps = {
  className: "",
  name: "cross",
  style: {},
  color: "",
} as Partial<Props>;

export default Icon;
