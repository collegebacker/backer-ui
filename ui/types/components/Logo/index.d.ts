import React from "react";
export interface Props {
    className?: string;
    type?: "default" | "foundation" | "sign";
    hoverAnimation?: boolean;
}
declare const Logo: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default Logo;
