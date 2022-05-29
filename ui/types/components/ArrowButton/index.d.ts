import React from "react";
export interface Props {
    className?: string;
    disabled?: boolean;
    direction?: "left" | "right";
    style?: React.CSSProperties;
    onClick?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
}
declare const ArrowButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default ArrowButton;
