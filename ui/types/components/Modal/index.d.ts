import React from "react";
export interface Props {
    isOpen?: boolean;
    popupClassName?: string;
    popupContentClassName?: string;
    title?: string;
    smallTitle?: boolean;
    children: React.ReactNode;
    customWidth?: number;
    isBottomSheet?: boolean;
    closeOutside?: boolean;
    onCloseClick?: () => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default Modal;
