import React from "react";
interface ItemProps {
    message: string | React.ReactNode;
    params?: ToastItemProps;
}
declare const ToastItem: React.FC<ItemProps>;
export default ToastItem;
