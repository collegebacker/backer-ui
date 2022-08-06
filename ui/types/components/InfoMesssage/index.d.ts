import React from "react";
export interface Props {
    className?: string;
    orientation?: "left" | "right";
    mode?: "outline" | "grey" | "velvet" | "peach";
    icon?: IconTypes;
    emoji?: string;
    title?: string;
    caption?: string;
    tabIndex?: number;
    onClick?: () => void;
}
declare const WarnMesssage: React.FC<Props>;
export default WarnMesssage;
