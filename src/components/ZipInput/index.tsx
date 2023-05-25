import React from 'react'
import Input, { InputIProps } from '../Input'

const ZipInput = React.forwardRef(
  (props: InputIProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <Input
        {...props}
        cleaveOptions={{
          blocks: [5, 4],
          delimiters: ['-'],
          numericOnly: true,
          delimiterLazyShow: true
        }}
        pattern='[0-9]*'
        ref={ref}
      />
    )
  }
)

ZipInput.displayName = 'ZipInput'

ZipInput.defaultProps = {
  label: 'Zip code',
  name: 'zip'
} as Partial<InputIProps>

export default ZipInput
