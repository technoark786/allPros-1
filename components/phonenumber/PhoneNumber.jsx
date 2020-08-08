import React from 'react';
import dynamic from 'next/dynamic';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color:'transparent',
        "& button": {
            marginLeft: '-2.5rem',
            marginRight: '-2.8rem',
            color:'transparent',
            "&:hover": {
                backgroundColor: 'transparent!important'
            },
            "&:focus": {
                backgroundColor: 'transparent!important'
            },
            "&:active": {
                backgroundColor: 'transparent!important'
            },
        },
    },
    customDropdown:{
        position: 'fixed',
        zIndex: 1300,
        display: 'flex',
        // top: '26rem',
        // maxHeight: '33rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const MuiPhoneNumber = dynamic(import('material-ui-phone-number'), { ssr: false });
const PhoneNumberInput = ({ form, field, setFieldValue, name, value, props, ...other }) => {
    const currentError = form.touched[field.name] && form.errors[field.name];
    const classes = useStyles();
    return (
        <MuiPhoneNumber
            // preferredCountries={['fr', 'us', 'es', 'gb', 'it', 'se']}
            className={classes.root}
            defaultCountry={'gb'}
            name={name}
            value={value}
            helperText={currentError}
            dropdownClass={classes.customDropdown}
            disabled={form.isSubmitting}
            error={Boolean(currentError)}
            onError={error => {
                if (error !== currentError) {
                    form.setFieldError(field.name, error);
                }
            }}
            onChange={e => {
                //   e = e.replace(/^\+33 0 ?([1-9])/, '+33 $1');
                //   form.setFieldValue(name, e,false);
                setFieldValue(e);
            }}
            {...other} />
    );
};

export default PhoneNumberInput;