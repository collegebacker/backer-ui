import React from "react";
declare type ItemType = {
    label: string;
    value: any;
};
export interface Props {
    className?: string;
    defaultIndex?: number;
    items: Array<ItemType>;
    onChange?: (index: number) => void;
}
declare const ChipsSelector: React.FC<Props>;
export default ChipsSelector;
