// eslint-disable-next-line no-use-before-define
import React, { FormHTMLAttributes, useRef } from 'react'
import { FormField } from './styles'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

function Form({ children, ...rest }: FormProps): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <FormField ref={formRef} {...rest}>
      {children}
    </FormField>
  )
}

export { Form }
