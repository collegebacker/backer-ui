import React from "react";
export interface Props {
    className?: string;
    onClick?: (event: any) => void;
    mode?: "primary" | "accent" | "outline" | "ghost";
    size?: "default" | "small";
    type?: "button" | "link";
    behaviour?: "submit" | "reset";
    target?: TargetTypes;
    icon?: IconTypes;
    href?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    maxWidth?: number;
}
declare const Button: React.FC<Props>;
export default Button;
