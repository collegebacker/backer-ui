import React from "react";
interface Props {
    popupClassName?: string;
    popupContentClassName?: string;
    customPaddings?: string;
    customPaddingsMobile?: string;
    children: React.ReactNode;
    isMobileBreakpoint: boolean;
    title?: string;
    minHeight?: string;
    hideHeader?: boolean;
    smallTitle?: boolean;
    customWidth?: number;
    closeOutside?: boolean;
    dataAttrs?: Record<string, string>;
    onCloseClick?: () => void;
    showBackButton?: boolean;
    onBackClick?: () => void;
}
declare const Popup: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default Popup;
