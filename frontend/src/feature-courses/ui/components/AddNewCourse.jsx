import React from "react";

import { Button, Typography } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import { TextField } from "formik-mui";
import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import DatePickerField from "../../../common/components/DatePickerField";
import { useDispatch } from "react-redux";
import { addCourse, CourseActions, updateCourse } from "../../../store/courses-slice";
import formValidation from "../../domain/utils/formValidation";

const initialValues = {
    courseName: '',
    courseDuration: '',
    courseStartDate: '',
    courseEndDate: '',
    courseFees: ''
}

const AddNewCourse = ({ editItem, handleOnClickCancel }) => {

    const dispatch = useDispatch();

    const handleOnSubmit = (values) => {
        if (editItem) {
            dispatch(updateCourse({ course: values, index: editItem.index }));
        } else {
            dispatch(addCourse(values));
        }
        handleOnClickCancel();
    }

    return <React.Fragment>
        <Formik
            initialValues={editItem ? editItem.item : initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={formValidation}
        >
            {({ values, setFieldValue }) => (
                <Form>

                    <Field
                        name='courseName'
                        label='Name'
                        component={TextField}
                        fullWidth
                        required
                    />

                    <SpaceBetweenBox mt={2}>

                        <Typography>
                            Start Date :
                        </Typography>

                        <DatePickerField
                            name='courseStartDate'
                            value={values.courseStartDate}
                            onChange={setFieldValue}
                        />
                    </SpaceBetweenBox>

                    <SpaceBetweenBox mt={2}>
                        <Typography>
                            End Date :
                        </Typography>

                        <DatePickerField
                            name='courseEndDate'
                            value={values.courseEndDate}
                            onChange={setFieldValue}
                        />
                    </SpaceBetweenBox>

                    <Field
                        name='courseDuration'
                        label='Duration'
                        component={TextField}
                        fullWidth
                        required
                        sx={{ mt: 2 }}
                    />

                    <Field
                        name='courseFees'
                        label='Fees'
                        component={TextField}
                        fullWidth
                        required
                        sx={{ mt: 2 }}
                    />

                    <SpaceBetweenBox mt={2}>
                        <Button
                            variant='outlined'
                            onClick={handleOnClickCancel}
                        >
                            Cancel
                        </Button>

                        <Button variant='contained' type='submit'>
                            {
                                editItem ? "Update" : "Add"
                            }
                        </Button>
                    </SpaceBetweenBox>
                </Form>
            )}
        </Formik>
    </React.Fragment>;
}

export default AddNewCourse;