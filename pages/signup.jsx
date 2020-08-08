import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { createContext, useContext, useState } from 'react';
import Layout from '../layout';
// import { useSnackbar } from '../../lib/context';
import Step1 from '../components/signup-steps/Step1';
import Step2 from '../components/signup-steps/Step2';
import Step3 from '../components/signup-steps/Step3';
import { useRouter } from 'next/router';
import logo from '../assets/img/logo.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupTitle: {
        textAlign: 'center',
    },
    logoText: {
        margin: 20,
    },
    formPaper: {
        // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
        maxWidth: 700,
        height: 'fit-content',
        padding: 35,
        margin: 20,
    },
    buttonGroup: {
        display: 'flex',
    },
    button: {
        marginTop: 20,
        marginRight: 8,
        width: 120,
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

const initialValues = {
    businessCountry: '',
    businessName: '',
    businessType: '',
    contactEmail: '',
    contactMobile: '',
    currencyId: '',
    timezone: '',
    // defaultCurrency: 0,
    doBusiness: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
};

function getSteps() {
    return [
        // 'Step 1',
        // 'Step 2',
        // 'Step 3',
        '',
        '',
        '',
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Step1 />;
        case 1:
            return <Step2 />;
        case 2:
            return <Step3 />;
        default:
            return 'Unknown step';
    }
}

export const SignupDetailsContext = createContext();
export const StepContext = createContext();
export const SkipContext = createContext();

export const handleNext = (skipped, setSkipped, activeStep, setActiveStep) => {
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
};
export const handleBack = (setActiveStep) => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
};
export const StepperNavigationButtons = ({ valuesToSave }) => {
    const classes = useStyles();
    const steps = getSteps();
    const [skipped, setSkipped] = React.useState(new Set());
    const [activeStep, setActiveStep] = useContext(StepContext);
    // const [signupDetails, setSignupDetails] = useContext(SignupDetailsContext);

    const isStepOptional = (step) => {
        return step === 5 || step === 6;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = async () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.buttonGroup}>
            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
            >
                Back
            </Button>
            {isStepOptional(activeStep) && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                    className={classes.button}
                >
                    Skip
                </Button>
            )}

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                type="submit"
            >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
    );
};

export default function SignupStepper() {
    const classes = useStyles();
    const router = useRouter();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const [signupDetails, setSignupDetails] = useState(initialValues);
    // const { openSnackbar } = useSnackbar();

    const isStepOptional = (step) => {
        return step === 5 || step === 6;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <img src={logo} height="200px" />
            <Paper className={classes.formPaper}>
                <Typography className={classes.signupTitle} variant="h4">
                    Sign Up
                </Typography>
                <SignupDetailsContext.Provider
                    value={[signupDetails, setSignupDetails]}
                >
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = (
                                    <Typography variant="caption">
                                        Optional
                                    </Typography>
                                );
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>
                                        {label}
                                    </StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Button
                                    onClick={handleReset}
                                    className={classes.button}
                                >
                                    Reset
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <StepContext.Provider
                                    value={[activeStep, setActiveStep]}
                                >
                                    <SkipContext.Provider
                                        value={[skipped, setSkipped]}
                                    >
                                        {getStepContent(activeStep)}
                                    </SkipContext.Provider>
                                </StepContext.Provider>
                            </div>
                        )}
                    </div>
                </SignupDetailsContext.Provider>
            </Paper>
        </div>
    );
}

// SignupStepper.getInitialProps = async ctx => {
//   try {
//     // const { id } = ctx.query;
//     const { data } = await api.get('info');
//     console.log(data);
//     return { loadDetails: data };
//   } catch (error) {
//     return { error: error.message };
//   }
// };
