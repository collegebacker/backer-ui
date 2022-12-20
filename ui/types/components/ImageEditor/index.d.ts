import React from "react";
export interface Props {
    className?: string;
    imageFile: string | File;
    isOpen?: boolean;
    onSubmit?: (imageFile: string) => void;
    isLoaded?: boolean;
}
declare const ImageEditor: React.FC<Props>;
export default ImageEditor;
