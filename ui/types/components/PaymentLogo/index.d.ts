import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    mode?: "light" | "dark";
    name: "visa" | "paypal" | "apple-pay" | "apple-pay-framed" | "g-pay" | "g-pay-framed" | "mastercard";
}
declare const PaymentLogo: React.FC<Props>;
export default PaymentLogo;
