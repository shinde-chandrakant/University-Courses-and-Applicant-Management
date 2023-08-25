import { Box, Button, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';

const Applicant = ({ data, onClickEdit, onClickDelete }) => {
    return <Card>
        <CardContent>
            <Typography>
               Applicant Id: {data.applicantId}
            </Typography>

            <Typography>
                Applicant Name: {data.applicantName}
            </Typography>

            <Typography>
                status: {data.status}
            </Typography>

        </CardContent>

        <Box mb={2} ml={2}>
            <Button
                startIcon={<EditOutlined />}
                variant='outlined'
                onClick={onClickEdit}
            >
                Update
            </Button>
            <Button
                sx={{ ml: 1, mr: 2 }}
                startIcon={<DeleteForeverOutlined />}
                variant='contained'
                color='warning'
                onClick={onClickDelete}
            >
                Delete
            </Button>
        </Box>
    </Card>;
}

export default Applicant;