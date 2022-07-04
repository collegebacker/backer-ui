import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
}

const Divider: React.FC<Props> = (props) => {
  return <div className={`${styles.divider} ${props.className}`} />;
};

Divider.defaultProps = {
  className: "",
} as Partial<Props>;

export default Divider;
