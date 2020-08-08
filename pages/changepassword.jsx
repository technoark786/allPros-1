import {
 Container, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import React from 'react';
import api from '../lib/api';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import Layout from '../layout';
import ChangePasswordForm from '../components/forms/ChangePasswordForm';
import { useSnackbar } from '../lib/context';

const validationSchema = yup.object().shape({
  oldPassword: yup.string().required('Old Password is required.'),
  newPassword: yup.string().required('New Password is required.'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Confirm Passwords must match').required('Confirm Password is required.'),
  
});

const initialValues={
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
} 
const useStyles = makeStyles({
  formPaper: {
    padding: 20,
  },
  buttons: {
    display: 'flex',
    marginTop: 20,
  },
  buttonMarginRight: {
    marginRight: 12,
  },
});

function ChangePasswordPage() {
  const classes = useStyles();
  const router = useRouter();
  const { openSnackbar } = useSnackbar();

  const changePassword = async (values, actions) => {
    try {
      await api.post(`/authentication/changePass`, values);
      openSnackbar('success', 'Password is updated.');
      actions.resetForm();
    } catch (error) {
      openSnackbar('error',error.response.data.errors[0]);
      actions.setSubmitting(false);
    }
  };
  return (
    <Layout pageName="Change Password">
      <Container>
        <Paper className={classes.formPaper}>
          <Typography variant="h5">
            Password Details
          </Typography>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            component={ChangePasswordForm}
            onSubmit={changePassword}
          />
        </Paper>
      </Container>
    </Layout>
  );
}

export default ChangePasswordPage;
