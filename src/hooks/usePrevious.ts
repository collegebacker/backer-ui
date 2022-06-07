import React from "react";

const usePrevious = (value: any) => {
  const ref: any = React.useRef();

  React.useEffect(() => {
    ref.current = JSON.parse(JSON.stringify(value));
  }, [value]);

  return ref.current;
};

export default usePrevious;