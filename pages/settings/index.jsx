import {
    Box,
    Container,
    IconButton,
    Typography,
    Paper,
    Grid,
    TextField,
    Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { useRouter } from 'next/router';
import React from 'react';
import { Table } from '../../components/tables';
import Layout from '../../layout';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../lib/api';
import CircularLoader from '../../components/loader/CircularLoader';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/styles';
import FormikSelect from '../../components/formik/FormikSelect';
import { format } from 'date-fns';
import { useConfig } from '../../context/globalSettings';
import { useSnackbar } from '../../lib/context';

function SettingsPage() {
    const router = useRouter();
    const [settings, setSettings] = useState();
    const [config, setConfig] = useConfig();

    const { openSnackbar } = useSnackbar();

    const classes = useStyles();
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { data } = await api.get('/settings', {
    //             headers: {
    //                 Authorization: localStorage.getItem('authToken'),
    //             },
    //         });
    //         setSettings(data);
    //     };
    //     fetchData();
    // }, []);

    // if (!settings) {
    //     return (
    //         <Layout pageName="Settings">
    //             <CircularLoader />
    //         </Layout>
    //     );
    // }

    let initialValues = { dateFormat: config.dateFormat };

    return (
        <Layout pageName="Settings">
            {/* <Container>
                <Box padding={3} clone>
                    <Paper>
                        <Formik
                            // validationSchema={validationSchema}
                            initialValues={initialValues}
                            onSubmit={async values => {
                                try {
                                    await api.post('settings', {
                                        ...settings,
                                        ...values,
                                    });
                                    setConfig({
                                        ...config,
                                        dateFormat: values.dateFormat,
                                    });
                                    openSnackbar('success','Your settings have been updated.')
                                } catch (error) {
                                    openSnackbar('error','Could not update settings.')
                                }
                            }}
                            // component={SettingsForm}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Field
                                            component={FormikSelect}
                                            name="dateFormat"
                                            textField="pattern"
                                            valueField="pattern"
                                            options={settings.formatList}
                                            fullWidth
                                            label="Date Format"
                                            parser={value =>
                                                format(new Date(), value)
                                            }
                                        />
                                    </Grid>
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
                                        // onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Form>
                        </Formik>
                    </Paper>
                </Box>
            </Container> */}
        </Layout>
    );
}

export default SettingsPage;

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    margin: {
        margin: '60px 0',
    },
    buttonGroup: {
        display: 'flex',
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
