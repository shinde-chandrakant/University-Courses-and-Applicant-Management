import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { ApplicantsAction, deleteApplicant } from "../../store/applicant-slice";
import Applicant from "./components/Applicant";
import ResponsiveGrid from '../../common/components/ResponsiveGrid';

const Applicants = ({ onClickEdit, ...others }) => {

    const { applicants } = useSelector(store => store.applicants);
    const dispatch = useDispatch();

    const handleOnClickDelete = (applicant, index) => {
        dispatch(deleteApplicant({ applicant, index }));
    }

    return <Grid container spacing={2} {...others}>
        {
            applicants && applicants.map((data, index) => {
                return <ResponsiveGrid item
                    key={data.applicantId}
                >
                    <Applicant
                        data={data}
                        onClickDelete={() => handleOnClickDelete(data, index)}
                        onClickEdit={() => onClickEdit(data, index)}
                    />
                </ResponsiveGrid>
            })
        }
    </Grid>
}

export default Applicants;