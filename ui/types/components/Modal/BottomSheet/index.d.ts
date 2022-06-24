import React from "react";
interface Props {
    className?: string;
    isOpen: boolean;
    closeOutside: boolean;
    title?: string;
    smallTitle: boolean;
    children: React.ReactNode;
    topShift?: number;
    isMobileBreakpoint: boolean;
    style?: React.CSSProperties;
    onCloseClick?: () => void;
    onCloseDrag?: () => void;
}
declare const BottomSheet: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default BottomSheet;
