import React from 'react';

import { Box, Card, CardContent, CardHeader, Typography, Divider, Button } from '@mui/material';
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';

const CourseComp = ({ data, onClickDelete, onClickEdit }) => {

    return <Card>
        <CardHeader title={data.courseName} />

        <Divider />

        <CardContent>

            <Box mt={2}>
                <Typography>
                    Start Date - {data.courseStartDate}
                </Typography>

                <Typography>
                    End Date - {data.courseEndDate}
                </Typography>

                <Typography>
                    Duration - {data.courseDuration}
                </Typography>
                <Typography>
                    Fees - {data.courseFees}
                </Typography>
            </Box>
        </CardContent>


        <Box mb={2} ml={2} mr={2}>
            <Button
                startIcon={<EditOutlined />}
                variant='outlined'
                onClick={onClickEdit}
            >
                Update
            </Button>
            <Button
                sx={{ ml: 1 }}
                startIcon={<DeleteForeverOutlined />}
                variant='contained'
                color='warning'
                onClick={onClickDelete}

            >
                Delete
            </Button>
        </Box>

    </Card>
}

export default CourseComp;