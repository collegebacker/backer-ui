import React from "react";

const useOutsideClick = (
  ref: React.MutableRefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as any)) {
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
