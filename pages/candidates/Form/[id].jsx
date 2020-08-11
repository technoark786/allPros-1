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
    AppBar,
    TextField as MuiTextField,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState, useEffect, createContext, useContext } from "react";
import * as yup from "yup";
import Fieldset, { Legend } from "../../../components/fieldset";
import Layout from "../../../layout";
import api from "../../../lib/api";
import { useSnackbar } from "../../../lib/context";
import CandidatesForm from "../../../components/forms/CandidatesForm";
import CircularLoader from "../../../components/loader/CircularLoader";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import TabPanel from "../../../components/tabs/TabPanel";
import ApplicationFormStepper from "../../../components/forms/ApplicationForm";

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

function ViewOwner() {
    const classes = useStyles();
    const router = useRouter();
    const [candidate, setCandidate] = useState({
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "dummyemail@tesdomain.com",
        phone: "+1-832-533-2620",
        managerType: "BOH Manager",
        yearsInHospitality: "",
        currentRole: "",
        yearsOfRoleWithCompany: "",
        salary: "",
        authorized: "Yes",
        transportationAccess: "Yes",
        avaiableToWork: "",
        HoursPerWeekWork: "",
        hearAboutUs: "",
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const { openSnackbar } = useSnackbar();
    const [selectedtab, setSelectedTab] = useState("questionnaire");

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
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
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

    if (!candidate) {
        return (
            <Layout pageName="View Candidate">
                <CircularLoader />
            </Layout>
        );
    }

    return (
        <Layout pageName="View Candidate">
            <AppBar position="static" color="default">
                <Tabs
                    value={selectedtab}
                    onChange={handleTabChange}
                    indicatorColor="secondary"
                    textColor="primary"
                    variant="fullWidth"
                    style={{ backgroundColor: "#1f54bf" }}
                    // centered
                >
                    <Tab
                        value="questionnaire"
                        style={{ color: "white" }}
                        label="Questionnaire Form"
                    />
                    <Tab
                        value="application"
                        style={{ color: "white" }}
                        label="Application Form"
                    />
                </Tabs>
            </AppBar>
            <Container>
                <Paper className={classes.accountPaper}>
                    <TabPanel value={selectedtab} index="questionnaire">
                        <Typography variant="h5">Candidate Details</Typography>
                        <Formik
                            //   validationSchema={validationSchema}
                            initialValues={candidate}
                            //   onSubmit={handleUpdate}
                            component={CandidatesForm}
                        />
                    </TabPanel>
                    <TabPanel value={selectedtab} index="application">
                        <ApplicationFormStepper />
                    </TabPanel>
                </Paper>
            </Container>
        </Layout>
    );
}

export default ViewOwner;
