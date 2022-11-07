import React from "react";
export interface Props {
    isOpen?: boolean;
    popupClassName?: string;
    popupContentClassName?: string;
    title?: string;
    smallTitle?: boolean;
    hideHeader?: boolean;
    children: React.ReactNode;
    customWidth?: number;
    minHeight?: string;
    customPaddings?: string;
    customPaddingsMobile?: string;
    isBottomSheet?: boolean;
    closeOutside?: boolean;
    dataAttrs?: Record<string, string>;
    maxSheetHeight?: string;
    showBackButton?: boolean;
    onBackClick?: () => void;
    onCloseClick?: () => void;
    animateSize?: (width: number, height: number) => void;
}
declare const Modal: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default Modal;
