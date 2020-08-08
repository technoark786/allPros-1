import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleNext, SignupDetailsContext, SkipContext, StepContext } from '../../pages/signup';
import SignupAdditionalForm from '../forms/SignupAdditionalForm';
import { Typography } from '@material-ui/core';
import api from '../../lib/api';
import { useSnackbar } from '../../lib/context';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/styles';
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
    height: '45vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
const validationSchema = Yup.object().shape({
  businessCountry: Yup.string().required('Country is Required'), 
  businessType: Yup.string().required('Business Type is Required'),
  contactEmail: Yup.string().required('Email is Required'),
  contactMobile: Yup.number().typeError('Mobile must be number').required('Mobile is Required'),
  currencyId: Yup.string().required('Currency Id Required'),
  // defaultCurrency: Yup.string().required('Default Currency Required'),
});

function Step3() {

  const { openSnackbar } = useSnackbar();
  const router = useRouter();
  const classes = useStyles();
  const [signupDetails, setSignupDetails] = useContext(SignupDetailsContext);
  const [activeStep, setActiveStep] = useContext(StepContext);
  const [skipped, setSkipped] = useContext(SkipContext);
  const [loading,setLoading] = useState(false);
  
  async function handleSubmit(values, actions) {
    try {
      setLoading(true);
      await api.post('/signUp',{
        ...signupDetails,
        businessCountry: values.businessCountry,
        businessType: values.businessType,
        contactEmail: values.contactEmail,
        contactMobile: values.contactMobile,
        currencyId: values.currencyId,
        timezone: values.timezone,
      })
      setLoading(false);
        setSignupDetails({
          ...signupDetails,
          businessCountry: values.businessCountry,
          businessType: values.businessType,
          contactEmail: values.contactEmail,
          contactMobile: values.contactMobile,
          currencyId: values.currencyId,
          timezone: values.timezone,
        });

      openSnackbar('success', 'You have signed up successfully.');
      // handleNext(skipped, setSkipped, activeStep, setActiveStep);
      router.push('/login');
    } catch (error) {
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
             Please Provide Additional Information
      </Typography>

      <Formik
        initialValues={signupDetails}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        component={SignupAdditionalForm}
      >
      </Formik>
    </div>
  );
}

export default Step3;