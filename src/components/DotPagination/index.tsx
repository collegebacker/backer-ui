import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  totalAmount: number;
  activeIndex: number;
}

const DotPagination: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.pagination} ${props.className}`}>
      {Array.from(Array(props.totalAmount).keys()).map((_, index) => {
        return (
          <div
            className={`${styles.paginationDot} ${
              props.activeIndex === index ? styles.activeDot : ""
            }`}
            key={index}
          />
        );
      })}
    </div>
  );
};

DotPagination.defaultProps = {
  className: "",
  totalAmount: 6,
  activeIndex: 0,
} as Partial<Props>;

export default DotPagination;
