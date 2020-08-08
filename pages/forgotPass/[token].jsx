import React, { useState } from 'react';
import {
  Button,
  Divider,
  InputAdornment,
  Paper,
  Typography,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { useRouter } from 'next/router';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { useSnackbar } from '../../lib/context';
import Link from 'next/link';
import * as yup from 'yup';
import api from '../../lib/api';
import logo from '../../assets/img/logo.jpg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPasswordTitle: {
    textAlign: 'center',
  },
  logoText: {
    margin: 20,
  },
  formPaper: {
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: 600,
    height: 'fit-content',
    padding: 35,
    margin: 20,
  },
  resetPasswordButton: {
    marginTop: 12,
    width: 120,
  },
  divider: {
    marginTop: 12,
  },
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: 14,
  },
  blueLink: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: 14,
    color: 'blue'
  },
  textMargin: {
    marginTop: 16,
  },
  busCard: {
    maxWidth: '400px',
    padding: '1em',
    borderRadius: '5px',
    boxShadow: '0 2px 6px 1px #bbbbde',
    color: 'white',
    letterSpacing: '1px',
    fontSize: '17px',
    margin: '0 auto 0.5em auto',
    backgroundColor: '#4BB543',
  },
});

const validationSchema = yup.object().shape({
  email: yup.string().required('Provide your email address.'),
  password: yup.string().required('Provide your new password.'),
  confirmPassword: yup.string().required('Retype your new password.')
});
function ResetPasswordForm() {
  const classes = useStyles();

  return (
    <Form>
      <Field
        name="email"
        component={TextField}
        label="Email"
        margin="normal"
        // helperText="Please provide your email address to request a password reset."
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <EmailIcon color="secondary" />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Field
        name="password"
        type="password"
        component={TextField}
        label="New Password"
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
      <Field
        name="confirmPassword"
        type="password"
        component={TextField}
        label="Confirm New Password"
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
        className={classes.resetPasswordButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Reset
    </Button>
    </Form>
  );
}

function ResetPasswordPage(props) {

  const classes = useStyles();
  const router = useRouter();
  const [reset, setReset] = useState(false);
  console.log("router", router.query.token)
  const { openSnackbar } = useSnackbar();

  async function handleSubmit(values, { resetForm }) {
    const data = {
      confirmPassword: values.confirmPassword,
      email: values.email,
      password: values.password,
      token: router.query.token
    }
    try {
      await api.post('authentication/forgotPass/check', data);
      openSnackbar('success', `Your password has been reset successfully.`);
      setReset(true);
    } catch (error) {
      openSnackbar('error', error.response.data.errors[0]);
      resetForm();
    }
  }
  return (
    <div className={classes.root}>

      <img src={logo} height="200px" />

      <Paper className={classes.formPaper}>
        {!reset ? (
          <>
            <Typography className={classes.resetPasswordTitle} variant="h4">
              Reset Password
            </Typography>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                email: '',
                password: '',
                confirmPassword: ''
              }}
              component={ResetPasswordForm}
              onSubmit={handleSubmit}
            />
            <Divider variant="fullWidth" className={classes.divider} />

            <div className={classes.links}>
              <Link href="/login"><Typography className={classes.link}>Login</Typography></Link>
              <Link href="/forgotpassword"><Typography className={classes.link}>Resend Link</Typography></Link>
            </div>
          </>
        ) : (
            <>
              <div>
                <Typography className={classes.resetPasswordTitle} variant="h4">
                  Password Reset Successful
            </Typography>
              </div>
              <div className={classes.textMargin}>
                <Box marginTop="1em">
                  <div className={classes.busCard}>
                    <Typography variant="h6">
                    You've Successfully updated your password. You can now sign in with your new password.
                    </Typography>
                </div>
                </Box>
                {/* <Typography variant="subtitle1" style={{ display: 'flex', justifyContent: 'center' }}>You can now sign in with your new password.</Typography> */}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Button
                  className={classes.resetPasswordButton}
                  variant="contained"
                  color="primary"
                  onClick={() => { router.push('/login') }}
                >
                  Sign in
                </Button>
              </div>
            </>
          )}
      </Paper>
    </div>
  );
}

export default ResetPasswordPage;