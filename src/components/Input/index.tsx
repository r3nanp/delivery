/* eslint-disable no-use-before-define */
import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Error, InputField } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

function Input({ name, ...rest }: InputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError
  } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      <InputField
        id={fieldName}
        ref={inputRef}
        onFocus={clearError}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <Error>{error}</Error>}
    </>
  )
}

export { Input }
