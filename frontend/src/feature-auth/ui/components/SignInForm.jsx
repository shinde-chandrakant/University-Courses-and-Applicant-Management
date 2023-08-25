import React from "react";

import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui';

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../store/auth-slice";

import LoadingButton from '../../../common/components/LoadingButton';
import useSnackbar from "../../../hooks/useSnackBar";
import { severity } from "../../../store/ui-slice";

const initialValues = {
    id: '',
    password: ''
}

const SignInForm = ({ mode }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleOpenSnackbar } = useSnackbar();

    const idLabel = mode + ' id';
    const capitalized = idLabel.charAt(0).toUpperCase() + idLabel.slice(1);

    const handleOnSubmit = async (values, actions) => {

        const { result } = await dispatch(loginUser({
            loginMode: mode,
            id: values.id,
            password: values.password
        })).unwrap();

        if (result.isSuccess) {
            navigate('/');
        } else {
            const error = result.value;
            handleOpenSnackbar(error, severity.error);
        }
    }

    return <React.Fragment>
        <Formik
            initialValues={initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={Yup.object().shape({
                id: Yup.string()
                    .required('Required *'),
                password: Yup.string()
                    .min(8, "Minimum 8 characters required")
                    .required('Required *')
            })}
        >
            {({ isSubmitting, setSubmitting }) => (
                <Form>

                    <Field
                        name="id"
                        label={capitalized}
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 2, mb: 2 }}
                        required
                    />

                    <Field
                        name="password"
                        label="Password"
                        component={TextField}
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 2 }}
                        type='password'
                        required
                    />


                    <LoadingButton
                        variant="contained"
                        color="secondary"
                        fullWidth
                        type='submit'
                        sx={{ mb: 4 }}
                        loading={isSubmitting}
                    >
                        Sign In
                    </LoadingButton>

                    {/* <SpaceBetweenBox mt={2} mb={1} >

                        <Button
                            variant="text"
                            sx={{ textTransform: 'none', padding: 0 }}
                            disableRipple
                            onClick={() => { }}>
                            Forgot Password
                        </Button>

                        <Link to='/sign-up'>
                            <Button
                                variant="text"
                                sx={{ textTransform: 'none', padding: 0 }}
                                disableRipple>
                                New user? Sign Up.
                            </Button>
                        </Link>

                    </SpaceBetweenBox> */}

                </Form>
            )}

        </Formik>
    </React.Fragment>;
}

export default SignInForm;