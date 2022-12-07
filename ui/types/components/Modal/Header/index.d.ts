import React from "react";
interface HeaderProps {
    title?: string;
    smallTitle?: boolean;
    noMaxWidth?: boolean;
    showBackButton?: boolean;
    disableMarginDesktop?: boolean;
    disableMarginMobile?: boolean;
    onBackClick?: () => void;
    onCloseClick: () => void;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
