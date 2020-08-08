import React from 'react';
import {
  Button,
  Divider,
  InputAdornment,
  Paper,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import EmailIcon from '@material-ui/icons/Email';
import { useSnackbar } from '../lib/context';
import Link from 'next/link';
import * as yup from 'yup';
import { useState } from 'react';
import api from '../lib/api';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordTitle: {
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
  forgotPasswordButton: {
    marginTop: 12,
    width: 180,
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
});

const validationSchema = yup.object().shape({
  email: yup.string().required('Provide your email address to request a password reset.')
});
function ForgotPasswordForm() {
  const classes = useStyles();

  return (
    <Form>
      <Field
        name="email"
        component={TextField}
        label="Email"
        margin="normal"
        // helperText="Provide your email address to request a password reset."
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <EmailIcon color="secondary" />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Button
        className={classes.forgotPasswordButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Reset Password
    </Button>
    </Form>
  );
}

function ForgotPasswordPage(props) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false);
  const { openSnackbar } = useSnackbar();

  async function handleReset() {
    setSubmit(false);
  }
  async function handleSubmit(values, { resetForm }) {
    try {
      await api.post('authentication/forgotPass', values);
      openSnackbar('info', `Email has been sent to ${values.email}`);
      setEmail(values.email);
      setSubmit(true);
    } catch (error) {
      openSnackbar('error', error.response.data.errors[0]);
      resetForm();
    }
  }
  return (
    <div className={classes.root}>
      <Typography className={classes.logoText} variant="h3">
        Waityme
      </Typography>
      <Paper className={classes.formPaper}>
        {!submit ? (
          <>
            <Typography className={classes.forgotPasswordTitle} variant="h4">
              Forgot Password
        </Typography>
            <Formik
              validationSchema={validationSchema}
              initialValues={{
                email: '',
              }}
              component={ForgotPasswordForm}
              onSubmit={handleSubmit}
            />
            <Divider variant="fullWidth" className={classes.divider} />

            <div className={classes.links}>
              <Link href="/login"><Typography className={classes.link}>Login</Typography></Link>
              {/* <Link href="/resetpassword"><Typography className={classes.link}>Reset Password</Typography></Link> */}
            </div>
          </>
        ) : (
            <>
              <Typography className={classes.forgotPasswordTitle} variant="h4">
                Forgot Password
            </Typography>
              <div className={classes.textMargin}>
                <Typography variant="body1">
                  We have sent a reset password link to <Typography variant="subtitle2" style={{ display: 'inline' }}>{email}</Typography>. please click the reset password link to set your new password.
            </Typography>
              </div>
              <div className={classes.textMargin}>
                <Typography variant="body1">
                  Didn't receive the email yet?
            </Typography>
                <Typography variant="body1">
                  Please check your spam folder, or
            <span onClick={handleReset} className={classes.blueLink}>
                    <Link> resend</Link>
                  </span> the link.
          </Typography>
              </div>
            </>
          )}
      </Paper>
    </div>
  );
}

export default ForgotPasswordPage;