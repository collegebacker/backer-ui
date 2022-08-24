import React from "react";
import styles from "./styles.module.scss";

export interface Props {
  className?: string;
  totalAmount: number;
  visibleAmount: number;
  activeIndex: number;
}

const DotPagination: React.FC<Props> = (props) => {
  const [shift, setShift] = React.useState(0);

  const limitDots = (index: number) => {
    if (
      index + 1 > props.activeIndex + props.visibleAmount ||
      index < props.activeIndex
    ) {
      if (
        index < props.totalAmount - props.visibleAmount ||
        index > props.visibleAmount + props.activeIndex - 1
      ) {
        // console.log("limitDots", index);
        return true;
      }
    }
  };

  React.useEffect(() => {
    console.log(props.visibleAmount - props.activeIndex);

    setShift(props.activeIndex);

    console.log("shift", shift);
  }, [props.activeIndex]);

  const spaceBetweenDots = 10;
  const dotsSize = 8;
  const activeDot = 20;
  const stepSize = spaceBetweenDots + dotsSize;

  const isCornerStep = () => {
    if (
      props.activeIndex === 0 ||
      props.activeIndex + 1 > props.totalAmount - props.visibleAmount
    ) {
      return activeDot;
    } else {
      return stepSize + activeDot;
    }
  };

  const setShiftPosition = () => {
    // if (props.visibleAmount > props.totalAmount) {
    //   return `translateX(0)`;
    // }

    if (props.activeIndex < props.totalAmount - props.visibleAmount) {
      return `translateX(-${(shift - 1) * stepSize}px)`;
    } else {
      return `translateX(-${activeDot + stepSize}px)`;
    }

    // if (props.activeIndex > props.totalAmount - props.visibleAmount) {
    //   return `translateX(-${(shift - 1) * stepSize}px)`;
    // }

    // props.visibleAmount > props.totalAmount
  };

  return (
    <div
      className={`${styles.container} ${props.className}`}
      style={{
        width: `${props.visibleAmount * stepSize + isCornerStep()}px`,
      }}
    >
      <div
        className={styles.wrap}
        style={{
          transform: setShiftPosition(),
        }}
      >
        {Array.from(Array(props.totalAmount).keys()).map((_, index) => {
          return (
            <div
              className={`${styles.paginationDot} ${
                props.activeIndex === index ? styles.activeDot : ""
              }`}
              style={{
                backgroundColor: limitDots(index) ? "#f45" : "#000",
                transform: `scale(${limitDots(index) ? 0.5 : 1})`,
              }}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

DotPagination.defaultProps = {
  className: "",
  totalAmount: 9,
  activeIndex: 0,
  visibleAmount: 6,
} as Partial<Props>;

export default DotPagination;
