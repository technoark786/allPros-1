import {
    Button,
    Divider,
    InputAdornment,
    Paper,
    Typography,
    Box,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/styles";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { useRouter } from "next/router";
import React, { useState, Suspense, useEffect } from "react";
import { useAuth } from "../context/authContext";
import api from "../lib/api";
import { CircularLoaderWrapper } from "../components/loader/CircularLoader";
import { useSnackbar } from "../lib/context";
import Link from "next/link";
import logo from "../assets/img/logo.jpg";
import * as yup from "yup";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    loginTitle: {
        textAlign: "center",
    },
    logoText: {
        margin: 20,
    },
    formPaper: {
        // display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        width: "80%",
        maxWidth: 600,
        height: "fit-content",
        padding: 35,
        margin: '0 20px 20px 20px',
    },
    loginButton: {
        marginTop: 12,
        width: 120,
    },
    divider: {
        marginTop: 12,
    },
    links: {
        display: "flex",
        // justifyContent: 'space-between',
        justifyContent: "flex-end",
        marginTop: 8,
    },
    link: {
        textDecoration: "underline",
        cursor: "pointer",
        fontSize: 14,
    },
    busCard: {
        maxWidth: "400px",
        padding: "1em",
        borderRadius: "5px",
        boxShadow: "0 2px 6px 1px #bbbbde",
        color: "white",
        letterSpacing: "1px",
        fontSize: "17px",
        margin: "0 auto 0.5em auto",
        // background: 'linear-gradient(to right,#474775, #6d6d90)',
        backgroundColor: "#3f0f3f",
        cursor: "pointer",
    },
});

const validationSchema = yup.object().shape({
    username: yup.string().required("UserName is required."),
    password: yup.string().required("Password is required."),
});

function LoginForm() {
    const classes = useStyles();

    return (
        <Form>
            <Field
                name="username"
                component={TextField}
                label="Username"
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <PersonIcon color="secondary" />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <Field
                name="password"
                type="password"
                component={TextField}
                label="Password"
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <LockIcon color="secondary" />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <Button
                className={classes.loginButton}
                variant="contained"
                color="primary"
                type="submit"
            >
                Login
            </Button>
        </Form>
    );
}

function LoginPage() {
    const router = useRouter();
    const classes = useStyles();
    // const [state, dispatch] = useAuth();
    const [loading, setLoading] = useState(false);
    const { openSnackbar } = useSnackbar();

    async function handleSubmit(values, { resetForm }) {
        // try {
        //     setLoading(true);
        //     let {
        //         data: { authorizationToken },
        //     } = await api.post('authentication/login', values);
        // dispatch({ type: 'UPDATE_USER_TOKEN', payload: authorizationToken });
        // setBusinesses(business);
        // localStorage.setItem('authToken', authorizationToken);
        // setLoading(false);
        router.push("/dashboard");
        // } catch (error) {
        //     openSnackbar('error', error.response.data.errors[0]);
        //     setLoading(false);
        //     resetForm();
        // }
    }

    return (
        <div className={classes.root}>
            <img src={logo} height="200px" />
            <Paper className={classes.formPaper}>
                <Typography className={classes.loginTitle} variant="h4">
                    All Pros Login
                </Typography>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    component={LoginForm}
                    onSubmit={handleSubmit}
                />
                <Divider variant="fullWidth" className={classes.divider} />

                <div className={classes.links}>
                    {/* <Link href="/signup">
                        <Typography className={classes.link}>
                            Sign Up
                        </Typography>
                    </Link> */}
                    <Link href="/forgotpassword">
                        <Typography className={classes.link}>
                            Forgot Password?
                        </Typography>
                    </Link>
                </div>
            </Paper>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "1rem",
                }}
            >
                <Link href="http://www.kbizzsolutions.com">
                    <a style={{ color: "black", fontWeight: "bold" }}>
                        Powered by: K Business Solutions Inc
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;
