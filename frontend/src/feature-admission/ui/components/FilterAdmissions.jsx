import { Box, Button, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useDispatch } from "react-redux/es/exports";

import * as Yup from 'yup';
import DatePickerField from "../../../common/components/DatePickerField";
import LoadingButton from "../../../common/components/LoadingButton";
import { getAdmissionsByCourseId, getAdmissionsByDate } from "../../../store/admission-slice";

const FilterAdmissions = () => {

    const dispatch = useDispatch();

    const handleOnSubmitByCourse = async (value) => {
        await dispatch(getAdmissionsByCourseId(value.courseId));
    }

    const handleOnSubmitByDate = async (value) => {
        const date = value.date.toISOString().split('T', 1)[0];
        await dispatch(getAdmissionsByDate(date));
    }

    return <Stack mt={2}>
        <Formik
            initialValues={{ courseId: '' }}
            onSubmit={handleOnSubmitByCourse}
            validationSchema={Yup.object().shape({
                courseId: Yup.number()
                    .typeError("Please enter a valid input")
                    .required("Required *")
            })}
            validateOnBlur={false}
            validateOnChange={false}
            validateOnMount={false}
        >
            <Form>
                <Field
                    component={TextField}
                    name='courseId'
                    label="Course Id"
                    required
                />

                <Button
                    variant='outlined'
                    type='submit'
                    sx={{ ml: 2 }}
                >
                    Get
                </Button>
            </Form>
        </Formik>

        <Formik
            initialValues={{ date: '' }}
            onSubmit={handleOnSubmitByDate}
            validationSchema={Yup.object().shape({
                date: Yup.string()
                    .required("Required *")
            })}
        >
            {({ values, setFieldValue, isSubmitting }) => (

                <Form>
                    <Stack flexDirection='row' sx={{ maxWidth: '220px' }} mt={2}>
                        <DatePickerField
                            name='date'
                            value={values.date}
                            onChange={setFieldValue}
                        />

                        <LoadingButton
                            loading={isSubmitting}
                            type='submit'
                            variant='outlined'
                            sx={{ ml: 2 }}
                        >
                            Get
                        </LoadingButton>
                    </Stack>
                </Form>
            )}

        </Formik>
    </Stack>
}

export default FilterAdmissions;