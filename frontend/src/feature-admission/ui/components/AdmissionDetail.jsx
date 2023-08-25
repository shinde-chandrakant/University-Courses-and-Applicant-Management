import { Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";

import EditDeleteButton from '../../../common/components/EditDeleteButtons';

const AdmissionDetail = ({ data, onClickDelete, onClickEdit }) => {

    return <Card>
        <CardHeader title={data.admissionId} />
        <Divider />
        <CardContent>
            <Typography>
                Course Id - {data.courseId}
            </Typography>
            <Typography>
                Applicant Id - {data.applicantId}
            </Typography>
            <Typography>
                Admission Date - {data.admissionDate}
            </Typography>
            <Typography>
                Status - {data.status}
            </Typography>
        </CardContent>

        <EditDeleteButton
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
        />
    </Card>
}

export default AdmissionDetail;