import React from "react";
interface Props {
    popupClassName: string;
    popupContentClassName: string;
    isOpen: boolean;
    closeOutside: boolean;
    title?: string;
    hideHeader?: boolean;
    smallTitle: boolean;
    children: React.ReactNode;
    isMobileBreakpoint: boolean;
    style?: React.CSSProperties;
    onCloseClick?: () => void;
    onCloseDrag?: () => void;
}
declare const BottomSheet: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default BottomSheet;
