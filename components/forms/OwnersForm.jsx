import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FormikSelect from "../formik/FormikSelect";
import { currencyData, chartofaccountsDropdownData } from "../../lib/mock-data";
import { countryData } from "../../lib/country-data";
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

function OwnersForm() {
    const classes = useStyles();
    const router = useRouter();
    const businessType = [
        { value: "Fine Dinning" },
        { value: "Casual Dinning" },
        { value: "Upscale Casual" },
        { value: "Quick Serve" },
        { value: "Fast Food" },
        { value: "Catering & Events" },
        { value: "Bar or Nightclub" },
        { value: "Cafe/Coffee House Dell" },
        { value: "Buffet" },
    ];

    function handleCancel() {
        router.back();
    }

    return (
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="restaurentName"
                        component={TextField}
                        label="Restaurent Name"
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
                        name="contactNo"
                        component={TextField}
                        label="Contact Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="mobileNo"
                        component={TextField}
                        label="Mobile Number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="duration"
                        component={TextField}
                        label="How long in business"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="hours"
                        component={TextField}
                        label="Hours of operation"
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
                <Grid item xs={12} sm={6}>
                    <Field
                        component={FormikSelect}
                        name="businessType"
                        textField="value"
                        valueField="value"
                        options={businessType}
                        fullWidth
                        label="Business Type"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="quickServe"
                        component={TextField}
                        label="Quick Serve"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="quickServe"
                        component={TextField}
                        label="Estimated Sales Volume"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="quickServe"
                        component={TextField}
                        label="Positions that are staffed"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="quickServe"
                        component={TextField}
                        label="FOH"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="quickServe"
                        component={TextField}
                        label="Manager"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="quickServe"
                        component={TextField}
                        label="Wages"
                        fullWidth
                    />
                </Grid>
                {/* <Grid item xs={6}>
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
                </Grid>*/}
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

export default OwnersForm;
