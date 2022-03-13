import React from "react";
import {Controller} from "react-hook-form";
import {TextField} from "@mui/material";

export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    rules?: any
}

export const FormTextField = ({name, control, label, rules}: FormInputProps) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({
                     field: {onChange, value},
                     fieldState: {error},
                     formState,
                 }) => (
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
);

export default FormTextField;