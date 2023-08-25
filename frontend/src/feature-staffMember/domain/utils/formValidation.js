import * as Yup from 'yup';
import { REQUIRED } from '../../../styles/constants';

const formValidation = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .required(REQUIRED),
    role: Yup.string()
        .required(REQUIRED),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password does not match")
        .required('Required *'),
});

export default formValidation;