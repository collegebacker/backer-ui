import React from "react";
export interface Props {
    className?: string;
    imageFile: string | File;
    isOpen?: boolean;
    onSubmit?: (imageData: string) => void;
    onClose?: () => void;
}
declare const ImageEditor: React.FC<Props>;
export default ImageEditor;
