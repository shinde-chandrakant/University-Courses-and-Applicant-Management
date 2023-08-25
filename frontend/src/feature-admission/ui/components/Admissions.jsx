import { Grid } from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";
import ResponsiveGrid from "../../../common/components/ResponsiveGrid";
import { deleteAdmission } from "../../../store/admission-slice";
import AdmissionDetail from "./AdmissionDetail";

const Admissions = ({ onClickEdit, ...others }) => {

    const { admissions } = useSelector(store => store.admissions);
    const dispatch = useDispatch();

    const handleDeleteItem = (admissionId, index) => {
        dispatch(deleteAdmission({ admissionId, index }));
    }

    return <Grid container {...others}>

        {
            admissions.map((value, index) => {
                return <ResponsiveGrid>
                    <AdmissionDetail
                        data={value}
                        onClickDelete={() => handleDeleteItem(value.admissionId, index)}
                        onClickEdit={() => onClickEdit(value, index)}
                    />
                </ResponsiveGrid>
            })
        }

    </Grid>
}

export default Admissions;