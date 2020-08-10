import React, { useContext, useEffect, useState, useRef } from "react";
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
import SignatureCanvas from "react-signature-canvas";

function PreviousEmployment(props) {
    // const classes = useStyles();
    const [data, setData] = useContext(DataContext);
    const { openSnackbar } = useSnackbar();
    const router = useRouter();
    let componentRef = useRef();
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
                Previos Employment
            </Typography>
            <Formik initialValues={data} onSubmit={handleSubmit}>
                {({ values, setFieldValue }) => {
                    const addEmployment = () => {
                        const employmentValues = [...values.previosEmployment];
                        employmentValues.push({
                            company: "",
                            phone: "",
                            address: "",
                            supervisor: "",
                            jobTitle: "",
                            startingSalary: "",
                            endingSalary: "",
                            responsibilities: "",
                            experience: "",
                            from: new Date(),
                            to: new Date(),
                        });
                        setFieldValue("previosEmployment", employmentValues);
                    };
                    return (
                        <Form>
                            <Grid container spacing={2}>
                                {values.previosEmployment.map((item, index) => (
                                    <>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].company`}
                                                component={TextField}
                                                label="Company"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].phone`}
                                                component={TextField}
                                                label="Phone"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name={`previosEmployment[${index}].address`}
                                                component={TextField}
                                                label="Address"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].supervisor`}
                                                component={TextField}
                                                label="Supervisor"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].jobTitle`}
                                                component={TextField}
                                                label="Job Title"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].startingSalary`}
                                                component={TextField}
                                                label="Starting Salary"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].endingSalary`}
                                                component={TextField}
                                                label="Ending Salary"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].responsibilities`}
                                                component={TextField}
                                                label="Responsibilities"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].experience`}
                                                component={TextField}
                                                label="Experience"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].from`}
                                                component={DatePicker}
                                                label="From"
                                                fullWidth
                                                format="MM/dd/yyyy"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Field
                                                name={`previosEmployment[${index}].to`}
                                                component={DatePicker}
                                                label="To"
                                                fullWidth
                                                format="MM/dd/yyyy"
                                            />
                                        </Grid>
                                    </>
                                ))}
                                <Grid item xs={12}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={addEmployment}
                                    >
                                        Add Previous Employment
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{ marginBottom: "0.5em" }}
                                        variant="h6"
                                    >
                                        Military Service
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="militaryService.branch"
                                        component={TextField}
                                        label="Branch"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="militaryService.from"
                                        component={DatePicker}
                                        label="From"
                                        fullWidth
                                        format="MM/dd/yyyy"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="militaryService.to"
                                        component={DatePicker}
                                        label="To"
                                        fullWidth
                                        format="MM/dd/yyyy"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="militaryService.rankAtDischarge"
                                        component={TextField}
                                        label="Rank at Discharge"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="militaryService.typeOfDischarge"
                                        component={TextField}
                                        label="Type of Discharge"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="militaryService.other"
                                        component={TextField}
                                        label="Other"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{ marginBottom: "0.5em" }}
                                        variant="h6"
                                    >
                                        Disclaimer and Signature
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        style={{ marginBottom: "0.5em" }}
                                    >
                                        I certify that my answer are true and
                                        complete to the best of my knowledge. If
                                        this application leads to employment, i
                                        understand that false or misleading
                                        information in my application or
                                        interview may result in my release.
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            border:
                                                "32px solid black!important",
                                        }}
                                    >
                                        <SignatureCanvas
                                            penColor="white"
                                            canvasProps={{
                                                width: 600,
                                                height: 200,
                                                className: "sigCanvas",
                                                // border:'20px solid black'
                                                // backgroundColor:'#3f0f3f',
                                            }}
                                            backgroundColor="#1f54bf"
                                            ref={(ref) => {
                                                componentRef = ref;
                                            }}
                                        />
                                    </div>
                                    <Button
                                        onClick={() => componentRef.clear()}
                                    >
                                        Clear
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        name="date"
                                        component={DatePicker}
                                        label="Date"
                                        fullWidth
                                        format="MM/dd/yyyy"
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

export default PreviousEmployment;
