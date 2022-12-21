import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    image?: string;
    onClick?: () => void;
}
declare const ProfilePic: React.FC<Props>;
export default ProfilePic;
