import { Button, Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/router";
import FormikSelect from "../formik/FormikSelect";
import { currencyData, chartofaccountsDropdownData } from "../../lib/mock-data";
import { countryData } from "../../lib/country-data";
import FormikRadioGroup from "../../components/formik/FormikRadioGroup";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Layout from "../../layout";
import { useSnackbar } from "../../lib/context";
import ApplicantInformation from "../application-steps/ApplicantInformation";
import Education from "../application-steps/Education";
import PreviousEmployment from "../application-steps/PreviousEmployment";
// import api from '../../lib/api';

const useStyles = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
    },
}));
const initialValues = {
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
    dateAvailable: new Date(),
    socialSecurityNo: "",
    desiredSalary: "",
    positionAppliedFor: "",
    citizenOfUS: "No",
    AuthorizedToWork: "No",
    previouslyApplied: "No",
    previouslyAppliedText: "",
    convictedOfFelony: "No",
    convictedOfFelonyText: "",
    education: [
        {
            highSchool: "",
            address: "",
            from: new Date(),
            to: new Date(),
            graduate: "No",
        },
    ],
    diploma: [
        {
            diploma: "",
            college: "",
            address: "",
            from: new Date(),
            to: new Date(),
            graduate: "No",
        },
    ],
    refrences: {
        fullName: "",
        relationship: "",
        company: "",
        phone: "",
        address: "",
    },
    previosEmployment: [
        {
            company: "",
            phone: "",
            address: "",
            supervisor: "",
            jobTitle: "",
            startingSalary: "",
            endingSalary: "",
            responsibilities: "",
            from: new Date(),
            to: new Date(),
            experience: "",
        },
    ],
    militaryService: {
        branch: "",
        from: new Date(),
        to: new Date(),
        rankAtDischarge: "",
        typeOfDischarge: "",
        other: "",
    },
    signature: "",
    date: new Date(),
};
function getSteps() {
    return [
        "Step 1",
        "Step 2",
        // 'Add Articles',
        "Step 3",
    ];
}
function getStepContent(step) {
    switch (step) {
        case 0:
            return <ApplicantInformation />;
        case 1:
            return <Education />;
        case 2:
            return <PreviousEmployment />;
        default:
            return "Unknown step";
    }
}

export const DataContext = createContext();
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
export const StepperNavigationButtons = ({
    valuesToSave,
    showSaveButton,
    onSaveClick,
    saveButtonProps,
}) => {
    const classes = useStyles();
    const steps = getSteps();
    const [skipped, setSkipped] = React.useState(new Set());
    const [activeStep, setActiveStep] = useContext(StepContext);
    const [data, setData] = useContext(DataContext);

    const isStepOptional = (step) => {
        return step === 3 || step === 4;
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
        setLoad({
            ...load,
            ...valuesToSave,
        });
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
        <div>
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
                {...saveButtonProps}
            >
                {activeStep === steps.length - 1 ? "Save" : "Next"}
            </Button>
            {showSaveButton && activeStep !== steps.length - 1 && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSaveClick}
                    className={classes.button}
                >
                    Save
                </Button>
            )}
        </div>
    );
};
export default function ApplicationFormStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const [data, setData] = useState(initialValues);
    const { openSnackbar } = useSnackbar();

    const isStepOptional = (step) => {
        return step === 2;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <DataContext.Provider value={[data, setData]}>
                {/* <Paper className={classes.root}> */}
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
                                <StepLabel {...labelProps}>{label}</StepLabel>
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
                {/* </Paper> */}
            </DataContext.Provider>
        </div>
    );
}
