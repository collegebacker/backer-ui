import React from "react";
export interface Props {
    className?: string;
    items: Array<{
        label: string;
        icon?: IconTypes;
        onClick: () => void;
    }>;
}
declare const ModalButtons: React.FC<Props>;
export default ModalButtons;
