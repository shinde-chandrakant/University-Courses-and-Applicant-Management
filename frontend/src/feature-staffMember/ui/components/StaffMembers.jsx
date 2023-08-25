import React from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux/es/exports";

import StaffMember from './StaffMember';
import { deleteStaffMember } from "../../../store/staffMembers-slice";

const StaffMembers = ({ onClickEdit, ...others }) => {

    const { staffMembers } = useSelector(store => store.staffMembers);
    const dispatch = useDispatch();

    const handleOnDelete = (value, index) => {
        dispatch(deleteStaffMember({ id: value.staffId, index }));
    }

    return <React.Fragment>
        <Grid {...others} container spacing={2}>
            {
                staffMembers.map((value, index) => {
                    return <Grid item md={3} xl={3} lg={3} key={value.staffId}>
                        <StaffMember
                            data={value}
                            onClickDelete={() => handleOnDelete(value, index)}
                            onClickEdit={() => onClickEdit(value, index)}
                        />
                    </Grid>
                })
            }
        </Grid>
    </React.Fragment>;
}

export default StaffMembers;