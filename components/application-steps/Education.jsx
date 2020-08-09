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
import DatePicker from "../pickers/DatePicker";
import FormikRadioGroup from "../formik/FormikRadioGroup";

function Education(props) {
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
                Education
            </Typography>
            <Formik initialValues={data} onSubmit={handleSubmit}>
                {({ values, setFieldValue }) => {
                    const addHighSchool = () => {
                        const educationValues = [...values.education];
                        educationValues.push({
                            highSchool: "",
                            address: "",
                            from: new Date(),
                            to: new Date(),
                            graduate: "No",
                        });
                        setFieldValue("education", educationValues);
                    };
                    const addDiploma = () => {
                        const diplomaValues = [...values.diploma];
                        diplomaValues.push({
                            diploma: "",
                            college: "",
                            address: "",
                            from: new Date(),
                            to: new Date(),
                            graduate: "No",
                        });
                        setFieldValue("diploma", diplomaValues);
                    };
                    return (
                        <Form>
                            <Grid container spacing={2}>
                                {values.education.map((item, index) => (
                                    <>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`education[${index}].highSchool`}
                                                component={TextField}
                                                label="High School"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`education[${index}].address`}
                                                component={TextField}
                                                label="Address"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`education[${index}].from`}
                                                component={DatePicker}
                                                label="From"
                                                fullWidth
                                                format="MM/dd/yyyy"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`education[${index}].to`}
                                                component={DatePicker}
                                                label="To"
                                                fullWidth
                                                format="MM/dd/yyyy"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`education[${index}].graduate`}
                                                label="Graduate"
                                                options={["Yes", "No"]}
                                                component={FormikRadioGroup}
                                            />
                                        </Grid>
                                    </>
                                ))}
                                <Grid item xs={12}>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        onClick={addHighSchool}
                                    >
                                        Add High School
                                    </Button>
                                </Grid>
                                {values.diploma.map((item, index) => (
                                    <>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`diploma[${index}].diploma`}
                                                component={TextField}
                                                label="Diploma"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`diploma[${index}].college`}
                                                component={TextField}
                                                label="College"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`diploma[${index}].address`}
                                                component={TextField}
                                                label="Address"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`diploma[${index}].from`}
                                                component={DatePicker}
                                                label="From"
                                                fullWidth
                                                format="MM/dd/yyyy"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`diploma[${index}].to`}
                                                component={DatePicker}
                                                label="To"
                                                fullWidth
                                                format="MM/dd/yyyy"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`diploma[${index}].graduate`}
                                                label="Graduate"
                                                options={["Yes", "No"]}
                                                component={FormikRadioGroup}
                                            />
                                        </Grid>
                                    </>
                                ))}
                                <Grid item xs={12}>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        onClick={addDiploma}
                                    >
                                        Add Diploma
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{ marginBottom: "0.5em" }}
                                        variant="h6"
                                    >
                                        Refrences
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="refrences.fullName"
                                        component={TextField}
                                        label="Full Name"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="refrences.relationship"
                                        component={TextField}
                                        label="Relationship"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="refrences.company"
                                        component={TextField}
                                        label="Company"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="refrences.phone"
                                        component={TextField}
                                        label="Phone"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="refrences.address"
                                        component={TextField}
                                        label="Address"
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

export default Education;
