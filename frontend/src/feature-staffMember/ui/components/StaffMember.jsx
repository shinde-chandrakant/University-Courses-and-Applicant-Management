import { Card, CardHeader, Divider, Typography, CardContent } from "@mui/material";
import EditDeleteButtons from "../../../common/components/EditDeleteButtons";

const StaffMember = ({ data, onClickEdit, onClickDelete }) => {
    return <Card>
        <CardHeader title={data.staffId} />

        <Divider />

        <CardContent>
            <Typography>
                Role: {data.role}
            </Typography>
        </CardContent>

        <EditDeleteButtons
            mr={2}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
        />
    </Card>
}

export default StaffMember;