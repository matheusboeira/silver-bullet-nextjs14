import { Input, InputProps as NextUIInputProps } from '@nextui-org/react'
import { forwardRef } from 'react'
import { _useFormField } from './Form'

type InputProps = NextUIInputProps & {
  hasError?: boolean
}

export const _FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ form, ...props }: InputProps, ref) => {
    const { error } = _useFormField()

    return (
      <Input
        labelPlacement="outside"
        errorMessage={error?.message}
        {...props}
        ref={ref}
      />
    )
  }
)
