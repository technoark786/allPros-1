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
import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Layout from "../../layout";
import api from "../../lib/api";
import { useSnackbar } from "../../lib/context";
import CircularLoader from "../../components/loader/CircularLoader";
import JobsList from "../../components/list/jobsList";

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
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: "Restaurent Manager",
            name: "HotelStrate",
            address: "Mountain View, California",
            subTitle: "Sales Marketing",
            experience: "2-7 Years",
            status: "Active",
        },
        {
            id: 2,
            title: "Restaurent Manager",
            name: "HotelStrate",
            address: "Mountain View, California",
            subTitle: "Sales Marketing",
            experience: "2-7 Years",
            status: "Active",
        },
        {
            id: 3,
            title: "Restaurent Manager",
            name: "HotelStrate",
            address: "Mountain View, California",
            subTitle: "Sales Marketing",
            experience: "2-7 Years",
            status: "Active",
        },
        {
            id: 4,
            title: "Restaurent Manager",
            name: "HotelStrate",
            address: "Mountain View, California",
            subTitle: "Sales Marketing",
            experience: "2-7 Years",
            status: "Active",
        },
    ]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const { openSnackbar } = useSnackbar();

    useEffect(() => {
        //   const fetchData = async () => {
        //     const { data } = await api.get(`/Members/${router.query.id}`);
        //     setMember(data);
        //   };
        //   fetchData();
    }, [router.query.id]);

    if (!jobs) {
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
        <Layout pageName="View Jobs">
            <Container>
                <JobsList data={jobs} />
            </Container>
        </Layout>
    );
}

export default Jobs;
