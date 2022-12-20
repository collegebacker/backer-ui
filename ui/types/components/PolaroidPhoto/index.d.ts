import React from "react";
export interface Props {
    className?: string;
    style?: React.CSSProperties;
    name: string;
    uploadMode?: boolean;
    imageSrc?: string;
    onImageSubmit?: (imageData: string) => void;
    isImageLoading?: boolean;
    isEditorOpen?: boolean;
}
declare const PolaroidPhoto: React.FC<Props>;
export default PolaroidPhoto;
