import React from "react";
interface HeaderProps {
    title?: string;
    smallTitle?: boolean;
    noMaxWidth?: boolean;
    onCloseClick: (e: React.MouseEvent) => void;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
