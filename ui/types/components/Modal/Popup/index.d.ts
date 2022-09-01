import React from "react";
interface Props {
    popupClassName: string;
    popupContentClassName: string;
    customPaddings?: string;
    isOpen: boolean;
    title?: string;
    hideHeader?: boolean;
    smallTitle: boolean;
    children: React.ReactNode;
    customWidth?: number;
    style?: React.CSSProperties;
    closeOutside: boolean;
    isMobileBreakpoint: boolean;
    onCloseClick?: () => void;
}
declare const Popup: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default Popup;
