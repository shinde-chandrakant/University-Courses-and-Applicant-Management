import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ResponsiveGrid from '../../../common/components/ResponsiveGrid';
import { deleteCommitteeMember, initializeCommitteeMembers } from "../../../store/committeeMember-slice";
import CommitteeMember from "./CommitteeMember";

const CommitteeMembers = ({ onClickEdit, ...others }) => {

    const { members } = useSelector(store => store.committeeMembers);
    const dispatch = useDispatch();

    const handleOnDelete = (id, index) => {
        dispatch(deleteCommitteeMember({ memberId: id, index }));
    }

    useEffect(() => {
        dispatch(initializeCommitteeMembers());
    }, []);

    return <Grid container {...others}>
        {
            members.map((value, index) => {
                return <ResponsiveGrid
                    key={value.adminId}
                >
                    <CommitteeMember
                        data={value}
                        onClickDelete={() => handleOnDelete(value.adminId, index)}
                        onClickEdit={() => onClickEdit(value, index)}
                    />
                </ResponsiveGrid>
            })
        }
    </Grid>
}

export default CommitteeMembers;