import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FormikSelect from "../formik/FormikSelect";
import { currencyData, chartofaccountsDropdownData } from "../../lib/mock-data";
import { countryData } from "../../lib/country-data";
import FormikRadioGroup from "../../components/formik/FormikRadioGroup";
// import api from '../../lib/api';

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
    },
    margin: {
        margin: "60px 0",
    },
    buttonGroup: {
        display: "flex",
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

function CandidatesForm() {
    const classes = useStyles();
    const router = useRouter();
    function handleCancel() {
        router.back();
    }

    return (
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="firstName"
                        component={TextField}
                        label="First Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="lastName"
                        component={TextField}
                        label="Last Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="email"
                        component={TextField}
                        label="Email"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="phone"
                        component={TextField}
                        label="Phone Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="address"
                        component={TextField}
                        label="Address"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="managerType"
                        label="Manager Type"
                        options={["BOH Manager", "FOH Manager"]}
                        component={FormikRadioGroup}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="yearsInHospitality"
                        component={TextField}
                        label="How many years have you been in the hospitality industry"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="currentRole"
                        component={TextField}
                        label="What is your current Role"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="yearsOfRoleWithCompany"
                        component={TextField}
                        label="How long have you been with this role/with this company"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="salary"
                        component={TextField}
                        label="What is your current hourly rate or salary"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="authorized"
                        label="Are you authorized to work in US"
                        options={["Yes", "No"]}
                        component={FormikRadioGroup}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="transportationAccess"
                        label="Do you have access to reliable transportation"
                        options={["Yes", "No"]}
                        component={FormikRadioGroup}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="avaiableToWork"
                        component={TextField}
                        label="What days are you available to work"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="HoursPerWeekWork"
                        component={TextField}
                        label="How many hours a week are you wishing to work"
                        fullWidth
                    />
                </Grid><Grid item xs={12}>
                    <Field
                        name="avaiableToWork"
                        component={TextField}
                        label="What is your current hourly rate or salary"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="hearAboutUs"
                        component={TextField}
                        label="How did you hear about us"
                        fullWidth
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

export default CandidatesForm;
