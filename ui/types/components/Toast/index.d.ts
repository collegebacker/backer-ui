import React from "react";
export interface ItemProps {
    message: string;
    params?: ToastItemProps;
}
declare const Toast: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default Toast;
