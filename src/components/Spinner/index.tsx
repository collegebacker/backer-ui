import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
}

const Toast: React.FC<Props> = (props) => {
  return <div className={`${styles.loaderWrap} ${props.className}`}></div>;
};

Toast.defaultProps = {
  className: "",
  style: {},
  size: "small",
} as Partial<Props>;

export default Toast;
