import { Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";

import EditDeleteButtons from '../../../common/components/EditDeleteButtons';

const CommitteeMember = ({ data, onClickDelete, onClickEdit }) => {
    return <Card>
        <CardHeader title={data.adminName} />
        <Divider />
        <CardContent>
            <Typography>
                Admin Id - {data.adminId}
            </Typography>
        </CardContent>

        <EditDeleteButtons
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            sx={{ mr: 2 }}
        />

    </Card>;
}

export default CommitteeMember;