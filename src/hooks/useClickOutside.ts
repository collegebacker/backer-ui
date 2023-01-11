import React from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<HTMLDivElement>,
  callback: () => void,
  enabled: boolean
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as any) && enabled) {
      // console.log(e.target);
      // e.stopPropagation();
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export default useOutsideClick;
