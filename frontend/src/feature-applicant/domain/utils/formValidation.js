import * as Yup from 'yup';
import { REQUIRED } from '../../../styles/constants';

const formValidation = Yup.object().shape({
    applicantName: Yup.string()
        .required("Required *"),
    applicantDegree: Yup.string()
        .required(REQUIRED),
    applicantGraduationPercent: Yup.number()
        .typeError("Please enter a valid percent")
        .min(0, 'Enter percent range from 0% - 100%')
        .max(100, 'Enter percent range from 0% - 100%')
        .required("Required *"),
    mobileNumber: Yup.string()
        .phone(undefined, true, "Please enter a valid phone number")
        .required("Required *"),
    status: Yup.string()
        .required("Required *"),
    applicantId: Yup.number()
        .typeError("Please enter a valid id")
        .required(REQUIRED),
    courseId: Yup.number()
        .typeError("Please enter a valid id")
        .required("Required * "),
    admissionDate: Yup.string()
        .required("Required *"),
    admissionStatus: Yup.string()
        .required("Required *"),
    password: Yup.string()
        .required("Required *")
        .min(8, "Minimum 8 characters required"),
});

export default formValidation;