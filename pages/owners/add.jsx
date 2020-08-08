import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';
import Layout from '../../layout';
import api from '../../lib/api';
import { useSnackbar } from '../../lib/context';
import MembersForm from '../../components/forms/MembersForm';

const useStyles = makeStyles({
  accountPaper: {
    padding: 20,
  },
  margin: {
    margin: '60px 0',
  },
});

const validationSchema = yup.object().shape({
  // companyName: yup.string().required('Company Name is required.'),
  firstName: yup.string().required('First Name is required.'),
  lastName: yup.string().required('Last Country is required.'),
  country: yup.string().required('Country is required.'),
  state: yup.string().required('State is required.'),
  city: yup.string().required('City is required.'),
  zipCode: yup.string().required('Zipcode is required.'),
  address1: yup.string().required('Address 1 is required.'),
  address2: yup.string().required('Address 2 is required.'),
});

const initialValues = {
  address1: '',
  address2: '',
  city: '',
  // companyName: '',
  country: '',
  firstName: '',
  // id: 0,
  lastName: '',
  state: '',
  zipCode: ''
}

function AddMemberPage() {
  const classes = useStyles();
  const router = useRouter();
  const { openSnackbar } = useSnackbar();

  const handleSubmit = async (values, actions) => {
    // try {
    //   await api.post('/customers', values);
    //   openSnackbar('success', 'Customer created.');
    //   router.back();
    // } catch (error) {
    //   openSnackbar('error',error.response.data.errors[0]);
    //   actions.setSubmitting(false);
    // }
  };

  return (
    <Layout pageName="Add Member">
      <Container>
        <Paper className={classes.accountPaper}>
          <Typography variant="h5">Member Details</Typography>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            component={MembersForm}
          />
        </Paper>
      </Container>
    </Layout>
  );
}

export default AddMemberPage;
