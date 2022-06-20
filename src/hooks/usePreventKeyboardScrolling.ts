import { useEffect } from "react";

const usePreventKeyboardScrolling = () => {
  const onKeyDown = (e: { code: string; preventDefault: () => void }) => {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown, false);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
};

export default usePreventKeyboardScrolling;
