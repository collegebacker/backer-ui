import React from "react";
interface Props {
    popupClassName: string;
    popupContentClassName: string;
    isOpen: boolean;
    title?: string;
    smallTitle: boolean;
    children: React.ReactNode;
    customWidth?: number;
    style?: React.CSSProperties;
    onCloseClick?: () => void;
}
declare const Popup: React.FC<Props>;
export default Popup;
