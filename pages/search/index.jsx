import React from "react";
import Layout from "../../layout";
import DatePicker from "../../components/pickers/DatePicker";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import FormikSelect from "../../components/formik/FormikSelect";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { useSnackbar } from "../../lib/context";
// import { ButtonGroup } from '../../components/buttons';
import { Button, Container, Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        //   background: "blue",
        color: "black",
        fontSize: "15px",
        fontWeight: 500,
    },
    icon: {
        color: "black",
    },
    dialogContent: {
        width: "600px",
        maxWidth: "720px",
    },
    header: {
        color: "black",
        fontSize: "15px",
        fontWeight: "bold",
    },
    value: {
        color: "black",
        fontSize: "15px",
    },
}));

const validationSchema = yup.object().shape({
    comparison: yup.string().required("Comparison is required."),
    search: yup.string().required("Search is required."),
    value: yup.string().required("Value is required."),
});
function Search(props) {
    const classes = useStyles();
    const router = useRouter();
    const { openSnackbar } = useSnackbar();
    const handleSubmit = async (values, actions) => {
        // try {
        //     const { data } = await api.post('/loads/search', values);
        //     setLoads(data);
        //     actions.setSubmitting(false);
        // } catch (error) {
        //     if (
        //         error.response !== undefined &&
        //         error.response.data !== null &&
        //         error.response.data.errors.length !== 0
        //     ) {
        //         openSnackbar('error', error.response.data.errors[0]);
        //         actions.setSubmitting(false);
        //     } else {
        //         openSnackbar('error', error.message);
        //         actions.setSubmitting(false);
        //     }
        // }
    };
    const handleReset = () => {
        // actions.resetForm();
        // fetchData();
    };
    return (
        <Layout>
            <Formik
                // validationSchema={validationSchema}
                initialValues={{
                    feeStatus: "",
                    levelOfStudy: "",
                    attandanceMode: "",
                    startDate: new Date(),
                    awardType: "",
                }}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, values, ...rest }) => {
                    return (
                        <Form>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Field
                                        component={FormikSelect}
                                        name="feeStatus"
                                        // textField="text"
                                        classes={{
                                            root: classes.root,
                                            icon: classes.icon,
                                        }}
                                        // variant="outlined"
                                        size="small"
                                        // valueField="value"
                                        // style={{
                                        //     marginRight: "2em",
                                        // }}
                                        options={[]}
                                        fullWidth
                                        label="----Select Option----"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Field
                                        component={FormikSelect}
                                        name="levelOfStudy"
                                        // textField="text"
                                        classes={{
                                            root: classes.root,
                                            icon: classes.icon,
                                        }}
                                        // variant="outlined"
                                        size="small"
                                        // style={{
                                        //     marginRight: "2em",
                                        // }}
                                        // valueField="value"
                                        options={[]}
                                        fullWidth
                                        label="----Select Option----"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Field
                                        component={FormikSelect}
                                        name="attandanceMode"
                                        // textField="text"
                                        classes={{
                                            root: classes.root,
                                            icon: classes.icon,
                                        }}
                                        // style={{
                                        //     marginRight: "2em",
                                        // }}
                                        // variant="outlined"
                                        size="small"
                                        // valueField="value"
                                        options={[]}
                                        fullWidth
                                        label="----Select Option----"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Field
                                        name="startDate"
                                        label="Date"
                                        fullWidth
                                        format="MM/dd/yyyy"
                                        // style={{
                                        //     marginRight: "2em",
                                        // }}
                                        component={DatePicker}
                                        value={values.startDate}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Field
                                        component={FormikSelect}
                                        name="awardType"
                                        // textField="text"
                                        classes={{
                                            root: classes.root,
                                            icon: classes.icon,
                                        }}
                                        // variant="outlined"
                                        size="small"
                                        // valueField="value"
                                        // style={{
                                        //     marginRight: "2em",
                                        // }}
                                        options={[]}
                                        fullWidth
                                        label="----Select Option----"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        // style={{ marginTop: "0.5em" }}
                                    >
                                        Search
                                    </Button>
                                    {/* <Button
                                        variant="outlined"
                                        color="primary"
                                        type="reset"
                                        onClick={handleReset}
                                        style={{
                                            // marginTop: "0.7em",
                                            // width: "150px",
                                            marginLeft:'0.5em'
                                        }}
                                    >
                                        Clear Filter
                                    </Button> */}
                                </Grid>
                            </Grid>
                        </Form>
                    );
                }}
            </Formik>
        </Layout>
    );
}

export default Search;
