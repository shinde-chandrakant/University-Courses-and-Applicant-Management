import React from "react"
import { Button, DialogContent, DialogTitle, Divider, LinearProgress } from "@mui/material"
import { Field, Form, Formik } from "formik"
import { TextField } from "formik-mui"
import { useDispatch } from "react-redux/es/exports"

import SpaceBetweenBox from "../../../common/components/SpaceBetweenBox"
import formValidation from "../../domain/utils/formValidation"
import { addCommitteeMember, updateCommitteeMember } from "../../../store/committeeMember-slice"

const initialValues = {
    adminName: '',
    adminContact: '',
    password: ""
}

const AddCommitteeMember = ({ editItem, onClickCancel }) => {

    const dispatch = useDispatch();

    const handleOnSubmit = async (values) => {

        if (editItem) {
            await dispatch(updateCommitteeMember({ member: values, index: editItem.index }));
        } else {
            console.log(values);
            await dispatch(addCommitteeMember(values));
        }

        onClickCancel();
    }

    return <React.Fragment>
        <DialogTitle>
            {
                editItem ? "Update Member" : "Add Member"
            }
        </DialogTitle>

        <Formik
            initialValues={editItem ? editItem.item : initialValues}
            onSubmit={handleOnSubmit}
            validationSchema={formValidation}
        >
            {({ isSubmitting }) => (
                <React.Fragment>
                    {
                        isSubmitting ? <LinearProgress /> : <Divider />
                    }
                    <Form>
                        <DialogContent>

                            <Field
                                name='adminName'
                                label='Name'
                                component={TextField}
                                required
                                fullWidth
                            />

                            <Field
                                name='adminContact'
                                label='Phone number'
                                component={TextField}
                                required
                                fullWidth
                                sx={{ mt: 2 }}
                            />

                            <Field
                                name='password'
                                label='Password'
                                component={TextField}
                                required
                                fullWidth
                                sx={{ mt: 2 }}
                                type='password'
                            />

                        </DialogContent>

                        <SpaceBetweenBox
                            m={2}
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

                </React.Fragment>
            )}
        </Formik>
    </React.Fragment>
}

export default AddCommitteeMember;