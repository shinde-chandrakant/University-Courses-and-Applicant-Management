import { Button, DialogContent, DialogTitle, Divider, LinearProgress, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { TextField } from "formik-mui";

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import DatePickerField from '../../../common/components/DatePickerField';
import { useDispatch } from "react-redux";
import { addAdmission, updateAdmission } from "../../../store/admission-slice";
import * as Yup from 'yup';

const initialValues = {
    courseId: '',
    applicantId: '',
    admissionDate: '',
    status: ''
};

const AddAdmission = ({ onClickCancel, editItem }) => {

    const dispatch = useDispatch();

    const handleOnSubmit = async (values) => {

        if (editItem) {
            const admission = {
                ...values,
                admissionId: editItem.item.admissionId,
                admissionDate: values.admissionDate.toISOString()
            };

            await dispatch(updateAdmission({
                admission, index: editItem.index
            }));
        } else {
            const data = {
                ...values,
                admissionDate: values.admissionDate.toISOString()
            }
            await dispatch(addAdmission(data));
        }

        onClickCancel();
    }

    return <React.Fragment>
        <DialogTitle>
            {
                editItem ? "Update Admission" : "Add Admission"
            }
        </DialogTitle>


        <Formik
            initialValues={editItem ? {
                ...editItem.item,
                admissionDate: new Date(editItem.item.admissionDate)
            } : initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={Yup.object().shape({
                courseId: Yup.number()
                    .typeError("Please enter a valid input")
                    .required(""),
                applicantId: Yup.number()
                    .typeError("Please enter a valid input")
                    .required(""),
                admissionDate: Yup.string().required("Required *"),
                status: Yup.string().required("Required *")
            })}
        >
            {({ isSubmitting, setFieldValue, values }) => (
                <React.Fragment>
                    {
                        isSubmitting ? <LinearProgress /> : <Divider />
                    }

                    <DialogContent>
                        <Form>
                            <Field
                                component={TextField}
                                name='courseId'
                                label="Course Id"
                                required
                                fullWidth
                            />

                            <Field
                                component={TextField}
                                name='applicantId'
                                label="Applicant Id"
                                required
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <SpaceBetweenBox
                                mt={2}
                            >
                                <Typography>
                                    Admission Date:
                                </Typography>

                                <DatePickerField
                                    name='admissionDate'
                                    value={values.admissionDate}
                                    onChange={setFieldValue}
                                />
                            </SpaceBetweenBox>

                            <Field
                                component={TextField}
                                name='status'
                                label='Status'
                                required
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <SpaceBetweenBox sx={{ mt: 2 }}>
                                <Button
                                    variant='outlined'
                                    onClick={onClickCancel}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant='contained'
                                    type='submit'
                                    color='secondary'
                                >
                                    {
                                        editItem ? "Update" : "Add"
                                    }
                                </Button>
                            </SpaceBetweenBox>

                        </Form>
                    </DialogContent>

                </React.Fragment>
            )}

        </Formik>
    </React.Fragment>
}

export default AddAdmission;