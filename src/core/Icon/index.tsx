import React from "react";
import styles from "./styles.module.scss";

import icons from "./icons.json";

interface Props {
  className?: string;
  name: IconTypes;
}

const Icon: React.FC<Props> = (props) => {
  return (
    <i className={`${styles.icon} ${props.className}`}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fillRule="evenodd">
        <path d={(icons as any)[props.name]} />
      </svg>
    </i>
  );
};

Icon.defaultProps = {
  className: "",
  name: "cross",
} as Partial<Props>;

export default Icon;
