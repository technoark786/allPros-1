import { Button, Grid, Radio, FormLabel, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Field, Form } from 'formik';
import { TextField, RadioGroup } from 'formik-material-ui';
import React from 'react';
import { useRouter } from 'next/router';
import FormikSelect from '../formik/FormikSelect';
import { countryData } from '../../lib/country-data';
import DatePicker from '../../components/pickers';
import FormikRadioGroup from '../formik/FormikRadioGroup';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    margin: {
        margin: '60px 0',
    },
    buttonGroup: {
        display: 'flex',
    },
    button: {
        marginTop: 20,
        marginRight: 8,
        width: 120,
    },
    buttonMarginRight: {
        marginRight: theme.spacing(1),
    },
}));

function UserForm() {

    const classes = useStyles();
    const router = useRouter();

    function handleCancel() {
        router.back();
    }
    return (

        <Form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Field
                        name="firstName"
                        component={TextField}
                        label="First Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="lastName"
                        component={TextField}
                        label="Last Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="email"
                        component={TextField}
                        label="Email"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="password"
                        type="password"
                        component={TextField}
                        label="Password"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        component={FormikSelect}
                        name="country"
                        textField="value"
                        valueField="value"
                        options={countryData}
                        fullWidth
                        label="Country"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="state"
                        component={TextField}
                        label="State"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="city"
                        component={TextField}
                        label="City"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="zipCode"
                        component={TextField}
                        label="Zipcode"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="dateOfBirth"
                        component={DatePicker}
                        label="Date of Birth"
                        format="dd/MM/yyyy"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="mobile"
                        component={TextField}
                        label="Mobile"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="systemRole"
                        component={TextField}
                        label="System Role"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="organisationRole"
                        component={TextField}
                        label="Organisation Role"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="status"
                        label="Status"
                        options={["Active", "Inactive"]}
                        component={FormikRadioGroup}
                    />
                </Grid>
            </Grid>

            <div className={classes.buttonGroup}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Save
                </Button>
                <Button
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                    onClick={handleCancel}
                >
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

export default UserForm;


