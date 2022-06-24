import React from "react";
import Text from "../Text";

import styles from "./styles.module.scss";

export interface Props {
  tabIndex?: number;

  className?: string;
  style?: React.CSSProperties;

  errorMessage?: string;
  length?: number;

  resendText?: string;
  resendTimer?: number;

  onChange?: (event: any) => void;
  onResend?: (event: any) => void;
}

const isMobile = () => {
  return /mobile/i.test(navigator.userAgent);
};

const CodeInput = React.forwardRef<any, Props>((props, ref) => {
  const inputsRefs = React.useRef<HTMLInputElement[]>([]);

  const [nums, setNums] = React.useState(Array(props.length).fill(""));
  const [isInvalid, setIsInvalid] = React.useState(false);

  const [resendTimer, setResendTimer] = React.useState(props.resendTimer);
  const [isInitialTap, setIsInitialTap] = React.useState(true);

  React.useImperativeHandle(ref, () => ({
    reset: (callback: () => void) => {
      setNums(Array(props.length).fill(""));
      setIsInvalid(false);

      if (callback) {
        callback();
      }
    },
    setIsInvalid: (isInvalid: boolean) => {
      setIsInvalid(isInvalid);
    },
  }));

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    if (text) {
      const newNums = text.split("").map((char) => {
        if (char.match(/^[0-9]*$/)) {
          return char;
        }
        return "";
      });

      setNums(newNums);
    }
  };

  // Handle timer
  React.useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [resendTimer]);

  //
  React.useEffect(() => {
    if (!isMobile()) {
      inputsRefs.current[0]?.focus();
    }
  }, []);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // allow only numbers
    if (e.target.value.match(/^[0-9]*$/)) {
      setNums((prev) => {
        const newNums = [...prev];
        newNums[index] = e.target.value;
        return newNums;
      });

      // focus next input
      if (index < props.length - 1 && inputsRefs.current[index].value !== "") {
        inputsRefs.current[index + 1].focus();
      }

      // if last input
      if (
        index === props.length - 1 &&
        inputsRefs.current[index].value !== ""
      ) {
        inputsRefs.current[index].blur();
      }
    }

    if (props.onChange) {
      props.onChange(inputsRefs.current.map((item) => item?.value).join(""));
    }

    // const newNums = [...nums];
    // newNums[index] = e.target.value;
    // setNums(newNums);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // console.log(nums[index]);

    if (event.key == "Backspace") {
      console.log(index, inputsRefs.current[index].value);
      if (index > 0 && inputsRefs.current[index].value === "") {
        inputsRefs.current[index - 1].focus();
      }

      // clear current input
      setNums((prev) => {
        const newNums = [...prev];
        newNums[index] = "";
        return newNums;
      });
    }

    if (event.key === "ArrowLeft") {
      if (index === 0) {
        inputsRefs.current[nums.length - 1]?.focus();
      }
      const prevIndex = index - 1;
      inputsRefs.current[prevIndex]?.focus();
    }

    if (event.key === "ArrowRight") {
      if (index === props.length - 1) {
        inputsRefs.current[0].focus();
      }
      const nextIndex = index + 1;
      inputsRefs.current[nextIndex]?.focus();
    }
  };

  const handleOnFocus = () => {
    if (isInitialTap) {
      setIsInitialTap(false);
      inputsRefs.current[0]?.focus();
    }

    if (isInvalid) {
      setIsInvalid(false);
    }
  };

  const handleResend = (event: React.MouseEvent) => {
    setResendTimer(props.resendTimer);
    setIsInvalid(false);
    setNums(Array(props.length).fill(""));
    inputsRefs.current[0]?.focus();

    props.onResend(event);
  };

  return (
    <div
      className={`${styles.componentWrap} ${props.className} ${
        isInvalid ? styles.error : ""
      }`}
      style={props.style}
    >
      <section
        ref={ref}
        onPaste={handlePaste}
        onFocus={handleOnFocus}
        className={`${isInvalid ? styles.shake : ""}`}
      >
        {Array.from({ length: props.length }).map((_, index) => {
          return (
            <input
              type="number"
              pattern="\d*"
              placeholder="*"
              key={index}
              className={styles.input}
              ref={(input) => {
                inputsRefs.current[index] = input;
              }}
              value={nums[index]}
              onChange={(event) => handleOnChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event, index)}
              // onClick={() => {
              //   inputsRefs.current[index]?.select();
              // }}
              maxLength={1}
            />
          );
        })}
      </section>

      {isInvalid ? (
        <Text
          tag="span"
          className={styles.helperText}
          context="app"
          appStyle="body-caption"
        >
          {props.errorMessage}
        </Text>
      ) : null}

      <Text
        tag="p"
        context="app"
        appStyle="body-main"
        className={styles.resendSection}
      >
        {props.resendText}{" "}
        <a
          className={`${styles.resendLink} ${
            resendTimer > 0 ? styles.resendLink_disabled : ""
          }`}
          onClick={handleResend}
        >
          Resend code
        </a>{" "}
        {resendTimer > 0 ? `(available in ${resendTimer} seconds)` : null}
      </Text>
    </div>
  );
});

CodeInput.displayName = "CodeInput";

CodeInput.defaultProps = {
  className: "",
  isInvalid: false,
  maxLength: 6,
  errorMessage: "Confirmation failed. Please check the code and try again.",
  resendText: "Haven't received?",
  onResend: () => {},
  resendTimer: 60,
} as Partial<Props>;

export default CodeInput;
