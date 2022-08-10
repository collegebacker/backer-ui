import React from "react";
import styles from "./styles.module.scss";

import logosURLs from "./logosURLs.json";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  mode?: "light" | "dark";
  name:
    | "visa"
    | "paypal"
    | "apple-pay"
    | "apple-pay-framed"
    | "g-pay"
    | "g-pay-framed"
    | "mastercard";
}

const PaymentLogo: React.FC<Props> = (props) => {
  return (
    <img
      src={`https://res.cloudinary.com/dgfjsma5p/image/upload/payment-logos/${props.mode}/${props.name}.svg`}
      alt={props.name}
      className={`${styles.icon} ${props.className}`}
      style={props.style}
    />
  );
};

PaymentLogo.defaultProps = {
  className: "",
  mode: "light",
  name: "apple-pay",
  style: {},
} as Partial<Props>;

export default PaymentLogo;
