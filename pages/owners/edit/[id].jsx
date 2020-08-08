import {
    Button, Container, Dialog, DialogActions, DialogContent, DialogTitle,
    Divider, Grow, Paper, TextField as MuiTextField, Typography,
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
  });
  
  function EditMemberPage() {
    const classes = useStyles();
    const router = useRouter();
    const [member, setMember] = useState();
    const [dialogOpen, setDialogOpen] = useState(false);
    const { openSnackbar } = useSnackbar();
  
    useEffect(() => {
    //   const fetchData = async () => {
    //     const { data } = await api.get(`/Members/${router.query.id}`);
    //     setMember(data);
    //   };
    //   fetchData();
    }, [router.query.id]);
  
    function openDialog() {
      setDialogOpen(true);
    }
  
    function handleDialogClose() {
      setDialogOpen(false);
    }
  
    const handleUpdate = async (values, actions) => {
      try {
        await api.put(`/Members`, values);
        openSnackbar('success', 'Member updated.');
        router.push('/Members');
      } catch (error) {
        openSnackbar('error',error.response.data.errors[0]);
        actions.setSubmitting(false);
      }
    };
  
    const handleDelete = async () => {
      try {
        const { data } = await api.delete(`/Members/${router.query.id}`);
        if (data.length === 0) {
          setDialogOpen(false)
          openSnackbar('success', 'Member deleted.');
          router.push('/Members');
        }
      }
      catch (error) {
        openSnackbar('error',error.response.data.errors[0]);
      }
    };
  
    // if (!member) {
    //   return <Layout pageName="Edit Member"><CircularLoader /></Layout>
    // }
  
    return (
      <Layout pageName="Edit Member">
        <Dialog
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
              // onClick={handleDelete}
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
        </Dialog>
        <Container>
          <Paper className={classes.accountPaper}>
            <Typography variant="h5">Member Details</Typography>
  
            {/* <Formik
              validationSchema={validationSchema}
              initialValues={member}
              onSubmit={handleUpdate}
              component={MembersForm}
            /> */}
            <Divider variant="middle" style={{ margin: '50px 0' }} />
  
            <div>
              <Fieldset color="danger">
                <Legend>
                  <Typography variant="h5">Danger Zone</Typography>
                </Legend>
  
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography style={{ whiteSpace: 'pre-line' }}>
                    Click the button below to delete Member account.
                    {'\n'}
                    This action cannot be undone.
                    {'\n'}
                    ALL Member DATA WILL BE PERMANENTLY DELETED.
                  </Typography>
                  <Button
                    style={{ marginTop: 20 }}
                    className={classes.deleteButton}
                    variant="contained"
                    color="primary"
                    startIcon={<DeleteIcon />}
                    onClick={openDialog}
                  >
                    Delete Member
                  </Button>
                </div>
              </Fieldset>
            </div>
          </Paper>
        </Container>
      </Layout>
    );
  }
  
  export default EditMemberPage;
  