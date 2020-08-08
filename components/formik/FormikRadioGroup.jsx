import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from '@material-ui/core/FormHelperText';

const FormikRadioGroup = ({
    field,
    form: { touched, errors },
    name,
    label,
    options,
    ...props
}) => {

    const fieldName = name || field.name;
    return (
        <React.Fragment>
            <RadioGroup {...field} {...props} name={fieldName} style={{ display: 'inline-block' }}>
                <FormLabel component="legend" style={{ textAlign: 'left', marginTop: '1px' }}>{label}</FormLabel>
                {options.map(option => (
                    <FormControlLabel value={option} style={{ color:'rgba(0, 0, 0, 0.54)'}} control={<Radio style={{ color:'rgba(0, 0, 0, 0.54)'}}/>} label={option} />
                ))}
            </RadioGroup>

            {touched[field.name] && errors[field.name] && (
                <FormHelperText style={{ color: 'red' }}>
                    {errors[field.name]}
                </FormHelperText>
            )}
        </React.Fragment>
    );
};

export default FormikRadioGroup;
