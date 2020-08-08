import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FormikSelect from '../formik/FormikSelect';
import { 
  currencyData,
   chartofaccountsDropdownData } from '../../lib/mock-data';
import { countryData } from '../../lib/country-data';
// import api from '../../lib/api';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  margin: {
    margin: '60px 0',
  },
  buttonGroup: {
    display: 'flex',
  },
  button: {
    marginTop: 20,
    marginRight: 8,
    width: 120,
  },
  buttonMarginRight: {
    marginRight: theme.spacing(1),
  },
}));

function CustomerForm() {

  const classes = useStyles();
  const router = useRouter();
  // const [currency, setCurrency] = useState();
//   const currencyData=[];  
//   let counter=1
//   useEffect(() => {
//     const fetchData = async () => {
//         const { data } = await api.get('/currency');
//         setCurrency(data); 
//       }; 
//   fetchData();
// }, []);

//   if(currency){
//     currency.map(cur=>{
//       console.log("a1",cur['code'])
//       currencyData.push({
//           id:counter++,
//           value:cur['code']+" - "+cur['currency'],
//       })
//     })
//   }
 
  function handleCancel() {
    router.back();
  }

  return (
    <Form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            name="companyName"
            component={TextField}
            label="Company Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="firstName"
            component={TextField}
            label="First Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="lastName"
            component={TextField}
            label="Last Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="address1"
            component={TextField}
            label="Address 1"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="address2"
            component={TextField}
            label="Address 2"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={FormikSelect}
            name="country"
            textField="value"
            valueField="value"
            options={countryData}
            fullWidth
            label="Country"
            />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="state"
            component={TextField}
            label="State"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="city"
            component={TextField}
            label="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            name="zipCode"
            component={TextField}
            label="Zipcode"
            fullWidth
          />
        </Grid>
      </Grid>
      <div className={classes.margin}>
        <Typography variant="h5">Social Platform Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Field
              name="facebookUrl"
              component={TextField}
              label="Facebook Url"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="linkedinUrl"
              component={TextField}
              label="LinkedIn Url"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="twitterUrl"
              component={TextField}
              label="Twitter Url"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Typography variant="h5">Financial Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Field
              component={FormikSelect}
              name="currency"
              textField="name"
              valueField="id"
              options={currencyData}
              fullWidth
              label="Currency"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              component={FormikSelect}
              name="chartOfAccounts"
              textField="name"
              valueField="value"
              options={chartofaccountsDropdownData}
              fullWidth
              label="Chart of Accounts"
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="companyNumber"
              component={TextField}
              label="Company Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name="taxNumber"
              component={TextField}
              label="Tax Number"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>

      <div className={classes.buttonGroup}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Save
        </Button>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default CustomerForm;


