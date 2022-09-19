import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  count?: number;
  limit?: number;
}

const CountBadge: React.FC<Props> = (props) => {
  const handleLimit = () => {
    if (props.count > props.limit) {
      return `+${props.limit}`;
    } else {
      return props.count;
    }
  };

  return (
    <div className={`${styles.wrap} ${props.className}`}>
      <span>{handleLimit()}</span>
    </div>
  );
};

CountBadge.defaultProps = {
  className: "",
  count: 0,
  limit: 99,
} as Partial<Props>;

export default CountBadge;
