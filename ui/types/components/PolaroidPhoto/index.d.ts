import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    uploadMode?: boolean;
    imageSrc?: string | undefined;
    onChange?: (imageFile: File) => void;
}
declare const PolaroidPhoto: React.FC<Props>;
export default PolaroidPhoto;
