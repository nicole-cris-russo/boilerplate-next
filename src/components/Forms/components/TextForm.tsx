import React from 'react'
import { LabelError } from './LabelError'

export function TextForm({
  register,
  errors,
  name,
  label,
  required = false,
}: {
  register: any
  errors: any
  name: string
  label: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type="text"
        id={name}
        style={errors[name] && { border: '1px solid red' }}
        {...register(name, {
          required: { message: 'Campo obrigatório', value: required },
        })}
        className="input-text"
      />
      <LabelError
        msg={errors[name]?.message as string}
        hasError={errors[name] as any}
      />
    </div>
  )
}