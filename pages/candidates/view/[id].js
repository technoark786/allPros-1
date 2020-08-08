import {
    Button, Container, Dialog, DialogActions, DialogContent, DialogTitle,
    Divider, Grow, Paper, TextField as MuiTextField, Typography, Tabs, Tab, AppBar
  } from '@material-ui/core';
  import { makeStyles } from '@material-ui/core/styles';
  import DeleteIcon from '@material-ui/icons/Delete';
  import { Formik } from 'formik';
  import { useRouter } from 'next/router';
  import React, { useState, useEffect } from 'react';
  import * as yup from 'yup';
  import Fieldset, { Legend } from '../../../components/fieldset';
  import Layout from '../../../layout';
  import api from '../../../lib/api';
  import { useSnackbar } from '../../../lib/context';
  import CustomerForm from '../../../components/forms/CustomerForm';
  import CircularLoader from '../../../components/loader/CircularLoader';
  
  const useStyles = makeStyles((theme) => ({
    accountPaper: {
      padding: 20,
    },
    margin: {
      margin: '60px 0',
    },
    deleteButton: {
      color: 'white',
      backgroundColor: theme.palette.danger.main,
      '&:hover': {
        backgroundColor: theme.palette.danger.main,
      },
    },
    dialogActions: {
      padding: 20,
    },
  }));
  
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
  
  function ViewCandidatePage() {
    const classes = useStyles();
    const router = useRouter();
    const [dialogOpen, setDialogOpen] = useState(false);
    const { openSnackbar } = useSnackbar();
  
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await api.get(`/customers/${router.query.id}`);
        setCustomer(data);
      };
    //   fetchData();
    }, [router.query.id]);
  
    function openDialog() {
      setDialogOpen(true);
    }
  
    function handleDialogClose() {
      setDialogOpen(false);
    }
  
    const updateCustomerDetails = async (values, actions) => {
      try {
        await api.put(`/customers`, values);
        openSnackbar('success', 'Customer updated.');
        router.push('/customers');
      } catch (error) {
        openSnackbar('error',error.response.data.errors[0]);
        actions.setSubmitting(false);
      }
    };
  

  
    // if (!customer) {
    //   return <Layout pageName="View Candidate"><CircularLoader /></Layout>
    // }
  
    return (
      <Layout pageName="View Candidate">
        {/* <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          TransitionComponent={Grow}
        >
          <DialogTitle>Verification</DialogTitle>
  
          <DialogContent>
            <MuiTextField label="OTP" fullWidth />
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button
              variant="contained"
              className={classes.deleteButton}
              startIcon={<DeleteIcon />}
              onClick={deleteCustomerDetails}
            >
              Confirm
            </Button>
  
            <Button
              color="primary"
              variant="outlined"
              onClick={handleDialogClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog> */}
        <Container>
        <Typography variant="h5">Candidates Details</Typography>
          <Paper className={classes.accountPaper}>
            

            
          </Paper>
        </Container>
      </Layout>
    );
  }
  
  export default ViewCandidatePage;
  