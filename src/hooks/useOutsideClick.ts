import React from "react";

const useOutsideClick = (ref: React.MutableRefObject<HTMLDivElement> , callback: () => void ) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as any)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;