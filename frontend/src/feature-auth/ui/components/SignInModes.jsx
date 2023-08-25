import React from 'react';
import { Box, Button, Card, CardHeader, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonOutlined from '@mui/icons-material/PersonOutline';

import signInModes from '../../domain/utils/SignInModes';

const SignInModes = () => {

    return <React.Fragment>
        <Card sx={{ pb: 6, textAlign: 'center', mt: 26 }}>
            <CardHeader title="Sign in as" />

            <Divider sx={{ mb: 4 }} />

            <Box>
                <Link
                    to={`/sign-in/${signInModes.applicant}`}
                >

                    <Button
                        variant='outlined'
                        size='large'
                        sx={{ mt: 2, width: '80%' }}
                        startIcon={<PersonOutlined />}
                    >
                        Applicant
                    </Button>
                </Link>

                <Link
                    to={`/sign-in/${signInModes.committeeMember}`}
                >

                    <Button
                        variant='outlined'
                        size='large'
                        sx={{ mt: 2, width: '80%' }}
                    >
                        Committe Member
                    </Button>
                </Link>

                <Link
                    to={`/sign-in/${signInModes.staffMember}`}
                >

                    <Button
                        variant='outlined'
                        size='large'
                        sx={{ mt: 2, width: '80%' }}
                    >
                        Staff Member
                    </Button>
                </Link>
            </Box>
        </Card>
    </React.Fragment>;
}

export default SignInModes;