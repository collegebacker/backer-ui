import React from "react";
interface Props {
    className?: string;
    isOpen: boolean;
    title?: string;
    smallTitle: boolean;
    children: React.ReactNode;
    topShift?: number;
    style?: React.CSSProperties;
    onCloseClick?: () => void;
    onCloseDrag?: () => void;
}
declare const BottomSheet: React.FC<Props>;
export default BottomSheet;
