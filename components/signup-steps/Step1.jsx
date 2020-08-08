import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleNext, SignupDetailsContext, SkipContext, StepContext } from '../../pages/signup';
import SignupForm from '../forms/SignupForm';
import api from '../../lib/api';
import { useSnackbar } from '../../lib/context';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import CircularLoader from '../loader/CircularLoader';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '25vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is Required'),
  password: Yup.string().min(8,'Password must be atleast 8 character').required('Password is Required'),
});

function Step1() {

  const classes = useStyles();
  const { openSnackbar } = useSnackbar();
  const [signupDetails, setSignupDetails] = useContext(SignupDetailsContext);
  const [activeStep, setActiveStep] = useContext(StepContext);
  const [skipped, setSkipped] = useContext(SkipContext);
  const [loading,setLoading] = useState(false);

  async function handleSubmit(values, actions) {
    try {
      setLoading(true);
      await api.post(`/signUp/${values.email}`);
      setLoading(false);
      setSignupDetails({
        ...signupDetails,
        email: values.email,
        password: values.password,
      });
      handleNext(skipped, setSkipped, activeStep, setActiveStep);
      // openSnackbar('success', 'Email is verified.');
    } catch (error) {
      setLoading(false);
      openSnackbar('error', error.response.data.errors[0]);
      actions.setSubmitting(false);
    }
  }
  if(loading){
    return <div className={classes.root}><CircularLoader /></div>;
  }
  return (
    <div>
      <Typography className={classes.title} variant="h6">
        Set your email and password
      </Typography>
      <Formik
        initialValues={signupDetails}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        component={SignupForm}
      >
      </Formik>
    </div>
  );
}

export default Step1;