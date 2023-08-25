import * as Yup from 'yup';
import { REQUIRED } from '../../../styles/constants';

const formValidation = Yup.object().shape({
    courseName: Yup.string()
        .min(2, 'Min 2 characters long')
        .required('Required *'),
    courseStartDate: Yup.string()
        .required("Required *"),
    courseEndDate: Yup.string()
        .required("Required *"),
    courseFees: Yup.number()
        .typeError("Please enter valid input")
        .min(0, "Please enter valid input")
        .required("Required *"),
    courseDuration: Yup.string()
        .required(REQUIRED)
});


export default formValidation;