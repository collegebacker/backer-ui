import React from 'react'
import styles from './styles.module.scss'

export interface Props {
  tabIndex?: number

  className?: string
  style?: React.CSSProperties

  isInvalid?: boolean
  errorMessage?: string
  length?: number

  resendText?: string
  resendTimer?: number

  onChange?: (nums: string) => void
  onFocus?: (nums: string) => void
  onResend?: (event: any) => void
}

const CodeInput = React.forwardRef<any, Props>((props, ref) => {
  const inputsRefs = React.useRef<HTMLInputElement[]>([])

  const [nums, setNums] = React.useState(Array(props.length).fill(''))

  const [resendTimer, setResendTimer] = React.useState(props.resendTimer)
  const [isInitialTap, setIsInitialTap] = React.useState(false)

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')

    if (text) {
      const newNums = text.split('').map((char) => {
        if (char.match(/^[0-9]*$/)) {
          return char
        }
        return ''
      })

      if (props.onChange) {
        props.onChange(newNums.join(''))
      }

      setNums(newNums)
    }
  }

  // Handle timer
  React.useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer(resendTimer - 1)
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [resendTimer])

  //
  React.useEffect(() => {
    if (inputsRefs.current[0]) {
      inputsRefs.current[0].focus()
    }
  }, [inputsRefs.current, inputsRefs.current[0]])

  const findNewCharacter = (currentVal: string, newVal: string) => {
    const newNums = currentVal
      .split('')
      .map((char) => {
        if (char === newVal) {
          return ''
        }
        return char
      })
      .join('')

    return newNums !== '' ? newNums : newVal
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // allow only numbers
    if (e.target.value.match(/^[0-9]*$/)) {
      // find new number in the array
      const cleanedVal = findNewCharacter(e.target.value, nums[index])

      setNums((prev) => {
        const newNums = [...prev]
        newNums[index] = cleanedVal
        return newNums
      })

      // focus next input
      if (index < props.length - 1 && inputsRefs.current[index].value !== '') {
        inputsRefs.current[index + 1].focus()
      }

      // if last input
      if (
        index === props.length - 1 &&
        inputsRefs.current[index].value !== ''
      ) {
        inputsRefs.current[index].blur()
      }
    }
  }

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key == 'Backspace') {
      // console.log(index, inputsRefs.current[index].value);

      if (index > 0 && inputsRefs.current[index].value === '') {
        inputsRefs.current[index - 1].focus()
      }

      if (index === 0 && inputsRefs.current[index].value === '') {
        inputsRefs.current[index].focus()
      }

      // clear current input and handle onChange
      setNums((prev) => {
        const newNums = [...prev]
        newNums[index] = ''

        if (props.onChange) {
          props.onChange(newNums.join(''))
        }

        return newNums
      })
    }

    if (event.key === 'ArrowLeft') {
      if (index === 0) {
        inputsRefs.current[nums.length - 1]?.focus()
      }
      const prevIndex = index - 1
      inputsRefs.current[prevIndex]?.focus()
    }

    if (event.key === 'ArrowRight') {
      if (index === props.length - 1) {
        inputsRefs.current[0].focus()
      }
      const nextIndex = index + 1
      inputsRefs.current[nextIndex]?.focus()
    }
  }

  const handleOnFocus = () => {
    if (!isInitialTap) {
      setIsInitialTap(true)
      inputsRefs.current[0]?.focus()
    }

    if (props.onFocus) {
      props.onFocus(nums.join(''))
    }
  }

  const handleResend = (event: React.MouseEvent) => {
    setResendTimer(props.resendTimer)
    // setIsInvalid(false);
    setNums(Array(props.length).fill(''))
    inputsRefs.current[0]?.focus()

    props.onResend(event)
  }

  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(nums.join(''))
    }
  }, [nums])

  React.useEffect(() => {
    console.log('CodeInput', props.isInvalid)
  }, [props.isInvalid])

  return (
    <div
      className={`${styles.componentWrap} ${props.className} ${
        props.isInvalid ? styles.error : ''
      }`}
      style={props.style}
    >
      <section
        ref={ref}
        onPaste={handlePaste}
        onFocus={handleOnFocus}
        className={`${props.isInvalid ? styles.shake : ''}`}
      >
        {Array.from({ length: props.length }).map((_, index) => {
          return (
            <input
              type='number'
              pattern='\d*'
              placeholder='*'
              key={index}
              className={styles.input}
              ref={(input) => {
                inputsRefs.current[index] = input
              }}
              value={nums[index]}
              onChange={(event) => handleOnChange(event, index)}
              onKeyDown={(event) => handleKeyPress(event, index)}
              maxLength={1}
            />
          )
        })}
      </section>

      {props.isInvalid ? (
        <span className={`typo-app-body-caption ${styles.helperText}`}>
          {props.errorMessage}
        </span>
      ) : null}

      <p className={`typo-app-body-main ${styles.resendSection}`}>
        {props.resendText}{' '}
        <a
          className={`${styles.resendLink} ${
            resendTimer > 0 ? styles.resendLink_disabled : ''
          }`}
          onClick={handleResend}
        >
          Resend code
        </a>{' '}
        {resendTimer > 0 ? `(available in ${resendTimer} seconds)` : null}
      </p>
    </div>
  )
})

CodeInput.displayName = 'CodeInput'

CodeInput.defaultProps = {
  className: '',
  isInvalid: false,
  maxLength: 6,
  errorMessage: 'Confirmation failed. Please check the code and try again.',
  resendText: "Haven't received?",
  onResend: () => {},
  resendTimer: 60
} as Partial<Props>

export default CodeInput
