import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    size?: "small" | "medium" | "large";
}
declare const Spinner: React.FC<Props>;
export default Spinner;
