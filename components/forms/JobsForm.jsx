import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

function JobsForm() {
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
                        name="restaurentName"
                        component={TextField}
                        label="Restaurent Name"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <Field
                        name="address"
                        component={TextField}
                        label="Restaurent Address"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="vacancies"
                        component={TextField}
                        label="How many Vacancies?"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="experience"
                        component={TextField}
                        label="How many Year Of Experience?"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="salaryType"
                        component={TextField}
                        label="Salary Type"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="jobDesignation"
                        component={TextField}
                        label="Job Designation"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="jobDescription"
                        component={TextField}
                        label="Job Description"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="benefits"
                        component={TextField}
                        label="Perks and Benefits"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="role"
                        component={TextField}
                        label="Role"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="industryType"
                        component={TextField}
                        label="Industry Type"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="functionalArea"
                        component={TextField}
                        label="Functional Area"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="employmentType"
                        component={TextField}
                        label="Employment Type"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="roleCategory"
                        component={TextField}
                        label="Role Category"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="education"
                        component={TextField}
                        label="Education"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="about"
                        component={TextField}
                        label="About"
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

export default JobsForm;
