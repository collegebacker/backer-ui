import React from 'react'
import Input, { InputProps } from '../Input'

const ZipInput = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
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
} as Partial<InputProps>

export default ZipInput
