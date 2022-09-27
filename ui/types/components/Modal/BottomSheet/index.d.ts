import React from "react";
interface Props {
    popupClassName?: string;
    popupContentClassName?: string;
    children: React.ReactNode;
    isMobileBreakpoint: boolean;
    customPaddingsMobile?: string;
    closeOutside?: boolean;
    title?: string;
    hideHeader?: boolean;
    smallTitle?: boolean;
    dataAttrs?: Record<string, string>;
    onCloseClick?: () => void;
}
declare const BottomSheet: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default BottomSheet;
