import React from "react";
import ReactDOM from "react-dom";

export interface Props {
  isOpen?: boolean;
  zIndex?: number;
  delay?: number;
  text?: string;
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const ActionSheet = React.forwardRef<any, Props>((props, ref) => {
  const pageWrapperRef = React.useRef<HTMLDivElement>(null);
  const actionSheetRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => ({
    open: () => {
      console.log("open");
    },
    close: () => {
      console.log("close");
    },
  }));

  return ReactDOM.createPortal(<div>Hello</div>, document.body);
});

ActionSheet.displayName = "ActionSheet";

ActionSheet.defaultProps = {
  isOpen: false,
  zIndex: 99999,
  delay: 0,
  text: "",
} as Partial<Props>;

export default ActionSheet;
