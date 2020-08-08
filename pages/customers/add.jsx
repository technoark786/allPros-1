import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';
import Layout from '../../layout';
import api from '../../lib/api';
import { useSnackbar } from '../../lib/context';
import CustomerForm from '../../components/forms/CustomerForm';

const useStyles = makeStyles({
  accountPaper: {
    padding: 20,
  },
  margin: {
    margin: '60px 0',
  },
});

const validationSchema = yup.object().shape({
  companyName: yup.string().required('Company Name is required.'),
  firstName: yup.string().required('First Name is required.'),
  lastName: yup.string().required('Last Country is required.'),
  country: yup.string().required('Country is required.'),
  state: yup.string().required('State is required.'),
  city: yup.string().required('City is required.'),
  zipCode: yup.string().required('Zipcode is required.'),
  address1: yup.string().required('Address 1 is required.'),
  address2: yup.string().required('Address 2 is required.'),
  linkedinUrl: yup.string().url('Invalid url'),
  facebookUrl: yup.string().url('Invalid url'),
  twitterUrl: yup.string().url('Invalid url'),
  website: yup.string().url('Invalid url'),
  currency: yup.string().required('Currency is required.'),
  chartOfAccounts: yup.string().required('Chart of Accounts is required.'),
  companyNumber: yup.string().required('Company Number is required.'),
  taxNumber: yup.string().required('Tax Number is required.'),
});

const initialValues = {
  address1: '',
  address2: '',
  chartOfAccounts: '',
  city: '',
  companyName: '',
  companyNumber: '',
  country: '',
  currency: '',
  facebookUrl: '',
  firstName: '',
  // id: 0,
  lastName: '',
  linkedinUrl: '',
  state: '',
  taxNumber: '',
  twitterUrl: '',
  zipCode: ''
}

function AddCustomerPage() {
  const classes = useStyles();
  const router = useRouter();
  const { openSnackbar } = useSnackbar();

  const saveCustomerDetails = async (values, actions) => {
    try {
      await api.post('/customers', values);
      openSnackbar('success', 'Customer created.');
      router.back();
    } catch (error) {
      openSnackbar('error',error.response.data.errors[0]);
      actions.setSubmitting(false);
    }
  };

  return (
    <Layout pageName="Add Customer">
      <Container>
        <Paper className={classes.accountPaper}>
          <Typography variant="h5">Customer Details</Typography>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={saveCustomerDetails}
            component={CustomerForm}
          />
        </Paper>
      </Container>
    </Layout>
  );
}

export default AddCustomerPage;
