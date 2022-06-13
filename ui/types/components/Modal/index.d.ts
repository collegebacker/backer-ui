import React from "react";
export interface Props {
    className?: string;
    isOpen?: boolean;
    popupClassName?: string;
    popupContentClassName?: string;
    title?: string;
    smallTitle?: boolean;
    children: React.ReactNode;
    customWidth?: number;
    isBottomSheet?: boolean;
    onCloseClick?: () => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default Modal;
