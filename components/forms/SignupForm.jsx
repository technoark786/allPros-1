import { Grid, InputAdornment } from '@material-ui/core';
import { Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { StepperNavigationButtons } from '../../pages/signup';

function SignupForm() {

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="email"
            component={TextField}
            label="Email"
            // margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <EmailIcon color="secondary" />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="password"
            type="password"
            component={TextField}
            label="Password"
            // margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <LockIcon color="secondary" />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <StepperNavigationButtons />
        </Grid>
      </Grid>
    </Form>
  );
}

export default SignupForm;


