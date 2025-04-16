import type { InputHTMLAttributes } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  ref: React.RefCallback<HTMLInputElement>
}

export function TextInput({ ref, prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input ref={ref} {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
