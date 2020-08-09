import React, { useContext, useEffect, useState } from "react";
import {
    handleNext,
    DataContext,
    SkipContext,
    StepContext,
    StepperNavigationButtons,
} from "../forms/ApplicationForm";
import { Button, Grid, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import * as yup from "yup";
import api from "../../lib/api";
import { useSnackbar } from "../../lib/context";
import { useRouter } from "next/router";
import FormikRadioGroup from "../formik/FormikRadioGroup";
import DatePicker from "../pickers/DatePicker";

function ApplicantInformation(props) {
    // const classes = useStyles();
    const [data, setData] = useContext(DataContext);
    const { openSnackbar } = useSnackbar();
    const router = useRouter();
    const [activeStep, setActiveStep] = useContext(StepContext);
    const [skipped, setSkipped] = useContext(SkipContext);
    const handleSubmit = async (values, actions) => {
        await setData({
            ...data,
            ...values,
        });
        actions.setSubmitting(false);
        handleNext(skipped, setSkipped, activeStep, setActiveStep);
    };
    return (
        <div>
            <Typography style={{ marginBottom: "0.5em" }} variant="h6">
                Applicant Information
            </Typography>
            <Formik initialValues={data} onSubmit={handleSubmit}>
                {({ values, setFieldValue }) => {
                    return (
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        name="streetAddress"
                                        component={TextField}
                                        label="Street Address"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="city"
                                        component={TextField}
                                        label="City"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="state"
                                        component={TextField}
                                        label="State"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="zipcode"
                                        component={TextField}
                                        label="Zipcode"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="phone"
                                        component={TextField}
                                        label="Phone"
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
                                        name="dateAvailable"
                                        component={DatePicker}
                                        label="Date Available"
                                        fullWidth
                                        format="MM/dd/yyyy"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="socialSecurityNo"
                                        component={TextField}
                                        label="Social Security Number"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="desiredSalary"
                                        component={TextField}
                                        label="Desired Salary"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="positionAppliedFor"
                                        component={TextField}
                                        label="Position Applied For"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="citizenOfUS"
                                        label="Are you a citizen of United States?"
                                        options={["Yes", "No"]}
                                        component={FormikRadioGroup}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="AuthorizedToWork"
                                        label="If no, are you authorized to work in United States?"
                                        options={["Yes", "No"]}
                                        component={FormikRadioGroup}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="previouslyApplied"
                                        label="Have previously applied for the organization?"
                                        options={["Yes", "No"]}
                                        component={FormikRadioGroup}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="previouslyAppliedText"
                                        component={TextField}
                                        label="If yes, when?"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="convictedOfFelony"
                                        label="Have you ever convicted of felony?"
                                        options={["Yes", "No"]}
                                        component={FormikRadioGroup}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="convictedOfFelonyText"
                                        component={TextField}
                                        label="If yes, explain."
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StepperNavigationButtons />
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default ApplicantInformation;
