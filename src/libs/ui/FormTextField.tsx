import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'
import { Control } from "react-hook-form/dist/types";

export interface FormInputProps {
  name: string
  control: Control<any> // eslint-disable-line
  label: string
}

export const FormTextField = ({ name, control, label }: FormInputProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error }}) => (
      <TextField
        helperText={error ? error.message : null}
        size="small"
        error={!!error}
        onChange={onChange}
        value={value}
        fullWidth
        label={label}
        variant="outlined"
      />
    )}
  />
)

export default FormTextField
