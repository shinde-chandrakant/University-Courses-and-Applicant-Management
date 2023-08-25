import React from "react";

import { Button } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import { TextField } from "formik-mui";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";

const initialFormValues = {
    email: '',
    name: '',
    password: "",
    confirmPassword: ''
}

const SignUpForm = () => {
    return <React.Fragment>
        <Formik
            initialValues={initialFormValues}
            onSubmit={() => { }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Please enter a valid email")
                    .required('Required *'),
                name: Yup.string()
                    .min(2, "Minimum 2 characters required")
                    .required('Required *'),
                password: Yup.string()
                    .required('Required *'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Password does not match")
                    .required('Required *'),
            })}
        >
            <Form>

                <Field
                    label={'Full name'}
                    type={'name'}
                    name={'name'}
                    component={TextField}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, mb: 2 }}
                    required
                />

                <Field
                    label={'Email'}
                    type={'email'}
                    name={'email'}
                    component={TextField}
                    variant="outlined"
                    fullWidth
                    required
                />

                <Field
                    label={'Password'}
                    type={'password'}
                    name={'password'}
                    component={TextField}
                    variant="outlined"
                    fullWidth
                    sx={{ mt: 2, mb: 2 }}
                    required
                />

                <Field
                    label={'Confirm Password'}
                    type={'password'}
                    name={'confirmPassword'}
                    component={TextField}
                    variant="outlined"
                    fullWidth
                    required
                />

                <SpaceBetweenBox mt={2}>
                    <Link to='/sign-in'>
                        <Button variant='outlined'>
                            Sign in
                        </Button>
                    </Link>

                    <Button
                        variant='contained'
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </SpaceBetweenBox>
            </Form>

        </Formik>
    </React.Fragment>
}

export default SignUpForm;