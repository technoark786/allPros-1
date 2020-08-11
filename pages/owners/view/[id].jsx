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
import Fieldset, { Legend } from "../../../components/fieldset";
import Layout from "../../../layout";
import api from "../../../lib/api";
import { useSnackbar } from "../../../lib/context";
import OwnersForm from "../../../components/forms/OwnersForm";
import CircularLoader from "../../../components/loader/CircularLoader";

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
    const [owner, setOwner] = useState({
        id: 4,
        restaurentName: "Royal Club",
        email: "royal@club.com",
        contactNo: "7893849894",
        businessType: "Bar or Nightclub",
        mobileNo: "898432432",
        address: "",
        duration: "4 Year",
        hours: "8 Hours",
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

    if (!owner) {
        return (
            <Layout pageName="View Owner">
                <CircularLoader />
            </Layout>
        );
    }

    return (
        <Layout pageName="View Owner">
            <Dialog
                open={dialogOpen}
                onClose={handleDialogClose}
                TransitionComponent={Grow}
            >
                <DialogTitle>Verification</DialogTitle>

                <DialogContent>
                    <MuiTextField label="OTP" fullWidth />
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button
                        variant="contained"
                        className={classes.deleteButton}
                        startIcon={<DeleteIcon />}
                        // onClick={handleDelete}
                    >
                        Confirm
                    </Button>

                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={handleDialogClose}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <Container>
                <Paper className={classes.accountPaper}>
                    <Typography variant="h5">Owner Details</Typography>

                    <Formik
                        //   validationSchema={validationSchema}
                        initialValues={owner}
                        //   onSubmit={handleUpdate}
                        component={OwnersForm}
                    />
                    {/* <Divider variant="middle" style={{ margin: "50px 0" }} /> */}

                    {/* <div>
                        <Fieldset color="danger">
                            <Legend>
                                <Typography variant="h5">
                                    Danger Zone
                                </Typography>
                            </Legend>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography style={{ whiteSpace: "pre-line" }}>
                                    Click the button below to delete Member
                                    account.
                                    {"\n"}
                                    This action cannot be undone.
                                    {"\n"}
                                    ALL Member DATA WILL BE PERMANENTLY DELETED.
                                </Typography>
                                <Button
                                    style={{ marginTop: 20 }}
                                    className={classes.deleteButton}
                                    variant="contained"
                                    color="primary"
                                    startIcon={<DeleteIcon />}
                                    onClick={openDialog}
                                >
                                    Delete Member
                                </Button>
                            </div>
                        </Fieldset>
                    </div> */}
                </Paper>
            </Container>
        </Layout>
    );
}

export default ViewOwner;
