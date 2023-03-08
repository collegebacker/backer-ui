import React from 'react'
import Input, { InputProps } from '../Input'

const ZipInput: React.FC<InputProps> = (props) => {
  // RENDER

  return (
    <Input
      {...props}
      cleaveOptions={{
        blocks: [5, 4],
        delimiters: ['-'],
        numericOnly: true
      }}
      pattern='[0-9]*'
    />
  )
}

ZipInput.defaultProps = {
  label: 'Zip code'
} as Partial<InputProps>

export default ZipInput
