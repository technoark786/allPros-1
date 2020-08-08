import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes, { exact } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    groupLabel:{
        fontWeight:'bold',
        color:'black'
    }
}));

// Example: {header: "T", title: "The Shawshank Redemption", year: 1994}

function FormikAutocomplete({
    field,
    options,
    textField,
    textField2,
    valueField,
    fullWidth,
    label,
    form: { touched, errors, setFieldValue, values,...formRest },
    parser,
    header,
    ...props
}) {
    const classes = useStyles();
    const hasError = !!(touched[field.name] && errors[field.name]);

    let text = options.find(opts => opts.id === values[valueField])
        ? options.find(opts => opts.id === values[valueField]).name
        : null;

    return (
        <FormControl
            className={classes.formControl}
            fullWidth={fullWidth}
            error={hasError}
        >
            <Autocomplete
                id="grouped-demo"
                options={options}
                groupBy={option => option[header]}
                getOptionLabel={option => option[textField]}
                onChange={(a, values) => {
                    if (values !== null) {
                        setFieldValue(field.name, values.id);
                    } else {
                        setFieldValue(field.name, '');
                    }
                }}
                classes={{groupLabel:classes.groupLabel}}
                disableClearable
                renderInput={params => {
                    console.log(params)
                    return (
                        <TextField
                            {...params}
                            {...field}
                            inputProps={{
                                ...params.inputProps,
                                value: text,
                            }}
                            // name={field.name}
                            label={label}
                            fullWidth
                        />
                    );
                }}
            />
            {touched[field.name] && errors[field.name] && (
                <FormHelperText style={{ color: 'red' }}>
                    {errors[field.name]}
                </FormHelperText>
            )}
        </FormControl>
    );
}

export default FormikAutocomplete;
