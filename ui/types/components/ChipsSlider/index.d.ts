import React from "react";
declare type ItemType = {
    label: string;
    value: any;
    caption?: string;
};
export interface Props {
    containerClassName?: string;
    arrowsClassName?: string;
    items: Array<ItemType>;
    defaultIndex?: number;
    showGuidelines?: boolean;
    cardWidth?: number;
    cardHeight?: number;
    activeCardScale?: number;
    spaceBetween?: number;
    showCaption?: boolean;
    cardFontSize?: number;
    overlayGradientsClassName?: string;
    hideOverlayGradients?: boolean;
    alwaysShowOverlayGradients?: boolean;
    onChange?: (index: number) => void;
}
declare const ChipsSlider: React.FC<Props>;
export default ChipsSlider;
