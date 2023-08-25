import { Button, DialogContent, DialogTitle, Divider, LinearProgress } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import React from "react";
import { useDispatch } from "react-redux/es/exports";

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox";
import { addStaffMember, updateStaffMember } from "../../../store/staffMembers-slice";
import formValidation from "../../domain/utils/formValidation";

const initialValues = {
    confirmPassword: '',
    password: '',
    role: ''
}

const AddStaffMember = ({ onClickCancel, editItem }) => {

    const dispatch = useDispatch();
    const handleOnSubmit = async (values) => {
        if (editItem) {
            const data = {
                ...values,
                staffId: editItem.value.staffId
            };
            const index = editItem.index;

            const result = await dispatch(updateStaffMember({
                member: data,
                index
            }));
        } else {
            const result = await dispatch(addStaffMember(values));
        }
        onClickCancel();
    }

    return <React.Fragment>
        <DialogTitle>
            {
                editItem ? "Update Staff Member" : "Add Staff Member"
            }
        </DialogTitle>

        <Formik
            initialValues={
                editItem ? {
                    role: editItem.value.role,
                    password: '',
                    confirmPassword: ''
                } :
                    initialValues
            }
            onSubmit={handleOnSubmit}
            validationSchema={formValidation}
        >
            {({ isSubmitting }) => (
                <React.Fragment>

                    {
                        isSubmitting ? <LinearProgress /> : <Divider />
                    }

                    <DialogContent>

                        <Form>

                            <Field
                                name='role'
                                label='Role'
                                component={TextField}
                                required
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <Field
                                name='password'
                                label='Password'
                                type='password'
                                component={TextField}
                                required
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <Field
                                name='confirmPassword'
                                label='Confirm Password'
                                type='password'
                                component={TextField}
                                required
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <SpaceBetweenBox
                                mt={2}
                            >
                                <Button
                                    variant='outlined'
                                    onClick={onClickCancel}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant='contained'
                                    color='secondary'
                                    type='submit'
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

export default AddStaffMember;