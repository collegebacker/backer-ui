import React from "react";
export interface Props {
    fundsArray: any;
    className?: string;
    name: string;
    image?: string;
    onClick?: () => void;
}
declare const FundProfilePic: React.FC<Props>;
export default FundProfilePic;
