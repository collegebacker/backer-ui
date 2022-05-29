import React from "react";
import styles from "./styles.module.scss";

/////////////////////////////////
//////// TYPES AND PROPS ////////
/////////////////////////////////

export interface Props {
  className?: string;
  disabled?: boolean;
  direction?: "left" | "right";
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

const ArrowButton = React.forwardRef<any, Props>((props, ref) => {
  return (
    <button
      ref={ref}
      className={`${styles.arrowButton} ${props.className}`}
      style={{
        transform:
          props.direction === "left" ? "rotate(0deg)" : "rotate(180deg)",
        ...props.style,
      }}
      disabled={props.disabled}
      onClick={props.onClick}
      onMouseUp={props.onMouseUp}
      onMouseDown={props.onMouseDown}
    >
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.12901 11.5292L1.59982 6L7.12901 0.47081" />
      </svg>
    </button>
  );
});

ArrowButton.displayName = "ArrowButton";

ArrowButton.defaultProps = {
  className: "",
  disabled: false,
  direction: "left",
  style: {},
  onClick: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
} as Partial<Props>;

export default ArrowButton;
