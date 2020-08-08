import { Button, Grid, InputAdornment } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/styles';
import { Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
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
        minWidth: 120,
    },
    buttonMarginRight: {
        marginRight: theme.spacing(1),
    },
}));

function ChangePasswordForm() {

    const classes = useStyles();
    const router = useRouter();

    function handleCancel() {
        router.back();
    }

    return (
        <Form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Field
                        name="oldPassword"
                        component={TextField}
                        label="Old Password"
                        margin="normal"
                        InputProps={{ endAdornment: <InputAdornment><LockIcon /></InputAdornment> }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="newPassword"
                        component={TextField}
                        label="New Password"
                        margin="normal"
                        InputProps={{ endAdornment: <InputAdornment><LockIcon /></InputAdornment> }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="confirmPassword"
                        component={TextField}
                        label="Confirm Password"
                        margin="normal"
                        InputProps={{ endAdornment: <InputAdornment><LockIcon /></InputAdornment> }}
                        fullWidth
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
                    Change Password
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

export default ChangePasswordForm;


