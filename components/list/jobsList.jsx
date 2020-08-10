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
import DeleteIcon from "@material-ui/icons/Delete";
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Layout from "../../layout";
import api from "../../lib/api";
import { useSnackbar } from "../../lib/context";
import OwnersForm from "../../components/forms/OwnersForm";
import CircularLoader from "../../components/loader/CircularLoader";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme) => ({
    accountPaper: {
        padding: 20,
        margin: "1.4em 0",
        cursor: "pointer",
    },
    title: {
        fontSize: "26px",
        fontWeight: "bold",
        // color:"#1f54bf",
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

function JobsList({ data }) {
    const classes = useStyles();
    const router = useRouter();
    const { openSnackbar } = useSnackbar();

    if (!data) {
        return (
            <Layout pageName="View Jobs">
                <CircularLoader />
            </Layout>
        );
    }
    const viewJob = (id) => {
        router.push(`/owners/jobs/view/${id}`);
    };
    return (
        <div>
            {data.map((item) => (
                <Paper
                    className={classes.accountPaper}
                    onClick={() => viewJob(item.id)}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography className={classes.title}>
                                {item.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography className={classes.name}>
                                {item.title}
                            </Typography>
                            <LocationOnIcon
                            // style={{ color: "#1f54bf" }}
                            />
                            <Typography className={classes.address}>
                                {item.address}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                <AcUnitIcon 
                                // style={{ color: "#1f54bf" }} 
                                />
                                <Typography className={classes.footer}>
                                    {item.title}, {item.subTitle}
                                </Typography>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                <WorkIcon 
                                // style={{ color: "#1f54bf" }} 
                                />
                                <Typography className={classes.address}>
                                    {item.experience}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
}

export default JobsList;
