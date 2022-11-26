import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
    icon?: IconTypes;
    paymentIcon?: PaymentLogoTypes;
    href?: string;
    target?: TargetTypes;
    label?: string;
    tag?: "button" | "a";
    isActive?: boolean;
    onClick?: (event: any) => void;
    onSubmit?: (event: any) => void;
    onKeyPress?: (event: any) => void;
    areaLabel?: string;
    areaLabelledBy?: string;
}
declare const PillButton: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default PillButton;
