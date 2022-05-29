import React from "react";
declare type ItemType = {
    label: string;
    caption: string;
};
export interface Props {
    containterClassName?: string;
    arrowsClassName?: string;
    items: Array<ItemType>;
    defaultIndex?: number;
    showGuidelines?: boolean;
    cardWidth?: number;
    cardHeight?: number;
    activeCardScale?: number;
    spaceBetween?: number;
    caption?: boolean;
    cardFontSize?: number;
    onChange?: (index: number) => void;
}
declare const ChipsSlider: React.FC<Props>;
export default ChipsSlider;
