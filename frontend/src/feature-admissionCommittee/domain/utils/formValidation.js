import * as Yup from 'yup';
import 'yup-phone';

import { REQUIRED } from '../../../styles/constants';

const formValidation = Yup.object().shape({
    adminName: Yup.string()
        .required(REQUIRED),
    adminContact: Yup.string()
        .phone('IN', true, "Please enter a valid phone number")
        .required(REQUIRED),
    password: Yup.string()
        .min(8, "Minimum 8 characters long")
        .required(REQUIRED)
});

export default formValidation;