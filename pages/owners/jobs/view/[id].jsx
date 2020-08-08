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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Layout from "../../../../layout";
import api from "../../../../lib/api";
import { useSnackbar } from "../../../../lib/context";
import JobsForm from "../../../../components/forms/JobsForm";
import CircularLoader from "../../../../components/loader/CircularLoader";

const useStyles = makeStyles((theme) => ({
    accountPaper: {
        padding: 20,
    },
    margin: {
        margin: "60px 0",
    },
    deleteButton: {
        color: "white",
        backgroundColor: theme.palette.danger.main,
        "&:hover": {
            backgroundColor: theme.palette.danger.main,
        },
    },
    dialogActions: {
        padding: 20,
    },
}));

function ViewJob() {
    const classes = useStyles();
    const router = useRouter();
    const [job, setJob] = useState({
        id: 4,
        restaurentName: "Royal Club",
        address: "Mountain View, California",
        vacancies: "5",
        experience: "2-7 Years",
        salaryType: "Montly",
        jobDesignation: "Sales Manager",
        jobDescription:
            "It is type of sales manager where main task is to manage all the activities related to sales.",
        benefits: "$200 as Provident Fund and 10% Commision",
        role: "Sales Manager",
        industryType: "Sales",
        functionalArea: "Sales",
        employmentType: "Full-time",
        roleCategory: "Sales",
        education:'Master of Business and Accounts(MBA)',
        about:'Well known and popular Company in United States.',
        status: "Active",
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

    function openDialog() {
        setDialogOpen(true);
    }

    function handleDialogClose() {
        setDialogOpen(false);
    }

    // const handleUpdate = async (values, actions) => {
    //   try {
    //     await api.put(`/Members`, values);
    //     openSnackbar('success', 'Member updated.');
    //     router.push('/Members');
    //   } catch (error) {
    //     openSnackbar('error',error.response.data.errors[0]);
    //     actions.setSubmitting(false);
    //   }
    // };

    if (!job) {
        return (
            <Layout pageName="View Job">
                <CircularLoader />
            </Layout>
        );
    }

    return (
        <Layout pageName="View Job">
            <Container>
                <Paper className={classes.accountPaper}>
                    <Typography variant="h5">Job Details</Typography>
                    <Formik
                        //   validationSchema={validationSchema}
                        initialValues={job}
                        //   onSubmit={handleUpdate}
                        component={JobsForm}
                    />
                </Paper>
            </Container>
        </Layout>
    );
}

export default ViewJob;
