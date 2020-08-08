import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { handleNext, SignupDetailsContext, SkipContext, StepContext } from '../../pages/signup';
import SignupBusinessForm from '../forms/SignupBusinessForm';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
});

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  businessName: Yup.string().required('Business Name is Required'),
  doBusiness: Yup.string().required('Business Type is Required'),
});

function Step2() {

  const classes = useStyles();
  const [signupDetails, setSignupDetails] = useContext(SignupDetailsContext);
  const [activeStep, setActiveStep] = useContext(StepContext);
  const [skipped, setSkipped] = useContext(SkipContext);

  async function handleSubmit(values) {
    setSignupDetails({
      ...signupDetails,
      firstName: values.firstName,
      lastName: values.lastName,
      businessName: values.businessName,
      doBusiness: values.doBusiness
    });
    handleNext(skipped, setSkipped, activeStep, setActiveStep);
  }
  return (
    <div>
      <Typography className={classes.title} variant="h6">
        Tell us about you and your business
      </Typography>
      <Formik
        initialValues={signupDetails}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        component={SignupBusinessForm}
      >
      </Formik>
    </div>

  );
}

export default Step2;