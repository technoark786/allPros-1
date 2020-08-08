import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grow,
    Paper,
    TextField as MuiTextField,
    Typography,
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Layout from "../../../layout";
import api from "../../../lib/api";
import { TextField } from "formik-material-ui";
import { useSnackbar } from "../../../lib/context";
import CircularLoader from "../../../components/loader/CircularLoader";
import JobsList from "../../../components/list/jobsList";
import FormikRadioGroup from "../../../components/formik/FormikRadioGroup";

const useStyles = makeStyles((theme) => ({
    accountPaper: {
        padding: 20,
        margin: "1.4em 0",
        cursor: "pointer",
    },
    title: {
        fontSize: "26px",
        fontWeight: "bold",
    },
    name: {
        fontSize: "18px",
        fontWeight: "normal",
        marginRight: "1em",
        paddingRight: "1em",
        borderRight: "2px solid black",
    },
    address: {
        fontSize: "18px",
        fontWeight: "normal",
        paddingLeft: "1em",
    },
    footer: {
        fontSize: "18px",
        fontWeight: "normal",
        paddingLeft: "1em",
    },
}));

function Jobs() {
    const classes = useStyles();
    const router = useRouter();
    const [data, setData] = useState({
        questionnaireResumeVerification: {
            status: "Approved",
            description: "",
        },
        videoInterview: {
            status: "Approved",
            description: "",
        },
        identificationVerification: {
            status: "Approved",
            description: "",
        },
        drugTest: {
            status: "Approved",
            description: "",
        },
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const { openSnackbar } = useSnackbar();

    useEffect(() => {
        //   const fetchData = async () => {
        //     const { data } = await api.get(`/Members/${router.query.id}`);
        //     setMember(data);
        //   };
        //   fetchData();
    }, [router.query.id]);

    if (!data) {
        return (
            <Layout pageName="Screen Test">
                <CircularLoader />
            </Layout>
        );
    }
    const viewJob = (id) => {
        router.push(`/owners/jobs/view/${id}`);
    };
    return (
        <Layout pageName="Screen Test">
            <Container>
                <Paper className={classes.accountPaper}>
                    <Typography variant="h6" style={{ marginBottom: "0.5em" }}>
                        Questionnaire Resume Verification
                    </Typography>
                    <Formik
                        //   validationSchema={validationSchema}
                        initialValues={data.questionnaireResumeVerification}
                        //   onSubmit={handleUpdate}
                    >
                        {({ values, setFieldValue }) => {
                            console.log("qust values", values);
                            return (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Field
                                                name="status"
                                                label="Status"
                                                options={["Approved", "Reject"]}
                                                component={FormikRadioGroup}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="description"
                                                component={TextField}
                                                label="Description"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            );
                        }}
                    </Formik>
                </Paper>
                <Paper className={classes.accountPaper}>
                    <Typography variant="h6" style={{ marginBottom: "0.5em" }}>
                        Video Interview
                    </Typography>
                    <Formik
                        //   validationSchema={validationSchema}
                        initialValues={data.videoInterview}
                        //   onSubmit={handleUpdate}
                    >
                        {({ values, setFieldValue }) => {
                            console.log("video values", values);
                            return (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Field
                                                name="status"
                                                label="Status"
                                                options={["Approved", "Reject"]}
                                                component={FormikRadioGroup}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="description"
                                                component={TextField}
                                                label="Description"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            );
                        }}
                    </Formik>
                </Paper>
                <Paper className={classes.accountPaper}>
                    <Typography variant="h6" style={{ marginBottom: "0.5em" }}>
                        Identification Verification
                    </Typography>
                    <Formik
                        //   validationSchema={validationSchema}
                        initialValues={data.identificationVerification}
                        //   onSubmit={handleUpdate}
                    >
                        {({ values, setFieldValue }) => {
                            console.log("identification values", values);
                            return (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Field
                                                name="status"
                                                label="Status"
                                                options={["Approved", "Reject"]}
                                                component={FormikRadioGroup}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="description"
                                                component={TextField}
                                                label="Description"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            );
                        }}
                    </Formik>
                </Paper>
                <Paper className={classes.accountPaper}>
                    <Typography variant="h6" style={{ marginBottom: "0.5em" }}>
                        Drug Test
                    </Typography>
                    <Formik
                        //   validationSchema={validationSchema}
                        initialValues={data.drugTest}
                        //   onSubmit={handleUpdate}
                    >
                        {({ values, setFieldValue }) => {
                            console.log("identification values", values);
                            return (
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Field
                                                name="status"
                                                label="Status"
                                                options={["Approved", "Reject"]}
                                                component={FormikRadioGroup}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Field
                                                name="description"
                                                component={TextField}
                                                label="Description"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            );
                        }}
                    </Formik>
                </Paper>
            </Container>
        </Layout>
    );
}

export default Jobs;
