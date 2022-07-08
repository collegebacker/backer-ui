import React from "react";
import styles from "./styles.module.scss";

import Icon from "../Icon";

export interface Props {
  className?: string;
}

const Tooltip: React.FC<Props> = (props) => {
  return (
    <aside className={`${styles.container} ${props.className}`}>
      <button>
        <Icon name="question" />
      </button>
    </aside>
  );
};

Tooltip.defaultProps = {
  className: "",
} as Partial<Props>;

export default Tooltip;
