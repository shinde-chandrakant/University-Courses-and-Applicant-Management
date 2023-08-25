import React from "react";
import { DialogContent, DialogTitle, Divider, Button, Typography } from "@mui/material";
import { Field, Formik, Form } from "formik";
import { TextField } from "formik-mui";
import "yup-phone";

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import { useDispatch } from "react-redux";
import { addApplicant, ApplicantsAction, updateApplicant } from "../../../store/applicant-slice";
import formValidation from "../../domain/utils/formValidation";
import DatePickerField from "../../../common/components/DatePickerField";
import useSnackBar from '../../../hooks/useSnackBar';
import StatusSelector from "../../../common/components/StatusSelector";
import { severity } from "../../../store/ui-slice";

const initialValues = {
    applicantName: '',
    applicantDegree: '',
    applicantGraduationPercent: '',
    mobileNumber: "",
    password: '',
    status: '',
    admissionDate: "",
    applicantId: '',
    courseId: '',
    admissionStatus: ''
}

const AddApplicant = ({ onClickCancel, editItem }) => {

    const dispatch = useDispatch();
    const { handleOpenSnackbar } = useSnackBar();

    const handleOnSubmit = async (values) => {
        let result;
        if (editItem) {
            const item = {
                ...values,
                applicantId: editItem.item.applicantId
            };
            result = await dispatch(updateApplicant({ applicant: item, index: editItem.index })).unwrap();

            const isSuccess = result.result.isSuccess;

            if (isSuccess) {
                handleOpenSnackbar('Successfull', severity.success);
                onClickCancel();
            } else {
                const errorMessage = result.errorMessage;
                handleOpenSnackbar(errorMessage, severity.error);
            }

        } else {
            result = await dispatch(addApplicant(values)).unwrap();

            if (result.isSuccess) {
                handleOpenSnackbar('Successfull', severity.success);
                onClickCancel();
            } else {
                const errorMessage = result.errorMessage;
                handleOpenSnackbar(errorMessage, severity.error);
            }

        }
    }

    return <React.Fragment>
        <DialogTitle>
            {editItem ? "Update Applicant" : "Add Applicant"}
        </DialogTitle>
        <Divider />
        <DialogContent>
            <Formik
                initialValues={editItem ? {
                    ...initialValues,
                    applicantName: editItem.item.applicantName,
                    status: editItem.item.status
                } : initialValues}
                onSubmit={handleOnSubmit}
                validationSchema={formValidation}
            >
                {({ values, setFieldValue, errors }) => (
                    <Form>

                        <Field
                            name='applicantName'
                            label='Applicant Name'
                            component={TextField}
                            fullWidth
                            required
                        />

                        <Field
                            name='applicantDegree'
                            label='Applicant Degree'
                            component={TextField}
                            fullWidth
                            required
                            sx={{ mt: 2 }}
                        />

                        <Field
                            name='applicantGraduationPercent'
                            label='Applicant Graduation Percent'
                            component={TextField}
                            fullWidth
                            required
                            sx={{ mt: 2 }}
                        />

                        <Field
                            name='mobileNumber'
                            label='Mobile Number'
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <StatusSelector
                            label='Applicant Status'
                            name='status'
                            value={values.status}
                            onChange={setFieldValue}
                            error={errors.status}
                            sx={{ mt: 2, width: '100%' }}
                        />

                        <SpaceBetweenBox mt={2}>

                            <Typography>
                                Admission Date :
                            </Typography>

                            <DatePickerField
                                name='admissionDate'
                                value={values.admissionDate}
                                onChange={setFieldValue}
                            />
                        </SpaceBetweenBox>

                        <Field
                            name='applicantId'
                            label='Applicant Id'
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <Field
                            name='courseId'
                            label='Course Id'
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                        />

                        <StatusSelector
                            label='Admission Status'
                            name='admissionStatus'
                            value={values.admissionStatus}
                            onChange={setFieldValue}
                            error={errors.admissionStatus}
                            sx={{ mt: 2, width: '100%' }}
                        />

                        <Field
                            name="password"
                            label="Password"
                            required
                            fullWidth
                            component={TextField}
                            sx={{ mt: 2 }}
                            type='password'
                        />


                        <SpaceBetweenBox mt={2}>
                            <Button
                                variant='outlined'
                                onClick={onClickCancel}
                            >
                                Cancel
                            </Button>

                            <Button variant='contained' type='submit' color='secondary'>
                                {
                                    editItem ? "Update" : "Add"
                                }
                            </Button>
                        </SpaceBetweenBox>
                    </Form>
                )}
            </Formik>
        </DialogContent>
    </React.Fragment>
}

export default AddApplicant;