import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    uploadMode?: boolean;
    imageSrc?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const PolaroidPhoto: React.FC<Props>;
export default PolaroidPhoto;
